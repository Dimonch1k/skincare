'use client'

export default function Error({ reset }: { reset: () => void }) {
	return (
		<section className='template-shell flex min-h-screen items-center justify-center py-24'>
			<div className='w-full max-w-xl rounded-3xl border border-border bg-background p-8 shadow-sm'>
				<p className='text-sm font-medium uppercase tracking-[0.24em] text-muted'>
					Error
				</p>
				<h1 className='mt-4 text-3xl font-semibold tracking-tight text-foreground'>
					Something went wrong
				</h1>
				<p className='mt-3 text-base leading-7 text-muted'>
					An unexpected error occurred. You can retry the action or return to
					the home page.
				</p>
				<div className='mt-8 flex flex-col gap-3 sm:flex-row'>
					<button
						type='button'
						onClick={reset}
						className='inline-flex items-center justify-center rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90'
					>
						Try again
					</button>
					<a
						href='/'
						className='inline-flex items-center justify-center rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5'
					>
						Go home
					</a>
				</div>
			</div>
		</section>
	)
}
