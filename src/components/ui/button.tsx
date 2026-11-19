import type { ButtonHTMLAttributes, ReactNode } from 'react'
import Link from 'next/link'

import { cn } from '@/lib/utils/cn'

const buttonStyles = {
	primary:
		'bg-brand text-cream-light hover:bg-brand-strong focus-visible:outline-brand',
	outline:
		'border border-brand bg-transparent text-brand hover:bg-brand hover:text-cream-light focus-visible:outline-brand',
	light:
		'bg-cream-light text-brand hover:bg-blush focus-visible:outline-cream-light',
	footer:
		'rounded-tr-[20px] bg-coral text-brand! hover:text-brand! hover:bg-coral-light focus-visible:outline-coral'
} as const

const baseStyles =
	'inline-flex h-min items-center justify-center gap-2 px-7.5 py-3 font-bold text-brand hover:text-brand text-center text-base transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 disabled:pointer-events-none disabled:opacity-50'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode
	variant?: keyof typeof buttonStyles
}

interface ButtonLinkProps {
	children: ReactNode
	className?: string
	href: string
	variant?: keyof typeof buttonStyles
}

export function Button({
	children,
	className,
	variant = 'primary',
	...props
}: ButtonProps) {
	return (
		<button
			className={cn(baseStyles, buttonStyles[variant], className)}
			{...props}
		>
			{children}
		</button>
	)
}

export function ButtonLink({
	children,
	className,
	href,
	variant = 'primary'
}: ButtonLinkProps) {
	return (
		<Link
			className={cn(baseStyles, buttonStyles[variant], className)}
			href={href}
		>
			{children}
		</Link>
	)
}
