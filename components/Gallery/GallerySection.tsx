import Image from 'next/image'

const galleryItems = [
  {
    id: 1,
    image: '/images/gallery/gallery-1.jpg',
    title: 'Summer Collection',
    colSpan: 'col-span-1 row-span-2',
  },
  {
    id: 2,
    image: '/images/gallery/gallery-2.jpg',
    title: 'Accessories',
    colSpan: 'col-span-1',
  },
  {
    id: 3,
    image: '/images/gallery/gallery-3.jpg',
    title: 'Beauty & Care',
    colSpan: 'col-span-1',
  },
  {
    id: 4,
    image: '/images/gallery/gallery-4.jpg',
    title: 'Skincare',
    colSpan: 'col-span-1 row-span-2',
  },
]

export function GallerySection() {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 text-center">
          Inspire Your Style
        </h2>
        <p className="text-gray-600 text-center mb-10 sm:mb-12">
          Discover our latest collections and trending styles
        </p>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 auto-rows-max">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`${item.colSpan} relative group overflow-hidden rounded-lg h-64 sm:h-80 lg:h-96 cursor-pointer`}
            >
              <Image
                src={item.image || '/placeholder.svg'}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white font-bold text-lg sm:text-xl text-center px-4">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
