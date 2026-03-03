import { MapPin } from 'lucide-react';
import { destinations } from '../data/mockData';

const PopularDestinations = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Popular Destinations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore the world's most stunning locations and embark on journeys that will stay with you forever
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer h-96"
            >
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center space-x-2 text-white/90 mb-3">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">Adventure Destination</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-3">
                  {destination.name}
                </h3>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-white/80 text-sm">Starting from</span>
                    <div className="text-2xl font-bold text-white">
                      ${destination.startingPrice}
                    </div>
                  </div>
                  <button className="px-6 py-2 bg-white text-gray-900 rounded-lg font-semibold hover:bg-emerald-600 hover:text-white transition">
                    Explore
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
