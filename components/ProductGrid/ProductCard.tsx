import Image from 'next/image'
import { ShoppingCart, Star, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ProductCardProps {
  id: number
  name: string
  category?: string
  price: string | number
  originalPrice?: string | number
  image: string
  badge?: string
  rating?: number
}

export function ProductCard({
  name,
  category,
  price,
  originalPrice,
  image,
  badge,
  rating,
}: ProductCardProps) {
  return (
    <div className="bg-white rounded-[1.5rem] sm:rounded-[2.5rem] p-2 sm:p-3 border border-gray-200 hover:shadow-xl transition-all duration-500 group">
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-[1rem] sm:rounded-[2rem] aspect-square flex items-center justify-center p-2 sm:p-6">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-contain p-2 sm:p-4 group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Badges & Icons */}
        <div className="absolute inset-x-3 top-3 flex justify-between items-start">
          {badge ? (
            <div className="bg-white/80 backdrop-blur-sm px-2 sm:px-4 py-1 sm:py-1.5 rounded-full text-[9px] sm:text-[11px] font-bold text-gray-700 shadow-sm border border-black/5">
              {badge}
            </div>
          ) : (
            <div className="bg-white/80 backdrop-blur-sm px-2 sm:px-4 py-1 sm:py-1.5 rounded-full text-[9px] sm:text-[11px] font-bold text-gray-700 shadow-sm border border-black/5">
              Best Seller
            </div>
          )}

         
        </div>

        {/* Pagination Dots (Static for now as per design) */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          <div className="w-2 h-2 rounded-full bg-brand-red" />
          <div className="w-2 h-2 rounded-full bg-gray-300" />
          <div className="w-2 h-2 rounded-full bg-gray-200" />
        </div>
      </div>

      {/* Content */}
      <div className="mt-3 sm:mt-5 px-1 sm:px-2 pb-1 sm:pb-2">
        {category && (
          <p className="text-brand-red text-[10px] sm:text-sm font-bold uppercase tracking-widest mb-0.5 sm:mb-1">
            {category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')}
          </p>
        )}
        <h3 className="font-heading font-semibold text-[#1A1A1A] text-xs sm:text-base leading-tight mb-1 sm:mb-2 line-clamp-1">
          {name}
        </h3>

        {/* Price */}
        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-5">
          <span className="text-sm sm:text-xl font-bold text-[#1A1A1A]">${price}</span>
          {originalPrice && (
            <span className="text-[10px] sm:text-sm text-gray-400 line-through">
              ${originalPrice}
            </span>
          )}
        </div>

        {/* Buy Now Button */}
        <Button
          className="w-full bg-[#2B2B2B] hover:bg-black text-white font-bold py-2 sm:py-6 text-[9px] sm:text-base rounded-full transition-all duration-300 active:scale-95 shadow-lg group-hover:shadow-[#00000033]"
        >
          Buy Now
        </Button>
      </div>
    </div>
  )
}
