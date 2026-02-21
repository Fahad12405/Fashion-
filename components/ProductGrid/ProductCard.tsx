import Image from 'next/image'
import { ShoppingCart, Star, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

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
  id,
  name,
  category,
  price,
  originalPrice,
  image,
  badge,
  rating,
}: ProductCardProps) {
  return (
    <div className="bg-white rounded-[2rem] p-2.5 border border-gray-100 hover:shadow-xl transition-all duration-500 group">
      <Link href={`/product/${id}`}>
        {/* Image Container */}
        <div className="relative overflow-hidden  rounded-[1.5rem] aspect-square flex items-center justify-center p-4">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            className="object-contain p-3 group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
          />

          {/* Badges & Icons */}
          <div className="absolute inset-x-2 top-2 flex justify-between items-start">
            {badge ? (
              <div className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-gray-700 shadow-sm border border-black/5">
                {badge}
              </div>
            ) : (
              <div className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-gray-700 shadow-sm border border-black/5">
                Best Seller
              </div>
            )}

            <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-300">
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            </button>
          </div>

          {/* Pagination Dots (Static for now as per design) */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-red" />
            <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
            <div className="w-1.5 h-1.5 rounded-full bg-gray-200" />
          </div>
        </div>

        {/* Content */}
        <div className="mt-4 px-1 pb-1">
          {category && (
            <p className="text-brand-red text-[11px] font-bold uppercase tracking-widest mb-1">
              {category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')}
            </p>
          )}
          <h3 className="font-heading font-semibold text-[#1A1A1A] text-sm leading-tight mb-1.5 line-clamp-1">
            {name}
          </h3>

          {/* Price */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-lg font-bold text-[#1A1A1A]">${price}</span>
            {originalPrice && (
              <span className="text-xs text-gray-400 line-through">
                ${originalPrice}
              </span>
            )}
          </div>

          {/* Buy Now Button */}
          <Button
            className="w-full bg-[#2B2B2B] hover:bg-black text-white font-bold py-2.5 sm:py-3 text-xs sm:text-sm rounded-full transition-all duration-300 active:scale-95 shadow-md group-hover:shadow-[#00000033]"
          >
            Buy Now
          </Button>
        </div>
      </Link>
    </div>
  )
}
