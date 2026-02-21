import { ProductCard } from '../ProductGrid/ProductCard'

interface Product {
    id: number
    name: string
    category?: string
    price: number
    originalPrice?: number
    image: string
    rating?: number
}

interface ProductRelatedProps {
    products: Product[]
}

export function ProductRelated({ products }: ProductRelatedProps) {
    return (
        <div className="py-12 border-t border-gray-100">
            <div className="flex justify-between items-end mb-8">
                <h2 className="text-xl font-bold text-[#1A1A1A]">Related Product</h2>
                <button className="text-gray-400 text-xs font-bold underline">View All</button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        category={product.category}
                        price={product.price}
                        originalPrice={product.originalPrice}
                        image={product.image}
                        rating={product.rating}
                    />
                ))}
            </div>
        </div>
    )
}
