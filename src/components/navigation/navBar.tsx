'use client';

import Link from 'next/link'
import { FC, useState } from 'react'
import { Coffee, ShoppingBag, Search, Menu, User } from 'lucide-react'

const Navbar: FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
    return (
      <nav className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Coffee className="h-8 w-8 text-amber-600" />
                <span className="ml-2 lg:text-xl font-bold text-gray-600 hover:text-amber-600 ease-in-out duration-500">SF Coffee</span>
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

  export default Navbar;