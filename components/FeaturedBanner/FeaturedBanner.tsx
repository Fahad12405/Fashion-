import { Button } from '@/components/ui/button'

export function FeaturedBanner() {
  return (
    <section className="relative w-full h-64 sm:h-80 lg:h-96 bg-gradient-to-r from-slate-700 to-slate-500 flex items-center justify-center overflow-hidden rounded-lg">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="2" fill="white" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#pattern)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
          JACKETS & HOODIES COLLECTION
        </h2>
        <Button
          size="lg"
          className="bg-orange-500 hover:bg-orange-600 text-white px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg transition-all hover:scale-105"
        >
          EXPLORE NOW
        </Button>
      </div>
    </section>
  )
}
