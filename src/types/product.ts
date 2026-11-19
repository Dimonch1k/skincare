export interface Product {
	id: string
	slug: string
	stripe_product_id: string | null
	stripe_price_id: string | null
	name: string
	description: string | null
	images: string[]
	price_cents: number
	currency: string
	active: boolean
	inventory_quantity: number | null
	metadata: Record<string, string>
	created_at: string
	updated_at: string
}
