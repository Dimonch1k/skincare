import './globals.css'

import React from 'react'
import type { Metadata } from 'next'
import { Shippori_Mincho } from 'next/font/google'
import localFont from 'next/font/local'

import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'

import { SEO_DESCRIPTION, SITE_NAME } from '@/constants/seo.constants'

const shipporiMincho = Shippori_Mincho({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	variable: '--font-shippori-mincho'
	// display: 'swap'
})

const beautiqueDisplay = localFont({
	src: [
		{
			path: '../../public/beautique_display/Beautique Display/BeautiqueDisplay-Medium.otf',
			weight: '500',
			style: 'normal'
		},
		{
			path: '../../public/beautique_display/Beautique Display/BeautiqueDisplay-Bold.otf',
			weight: '700',
			style: 'normal'
		}
	],
	variable: '--font-beautique-display'
	// display: 'swap'
})

export const metadata: Metadata = {
	title: {
		default: SITE_NAME,
		template: `%s | ${SITE_NAME}`
	},
	description: SEO_DESCRIPTION,
	metadataBase: new URL(
		process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'
	),
	robots: { index: true, follow: true }
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			lang='en'
			className={`${beautiqueDisplay.variable} ${shipporiMincho.variable} antialiased`}
		>
			<body>
				<div className='flex min-h-screen flex-col'>
					<Header />
					<main className='flex-1'>{children}</main>
					<Footer />
				</div>
			</body>
		</html>
	)
}
