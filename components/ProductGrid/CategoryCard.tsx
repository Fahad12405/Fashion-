import Image from 'next/image'
import Link from 'next/link'

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
}: CategoryCardProps) {
  return (
    <Link href={link}>
      <div className="flex flex-col items-center gap-4 group cursor-pointer">
        {/* Circular Image Container */}
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
            sizes="(max-width: 640px) 128px, (max-width: 1024px) 160px, 192px"
          />
        </div>

        {/* Category Name */}
        <h3 className="text-center font-semibold text-sm sm:text-base lg:text-lg text-gray-900 group-hover:text-orange-500 transition-colors">
          {name}
        </h3>

        {/* Shop Button */}
        <button className="px-6 py-2 bg-orange-500 text-white rounded-full font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-orange-600">
          Shop Now
        </button>
      </div>
    </Link>
  )
}
