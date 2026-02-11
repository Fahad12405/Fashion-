import Image from 'next/image'
import { ShoppingCart, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface ProductCardProps {
  id: number
  name: string
  price: number
  originalPrice?: number
  image: string
  badge?: string
  rating?: number
}

export function ProductCard({
  name,
  price,
  originalPrice,
  image,
  badge,
  rating,
}: ProductCardProps) {
  const discount = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0

  return (
    <div className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-gray-300 transition-colors group">
      {/* Image Container */}
      <div className="relative overflow-hidden bg-gray-100 aspect-square">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {badge && (
          <Badge className="absolute top-3 right-3 bg-red-500 text-white hover:bg-red-600">
            {badge}
          </Badge>
        )}

        {discount > 0 && (
          <Badge className="absolute top-3 left-3 bg-green-500 text-white hover:bg-green-600">
            -{discount}%
          </Badge>
        )}

        {/* Add to Cart Button */}
        <Button
          className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-[calc(100%-32px)] bg-black hover:bg-gray-800 text-white gap-2"
          size="sm"
        >
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </Button>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
          {name}
        </h3>

        {/* Rating */}
        {rating && (
          <div className="flex items-center gap-1 mb-2">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(rating)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">({rating})</span>
          </div>
        )}

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-gray-900">${price}</span>
          {originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              ${originalPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
