import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../data/mockData';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-lg text-gray-600">
            Real experiences from real adventurers around the world
          </p>
        </div>

        <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <Quote className="absolute top-8 left-8 h-12 w-12 text-emerald-200" />

          <div className="text-center mb-8">
            <img
              src={currentTestimonial.image}
              alt={currentTestimonial.name}
              className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-emerald-100"
            />
            <h3 className="text-2xl font-bold text-gray-900 mb-1">
              {currentTestimonial.name}
            </h3>
            <p className="text-gray-600 mb-4">{currentTestimonial.location}</p>
            <div className="flex items-center justify-center space-x-1">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>

          <p className="text-xl text-gray-700 text-center leading-relaxed mb-8 max-w-3xl mx-auto">
            "{currentTestimonial.text}"
          </p>

          <div className="flex items-center justify-center space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-gray-100 hover:bg-emerald-600 hover:text-white transition"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex ? 'w-8 bg-emerald-600' : 'w-2 bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-gray-100 hover:bg-emerald-600 hover:text-white transition"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-emerald-600 mb-2">4.9/5</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-emerald-600 mb-2">12K+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-emerald-600 mb-2">98%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-emerald-600 mb-2">500+</div>
            <div className="text-gray-600">5-Star Reviews</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
