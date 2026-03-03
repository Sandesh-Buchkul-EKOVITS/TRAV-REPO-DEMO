export interface Adventure {
  id: string;
  title: string;
  image: string;
  duration: string;
  rating: number;
  price: number;
  originalPrice?: number;
  category: string;
  location: string;
  badge?: string;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  description: string;
}

export interface Destination {
  id: string;
  name: string;
  image: string;
  startingPrice: number;
}

export interface Testimonial {
  id: string;
  name: string;
  image: string;
  rating: number;
  text: string;
  location: string;
}

export interface BlogPost {
  id: string;
  title: string;
  image: string;
  excerpt: string;
  date: string;
}

export const categories: Category[] = [
  {
    id: '1',
    name: 'Hiking & Trekking',
    image: 'https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Explore breathtaking mountain trails and scenic hiking routes'
  },
  {
    id: '2',
    name: 'Desert Safari',
    image: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Experience the thrill of desert landscapes and dune adventures'
  },
  {
    id: '3',
    name: 'Wildlife Safari',
    image: 'https://images.pexels.com/photos/34098/south-africa-hluhluwe-giraffes-pattern.jpg?auto=compress&cs=tinysrgb&w=800',
    description: 'Encounter majestic wildlife in their natural habitats'
  },
  {
    id: '4',
    name: 'Water Sports',
    image: 'https://images.pexels.com/photos/296854/pexels-photo-296854.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Dive into exciting water-based adventures and activities'
  },
  {
    id: '5',
    name: 'Mountain Expeditions',
    image: 'https://images.pexels.com/photos/2437299/pexels-photo-2437299.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Conquer peaks and experience high-altitude adventures'
  },
  {
    id: '6',
    name: 'Camping Trips',
    image: 'https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Connect with nature through unforgettable camping experiences'
  }
];

export const featuredAdventures: Adventure[] = [
  {
    id: '1',
    title: 'Everest Base Camp Trek',
    image: 'https://images.pexels.com/photos/2259232/pexels-photo-2259232.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '14 Days',
    rating: 4.9,
    price: 1499,
    category: 'Hiking & Trekking',
    location: 'Nepal',
    badge: 'Best Seller'
  },
  {
    id: '2',
    title: 'Sahara Desert Adventure',
    image: 'https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '5 Days',
    rating: 4.8,
    price: 899,
    originalPrice: 1099,
    category: 'Desert Safari',
    location: 'Morocco',
    badge: 'Limited Offer'
  },
  {
    id: '3',
    title: 'Amazon Rainforest Expedition',
    image: 'https://images.pexels.com/photos/975771/pexels-photo-975771.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '7 Days',
    rating: 4.7,
    price: 1299,
    category: 'Wildlife Safari',
    location: 'Brazil'
  },
  {
    id: '4',
    title: 'Great Barrier Reef Diving',
    image: 'https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '4 Days',
    rating: 4.9,
    price: 1199,
    category: 'Water Sports',
    location: 'Australia',
    badge: 'New'
  }
];

export const hikingAdventures: Adventure[] = [
  {
    id: 'h1',
    title: 'Machu Picchu Trail',
    image: 'https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '5 Days',
    rating: 4.8,
    price: 799,
    category: 'Hiking & Trekking',
    location: 'Peru'
  },
  {
    id: 'h2',
    title: 'Alps Mountain Trek',
    image: 'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '7 Days',
    rating: 4.7,
    price: 1099,
    category: 'Hiking & Trekking',
    location: 'Switzerland'
  },
  {
    id: 'h3',
    title: 'Patagonia Wilderness',
    image: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '10 Days',
    rating: 4.9,
    price: 1599,
    category: 'Hiking & Trekking',
    location: 'Argentina',
    badge: 'Best Seller'
  },
  {
    id: 'h4',
    title: 'Kilimanjaro Summit',
    image: 'https://images.pexels.com/photos/2356086/pexels-photo-2356086.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '8 Days',
    rating: 4.8,
    price: 1399,
    category: 'Hiking & Trekking',
    location: 'Tanzania'
  }
];

export const safariAdventures: Adventure[] = [
  {
    id: 's1',
    title: 'Serengeti Safari',
    image: 'https://images.pexels.com/photos/39843/lion-wildlife-africa-safari-39843.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '6 Days',
    rating: 4.9,
    price: 2199,
    category: 'Wildlife Safari',
    location: 'Tanzania',
    badge: 'Best Seller'
  },
  {
    id: 's2',
    title: 'Kruger National Park',
    image: 'https://images.pexels.com/photos/2189379/pexels-photo-2189379.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '5 Days',
    rating: 4.7,
    price: 1799,
    category: 'Wildlife Safari',
    location: 'South Africa'
  },
  {
    id: 's3',
    title: 'Masai Mara Experience',
    image: 'https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '7 Days',
    rating: 4.8,
    price: 2399,
    category: 'Wildlife Safari',
    location: 'Kenya'
  },
  {
    id: 's4',
    title: 'Okavango Delta',
    image: 'https://images.pexels.com/photos/3013435/pexels-photo-3013435.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '5 Days',
    rating: 4.9,
    price: 2599,
    category: 'Wildlife Safari',
    location: 'Botswana',
    badge: 'New'
  }
];

export const desertAdventures: Adventure[] = [
  {
    id: 'd1',
    title: 'Dubai Desert Safari',
    image: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '1 Day',
    rating: 4.6,
    price: 199,
    category: 'Desert Safari',
    location: 'UAE'
  },
  {
    id: 'd2',
    title: 'Wadi Rum Adventure',
    image: 'https://images.pexels.com/photos/1531660/pexels-photo-1531660.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '3 Days',
    rating: 4.8,
    price: 699,
    category: 'Desert Safari',
    location: 'Jordan'
  },
  {
    id: 'd3',
    title: 'Gobi Desert Expedition',
    image: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '8 Days',
    rating: 4.7,
    price: 1499,
    category: 'Desert Safari',
    location: 'Mongolia',
    badge: 'Limited Offer'
  },
  {
    id: 'd4',
    title: 'Atacama Desert Trek',
    image: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '6 Days',
    rating: 4.8,
    price: 1199,
    category: 'Desert Safari',
    location: 'Chile'
  }
];

export const waterAdventures: Adventure[] = [
  {
    id: 'w1',
    title: 'Maldives Snorkeling',
    image: 'https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '5 Days',
    rating: 4.9,
    price: 1899,
    category: 'Water Sports',
    location: 'Maldives',
    badge: 'Best Seller'
  },
  {
    id: 'w2',
    title: 'Hawaii Surfing Camp',
    image: 'https://images.pexels.com/photos/390051/surfer-wave-sunset-the-indian-ocean-390051.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '7 Days',
    rating: 4.7,
    price: 1599,
    category: 'Water Sports',
    location: 'USA'
  },
  {
    id: 'w3',
    title: 'Costa Rica Rafting',
    image: 'https://images.pexels.com/photos/287240/pexels-photo-287240.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '4 Days',
    rating: 4.8,
    price: 899,
    category: 'Water Sports',
    location: 'Costa Rica'
  },
  {
    id: 'w4',
    title: 'Bali Diving Paradise',
    image: 'https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '6 Days',
    rating: 4.9,
    price: 1299,
    category: 'Water Sports',
    location: 'Indonesia'
  }
];

export const destinations: Destination[] = [
  {
    id: '1',
    name: 'Swiss Alps',
    image: 'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=800',
    startingPrice: 999
  },
  {
    id: '2',
    name: 'Iceland',
    image: 'https://images.pexels.com/photos/2382681/pexels-photo-2382681.jpeg?auto=compress&cs=tinysrgb&w=800',
    startingPrice: 1299
  },
  {
    id: '3',
    name: 'New Zealand',
    image: 'https://images.pexels.com/photos/1004584/pexels-photo-1004584.jpeg?auto=compress&cs=tinysrgb&w=800',
    startingPrice: 1799
  },
  {
    id: '4',
    name: 'Norway Fjords',
    image: 'https://images.pexels.com/photos/2513439/pexels-photo-2513439.jpeg?auto=compress&cs=tinysrgb&w=800',
    startingPrice: 1499
  },
  {
    id: '5',
    name: 'Canadian Rockies',
    image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=800',
    startingPrice: 1199
  },
  {
    id: '6',
    name: 'Scottish Highlands',
    image: 'https://images.pexels.com/photos/1084510/pexels-photo-1084510.jpeg?auto=compress&cs=tinysrgb&w=800',
    startingPrice: 899
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: 'The Everest Base Camp trek was the adventure of a lifetime! Our guide was knowledgeable and the entire experience was perfectly organized.',
    location: 'New York, USA'
  },
  {
    id: '2',
    name: 'Michael Chen',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: 'Amazing safari experience in Tanzania! Saw all the Big Five and the accommodations were top-notch. Highly recommended!',
    location: 'Singapore'
  },
  {
    id: '3',
    name: 'Emma Wilson',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: 'The desert safari in Morocco exceeded all expectations. Beautiful landscapes, great food, and wonderful hospitality!',
    location: 'London, UK'
  },
  {
    id: '4',
    name: 'David Martinez',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
    text: 'Incredible diving experience in the Great Barrier Reef! The underwater world is breathtaking. This company made everything seamless.',
    location: 'Barcelona, Spain'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: '10 Essential Tips for Mountain Trekking',
    image: 'https://images.pexels.com/photos/618158/pexels-photo-618158.jpeg?auto=compress&cs=tinysrgb&w=800',
    excerpt: 'Discover the crucial preparation steps and techniques for a successful mountain trekking adventure.',
    date: '2024-02-15'
  },
  {
    id: '2',
    title: 'Best Safari Destinations in Africa',
    image: 'https://images.pexels.com/photos/259554/pexels-photo-259554.jpeg?auto=compress&cs=tinysrgb&w=800',
    excerpt: 'Explore the top wildlife safari destinations across Africa and what makes each one unique.',
    date: '2024-02-10'
  },
  {
    id: '3',
    title: 'Water Sports Safety Guide',
    image: 'https://images.pexels.com/photos/416676/pexels-photo-416676.jpeg?auto=compress&cs=tinysrgb&w=800',
    excerpt: 'Learn essential safety tips and best practices for enjoying water sports adventures.',
    date: '2024-02-05'
  }
];

export const whyChooseUs = [
  {
    id: '1',
    title: 'Certified Guides',
    description: 'Expert local guides with years of experience'
  },
  {
    id: '2',
    title: '24/7 Support',
    description: 'Round-the-clock customer service for your peace of mind'
  },
  {
    id: '3',
    title: 'Best Price Guarantee',
    description: 'Competitive prices with no hidden fees'
  },
  {
    id: '4',
    title: 'Safe & Secure',
    description: 'Your safety is our top priority on every adventure'
  }
];
