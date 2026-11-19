interface TestimonialCardProps {
	name: string
	quote: string
	rating?: number
}

export function TestimonialCard({
	name,
	quote,
	rating = 5
}: TestimonialCardProps) {
	return (
		<figure className='flex h-full flex-col rounded-card bg-cream-light p-8'>
			<div
				aria-label={`${rating} out of 5 stars`}
				className='text-coral'
				role='img'
			>
				{'★'.repeat(rating)}
			</div>
			<blockquote className='mt-6 flex-1 text-lg leading-8 text-brand/85'>
				“{quote}”
			</blockquote>
			<figcaption className='mt-7 font-display text-xl font-bold'>
				{name}
			</figcaption>
		</figure>
	)
}
