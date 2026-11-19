import { ComponentType } from 'react'

export interface IconProps {
	color?: string
	className?: string
}

export interface FooterLink {
	href: string
	label: string
	icon?: ComponentType<IconProps>
}
