import { Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Fashion Enthusiast',
    content:
      'The quality of the products is incredible! I love how stylish and comfortable everything is. Highly recommend!',
    rating: 5,
    avatar: '👩‍🦰',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'College Student',
    content:
      'Best online shopping experience ever. Fast shipping, great selection, and amazing customer service!',
    rating: 5,
    avatar: '👨‍💼',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Professional',
    content:
      'Perfect fit and excellent quality. The prices are reasonable and the selection is fantastic.',
    rating: 5,
    avatar: '👩‍💻',
  },
  {
    id: 4,
    name: 'James Wilson',
    role: 'Regular Customer',
    content:
      'I have been a loyal customer for over a year now. Never disappointed with my purchases!',
    rating: 5,
    avatar: '👨‍🎨',
  },
]

export function TestimonialsSection() {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 text-center">
          Customer Love
        </h2>
        <p className="text-gray-600 text-center mb-12 sm:mb-16">
          What our amazing customers have to say about us
        </p>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-6 sm:p-8 border border-gray-200 rounded-xl hover:border-orange-500 hover:shadow-lg transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-orange-500 text-orange-500"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
