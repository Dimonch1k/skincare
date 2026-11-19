'use client'

import { useState } from 'react'
import Link from 'next/link'

import { BrandLogo } from '@/components/layout/brand-logo'

import { navItemsData } from '@/data/nav-items.data'

import { PhoneVolumeIcon } from '../ui/icons/phone-volume-icon'

export function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	return (
		<header className='relative z-20 bg-cream-light'>
			<div className='mx-auto flex min-h-20 w-[min(100%-2rem,107.5rem)] items-center justify-between gap-6'>
				<BrandLogo color='#663130' />

				<nav
					aria-label='Primary navigation'
					className='hidden lg:block'
				>
					<ul className='flex items-center gap-10'>
						{navItemsData.map(item => (
							<li
								key={item.href}
								className='hover:underline hover:underline-offset-2 hover:decoration-brand'
							>
								<Link
									className='text-base text-brand font-medium'
									href={item.href}
								>
									{item.label}
								</Link>
							</li>
						))}
					</ul>
				</nav>

				<Link
					className='hidden items-center gap-1.5 text-base text-brand sm:flex [&>svg]:fill-brand'
					href='tel:+1234567890'
				>
					<PhoneVolumeIcon />
					<span>+(123) 456-7890</span>
				</Link>

				<button
					aria-controls='mobile-navigation'
					aria-expanded={isMenuOpen}
					aria-label={isMenuOpen ? 'Close navigation' : 'Open navigation'}
					className='grid size-11 place-content-center gap-1.5 rounded-full border border-brand/20 lg:hidden'
					onClick={() => setIsMenuOpen(isOpen => !isOpen)}
					type='button'
				>
					<span className='h-px w-5 bg-brand' />
					<span className='h-px w-5 bg-brand' />
					<span className='h-px w-5 bg-brand' />
				</button>
			</div>

			{isMenuOpen && (
				<nav
					aria-label='Mobile navigation'
					className='absolute inset-x-0 top-full border-y border-brand/10! bg-cream-light px-4 py-6 shadow-lg lg:hidden'
					id='mobile-navigation'
				>
					<ul className='mx-auto grid w-[min(100%,30rem)] gap-1'>
						{navItemsData.map(item => (
							<li key={item.href}>
								<Link
									className='block rounded-lg px-4 py-3 text-lg hover:bg-blush focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand'
									href={item.href}
									onClick={() => setIsMenuOpen(false)}
								>
									{item.label}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			)}
		</header>
	)
}
