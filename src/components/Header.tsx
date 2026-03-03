import { useState, useEffect } from 'react';
import { Menu, X, Search, User, Mountain } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDestinations, setShowDestinations] = useState(false);
  const [showActivities, setShowActivities] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2 cursor-pointer">
            <Mountain className="h-8 w-8 text-emerald-600" />
            <span className="text-2xl font-bold text-gray-900">AdventureHub</span>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-gray-900 font-medium hover:text-emerald-600 transition">
              Home
            </a>

            <div
              className="relative"
              onMouseEnter={() => setShowDestinations(true)}
              onMouseLeave={() => setShowDestinations(false)}
            >
              <button className="text-gray-700 font-medium hover:text-emerald-600 transition">
                Destinations
              </button>
              {showDestinations && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600">
                    Swiss Alps
                  </a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600">
                    Iceland
                  </a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600">
                    New Zealand
                  </a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600">
                    Norway
                  </a>
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => setShowActivities(true)}
              onMouseLeave={() => setShowActivities(false)}
            >
              <button className="text-gray-700 font-medium hover:text-emerald-600 transition">
                Activities
              </button>
              {showActivities && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600">
                    Hiking & Trekking
                  </a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600">
                    Desert Safari
                  </a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600">
                    Wildlife Safari
                  </a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600">
                    Water Sports
                  </a>
                </div>
              )}
            </div>

            <a href="#" className="text-gray-700 font-medium hover:text-emerald-600 transition">
              Packages
            </a>
            <a href="#" className="text-gray-700 font-medium hover:text-emerald-600 transition">
              Blog
            </a>
            <a href="#" className="text-gray-700 font-medium hover:text-emerald-600 transition">
              Contact
            </a>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-emerald-600 transition">
              <Search className="h-5 w-5" />
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 text-emerald-600 border border-emerald-600 rounded-lg hover:bg-emerald-50 transition">
              <User className="h-4 w-4" />
              <span className="font-medium">Login</span>
            </button>
          </div>

          <button
            className="lg:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <nav className="px-4 py-4 space-y-3">
            <a href="#" className="block text-gray-900 font-medium py-2">
              Home
            </a>
            <a href="#" className="block text-gray-700 py-2">
              Destinations
            </a>
            <a href="#" className="block text-gray-700 py-2">
              Activities
            </a>
            <a href="#" className="block text-gray-700 py-2">
              Packages
            </a>
            <a href="#" className="block text-gray-700 py-2">
              Blog
            </a>
            <a href="#" className="block text-gray-700 py-2">
              Contact
            </a>
            <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 transition">
              <User className="h-4 w-4" />
              <span className="font-medium">Login / Sign Up</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
