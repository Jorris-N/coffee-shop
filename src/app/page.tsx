'use client';

import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'


interface Product {
  name: string
  description: string
  image: string
  price: string
}

const FeaturedCoffee: Product[] = [
  {
    name: 'San Francisco Blend',
    description: 'A medium roast with notes of chocolate, caramel, and cherry.',
    image: '/images/featured/sf-blend.webp',
    price: '15.99'
  },
  {
    name: 'Chinatown Blend',
    description: 'A dark roast with notes of cocoa, nuts, and spices.',
    image: '/images/featured/chinatown-blend.webp',
    price: '22.99'
  },
  {
    name: 'Mission District Blend',
    description: 'A light roast with notes of citrus, berries, and florals.',
    image: '/images/featured/mission-blend.png',
    price: '32.99'
  }
]

const BestSellers: Product[] = [
  {
    name: 'Hayes Valley Espresso',
    description: 'Rich and balanced espresso blend from San Francisco.',
    image: '/images/beans/hayes-valley.jpg',
    price: '18.99'
  },
  {
    name: 'Giant Steps Blend',
    description: 'Fruit-forward blend with a smooth finish.',
    image: '/images/beans/giant-steps.jpeg',
    price: '18.99'
  },
  {
    name: 'Three Africas Blend',
    description: 'Bright and complex blend with floral and berry notes',
    image: '/images/beans/three-africas.jpg',
    price: '18.99'
  }
]

const PopularBreakfast: Product[] = [
  {
    name: 'Avocado Toast',
    description: 'Smashed avocado, cherry tomatoes, radishes, and microgreens on multigrain toast.',
    image: '/images/breakfast/avocado-toast.jpg',
    price: '12.99'
  },
  {
    name: 'Breakfast Burrito',
    description: 'Scrambled eggs, black beans, pico de gallo, cheddar cheese, and guacamole in a flour tortilla.',
    image: '/images/breakfast/breakfast-burrito.jpg',
    price: '19.99'
  },
  {
    name: 'Chia Pudding',
    description: 'Chia seeds in almond milk with vanilla, agave, fresh fruit, and granola.',
    image: '/images/breakfast/chia-pudding.jpg',
    price: '23.99'
  }
]

const ProductCard: FC<Product> = ({ name, description, image, price }) => (
  <div className="group relative overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg">
    <div className="relative h-48 w-full overflow-hidden">
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <div className="p-4">
      <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
      <p className="mt-1 text-sm text-gray-500">{description}</p>
      {price && (
        <p className="mt-2 text-lg font-medium text-amber-600">${price}</p>
      )}
    </div>
  </div>
)

const ProductSection: FC<{ title: string; products: Product[] }> = ({
  title,
  products
}) => (
  <section className="mt-16">
    <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
    <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.name} {...product} />
      ))}
    </div>
  </section>
)

const Hero: FC = () => (
  <div className="relative h-[520px]">
    <div className="absolute inset-0">
      <Image
        src="/images/hero.jpg"
        alt="Coffee shop interior"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
    </div>
    <div className="relative flex h-full items-center">
      <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        <div className="text-white">
          <h1 className="text-5xl font-bold leading-tight">
            Coffee, but make it San Francisco
          </h1>
          <p className="mt-4 text-xl">
            Explore our newest blend, inspired by the rich history and flavors of
            this vibrant city.
          </p>
          <Link
            href="/shop"
            className="mt-8 inline-block rounded-full bg-amber-600 px-8 py-3 font-medium text-white transition-colors hover:bg-amber-700"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  </div>
)

const Home: FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Hero />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ProductSection title="Featured Coffee" products={FeaturedCoffee} />
          <ProductSection title="Best Selling Coffee Beans" products={BestSellers} />
          <ProductSection title="Popular Breakfast" products={PopularBreakfast} />
        </div>
      </main>
    </div>
  )
}

export default Home