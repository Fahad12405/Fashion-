import { ProductCard } from './ProductCard'
import products from '@/data/products.json'

interface ProductGridProps {
  title: string
  items: typeof products.newArrivals | typeof products.bestSellers
}

export function ProductGrid({ title, items }: ProductGridProps) {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10 sm:mb-12 text-center">
        {title}
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
        {items.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  )
}
