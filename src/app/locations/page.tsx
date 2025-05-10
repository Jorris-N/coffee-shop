import Image from 'next/image';

const locations = [
  {
    name: "Hayes Valley",
    address: "123 Hayes St, San Francisco, CA 94102",
    hours: "Mon-Sun: 7am-7pm",
    phone: "(415) 555-0101",
    image: "/images/hero.jpg"
  },
  {
    name: "Mission District",
    address: "456 Valencia St, San Francisco, CA 94103",
    hours: "Mon-Sun: 6am-8pm",
    phone: "(415) 555-0102",
    image: "/images/hero.jpg"
  },
  {
    name: "North Beach",
    address: "789 Columbus Ave, San Francisco, CA 94133",
    hours: "Mon-Sun: 7am-6pm",
    phone: "(415) 555-0103",
    image: "/images/hero.jpg"
  }
];

export default function LocationsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">Our Locations</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {locations.map((location) => (
          <div key={location.name} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="relative h-48">
              <Image
                src={location.image}
                alt={location.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{location.name}</h2>
              <div className="space-y-2 text-gray-600">
                <p>{location.address}</p>
                <p>{location.hours}</p>
                <p>{location.phone}</p>
              </div>
              <button className="mt-4 w-full bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700 transition-colors">
                Get Directions
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}