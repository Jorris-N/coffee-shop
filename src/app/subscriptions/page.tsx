'use client';

import Image from 'next/image'
import { useState } from 'react'

interface CoffeeOption {
  name: string
  roastType: string
  price: number
  image: string
}

interface SubscriptionPlan {
  name: string
  price: number
  quantity: string
  isPopular?: boolean
  isBestValue?: boolean
  features: string[]
}

const subscriptionPlans: SubscriptionPlan[] = [
  {
    name: 'Sampler',
    price: 16,
    quantity: '6 oz of coffee',
    isPopular: true,
    features: [
      '6 oz of coffee',
      'Free shipping',
      'No commitment'
    ]
  },
  {
    name: 'Classic',
    price: 16,
    quantity: '12 oz of coffee',
    isBestValue: true,
    features: [
      '12 oz of coffee',
      'Free shipping',
      'No commitment'
    ]
  },
  {
    name: 'Adventure',
    price: 16,
    quantity: '24 oz of coffee',
    isBestValue: true,
    features: [
      '24 oz of coffee',
      'Free shipping',
      'No commitment'
    ]
  }
]

const coffeeOptions: CoffeeOption[] = [
  {
    name: 'Night Owl',
    roastType: 'Dark Roast',
    price: 16,
    image: '/images/coffee/night-owl.jpg'
  },
  {
    name: 'Morning Zen',
    roastType: 'Medium Roast',
    price: 16,
    image: '/images/coffee/morning-zen.jpg'
  },
  {
    name: 'Sunset Dreams',
    roastType: 'Light Roast',
    price: 16,
    image: '/images/coffee/sunset-dreams.jpg'
  }
]

export default function SubscriptionPage() {
  const [selectedFrequency, setSelectedFrequency] = useState('4-weeks')
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)
  const [selectedCoffee, setSelectedCoffee] = useState<string | null>(null)

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="relative h-96 rounded-2xl overflow-hidden mb-16">
        <Image
          src="/images/hero.jpg"
          alt="Coffee cup with latte art"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center p-6">
          <h1 className="text-5xl font-bold text-white mb-4">
            Never run out of your favorite beans
          </h1>
          <p className="text-xl text-white mb-8">
            Enjoy a steady supply of our best roasts, delivered to your door
          </p>
          <button className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300">
            Subscribe Now
          </button>
        </div>
      </div>

      <h2 className="text-4xl font-bold mb-12">A better way to brew</h2>

      {/* Plans & Pricing Section */}
      <section className="mb-16">
        <h3 className="text-2xl font-bold mb-8">Plans & Pricing</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {subscriptionPlans.map((plan) => (
            <div 
              key={plan.name}
              className={`p-6 rounded-xl border-2 ${
                selectedPlan === plan.name 
                  ? 'border-yellow-400' 
                  : 'border-gray-200'
              } hover:border-yellow-400 cursor-pointer transition-colors`}
              onClick={() => setSelectedPlan(plan.name)}
            >
              {(plan.isPopular || plan.isBestValue) && (
                <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm mb-4">
                  {plan.isPopular ? 'Most Popular' : 'Best Value'}
                </span>
              )}
              <h4 className="text-xl font-semibold mb-2">{plan.name}</h4>
              <div className="flex items-baseline mb-4">
                <span className="text-3xl font-bold">${plan.price}</span>
                <span className="text-gray-600 ml-2">/shipment</span>
              </div>
              <ul className="space-y-3">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Delivery Frequency Section */}
      <section className="mb-16">
        <h3 className="text-2xl font-bold mb-8">Delivery Frequency</h3>
        <div className="space-y-4">
          <label className="flex items-center p-4 border-2 rounded-lg cursor-pointer hover:border-yellow-400 transition-colors">
            <input
              type="radio"
              name="frequency"
              value="4-weeks"
              checked={selectedFrequency === '4-weeks'}
              onChange={(e) => setSelectedFrequency(e.target.value)}
              className="w-4 h-4 text-yellow-400 focus:ring-yellow-400"
            />
            <span className="ml-3">Every 4 Weeks</span>
          </label>
          <label className="flex items-center p-4 border-2 rounded-lg cursor-pointer hover:border-yellow-400 transition-colors">
            <input
              type="radio"
              name="frequency"
              value="2-weeks"
              checked={selectedFrequency === '2-weeks'}
              onChange={(e) => setSelectedFrequency(e.target.value)}
              className="w-4 h-4 text-yellow-400 focus:ring-yellow-400"
            />
            <span className="ml-3">Every 2 Weeks</span>
          </label>
          <label className="flex items-center p-4 border-2 rounded-lg cursor-pointer hover:border-yellow-400 transition-colors">
            <input
              type="radio"
              name="frequency"
              value="weekly"
              checked={selectedFrequency === 'weekly'}
              onChange={(e) => setSelectedFrequency(e.target.value)}
              className="w-4 h-4 text-yellow-400 focus:ring-yellow-400"
            />
            <span className="ml-3">Weekly</span>
          </label>
        </div>
      </section>

      {/* Choose Your Beans Section */}
      <section className="mb-16">
        <h3 className="text-2xl font-bold mb-8">Choose your beans</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {coffeeOptions.map((coffee) => (
            <div
              key={coffee.name}
              className={`rounded-xl overflow-hidden border-2 cursor-pointer transition-colors ${
                selectedCoffee === coffee.name 
                  ? 'border-yellow-400' 
                  : 'border-transparent'
              }`}
              onClick={() => setSelectedCoffee(coffee.name)}
            >
              <div className="relative h-48">
                <Image
                  src={coffee.image}
                  alt={coffee.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-lg">{coffee.name}</h4>
                <p className="text-gray-600 mb-2">{coffee.roastType}</p>
                <p className="font-semibold">${coffee.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Add to Subscription Button */}
      <div className="text-center">
        <button 
          className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
          disabled={!selectedPlan || !selectedCoffee}
        >
          Add to subscription
        </button>
      </div>
    </main>
  )
}