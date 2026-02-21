'use client'

import { ProductCard } from './ProductCard'
import products from '@/data/products.json'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ProductCarousel } from '@/components/ui/ProductCarousel'

interface ProductGridProps {
  title: string
  items: typeof products.newArrivals | typeof products.bestSellers
}

export function ProductGrid({ title, items }: ProductGridProps) {
  return (
    <section className="w-full py-10 sm:py-12 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
      <SectionHeading title={title} subtitle="Premium quality products selected just for you" />

      <ProductCarousel>
        {items.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ProductCard {...product} />
          </motion.div>
        ))}
      </ProductCarousel>

      {/* View All Link */}
      <div className="flex justify-end mt-12">
        <Link
          href={`/collections/${title.toLowerCase().replace(' ', '-')}`}
          className="group flex items-center gap-2 text-brand-black hover:text-brand-red font-black uppercase tracking-widest transition-all duration-300"
        >
          <span className="text-sm">View All</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </section>
  )
}
