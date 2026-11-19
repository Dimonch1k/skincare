import Image from 'next/image'
import Link from 'next/link'

import { ButtonLink } from '@/components/ui/button'

import {
	FOOTER_CONTACT_LINKS,
	FOOTER_NAVIGATION_LINKS,
	FOOTER_RULES_LINKS,
	FOOTER_SERVICES_LINKS,
	FOOTER_SOCIAL_LINKS
} from '@/constants/footer.constants'
import { ROUTES } from '@/constants/routes.constants'

import { PhoneIcon } from '../ui/icons/phone-icon'
import { BrandLogo } from './brand-logo'
import { cn } from '@/lib/utils/cn'

const footerLinkClassName =
	'text-base leading-6 text-[#cfd0d4] transition-colors duration-200 hover:text-cream-light focus-visible:text-cream-light focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream-light'

export function Footer() {
	return (
		<footer className='relative mt-auto min-h-170 overflow-hidden bg-brand px-5 pt-16 pb-4 text-cream-light sm:px-10 lg:px-25 lg:pt-30 lg:pb-8'>
			<Image
				alt=''
				src='/footer-background-1.svg'
				className='hidden lg:block absolute top-0 left-0 h-full w-auto'
				height={681}
				width={300}
			/>

			<Image
				alt=''
				src='/footer-background-2.svg'
				className='absolute -bottom-4 -right-4'
				height={500}
				width={500}
			/>

			<div className='mx-auto flex flex-col gap-27 w-full max-w-300 z-10'>
				<div className='w-full flex flex-col sm:flex-row justify-between sm:items-center z-10 gap-4'>
					<div className='flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-13 w-full'>
						<BrandLogo color='#FF835A' />

						<p className='max-w-115 text-base font-medium leading-[1.45] text-[#cfd0d4]'>
							At Glisten, we’re dedicated to helping you achieve radiant,
							healthy skin through personalized skincare treatments and expert
							guidance.
						</p>
					</div>

					<ButtonLink
						href={ROUTES.CONTACT}
						variant='footer'
						className='text-nowrap'
					>
						<PhoneIcon
							color='#512729'
							className='size-6'
						/>
						Schedule appointment
					</ButtonLink>
				</div>

				<div className='w-full grid sm:grid-cols-2 xl:flex xl:flex-row justify-between items-start z-10 gap-y-10'>
					<nav
						aria-label='Footer navigation'
						className='grid gap-5 w-full'
					>
						<h2 className='text-xl! leading-[1.3]'>Pages</h2>
						<ul className='grid grid-cols-2 gap-4'>
							{FOOTER_NAVIGATION_LINKS.map(link => (
								<li key={link.href}>
									<Link
										className={footerLinkClassName}
										href={link.href}
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</nav>

					<div className='grid gap-5 w-full'>
						<h2 className='text-xl! leading-[1.3]'>Services</h2>
						<ul className='grid gap-4'>
							{FOOTER_SERVICES_LINKS.map(link => (
								<li key={link.label}>
									<a
										className={footerLinkClassName}
										href={link.href}
										rel='noreferrer'
										target='_blank'
									>
										{link.label}
									</a>
								</li>
							))}
						</ul>
					</div>

					<div className='grid gap-5 w-full'>
						<h2 className='text-xl! leading-[1.3]'>Social</h2>
						<ul className='grid gap-4'>
							{FOOTER_SOCIAL_LINKS.map(link => {
								const Icon = link.icon

								return (
									<li key={link.label}>
										<a
											className={cn(footerLinkClassName, 'flex items-center')}
											href={link.href}
											rel='noreferrer'
											target='_blank'
										>
											{Icon && (
												<Icon
													color='#FCF3EE'
													className='size-6 mr-2'
												/>
											)}
											{link.label}
										</a>
									</li>
								)
							})}
						</ul>
					</div>

					<div className='grid gap-5 w-full'>
						<h2 className='text-xl! leading-[1.3]'>Contact us</h2>
						<ul className='grid gap-4'>
							{FOOTER_CONTACT_LINKS.map(link => {
								const Icon = link.icon

								return (
									<li key={link.label}>
										<a
											className={cn(footerLinkClassName, 'flex items-center')}
											href={link.href}
											rel='noreferrer'
											target='_blank'
										>
											{Icon && (
												<Icon
													color='#FCF3EE'
													className='size-6 mr-2'
												/>
											)}
											{link.label}
										</a>
									</li>
								)
							})}
						</ul>
					</div>
				</div>

				<ul className='flex items-center justify-end w-full gap-10 z-10'>
					{FOOTER_RULES_LINKS.map(link => (
						<li key={link.label}>
							<a
								className={footerLinkClassName}
								href={link.href}
								rel='noreferrer'
								target='_blank'
							>
								{link.label}
							</a>
						</li>
					))}
				</ul>
			</div>
		</footer>
	)
}
