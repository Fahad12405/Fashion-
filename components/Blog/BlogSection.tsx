'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'

interface BlogPost {
    id: number
    title: string
    subtitle: string
    category: string
    date: string
    image?: string
    images?: string[]
    featured?: boolean
    split?: boolean
}

const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "The best street style at Prada FW20 show",
        subtitle: "Quavo, Blondey McCoy and the best looks spotted at one of the most anticipated shows of MFW",
        category: "REPORTAGE",
        date: "JANUARY 13TH, 2020",
        image: "/ProductImages/33.jpg",
        featured: true,
    },
    {
        id: 2,
        title: "The best sneakers of the Milan Men's Fashion Week FW20",
        subtitle: "The most sophisticated silhouettes seen on the streets of the city",
        category: "REPORTAGE",
        date: "JANUARY 14TH, 2020",
        image: "/ProductImages/35.jpg",
    },
    {
        id: 3,
        title: "Milan Men's Fashion Week FW20 Moodboard",
        subtitle: "The inspirations from the catwalks",
        category: "FASHION",
        date: "JANUARY 14TH, 2020",
        image: "/ProductImages/15.jpg",
    },
    {
        id: 4,
        title: "Prada revealed the future of Cloudbust sneakers",
        subtitle: "During the last show, a new model was spotted",
        category: "FASHION",
        date: "JANUARY 14TH, 2020",
        image: "/ProductImages/94.png",
    },
    {
        id: 5,
        title: "The varsity jacket by COMME des GARÇONS x Stussy",
        subtitle: "Available from January 15",
        category: "FASHION",
        date: "JANUARY 14TH, 2020",
        images: ["/ProductImages/65.jpg", "/ProductImages/66.jpg"], // Split view
        split: true,
    },
    {
        id: 6,
        title: "New Guards Group Acquires Ambush and Opening Ceremony",
        subtitle: "The fashion conglomerate behind Off-White™ continues its expansion by acquiring a majority stake in these iconic labels.",
        category: "FASHION",
        date: "JANUARY 13TH, 2020",
        image: "/ProductImages/8.jpg",
    },
]

export function BlogSection() {
    return (
        <section className="w-full py-10 sm:py-20 px-4 sm:px-6 lg:px-10 bg-white overflow-hidden font-sans border-t border-gray-100">
            <div className="max-w-[1000px] mx-auto">

                <SectionHeading
                    title="LATEST UPDATES"
                    subtitle="Stay ahead of the curve with our curated reports on global fashion movements, exclusive backstage access, and street style trends."
                    align="left"
                    className="mb-10 sm:mb-16"
                />

                {/* Editorial Grid Level 1 */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0.5 sm:gap-6 mb-0.5 sm:mb-6 leading-tight">

                    {/* Main Featured Post */}
                    <Link href={`/blog/${blogPosts[0].id}`} className="lg:col-span-8 group relative flex flex-col justify-end aspect-[4/3] sm:aspect-[16/9] lg:aspect-auto overflow-hidden bg-black w-full max-w-full sm:min-h-[400px]">
                        <Image
                            src={blogPosts[0].image || "/placeholder.svg"}
                            alt={blogPosts[0].title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                        <div className="relative z-10 p-4 sm:p-10 text-white">
                            <h3 className="text-xl sm:text-4xl font-black tracking-tighter uppercase mb-2 sm:mb-4 max-w-4xl">
                                {blogPosts[0].title}
                            </h3>
                            <p className="text-[10px] sm:text-lg font-medium text-gray-200 mb-6 sm:mb-10 max-w-2xl line-clamp-2">
                                {blogPosts[0].subtitle}
                            </p>
                            <div className="flex items-center gap-6 sm:gap-10 border-t border-white/20 pt-4 sm:pt-6">
                                <span className="text-[8px] sm:text-[11px] font-black tracking-[0.2em]">{blogPosts[0].category}</span>
                                <span className="text-[8px] sm:text-[11px] font-medium tracking-tight text-gray-400">{blogPosts[0].date}</span>
                            </div>
                        </div>
                    </Link>

                    {/* Side Stack */}
                    <div className="lg:col-span-4 flex flex-col gap-0.5 sm:gap-6">
                        {blogPosts.slice(1, 3).map((post) => (
                            <Link key={post.id} href={`/blog/${post.id}`} className="group relative flex flex-col justify-end flex-1 aspect-[4/3] sm:aspect-[16/9] overflow-hidden bg-black w-full sm:min-h-[250px]">
                                <Image
                                    src={post.image || "/placeholder.svg"}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                                <div className="relative z-10 p-4 sm:p-8 text-white">
                                    <h4 className="text-lg sm:text-xl font-black tracking-tighter uppercase mb-2">
                                        {post.title}
                                    </h4>
                                    <p className="text-[9px] sm:text-xs font-medium text-gray-300 line-clamp-1 mb-4 hidden sm:block">
                                        {post.subtitle}
                                    </p>
                                    <div className="flex items-center justify-between border-t border-white/20 pt-3">
                                        <span className="text-[7px] sm:text-[10px] font-black tracking-widest">{post.category}</span>
                                        <span className="text-[7px] sm:text-[10px] font-medium text-gray-400">{post.date}</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Editorial Grid Level 2 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mt-10 sm:mt-16">
                    {blogPosts.slice(3).map((post) => (
                        <Link key={post.id} href={`/blog/${post.id}`} className="group flex flex-col">
                            {/* Media Container */}
                            <div className="relative aspect-[4/3] mb-5 sm:mb-8 overflow-hidden bg-gray-50 border border-gray-100">
                                {post.split ? (
                                    <div className="grid grid-cols-2 h-full gap-0.5">
                                        {post.images?.map((img, i) => (
                                            <div key={i} className="relative h-full w-full">
                                                <Image src={img} alt="" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <Image
                                        src={post.image || "/placeholder.svg"}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-all duration-700 group-hover:scale-105"
                                    />
                                )}
                                <div className="absolute top-4 right-4 bg-white text-black p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <ArrowUpRight className="w-4 h-4" />
                                </div>
                            </div>

                            {/* Text Info */}
                            <div className="flex flex-col">
                                <h4 className="text-lg sm:text-2xl font-black leading-[1.1] tracking-tighter uppercase mb-2 sm:mb-4 group-hover:text-gray-700">
                                    {post.title}
                                </h4>
                                <p className="text-[10px] sm:text-sm text-gray-500 font-medium leading-relaxed mb-6 line-clamp-2">
                                    {post.subtitle}
                                </p>
                                <div className="flex items-center gap-6 sm:gap-8 border-t border-gray-100 pt-4 sm:pt-6">
                                    <div className="flex flex-col gap-0.5">
                                        <span className="text-[7px] sm:text-[9px] font-black tracking-widest text-black">{post.category}</span>
                                        <span className="text-[7px] sm:text-[9px] font-medium text-gray-400">{post.date}</span>
                                    </div>
                                    <span className="ml-auto text-[8px] sm:text-[10px] font-black underline underline-offset-4 tracking-wider">READ MORE</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    )
}
