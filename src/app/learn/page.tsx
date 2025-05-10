import Image from 'next/image';

export default function LearnPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">Learn About Coffee</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Brewing Guides</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-2">Pour Over</h3>
              <p className="text-gray-600 mb-4">
                Master the art of pour-over coffee with our comprehensive guide.
              </p>
              <button className="text-amber-600 font-semibold hover:text-amber-700">
                Read Guide →
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-2">French Press</h3>
              <p className="text-gray-600 mb-4">
                Learn how to make the perfect French press coffee every time.
              </p>
              <button className="text-amber-600 font-semibold hover:text-amber-700">
                Read Guide →
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-2">Espresso</h3>
              <p className="text-gray-600 mb-4">
                Discover the secrets to pulling the perfect shot of espresso.
              </p>
              <button className="text-amber-600 font-semibold hover:text-amber-700">
                Read Guide →
              </button>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Coffee Knowledge</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-2">Coffee Processing</h3>
              <p className="text-gray-600 mb-4">
                Understanding different coffee processing methods and their impact on flavor.
              </p>
              <button className="text-amber-600 font-semibold hover:text-amber-700">
                Learn More →
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-2">Coffee Origins</h3>
              <p className="text-gray-600 mb-4">
                Explore the world's coffee-growing regions and their unique characteristics.
              </p>
              <button className="text-amber-600 font-semibold hover:text-amber-700">
                Learn More →
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-2">Roasting Levels</h3>
              <p className="text-gray-600 mb-4">
                Learn about different roast levels and how they affect coffee flavor.
              </p>
              <button className="text-amber-600 font-semibold hover:text-amber-700">
                Learn More →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}