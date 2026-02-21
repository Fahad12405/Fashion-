"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Search, RotateCcw, Lock, Tag, HelpCircle, ChevronDown, Zap, ChevronRight, Info, ShieldCheck } from 'lucide-react'
import { useFashionStore } from '@/lib/store'
import { Button } from '@/components/ui/button'

export default function CheckoutPage() {
    const { cart } = useFashionStore()

    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
    const shipping = subtotal > 100 ? 0 : 15
    const total = subtotal + shipping

    return (
        <div className="min-h-screen bg-white font-sans text-[#333] overflow-x-hidden">
            <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_420px]">

                {/* Left Side: Forms (Main Content) */}
                <div className="px-4 py-6 md:px-10 lg:py-10 lg:border-r border-gray-100 order-2 lg:order-1 lg:min-h-screen">
                    {/* Logo & Social Proof */}
                    <div className="flex flex-col items-center mb-8">
                        <Link href="/">
                          <Image src="/hutlemoblogo.png" alt="Logo" width={120} height={120} className="object-contain scal-100 sm:scale-150 "/>
                        </Link>

                        <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-md border border-gray-100 w-fit">
                            <div className="flex -space-x-1.5">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="w-5 h-5 rounded-full border border-white bg-gray-200 overflow-hidden relative">
                                        <Image src={`https://i.pravatar.cc/100?u=${i}`} alt="user" fill className="object-cover" />
                                    </div>
                                ))}
                            </div>
                            <span className="text-[10px] font-bold text-black uppercase tracking-tight">
                                Trusted by <span className="text-gray-600">770k+</span> Fashion Lovers
                            </span>
                        </div>

                        <div className="flex flex-wrap justify-center gap-3 mt-4 text-[10px] font-bold text-gray-400 uppercase tracking-tighter">
                            <div className="flex items-center gap-1"><Zap className="w-3.5 h-3.5 text-gray-400" /> FAST Shipping</div>
                            <div className="flex items-center gap-1"><RotateCcw className="w-3.5 h-3.5 text-gray-400" /> 90-Day Guarantee</div>
                            <div className="flex items-center gap-1"><Lock className="w-3.5 h-3.5 text-gray-400" /> Secure Checkout</div>
                        </div>
                    </div>

                    {/* Breadcrumbs (Desktop Only or clean) */}
                    <nav className="hidden md:flex items-center gap-2 text-[10px] mb-8 overflow-x-auto whitespace-nowrap pb-2 uppercase tracking-widest font-bold text-gray-400">
                        <Link href="/cart" className="text-black">Cart</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-black">Information</span>
                        <ChevronRight className="w-3 h-3" />
                        <span>Shipping</span>
                        <ChevronRight className="w-3 h-3" />
                        <span>Payment</span>
                    </nav>

                    {/* Express Checkout */}
                    <div className="mb-6">
                        <div className="text-center text-[9px] text-gray-400 font-bold uppercase tracking-widest mb-3">Express checkout</div>
                        <div className="grid grid-cols-3 gap-1.5">
                            <button className="bg-[#5a31f4] h-[48px] rounded flex items-center justify-center hover:opacity-90 transition">
                                <span className="text-white font-bold italic text-base">shop</span><span className="text-white font-light italic text-base">pay</span>
                            </button>
                            <button className="bg-[#ffc439] h-[48px] rounded flex items-center justify-center hover:opacity-90 transition p-2">
                                <Image src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" width={80} height={20} className="h-4" />
                            </button>
                            <button className="bg-black h-[48px] rounded flex items-center justify-center hover:opacity-90 transition">
                                <Image src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_Pay_Logo.svg" alt="GPay" width={60} height={20} className="h-5 brightness-0 invert" />
                            </button>
                        </div>
                        <div className="flex items-center gap-3 my-8">
                            <div className="flex-1 h-px bg-gray-200"></div>
                            <span className="text-gray-400 text-[10px] font-bold">OR</span>
                            <div className="flex-1 h-px bg-gray-200"></div>
                        </div>
                    </div>

                    {/* Contact Section */}
                    <section className="mb-6">
                        <div className="flex justify-between items-center mb-3">
                            <h2 className="text-base font-bold text-black uppercase tracking-tight">Contact</h2>
                            <Link href="/login" className="text-xs text-gray-500 underline font-medium">Log in</Link>
                        </div>
                        <div className="space-y-3">
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full h-11 px-3 rounded-md border border-gray-300 focus:border-black outline-none text-[13px] placeholder:text-gray-400"
                            />
                            <div className="flex items-center gap-2">
                                <input type="checkbox" id="news" defaultChecked className="w-3.5 h-3.5 rounded border-gray-300 text-black focus:ring-black" />
                                <label htmlFor="news" className="text-[12px] text-gray-500">Email me with news and offers</label>
                            </div>
                        </div>
                    </section>

                    {/* Delivery Section */}
                    <section className="mb-8">
                        <h2 className="text-base font-bold mb-3 text-black uppercase tracking-tight">Delivery</h2>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="col-span-2 relative">
                                <label className="absolute top-1.5 left-3 text-[9px] text-gray-400 font-bold uppercase">Country/Region</label>
                                <select className="w-full h-12 pt-4 pb-1 px-3 rounded-md border border-gray-300 focus:border-black outline-none text-[13px] appearance-none bg-white font-medium">
                                    <option>United Kingdom</option>
                                    <option>United States</option>
                                    <option>Pakistan</option>
                                    <option>United Arab Emirates</option>
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                            </div>
                            <input type="text" placeholder="First name" className="w-full h-11 px-3 rounded-md border border-gray-300 text-[13px] outline-none focus:border-black" />
                            <input type="text" placeholder="Last name" className="w-full h-11 px-3 rounded-md border border-gray-300 text-[13px] outline-none focus:border-black" />
                            <div className="col-span-2 relative">
                                <input type="text" placeholder="Address" className="w-full h-11 px-3 rounded-md border border-gray-300 text-[13px] outline-none focus:border-black pr-10" />
                                <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            </div>
                            <div className="col-span-2">
                                <input type="text" placeholder="Apartment, suite, etc. (optional)" className="w-full h-11 px-3 rounded-md border border-gray-300 text-[13px] outline-none focus:border-black" />
                            </div>
                            <input type="text" placeholder="City" className="w-full h-11 px-3 rounded-md border border-gray-300 text-[13px] outline-none focus:border-black" />
                            <input type="text" placeholder="Postal code" className="w-full h-11 px-3 rounded-md border border-gray-300 text-[13px] outline-none focus:border-black" />
                            <div className="col-span-2 relative">
                                <input type="tel" placeholder="Phone" className="w-full h-11 px-3 rounded-md border border-gray-300 text-[13px] outline-none focus:border-black pr-10" />
                                <Info className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 cursor-help" />
                            </div>
                        </div>
                        <div className="mt-4 flex items-center gap-2">
                            <input type="checkbox" id="save" className="w-3.5 h-3.5 rounded border-gray-300 text-black focus:ring-black" />
                            <label htmlFor="save" className="text-[12px] text-gray-500">Save this information for next time</label>
                        </div>
                    </section>

                    {/* Pay Now Button */}
                    <div className="mt-10">
                        <Button className="w-full bg-black hover:bg-gray-800 h-14 rounded-md text-base font-bold transition-all transform active:scale-[0.98]">
                            Complete Order
                        </Button>
                        <p className="text-center text-[10px] text-gray-400 mt-4 leading-relaxed">
                            By clicking complete order, you agree to our Terms of Service and Refund Policy.
                            Secure payment powered by Stripe.
                        </p>
                    </div>

                    <footer className="mt-12 pt-8 border-t border-gray-100 flex flex-wrap gap-x-6 gap-y-2 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                        <Link href="#" className="hover:text-black transition-colors">Refund policy</Link>
                        <Link href="#" className="hover:text-black transition-colors">Shipping policy</Link>
                        <Link href="#" className="hover:text-black transition-colors">Privacy policy</Link>
                        <Link href="#" className="hover:text-black transition-colors">Terms of service</Link>
                    </footer>
                </div>

                {/* Right Side: Order Summary */}
                <div className="bg-[#fafafa] lg:bg-gray-50/50 px-4 py-8 md:px-10 lg:px-12 border-b lg:border-b-0 order-1 lg:order-2 border-l border-gray-100">
                    <div className="max-w-full space-y-6 sticky top-8">
                        {/* Cart Items */}
                        <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 scrollbar-hide">
                            {cart.map((item) => (
                                <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="flex items-center gap-4 group">
                                    <div className="relative w-16 h-16 rounded-lg bg-white border border-gray-200 p-1 flex-shrink-0 overflow-visible shadow-sm">
                                        <div className="relative w-full h-full">
                                            <Image src={item.image} alt={item.name} fill className="object-contain p-1" />
                                        </div>
                                        <span className="absolute -top-2 -right-2 w-5 h-5 bg-gray-400 text-white text-[10px] font-bold rounded-full flex items-center justify-center z-10 border border-white">
                                            {item.quantity}
                                        </span>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-xs font-bold text-black group-hover:text-gray-600 transition-colors uppercase tracking-tight">{item.name}</h3>
                                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter mt-0.5">
                                            {item.selectedSize && `Size: ${item.selectedSize}`}
                                            {item.selectedSize && item.selectedColor && ' / '}
                                            {item.selectedColor && `Color: ${item.selectedColor}`}
                                        </p>
                                    </div>
                                    <div className="text-xs font-bold text-black">
                                        £{(item.price * item.quantity).toFixed(2)}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Discount Input */}
                        <div className="flex gap-2 py-6 border-y border-gray-100">
                            <input
                                type="text"
                                placeholder="Discount code or gift card"
                                className="flex-1 h-12 px-4 rounded-md border border-gray-200 text-[12px] bg-white outline-none focus:border-black transition-all"
                            />
                            <button className="px-5 bg-gray-100 text-gray-400 font-bold rounded-md text-[12px] hover:bg-gray-200 hover:text-black transition-all uppercase tracking-widest">
                                Apply
                            </button>
                        </div>

                        {/* Totals */}
                        <div className="space-y-2 pt-1">
                            <div className="flex justify-between text-[13px] text-gray-500 font-medium">
                                <span>Subtotal • {cart.reduce((a, b) => a + b.quantity, 0)} items</span>
                                <span className="font-bold text-black uppercase">£{subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-[13px] text-gray-500 font-medium">
                                <span>Shipping</span>
                                <span className="text-[11px] font-bold uppercase">
                                    {shipping === 0 ? "Free" : `£${shipping.toFixed(2)}`}
                                </span>
                            </div>
                            <div className="flex justify-between items-end pt-6 border-t border-gray-100 mt-4">
                                <span className="text-lg font-black text-black uppercase">Total</span>
                                <div className="text-right flex items-center gap-2">
                                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">GBP</span>
                                    <span className="text-2xl font-black text-black leading-none">£{total.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>

                        {/* Security Badge (Fashion context) */}
                        <div className="pt-6">
                            <div className="border border-dashed border-gray-200 rounded-lg p-5 bg-white/50 backdrop-blur-sm shadow-sm">
                                <div className="flex items-center gap-1.5 text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-4">
                                    Quality Assured <ShieldCheck className="w-3 h-3" />
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-16 h-16 bg-gray-50 rounded-md overflow-hidden flex-shrink-0 relative border border-gray-100">
                                        <Image src="/Quality-Assurance.png" alt="Specialist" fill className="object-cover" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-[11px] font-black text-black uppercase tracking-tight mb-1">Standard of Excellence</h4>
                                        <p className="text-[10px] text-gray-500 leading-relaxed italic">
                                            "Every piece in our collection is hand-picked for its premium quality and unique style."
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}