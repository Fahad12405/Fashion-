'use client'

import { ProductCard } from '@/components/ProductGrid/ProductCard'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { ProductCarousel } from '@/components/ui/ProductCarousel'

const accessoriesProducts = [
  {
    id: 1,
    name: 'Vintage Baseball Cap',
    price: '$34.99',
    image: '/ProductImages/17.jpg',
    rating: 4.7,
    reviews: 89,
  },
  {
    id: 2,
    name: 'Sports Performance Cap',
    price: '$39.99',
    image: '/ProductImages/47.jpg',
    rating: 4.8,
    reviews: 112,
  },
  {
    id: 3,
    name: 'Classic Trucker Cap',
    price: '$36.99',
    image: '/ProductImages/67.jpg',
    rating: 4.6,
    reviews: 74,
  },
  {
    id: 4,
    name: 'Premium Denim Jacket',
    price: '$129.99',
    image: '/ProductImages/64.jpg',
    rating: 4.9,
    reviews: 187,
  },
]

export function AccessoriesCollection() {
  return (
    <section className="w-full py-10 sm:py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Accessories & More" subtitle="Complete your look with our premium quality handpicked accessories" />

        {/* Products Grid */}
        <ProductCarousel>
          {accessoriesProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <ProductCard
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                rating={product.rating}
                category="Accessories"
              />
            </motion.div>
          ))}
        </ProductCarousel>

        {/* View All Link */}
        <div className="flex justify-end mt-12">
          <Link
            href="/collections/accessories"
            className="group flex items-center gap-2 text-brand-black hover:text-brand-red font-black uppercase tracking-widest transition-all duration-300"
          >
            <span className="text-sm">View All</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  )
}
