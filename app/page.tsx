import { TopBar } from '@/components/Header/TopBar'
import { Navigation } from '@/components/Header/Navigation'
import { HeroBanner } from '@/components/Hero/HeroBanner'
import { CategoryGrid } from '@/components/ProductGrid/CategoryGrid'
import { ProductGrid } from '@/components/ProductGrid/ProductGrid'
import { FeaturedBanner } from '@/components/FeaturedBanner/FeaturedBanner'
import { GallerySection } from '@/components/Gallery/GallerySection'
import { PromoBanner } from '@/components/Banner/PromoBanner'
import { ShirtsCollection } from '@/components/Collections/ShirtsCollection'
import { AccessoriesCollection } from '@/components/Collections/AccessoriesCollection'
import { BundlesCombo } from '@/components/Collections/BundlesCombo'
import { TestimonialsSection } from '@/components/Testimonials/TestimonialsSection'
import { BlogSection } from '@/components/Blog/BlogSection'
import { Newsletter } from '@/components/Newsletter/Newsletter'
import { Footer } from '@/components/Footer/Footer'
import { ScrollToTop } from '@/components/ScrollToTop'
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

        {/* Promo Banner */}
        {/* <PromoBanner /> */}

        {/* New Arrivals */}
        <section className="bg-gray-50">
          <ProductGrid title="NEW ARRIVALS" items={products.newArrivals} />
        </section>

        {/* Gallery Section */}
        <GallerySection />

        {/* Featured Banner */}
        <section className="w-full py-10 sm:py-12 lg:py-16 bg-gray-50 overflow-hidden">
          <FeaturedBanner />
        </section>

        {/* Best Sellers */}
        <section className="bg-white">
          <ProductGrid title="BEST SELLERS" items={products.bestSellers} />
        </section>

        {/* Bundles Combo */}
        <BundlesCombo />

        {/* Shirts Collection */}
        <ShirtsCollection />

        {/* Accessories Collection */}
        <AccessoriesCollection />

        {/* Client Reviews */}
        <TestimonialsSection />

        {/* Latest Blog Updates */}
        <BlogSection />

        {/* Newsletter */}
        <Newsletter />
      </main>

      {/* Footer */}
      <Footer />
      <ScrollToTop />
    </div>
  )
}
