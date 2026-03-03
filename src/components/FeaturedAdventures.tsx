import { featuredAdventures } from '../data/mockData';
import AdventureCard from './AdventureCard';

const FeaturedAdventures = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Adventures
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Handpicked experiences that promise unforgettable moments and breathtaking discoveries
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredAdventures.map((adventure) => (
            <AdventureCard key={adventure.id} adventure={adventure} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition">
            View All Adventures
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedAdventures;
