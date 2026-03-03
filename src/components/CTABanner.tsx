import { Send } from 'lucide-react';

const CTABanner = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/2259232/pexels-photo-2259232.jpeg?auto=compress&cs=tinysrgb&w=1920)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
          Ready for Your Next Adventure?
        </h2>
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
          Don't wait for someday. Book your dream adventure today and create memories that will last a lifetime.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-8 py-4 bg-emerald-600 text-white rounded-lg font-bold text-lg hover:bg-emerald-700 transition shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 flex items-center space-x-2">
            <span>Book Your Adventure</span>
            <Send className="h-5 w-5" />
          </button>
          <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-bold text-lg hover:bg-white/20 transition border-2 border-white">
            Contact Us
          </button>
        </div>

        <div className="mt-12 flex items-center justify-center space-x-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">100%</div>
            <div className="text-white/80">Secure Booking</div>
          </div>
          <div className="h-12 w-px bg-white/30"></div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">24/7</div>
            <div className="text-white/80">Support Available</div>
          </div>
          <div className="h-12 w-px bg-white/30"></div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">Free</div>
            <div className="text-white/80">Cancellation</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
