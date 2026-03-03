import { Mountain, Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, CreditCard } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Mountain className="h-8 w-8 text-emerald-500" />
              <span className="text-2xl font-bold">AdventureHub</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted partner for unforgettable adventures around the world. We create experiences that inspire, challenge, and transform.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="h-5 w-5 text-emerald-500" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="h-5 w-5 text-emerald-500" />
                <span>info@adventurehub.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="h-5 w-5 text-emerald-500" />
                <span>123 Adventure Street, Travel City, TC 12345</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-emerald-500 transition">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-500 transition">Our Team</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-500 transition">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-500 transition">Press</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-500 transition">Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-emerald-500 transition">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-500 transition">Safety</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-500 transition">Cancellation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-500 transition">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-500 transition">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-emerald-500 transition">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-500 transition">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-500 transition">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-500 transition">Disclaimer</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-500 transition">Sitemap</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div>
              <h4 className="text-sm font-semibold mb-3">Subscribe to Our Newsletter</h4>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 bg-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 w-64"
                />
                <button className="px-6 py-2 bg-emerald-600 rounded-lg font-semibold hover:bg-emerald-700 transition">
                  Subscribe
                </button>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-3 text-center md:text-right">Follow Us</h4>
              <div className="flex items-center space-x-4">
                <a href="#" className="text-gray-400 hover:text-emerald-500 transition">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-emerald-500 transition">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-emerald-500 transition">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-emerald-500 transition">
                  <Youtube className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 text-gray-500">
              <span className="text-sm">We accept:</span>
              <div className="flex items-center space-x-2">
                <CreditCard className="h-6 w-6" />
                <span className="text-xs">Visa, Mastercard, Amex, PayPal</span>
              </div>
            </div>

            <div className="text-gray-500 text-sm text-center md:text-right">
              © 2024 AdventureHub. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
