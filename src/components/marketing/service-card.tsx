import Image from 'next/image'
import Link from 'next/link'

interface ServiceCardProps {
	description: string
	href: string
	image: string
	title: string
}

export function ServiceCard({
	description,
	href,
	image,
	title
}: ServiceCardProps) {
	return (
		<article className='overflow-hidden rounded-[0_4rem_0_0] border border-brand/10 bg-cream-light'>
			<div className='relative aspect-[4/3] bg-blush'>
				<Image
					alt=''
					className='object-cover'
					fill
					sizes='(min-width: 1024px) 33vw, 100vw'
					src={image}
				/>
			</div>
			<div className='space-y-3 p-7'>
				<h3 className='text-2xl'>{title}</h3>
				<p className='leading-7 text-brand/75'>{description}</p>
				<Link
					className='inline-flex pt-2 text-sm font-medium underline decoration-brand/40 underline-offset-4 hover:decoration-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand'
					href={href}
				>
					Learn more
				</Link>
			</div>
		</article>
	)
}
