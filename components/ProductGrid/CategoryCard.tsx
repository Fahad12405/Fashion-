import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'

interface CategoryCardProps {
  id: number
  name: string
  slug: string
  image: string
  link: string
  badge?: string
}

export function CategoryCard({
  name,
  image,
  link,
  badge,
}: CategoryCardProps) {
  return (
    <Link href={link}>
      <div className="relative group overflow-hidden rounded-lg bg-gray-100 aspect-square cursor-pointer">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-end p-4">
          <div className="w-full">
            <h3 className="text-white font-bold text-lg mb-2">{name}</h3>
            <button className="w-full bg-white text-black py-2 rounded-md font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Shop Now
            </button>
          </div>
        </div>

        {badge && (
          <Badge className="absolute top-3 right-3 bg-red-500 text-white hover:bg-red-600">
            {badge}
          </Badge>
        )}
      </div>
    </Link>
  )
}
