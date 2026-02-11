

'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ShoppingCart, Star, Heart, ArrowRight } from 'lucide-react'
import products from '@/data/products.json'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { motion } from 'framer-motion'

export function BundlesCombo() {
    const bundleItems = products.bundles || []

    return (
        <section className="w-full py-10 sm:py-12 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <SectionHeading title="Bundles Combo" subtitle="Save more with our exclusive curated bundles" />

                {/* Bundles Row */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ staggerChildren: 0.1 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
                >
                    {bundleItems.map((bundle) => (
                        <motion.div
                            key={bundle.id}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="group bg-white rounded-[2.5rem] p-4 border border-gray-100 hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
                        >
                            {/* Image Container */}
                            <div className="relative overflow-hidden brounded-[2rem] aspect-square flex items-center justify-center p-8 ">
                                <Image
                                    src={bundle.image || "/placeholder.svg"}
                                    alt={bundle.name}
                                    fill
                                    className="object-contain p-6 group-hover:scale-110 transition-transform duration-700"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                />

                                {/* Badges & Icons */}
                                <div className="absolute inset-x-4 top-4 flex justify-between items-start opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-[11px] font-black text-brand-red shadow-sm border border-red-50 uppercase tracking-widest">
                                        {bundle.badge || 'Bundle Pack'}
                                    </div>
                                    <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-300">
                                        <Heart className="w-5 h-5 text-red-500 fill-red-500" />
                                    </button>
                                </div>

                                {/* Pagination Dots */}
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                    <div className="w-2 h-2 rounded-full bg-brand-red" />
                                    <div className="w-2 h-2 rounded-full bg-gray-300" />
                                    <div className="w-2 h-2 rounded-full bg-gray-200" />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="mt-6 px-2 flex flex-col flex-grow">
                                <p className="text-brand-red text-sm font-black uppercase tracking-widest mb-2">
                                    Exclusive Bundle
                                </p>
                                <h3 className="font-heading font-semibold text-[#1A1A1A] text-lg leading-snug mb-3 line-clamp-2">
                                    {bundle.name}
                                </h3>

                                <div className="flex items-center gap-2 mb-4">
                                    <div className="flex text-brand-red">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`w-4 h-4 ${i < Math.floor(bundle.rating) ? 'fill-current' : 'text-gray-200'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                    <span className="text-xs font-black text-gray-400 uppercase tracking-tighter">
                                        ({bundle.reviews} Reviews)
                                    </span>
                                </div>

                                <div className="mt-auto pt-4">
                                    <div className="flex items-baseline gap-3 mb-6">
                                        <span className="text-2xl font-black text-[#1A1A1A]">
                                            ${bundle.price}
                                        </span>
                                        {bundle.originalPrice && (
                                            <span className="text-base text-gray-400 line-through font-medium">
                                                ${bundle.originalPrice}
                                            </span>
                                        )}
                                    </div>

                                    <Button
                                        className="w-full bg-brand-black hover:bg-brand-red text-white font-black py-5 sm:py-7 text-sm sm:text-base rounded-full transition-all duration-300 active:scale-95 shadow-lg group-hover:shadow-red-200/50 uppercase tracking-widest"
                                    >
                                        Buy Now
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* View All Link */}
                <div className="flex justify-end mt-12">
                    <Link
                        href="/collections/bundles"
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
