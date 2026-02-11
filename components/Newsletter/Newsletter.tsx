'use client'

import { FormEvent, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Mail } from 'lucide-react'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  return (
    <section className="w-full bg-white text-gray-900 py-12 sm:py-16 lg:py-20 border-y border-gray-200">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Mail className="w-12 h-12 mx-auto mb-4 text-orange-500" />
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-gray-600 mb-8 text-lg">
          Get exclusive offers, new arrivals, and special promotions delivered to your inbox.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 text-gray-900 outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
          />
          <Button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-all whitespace-nowrap"
          >
            Subscribe
          </Button>
        </form>

        {submitted && (
          <p className="mt-4 text-green-600 font-semibold animate-pulse">
            ✓ Thanks for subscribing!
          </p>
        )}
      </div>
    </section>
  )
}
