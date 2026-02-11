import { Facebook, Instagram, Twitter } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Track Order
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Press
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          {/* Newsletter Signup */}
          <div className="mb-8 text-center">
            <p className="text-sm text-gray-400">
              © 2026 Your Store. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm text-gray-400">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="hidden sm:inline">•</span>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <span className="hidden sm:inline">•</span>
            <Link href="#" className="hover:text-white transition-colors">
              Cookie Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
