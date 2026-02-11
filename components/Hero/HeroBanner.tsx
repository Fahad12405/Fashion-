import { Button } from '@/components/ui/button'

export function HeroBanner() {
  return (
    <section className="relative w-full h-96 sm:h-[450px] lg:h-[500px] bg-gradient-to-r from-orange-600 to-orange-400 flex items-center justify-center overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-10 w-32 h-32 bg-white rounded-full mix-blend-multiply filter blur-xl" />
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-white rounded-full mix-blend-multiply filter blur-xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
          WINTER SALE
        </h2>
        <p className="text-lg sm:text-xl lg:text-2xl text-white mb-8 opacity-95">
          Up to 50% OFF on selected items
        </p>
        <Button
          size="lg"
          className="bg-black hover:bg-gray-800 text-white px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg transition-all hover:scale-105"
        >
          SHOP NOW
        </Button>
      </div>
    </section>
  )
}
