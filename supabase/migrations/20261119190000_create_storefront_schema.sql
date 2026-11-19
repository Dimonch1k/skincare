create table public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  full_name text,
  avatar_url text,
  created_at timestamptz not null default timezone('utc'::text, now()),
  updated_at timestamptz not null default timezone('utc'::text, now())
);

create table public.products (
  id uuid primary key default gen_random_uuid(),
  stripe_product_id text unique,
  slug text not null unique,
  name text not null,
  description text,
  images jsonb not null default '[]'::jsonb,
  active boolean not null default false,
  inventory_quantity integer check (inventory_quantity is null or inventory_quantity >= 0),
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default timezone('utc'::text, now()),
  updated_at timestamptz not null default timezone('utc'::text, now()),
  constraint products_images_is_array check (jsonb_typeof(images) = 'array'),
  constraint products_metadata_is_object check (jsonb_typeof(metadata) = 'object')
);

create table public.prices (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null references public.products (id) on delete cascade,
  stripe_price_id text not null unique,
  unit_amount integer not null check (unit_amount >= 0),
  currency text not null check (currency ~ '^[a-z]{3}$'),
  active boolean not null default false,
  price_type text not null default 'one_time' check (price_type in ('one_time', 'recurring')),
  recurring_interval text check (recurring_interval in ('day', 'week', 'month', 'year')),
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default timezone('utc'::text, now()),
  updated_at timestamptz not null default timezone('utc'::text, now()),
  constraint prices_recurring_interval check (
    (price_type = 'one_time' and recurring_interval is null)
    or (price_type = 'recurring' and recurring_interval is not null)
  ),
  constraint prices_metadata_is_object check (jsonb_typeof(metadata) = 'object')
);

create table public.orders (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users (id) on delete set null,
  stripe_checkout_session_id text not null unique,
  stripe_payment_intent_id text unique,
  customer_email text,
  status text not null default 'pending' check (status in ('pending', 'paid', 'failed', 'cancelled', 'refunded')),
  currency text not null check (currency ~ '^[a-z]{3}$'),
  subtotal_cents integer not null check (subtotal_cents >= 0),
  total_cents integer not null check (total_cents >= 0),
  created_at timestamptz not null default timezone('utc'::text, now()),
  updated_at timestamptz not null default timezone('utc'::text, now())
);

create table public.order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders (id) on delete cascade,
  product_id uuid references public.products (id) on delete set null,
  price_id uuid references public.prices (id) on delete set null,
  product_name text not null,
  stripe_product_id text,
  stripe_price_id text,
  unit_amount_cents integer not null check (unit_amount_cents >= 0),
  quantity integer not null check (quantity > 0),
  created_at timestamptz not null default timezone('utc'::text, now())
);

create index prices_product_id_idx on public.prices (product_id);
create index products_active_idx on public.products (active) where active = true;
create index prices_active_idx on public.prices (active) where active = true;
create index orders_user_id_idx on public.orders (user_id);
create index order_items_order_id_idx on public.order_items (order_id);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
security invoker
set search_path = public
as $$
begin
  new.updated_at = timezone('utc'::text, now());
  return new;
end;
$$;

create trigger profiles_set_updated_at before update on public.profiles
for each row execute function public.set_updated_at();
create trigger products_set_updated_at before update on public.products
for each row execute function public.set_updated_at();
create trigger prices_set_updated_at before update on public.prices
for each row execute function public.set_updated_at();
create trigger orders_set_updated_at before update on public.orders
for each row execute function public.set_updated_at();

alter table public.profiles enable row level security;
alter table public.products enable row level security;
alter table public.prices enable row level security;
alter table public.orders enable row level security;
alter table public.order_items enable row level security;

create policy "profiles are readable by their owner"
on public.profiles for select
to authenticated
using ((select auth.uid()) = id);

create policy "profiles are editable by their owner"
on public.profiles for update
to authenticated
using ((select auth.uid()) = id)
with check ((select auth.uid()) = id);

create policy "active products are publicly readable"
on public.products for select
to anon, authenticated
using (active = true);

create policy "active prices for active products are publicly readable"
on public.prices for select
to anon, authenticated
using (
  active = true
  and exists (
    select 1
    from public.products
    where products.id = prices.product_id
      and products.active = true
  )
);

create policy "orders are readable by their owner"
on public.orders for select
to authenticated
using ((select auth.uid()) = user_id);

create policy "order items are readable by the order owner"
on public.order_items for select
to authenticated
using (
  exists (
    select 1
    from public.orders
    where orders.id = order_items.order_id
      and orders.user_id = (select auth.uid())
  )
);
