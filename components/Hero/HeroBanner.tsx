'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { motion } from 'framer-motion'


export function HeroBanner() {
  return (
    <section className="relative w-full aspect-[16/7] sm:aspect-auto sm:h-[400px] lg:h-[450px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/Newbanner.png"
        alt="Hero Banner"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Premium Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />

      {/* Content */}

    </section>

  )
}
