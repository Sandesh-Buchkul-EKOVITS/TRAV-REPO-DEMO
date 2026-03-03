import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Adventure } from '../data/mockData';
import { useRef } from 'react';
import AdventureCard from './AdventureCard';

interface ActivitySectionProps {
  title: string;
  adventures: Adventure[];
  bgColor?: string;
}

const ActivitySection = ({ title, adventures, bgColor = 'bg-gray-50' }: ActivitySectionProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className={`py-20 ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
            <p className="text-gray-600">Explore amazing {title.toLowerCase()} experiences</p>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => scroll('left')}
              className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition text-gray-700 hover:text-emerald-600"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition text-gray-700 hover:text-emerald-600"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            <button className="flex items-center space-x-2 text-emerald-600 font-semibold hover:text-emerald-700 transition">
              <span>View All</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex space-x-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {adventures.map((adventure) => (
            <div key={adventure.id} className="flex-none w-80">
              <AdventureCard adventure={adventure} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitySection;
