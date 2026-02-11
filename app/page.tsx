import { TopBar } from '@/components/Header/TopBar'
import { Navigation } from '@/components/Header/Navigation'
import { HeroBanner } from '@/components/Hero/HeroBanner'
import { CategoryGrid } from '@/components/ProductGrid/CategoryGrid'
import { ProductGrid } from '@/components/ProductGrid/ProductGrid'
import { FeaturedBanner } from '@/components/FeaturedBanner/FeaturedBanner'
import { Newsletter } from '@/components/Newsletter/Newsletter'
import { Footer } from '@/components/Footer/Footer'
import products from '@/data/products.json'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <TopBar />
      <Navigation />

      {/* Main Content */}
      <main className="flex flex-col">
        {/* Hero Banner */}
        <HeroBanner />

        {/* Category Grid */}
        <CategoryGrid />

        {/* New Arrivals */}
        <section className="bg-gray-50">
          <ProductGrid title="NEW ARRIVALS" items={products.newArrivals} />
        </section>

        {/* Featured Banner */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 max-w-7xl mx-auto w-full">
          <FeaturedBanner />
        </section>

        {/* Best Sellers */}
        <section className="bg-white">
          <ProductGrid title="BEST SELLERS" items={products.bestSellers} />
        </section>

        {/* Newsletter */}
        <Newsletter />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
