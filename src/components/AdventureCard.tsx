import { Clock, Star, MapPin } from 'lucide-react';
import { Adventure } from '../data/mockData';

interface AdventureCardProps {
  adventure: Adventure;
}

const AdventureCard = ({ adventure }: AdventureCardProps) => {
  const discount = adventure.originalPrice
    ? Math.round(((adventure.originalPrice - adventure.price) / adventure.originalPrice) * 100)
    : 0;

  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative h-56 overflow-hidden">
        <img
          src={adventure.image}
          alt={adventure.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {adventure.badge && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-emerald-600 text-white text-sm font-semibold rounded-full">
            {adventure.badge}
          </div>
        )}
        {discount > 0 && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-red-600 text-white text-sm font-semibold rounded-full">
            -{discount}%
          </div>
        )}
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition">
          {adventure.title}
        </h3>

        <div className="flex items-center text-gray-600 text-sm mb-3 space-x-4">
          <div className="flex items-center space-x-1">
            <MapPin className="h-4 w-4" />
            <span>{adventure.location}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{adventure.duration}</span>
          </div>
        </div>

        <div className="flex items-center mb-4">
          <div className="flex items-center space-x-1">
            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            <span className="font-semibold text-gray-900">{adventure.rating}</span>
          </div>
          <span className="text-gray-500 text-sm ml-2">(245 reviews)</span>
        </div>

        <div className="flex items-center justify-between">
          <div>
            {adventure.originalPrice && (
              <span className="text-gray-400 line-through text-sm mr-2">
                ${adventure.originalPrice}
              </span>
            )}
            <span className="text-2xl font-bold text-gray-900">
              ${adventure.price}
            </span>
            <span className="text-gray-600 text-sm"> /person</span>
          </div>
          <button className="px-5 py-2 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdventureCard;
