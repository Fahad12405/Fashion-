'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navigationItems = [
  { name: "Men's T-shirt", href: '#mens-tshirt' },
  { name: "Women's T-shirt", href: '#womens-tshirt' },
  { name: 'Shoes', href: '#shoes' },
  { name: 'Cap', href: '#cap' },
  { name: 'Jackets and Hoodie', href: '#jackets-hoodie' },
  { name: 'New Arrivals', href: '#new-arrivals' },
  { name: 'Best Sellers', href: '#best-sellers' },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-black">YourStore</h1>
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
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
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
