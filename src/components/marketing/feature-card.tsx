import type { ReactNode } from 'react'

interface FeatureCardProps {
	description: string
	icon: ReactNode
	title: string
}

export function FeatureCard({ description, icon, title }: FeatureCardProps) {
	return (
		<article className='rounded-card bg-cream px-7 py-10 text-center sm:px-10'>
			<div className='mx-auto grid size-17 place-items-center rounded-full bg-blush text-2xl text-brand'>
				{icon}
			</div>
			<h3 className='mt-6 text-2xl'>{title}</h3>
			<p className='mt-3 leading-7 text-brand/75'>{description}</p>
		</article>
	)
}
