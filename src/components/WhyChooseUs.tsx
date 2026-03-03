import { Award, Headphones, DollarSign, Shield } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Award,
      title: 'Certified Guides',
      description: 'Expert local guides with years of experience and professional certifications'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock customer service for your peace of mind during your journey'
    },
    {
      icon: DollarSign,
      title: 'Best Price Guarantee',
      description: 'Competitive prices with no hidden fees and transparent pricing'
    },
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: 'Your safety is our top priority on every adventure with comprehensive insurance'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose AdventureHub
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're committed to providing exceptional experiences that exceed your expectations
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center p-8 rounded-xl bg-gray-50 hover:bg-emerald-50 transition-all duration-300 group cursor-pointer"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-6 group-hover:bg-emerald-600 transition-colors">
                  <Icon className="h-8 w-8 text-emerald-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Join 50,000+ Happy Adventurers
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Start your journey with the most trusted adventure travel company
          </p>
          <button className="px-8 py-4 bg-white text-emerald-600 rounded-lg font-bold text-lg hover:bg-gray-100 transition shadow-xl">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
