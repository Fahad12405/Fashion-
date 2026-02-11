'use client'

import Image from 'next/image'
import { Star, Quote } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { motion } from 'framer-motion'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Fashion Enthusiast',
    content:
      'The quality of the products is incredible! I love how stylish and comfortable everything is. The HustleMob lifestyle is real.',
    rating: 5,
    image: '/ProductImages/91.jpg',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Daily Runner',
    content:
      'Best online shopping experience ever. Fast shipping, great selection, and the fit is absolutely perfect for my active lifestyle!',
    rating: 5,
    image: '/ProductImages/92.jpg',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Creative Director',
    content:
      'Perfect fit and excellent quality. The prices are reasonable and the selection of hoodies and caps is just fantastic.',
    rating: 5,
    image: '/ProductImages/90.jpg',
  },
  {
    id: 4,
    name: 'James & Malik',
    role: 'Regular Customers',
    content:
      'We have been loyal customers for over a year now. Never disappointed with our purchases! The bundle deals are unbeatable.',
    rating: 5,
    image: '/ProductImages/93.jpg',
  },
]

export function TestimonialsSection() {
  return (
    <section className="w-full py-10 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <SectionHeading title="Client Reviews" subtitle="See what our community are saying about their HustleMob experience" />

        {/* Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative z-10"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center"
            >
              {/* Client Image */}
              <div className="relative w-24 h-24 mb-6 ring-4 ring-red-50 group-hover:ring-brand-red/20 transition-all duration-500 rounded-full overflow-hidden">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Quote Icon */}
              <div className="mb-4 text-red-100 group-hover:text-brand-red transition-colors duration-500">
                <Quote className="w-8 h-8 fill-current" />
              </div>

              {/* Review Text */}
              <p className="text-gray-700 mb-8 italic leading-relaxed line-clamp-4 flex-grow">
                "{testimonial.content}"
              </p>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-brand-red text-brand-red"
                  />
                ))}
              </div>

              {/* Author */}
              <div>
                <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                <p className="text-sm font-black text-brand-red uppercase tracking-widest">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badge / Footer Note */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-100 rounded-full shadow-sm text-gray-600 font-medium">
            <div className="flex -space-x-3">
              {[90, 91, 92, 93].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden relative">
                  <Image src={`/ProductImages/${i}.jpg`} alt="Client" fill className="object-cover" />
                </div>
              ))}
            </div>
            <span className="ml-2 font-bold tracking-tight">Joined by +10,000 happy customers</span>
          </div>
        </div>
      </div>
    </section>
  )
}
