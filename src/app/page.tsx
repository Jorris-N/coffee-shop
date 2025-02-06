'use client';

import Image from 'next/image'
import Link from 'next/link'
import { FC, useState } from 'react'
import { Coffee, ShoppingBag, Search, Menu, User } from 'lucide-react'

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
    image: '/images/sf-blend.jpg',
    price: '18.99'
  },
  {
    name: 'Chinatown Blend',
    description: 'A dark roast with notes of cocoa, nuts, and spices.',
    image: '/images/chinatown-blend.jpg',
    price: '18.99'
  },
  {
    name: 'Mission District Blend',
    description: 'A light roast with notes of citrus, berries, and florals.',
    image: '/images/mission-blend.jpg',
    price: '18.99'
  }
]

const BestSellers: Product[] = [
  {
    name: 'Hayes Valley Espresso',
    description: 'Rich and balanced espresso blend from San Francisco.',
    image: '/images/hayes-valley.jpg',
    price: '18.99'
  },
  {
    name: 'Giant Steps Blend',
    description: 'Fruit-forward blend with a smooth finish.',
    image: '/images/giant-steps.jpg',
    price: '18.99'
  },
  {
    name: 'Three Africas Blend',
    description: 'Bright and complex blend with floral and berry notes',
    image: '/images/three-africas.jpg',
    price: '18.99'
  }
]

const PopularBreakfast: Product[] = [
  {
    name: 'Avocado Toast',
    description: 'Smashed avocado, cherry tomatoes, radishes, and microgreens on multigrain toast.',
    image: '/images/avocado-toast.jpg',
    price: '18.99'
  },
  {
    name: 'Breakfast Burrito',
    description: 'Scrambled eggs, black beans, pico de gallo, cheddar cheese, and guacamole in a flour tortilla.',
    image: '/images/breakfast-burrito.jpg',
    price: '18.99'
  },
  {
    name: 'Chia Pudding',
    description: 'Chia seeds in almond milk with vanilla, agave, fresh fruit, and granola.',
    image: '/images/chia-pudding.jpg',
    price: '18.99'
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

const Navbar: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Coffee className="h-8 w-8 text-amber-600" />
              <span className="ml-2 text-xl font-bold text-gray-600 hover:text-amber-600 ease-in-out duration-500">SF Coffee Co.</span>
            </Link>
          </div>
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <Link href="/shop" className="text-gray-600 hover:text-amber-600 ease-in-out duration-500">Shop</Link>
            <Link href="/subscriptions" className="text-gray-600 hover:text-amber-600 ease-in-out duration-500">Subscriptions</Link>
            <Link href="/origins" className="text-gray-600 hover:text-amber-600 ease-in-out duration-500">Samra Origins</Link>
            <Link href="/learn" className="text-gray-600 hover:text-amber-600 ease-in-out duration-500">Learn</Link>
            <Link href="/locations" className="text-gray-600 hover:text-amber-600 ease-in-out duration-500">Locations</Link>
          </div>
          <div className="flex items-center space-x-4">
            <button className="rounded-full p-2 hover:bg-gray-100  ease-in-out duration-500">
              <Search className="h-6 w-6 text-gray-600 hover:text-amber-600 duration-500" />
            </button>
            <button className="rounded-full p-2 hover:bg-gray-100  ease-in-out duration-500">
              <User className="h-6 w-6 text-gray-600 hover:text-amber-600 duration-500" />
            </button>
            <button className="rounded-full p-2 hover:bg-gray-100  ease-in-out duration-500">
              <ShoppingBag className="h-6 w-6 text-gray-600 hover:text-amber-600 duration-500" />
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="rounded-full p-2 hover:bg-gray-100 lg:hidden"
            >
              <Menu className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      <div 
        className={`
          transform overflow-hidden transition-all duration-700 ease-in-out
          ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
          lg:hidden
        `}
      >
        <div className={`
          space-y-1 px-4 pb-3 pt-2 transform transition-transform duration-700
          ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-4'}
        `}>
          <Link 
            href="/shop" 
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-amber-600"
          >
            Shop
          </Link>
          <Link 
            href="/subscriptions" 
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-amber-600"
          >
            Subscriptions
          </Link>
          <Link 
            href="/origins" 
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-amber-600"
          >
            Samra Origins
          </Link>
          <Link 
            href="/learn" 
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-amber-600"
          >
            Learn
          </Link>
          <Link 
            href="/locations" 
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-amber-600"
          >
            Locations
          </Link>
        </div>
      </div>
    </nav>
  );
}

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
      <Navbar />
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