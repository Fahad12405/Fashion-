'use client'

import { Facebook, Instagram, Twitter } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 sm:py-16 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-heading font-semibold text-base mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-brand-red transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-brand-red transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-brand-red transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-brand-red transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-white font-heading font-semibold text-base mb-4 underline decoration-brand-red decoration-2 underline-offset-8">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-brand-red transition-colors">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-brand-red transition-colors">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-brand-red transition-colors">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-brand-red transition-colors">
                  Track Order
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-heading font-semibold text-base mb-4 underline decoration-brand-red decoration-2 underline-offset-8">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-brand-red transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-brand-red transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-brand-red transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-brand-red transition-colors">
                  Press
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white font-heading font-semibold text-base mb-4 underline decoration-brand-red decoration-2 underline-offset-8">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-900 border border-gray-800 hover:bg-brand-red text-gray-400 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-900 border border-gray-800 hover:bg-brand-red text-gray-400 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-900 border border-gray-800 hover:bg-brand-red text-gray-400 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="mb-8 text-center text-white">
           
            <p className="text-sm text-gray-500">
              © 2026 HustleMob. All rights reserved.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-6 text-xs font-bold uppercase tracking-widest text-gray-500">
            <Link href="#" className="hover:text-brand-red transition-colors">
              Privacy Policy
            </Link>
            <span className="hidden sm:inline opacity-20">•</span>
            <Link href="#" className="hover:text-brand-red transition-colors">
              Terms of Service
            </Link>
            <span className="hidden sm:inline opacity-20">•</span>
            <Link href="#" className="hover:text-brand-red transition-colors">
              Cookie Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
