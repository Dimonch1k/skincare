import Link from 'next/link'

import { ROUTES } from '@/constants/routes.constants'

import { LogoIcon } from '../ui/icons/logo-icon'

interface BrandLogoProps {
	compact?: boolean
	color?: string
}

export function BrandLogo({
	compact = false,
	color = '#663130'
}: BrandLogoProps) {
	return (
		<Link
			aria-label='Glisten Skin Care home'
			className='inline-flex h-min items-end gap-2 text-brand'
			href={ROUTES.HOME}
		>
			<LogoIcon color={color} />
			{!compact && (
				<span
					className='text-base text-nowrap font-medium'
					style={{ color }}
				>
					| skin care
				</span>
			)}
		</Link>
	)
}
