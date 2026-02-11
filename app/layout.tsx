import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'YourStore - Premium Fashion & Apparel',
  description:
    'Shop the latest mens and womens fashion including t-shirts, shoes, hoodies, caps and more. Get 25% OFF on your first order!',
  generator: 'v0.app',
  keywords: [
    'fashion',
    'clothing',
    'mens fashion',
    'womens fashion',
    'shoes',
    'hoodies',
    'jackets',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
