import Image from 'next/image';

const origins = [
  {
    country: "Ethiopia",
    region: "Yirgacheffe",
    description: "Known for its floral and citrus notes, with a light to medium body.",
    elevation: "1,700-2,200 meters",
    process: "Washed",
    image: "/images/hero.jpg"
  },
  {
    country: "Colombia",
    region: "Huila",
    description: "Well-balanced with caramel sweetness and subtle fruit notes.",
    elevation: "1,500-2,000 meters",
    process: "Washed",
    image: "/images/hero.jpg"
  },
  {
    country: "Guatemala",
    region: "Antigua",
    description: "Complex with chocolate notes and subtle spice undertones.",
    elevation: "1,500-1,700 meters",
    process: "Washed",
    image: "/images/hero.jpg"
  }
];

export default function OriginsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">Coffee Origins</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {origins.map((origin) => (
          <div key={origin.country} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="relative h-48">
              <Image
                src={origin.image}
                alt={origin.country}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{origin.country}</h2>
              <h3 className="text-lg text-gray-600 mb-4">{origin.region}</h3>
              <p className="text-gray-600 mb-4">{origin.description}</p>
              <div className="space-y-2 text-sm text-gray-500">
                <p>Elevation: {origin.elevation}</p>
                <p>Process: {origin.process}</p>
              </div>
              <button className="mt-4 w-full bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}