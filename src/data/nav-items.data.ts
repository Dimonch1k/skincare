import { ROUTES } from '@/constants/routes.constants'

import type { INavItem } from '@/interfaces/nav.interface'

export const navItemsData: INavItem[] = [
	{ href: ROUTES.HOME, label: 'Home' },
	{ href: ROUTES.ABOUT, label: 'About' },
	{ href: ROUTES.CONTACT, label: 'Contact' },
	{ href: ROUTES.FEATURE, label: 'Feature' },
	{ href: ROUTES.PRICING, label: 'Pricing' },
	{ href: ROUTES.BLOGS, label: 'Blogs' },
	{ href: ROUTES.LOCATIONS, label: 'Locations' },
	{ href: ROUTES.SERVICES, label: 'Services' },
	{ href: ROUTES.FAQS, label: 'FAQs' }
]
