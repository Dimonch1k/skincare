import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Home'
}

export default function HomePage() {
	return (
		<section className='template-shell flex min-h-screen flex-col items-start justify-center gap-6 py-24'>
			<div className='space-y-3'>
				<p className='text-sm font-medium uppercase tracking-[0.24em] text-muted'>
					Next.js Starter
				</p>
				<h1 className='max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl'>
					Minimal template for new projects
				</h1>
				<p className='max-w-2xl text-base leading-7 text-muted sm:text-lg'>
					Start here, add only the features a project actually needs, and keep
					the baseline clean.
				</p>
			</div>
		</section>
	)
}
