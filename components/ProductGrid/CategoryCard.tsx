'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface CategoryCardProps {
  id: number
  name: string
  slug: string
  image: string
  link: string
  badge?: string
}

export function CategoryCard({
  name,
  image,
  link,
}: CategoryCardProps) {
  return (
    <Link href={link}>
      <motion.div
        whileHover={{ y: -5 }}
        className="flex flex-col items-center gap-0 group cursor-pointer"
      >
        {/* Circular Image Container */}
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden  flex-shrink-0 ring-0  transition-all duration-500 ">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
            sizes="(max-width: 640px) 128px, (max-width: 1024px) 160px, 192px"
          />
        </div>

        {/* Category Name */}
        <h3 className="text-center font-black text-sm sm:text-base lg:text-xl text-brand-black group-hover:text-brand-red transition-all duration-300 uppercase tracking-tighter">
          {name}
        </h3>

        {/* Shop Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.05 }}
          className="px-8 py-2.5 bg-brand-black text-white rounded-full font-black text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-brand-red uppercase tracking-widest"
        >
          Shop Now
        </motion.button>
      </motion.div>
    </Link>
  )
}
