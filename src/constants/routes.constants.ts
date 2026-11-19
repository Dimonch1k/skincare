export const ROUTES = {
	// Marketing
	HOME: '/' as const,
	ABOUT: '/about' as const,
	CONTACT: '/contact' as const,
	FEATURE: '/feature' as const,
	PRICING: '/pricing' as const,
	BLOGS: '/blogs' as const,
	LOCATIONS: '/locations' as const,
	SERVICES: '/services' as const,
	STORY: '/our-story' as const,
	FAQS: '/faqs' as const,

	// Storefront
	SHOP: '/shop' as const,
	PRODUCT: (slug: string) => `/shop/${slug}` as const,
	CART: '/cart' as const,
	CHECKOUT_SUCCESS: '/checkout/success' as const,
	CHECKOUT_CANCEL: '/checkout/cancel' as const,

	// Errors
	NOT_FOUND: '/not-found' as const,
	SERVER_ERROR: '/server-error' as const
}
