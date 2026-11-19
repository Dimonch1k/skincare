import { ButtonLink } from '@/components/ui/button'

import { ROUTES } from '@/constants/routes.constants'

interface ConsultationCtaProps {
	description?: string
	title?: string
}

export function ConsultationCta({
	description = 'Ready to achieve radiant, healthy skin? Let us help you get started today.',
	title = 'Let’s Begin Your Skincare Journey'
}: ConsultationCtaProps) {
	return (
		<section className='overflow-hidden bg-cream px-4 py-14 sm:px-8 lg:py-20'>
			<div className='relative mx-auto max-w-7xl overflow-hidden rounded-[0_6rem_0_0] bg-brand px-7 py-12 text-cream-light sm:px-12 lg:px-20 lg:py-18'>
				<div className='absolute -right-20 -top-28 size-96 rounded-full border-[3rem] border-coral/25' />
				<div className='relative max-w-2xl'>
					<h2>{title}</h2>
					<p className='mt-4 max-w-xl leading-7 text-cream-light/80'>
						{description}
					</p>
					<ButtonLink
						className='mt-8'
						href={ROUTES.CONTACT}
						variant='light'
					>
						Book your consultation
					</ButtonLink>
				</div>
			</div>
		</section>
	)
}
