import { useState, useEffect } from 'react';
import { Clock, Tag, Users } from 'lucide-react';

const SpecialDeals = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 12,
    minutes: 34,
    seconds: 56
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-600 to-teal-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white mb-6">
              <Tag className="h-4 w-4" />
              <span className="font-semibold">Limited Time Offer</span>
            </div>

            <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
              Summer Special:<br />Save Up To 30%
            </h2>

            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Book your dream adventure now and enjoy exclusive discounts on selected packages. Limited spots available!
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
              <div className="flex items-center space-x-2 text-white mb-4">
                <Clock className="h-5 w-5" />
                <span className="font-semibold">Offer ends in:</span>
              </div>

              <div className="grid grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="bg-white rounded-lg p-4 mb-2">
                    <span className="text-3xl font-bold text-gray-900">{timeLeft.days}</span>
                  </div>
                  <span className="text-white/80 text-sm">Days</span>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-lg p-4 mb-2">
                    <span className="text-3xl font-bold text-gray-900">{timeLeft.hours}</span>
                  </div>
                  <span className="text-white/80 text-sm">Hours</span>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-lg p-4 mb-2">
                    <span className="text-3xl font-bold text-gray-900">{timeLeft.minutes}</span>
                  </div>
                  <span className="text-white/80 text-sm">Minutes</span>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-lg p-4 mb-2">
                    <span className="text-3xl font-bold text-gray-900">{timeLeft.seconds}</span>
                  </div>
                  <span className="text-white/80 text-sm">Seconds</span>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4 mb-8">
              <div className="flex items-center space-x-2 text-white">
                <Users className="h-5 w-5" />
                <span>Only 12 spots left</span>
              </div>
            </div>

            <button className="px-8 py-4 bg-white text-emerald-600 rounded-lg font-bold text-lg hover:bg-gray-100 transition shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5">
              Claim Your Discount
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src="https://images.pexels.com/photos/2437299/pexels-photo-2437299.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Adventure 1"
                className="w-full h-64 object-cover rounded-xl shadow-lg"
              />
              <img
                src="https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Adventure 2"
                className="w-full h-48 object-cover rounded-xl shadow-lg"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img
                src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Adventure 3"
                className="w-full h-48 object-cover rounded-xl shadow-lg"
              />
              <img
                src="https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Adventure 4"
                className="w-full h-64 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialDeals;
