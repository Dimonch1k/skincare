export const ROUTES = {
	// Marketing
	HOME: '/' as const,
	STORY: '/our-story' as const,
	FAQ: '/faq' as const,
	CONTACT: '/contact' as const,

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
