import { CategoryCard } from './CategoryCard'
import categories from '@/data/categories.json'

export function CategoryGrid() {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10 sm:mb-12 text-center">
        Shop by Category
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
        {categories.categories.map((category) => (
          <CategoryCard key={category.id} {...category} />
        ))}
      </div>
    </section>
  )
}
