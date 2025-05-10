'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Filter, SlidersHorizontal, Minus, Plus } from 'lucide-react';
import { Modal } from '@/components/ui/modal';

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  roastType: 'Light' | 'Medium' | 'Dark';
  origin: string;
  weight: string;
  tastingNotes?: string[];
  processingMethod?: string;
  elevation?: string;
}

const products: Product[] = [
  {
    id: '1',
    name: 'Hayes Valley Espresso',
    price: 18.99,
    description: 'Rich and balanced espresso blend from San Francisco.',
    image: '/images/featured/sf-blend.webp',
    roastType: 'Dark',
    origin: 'Brazil, Ethiopia',
    weight: '12 oz',
    tastingNotes: ['Chocolate', 'Caramel', 'Orange'],
    processingMethod: 'Washed',
    elevation: '1,200-1,800 meters'
  },
  {
    id: '2',
    name: 'Giant Steps Blend',
    price: 18.99,
    description: 'Fruit-forward blend with a smooth finish.',
    image: '/images/featured/chinatown-blend.webp',
    roastType: 'Medium',
    origin: 'Indonesia, Ethiopia',
    weight: '12 oz',
    tastingNotes: ['Berry', 'Dark Chocolate', 'Spice'],
    processingMethod: 'Natural',
    elevation: '1,500-2,000 meters'
  },
  {
    id: '3',
    name: 'Three Africas Blend',
    price: 18.99,
    description: 'Bright and complex blend with floral and berry notes',
    image: '/images/featured/mission-blend.png',
    roastType: 'Light',
    origin: 'Ethiopia, Kenya, Uganda',
    weight: '12 oz',
    tastingNotes: ['Floral', 'Berry', 'Citrus'],
    processingMethod: 'Washed/Natural',
    elevation: '1,700-2,200 meters'
  }
];

export default function ShopPage() {
  const [selectedRoast, setSelectedRoast] = useState<string>('all');
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState<'price-asc' | 'price-desc' | 'name'>('name');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);

  const filteredProducts = products
    .filter(product => selectedRoast === 'all' || product.roastType.toLowerCase() === selectedRoast)
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

  const handleQuantityChange = (change: number) => {
    setQuantity(Math.max(1, quantity + change));
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Shop Our Coffee</h1>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm hover:bg-gray-50"
          >
            <Filter className="h-5 w-5" />
            <span>Filters</span>
          </button>
        </div>

        {showFilters && (
          <div className="bg-white p-4 rounded-lg shadow-sm mb-8">
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="h-5 w-5 text-gray-500" />
                <span className="font-medium">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'price-asc' | 'price-desc' | 'name')}
                  className="border rounded-md px-2 py-1"
                >
                  <option value="name">Name</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Roast:</span>
                <select
                  value={selectedRoast}
                  onChange={(e) => setSelectedRoast(e.target.value)}
                  className="border rounded-md px-2 py-1"
                >
                  <option value="all">All Roasts</option>
                  <option value="light">Light</option>
                  <option value="medium">Medium</option>
                  <option value="dark">Dark</option>
                </select>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => setSelectedProduct(product)}
            >
              <div className="relative h-64">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{product.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <span className="text-gray-600">{product.roastType} Roast</span>
                    <span className="mx-2">•</span>
                    <span className="text-gray-600">{product.weight}</span>
                  </div>
                  <span className="text-lg font-semibold text-amber-600">${product.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedProduct && (
          <Modal
            isOpen={!!selectedProduct}
            onClose={() => {
              setSelectedProduct(null);
              setQuantity(1);
            }}
            title={selectedProduct.name}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative h-[300px] md:h-full rounded-lg overflow-hidden">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Tasting Notes</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.tastingNotes?.map((note) => (
                        <span
                          key={note}
                          className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm"
                        >
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p><span className="font-semibold">Origin:</span> {selectedProduct.origin}</p>
                    <p><span className="font-semibold">Process:</span> {selectedProduct.processingMethod}</p>
                    <p><span className="font-semibold">Elevation:</span> {selectedProduct.elevation}</p>
                    <p><span className="font-semibold">Roast:</span> {selectedProduct.roastType}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border rounded-lg">
                      <button
                        onClick={() => handleQuantityChange(-1)}
                        className="p-2 hover:bg-gray-100"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="px-4">{quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(1)}
                        className="p-2 hover:bg-gray-100"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <button className="flex-1 bg-amber-600 text-white py-2 px-4 rounded-lg hover:bg-amber-700 transition-colors">
                      Add to Cart - ${(selectedProduct.price * quantity).toFixed(2)}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
}