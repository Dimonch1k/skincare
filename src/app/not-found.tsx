export default function NotFound() {
	return (
		<section className='template-shell flex min-h-screen items-center justify-center py-24'>
			<div className='w-full max-w-xl rounded-3xl border border-border bg-background p-8 shadow-sm'>
				<p className='text-sm font-medium uppercase tracking-[0.24em] text-muted'>
					404
				</p>
				<h1 className='mt-4 text-3xl font-semibold tracking-tight text-foreground'>
					Page not found
				</h1>
				<p className='mt-3 text-base leading-7 text-muted'>
					The page you requested does not exist or is no longer available.
				</p>
				<a
					href='/'
					className='mt-8 inline-flex items-center justify-center rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5'
				>
					Go home
				</a>
			</div>
		</section>
	)
}
