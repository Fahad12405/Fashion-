'use client'

import { ProductCard } from '@/components/ProductGrid/ProductCard'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const shirtsProducts = [
  {
    id: 1,
    name: 'Classic White Shirt',
    price: '$49.99',
    image: '/ProductImages/9.jpg',
    rating: 4.8,
    reviews: 128,
  },
  {
    id: 2,
    name: 'Striped Summer Shirt',
    price: '$59.99',
    image: '/ProductImages/24.jpg',
    rating: 4.6,
    reviews: 95,
  },
  {
    id: 3,
    name: 'Navy Premium Tee',
    price: '$54.99',
    image: '/ProductImages/19.jpg',
    rating: 4.9,
    reviews: 156,
  },
  {
    id: 4,
    name: 'Floral Print Shirt',
    price: '$64.99',
    image: '/ProductImages/29.jpg',
    rating: 4.7,
    reviews: 142,
  },
]

export function ShirtsCollection() {
  return (
    <section className="w-full py-10 sm:py-12 px-4 sm:px-6 lg:px-8 bg-gray-50/50">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Shirts Collection" subtitle="Premium quality shirts for every occasion" />

        {/* Products Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {shirtsProducts.map((product) => (
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
                category="Shirts"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* View All Link */}
        <div className="flex justify-end mt-12">
          <Link
            href="/collections/shirts"
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
