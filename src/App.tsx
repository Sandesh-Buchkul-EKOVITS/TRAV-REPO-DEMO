import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FeaturedAdventures from './components/FeaturedAdventures';
import ActivitySection from './components/ActivitySection';
import PopularDestinations from './components/PopularDestinations';
import SpecialDeals from './components/SpecialDeals';
import Testimonials from './components/Testimonials';
import WhyChooseUs from './components/WhyChooseUs';
import Blog from './components/Blog';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';
import { hikingAdventures, safariAdventures, desertAdventures, waterAdventures } from './data/mockData';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Categories />
      <FeaturedAdventures />
      <ActivitySection title="Hiking Adventures" adventures={hikingAdventures} bgColor="bg-white" />
      <ActivitySection title="Safari Adventures" adventures={safariAdventures} bgColor="bg-gray-50" />
      <ActivitySection title="Desert Adventures" adventures={desertAdventures} bgColor="bg-white" />
      <ActivitySection title="Water Adventures" adventures={waterAdventures} bgColor="bg-gray-50" />
      <PopularDestinations />
      <SpecialDeals />
      <Testimonials />
      <WhyChooseUs />
      <Blog />
      <CTABanner />
      <Footer />
    </div>
  );
}

export default App;
