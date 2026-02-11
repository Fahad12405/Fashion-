import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ShoppingCart } from 'lucide-react'

const shirtsProducts = [
  {
    id: 1,
    name: 'Classic White Shirt',
    price: '$49.99',
    image: '/images/products/classic-white-tee.jpg',
    rating: 4.8,
    reviews: 128,
  },
  {
    id: 2,
    name: 'Striped Summer Shirt',
    price: '$59.99',
    image: '/images/products/striped-shirt.jpg',
    rating: 4.6,
    reviews: 95,
  },
  {
    id: 3,
    name: 'Navy Premium Tee',
    price: '$54.99',
    image: '/images/products/navy-tee.jpg',
    rating: 4.9,
    reviews: 156,
  },
  {
    id: 4,
    name: 'Floral Print Shirt',
    price: '$64.99',
    image: '/images/products/floral-tshirt.jpg',
    rating: 4.7,
    reviews: 142,
  },
]

export function ShirtsCollection() {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Shirts Collection
          </h2>
          <p className="text-gray-600 text-lg">
            Premium quality shirts for every occasion
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {shirtsProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden bg-gray-100">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 h-14">
                  {product.name}
                </h3>

                <div className="flex items-center gap-2 mb-3">
                  <div className="flex text-yellow-400">
                    {'★'.repeat(Math.floor(product.rating))}
                    {'☆'.repeat(5 - Math.floor(product.rating))}
                  </div>
                  <span className="text-sm text-gray-500">
                    ({product.reviews})
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-gray-900">
                    {product.price}
                  </span>
                  <Button
                    size="sm"
                    className="bg-orange-500 hover:bg-orange-600 text-white gap-2"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Add
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link href="/collections/shirts">
            <Button
              size="lg"
              className="bg-gray-900 hover:bg-black text-white px-12 py-3"
            >
              View All Shirts
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
