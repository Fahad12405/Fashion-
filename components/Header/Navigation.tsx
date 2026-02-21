'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

import { useFashionStore } from '@/lib/store'

const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: "Men's shirts", href: '/products?category=mens-shirts' },
  { name: "Women's shirts", href: '/products?category=womens-shirts' },
  { name: 'Shoes', href: '/products?category=shoes' },
  { name: 'Caps & Hats', href: '/products?category=caps-hats' },
  { name: 'Hoodies', href: '/products?category=hoodies' },
  { name: 'Jackets', href: '/products?category=jackets' },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { cart, setCartOpen } = useFashionStore()

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <Image
              src="/hutlemoblogo.png" // apni image ka path yahan dein
              alt="YourStore Logo"
              width={140}
              height={40}
              priority
              className="h-8 sm:h-12 w-auto object-cover "
            />
          </Link>


          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-black hover:bg-gray-100 rounded-md transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-2 md:space-x-4">
            {/* Search - Desktop only */}
            <div className="hidden sm:flex items-center bg-gray-100 rounded-full px-4 py-2 max-w-xs">
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent outline-none text-sm flex-1 text-gray-800 placeholder-gray-500"
              />
              <Search className="w-4 h-4 text-gray-400 ml-2" />
            </div>

            {/* Cart */}
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              onClick={() => setCartOpen(true)}
            >
              <ShoppingCart className="w-5 h-5" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-bold">
                  {cart.length}
                </span>
              )}
            </Button>

            {/* Account */}
            <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
              <User className="w-5 h-5" />
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-1">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-black hover:bg-gray-100 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            {/* Mobile Search */}
            <div className="px-3 py-2">
              <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent outline-none text-sm flex-1 text-gray-800 placeholder-gray-500"
                />
                <Search className="w-4 h-4 text-gray-400 ml-2" />
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
