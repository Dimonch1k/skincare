import { EnvelopeIcon } from '@/components/ui/icons/envelope-icon'
import { FacebookIcon } from '@/components/ui/icons/facebook-icon'
import { InstagramIcon } from '@/components/ui/icons/instagram-icon'
import { LocationIcon } from '@/components/ui/icons/location-icon'
import { PhoneIcon } from '@/components/ui/icons/phone-icon'
import { PinterestIcon } from '@/components/ui/icons/pinterest-icon'
import { TwitterIcon } from '@/components/ui/icons/twitter-icon'

import { ROUTES } from '@/constants/routes.constants'

import { FooterLink } from '@/types/footer.types'

export const FOOTER_NAVIGATION_LINKS: FooterLink[] = [
	{ href: ROUTES.HOME, label: 'Home' },
	{ href: ROUTES.ABOUT, label: 'About' },
	{ href: ROUTES.CONTACT, label: 'Contact' },
	{ href: ROUTES.FEATURE, label: 'Feature' },
	{ href: ROUTES.PRICING, label: 'Pricing' },
	{ href: ROUTES.BLOGS, label: 'Blogs' },
	{ href: ROUTES.LOCATIONS, label: 'Locations' },
	{ href: ROUTES.SERVICES, label: 'Services' },
	{ href: ROUTES.FAQS, label: 'FAQs' }
] as const

export const FOOTER_SERVICES_LINKS: FooterLink[] = [
	{ href: '/', label: 'Custom facials' },
	{ href: '/', label: 'Anti-aging treatments' },
	{ href: '/', label: 'Acne solutions' },
	{ href: '/', label: 'Hydration therapy' },
	{ href: '/', label: 'Skin resurfacing' },
	{ href: '/', label: 'Specialty treatments' }
] as const

export const FOOTER_SOCIAL_LINKS: FooterLink[] = [
	{ href: 'https://instagram.com', label: 'Instagram', icon: InstagramIcon },
	{ href: 'https://facebook.com', label: 'Facebook', icon: FacebookIcon },
	{ href: 'https://x.com', label: 'Twitter', icon: TwitterIcon },
	{ href: 'https://pinterest.com', label: 'Pinterest', icon: PinterestIcon }
] as const

export const FOOTER_CONTACT_LINKS: FooterLink[] = [
	{ href: 'tel:+1234567890', label: '(123) 456-7890', icon: PhoneIcon },
	{
		href: 'mailto:info@example.com',
		label: 'info@example.com',
		icon: EnvelopeIcon
	},
	{
		href: 'https://maps.google.com/?q=123+Skincare+Street+Wellness+City+NY+10001',
		label: '123 Skincare Street, Wellness City, NY 10001',
		icon: LocationIcon
	}
] as const

export const FOOTER_RULES_LINKS: FooterLink[] = [
	{ href: '/', label: 'Terms & Conditions' },
	{ href: '/', label: 'Privacy Policy' }
] as const
