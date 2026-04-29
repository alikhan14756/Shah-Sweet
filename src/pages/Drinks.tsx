import { useState } from 'react';
import { Star, ShoppingBag, Search } from 'lucide-react';

const drinksItems = [
  {
    id: 1,
    name: 'Shahi Falooda Mix',
    description: 'Signature falooda with kheer, ice cream, rose syrup, and basil seeds',
    price: 'Rs. 350',
    image: '/images/falooda.jpg',
    rating: 4.9,
    tag: 'Signature',
    category: 'Falooda',
  },
  {
    id: 2,
    name: 'Special Kheer',
    description: 'Creamy rice pudding with cardamom, saffron, and nuts',
    price: 'Rs. 250',
    image: '/images/kheer.jpg',
    rating: 4.8,
    tag: 'Family Recipe',
    category: 'Desserts',
  },
  {
    id: 3,
    name: 'Mango Lassi',
    description: 'Refreshing yogurt drink with fresh mango pulp',
    price: 'Rs. 180',
    image: '/images/mango-lassi.jpg',
    rating: 4.7,
    tag: 'Popular',
    category: 'Lassi',
  },
  {
    id: 4,
    name: 'Rose Lassi',
    description: 'Sweet lassi infused with rose syrup',
    price: 'Rs. 150',
    image: '/images/rose-lassi.jpg',
    rating: 4.6,
    tag: 'Refreshing',
    category: 'Lassi',
  },
  {
    id: 5,
    name: 'Kulfi',
    description: 'Traditional Pakistani ice cream with pistachios',
    price: 'Rs. 120',
    image: '/images/kulfi.jpg',
    rating: 4.7,
    tag: 'Classic',
    category: 'Desserts',
  },
  {
    id: 6,
    name: 'Rabri Falooda',
    description: 'Rich rabri with falooda sev and nuts',
    price: 'Rs. 300',
    image: '/images/rabri-falooda.jpg',
    rating: 4.8,
    tag: 'Premium',
    category: 'Falooda',
  },
  {
    id: 7,
    name: 'Sweet Lassi',
    description: 'Traditional Punjabi sweet lassi',
    price: 'Rs. 120',
    image: '/images/sweet-lassi.jpg',
    rating: 4.5,
    tag: 'Classic',
    category: 'Lassi',
  },
  {
    id: 8,
    name: 'Gajar ka Halwa',
    description: 'Warm carrot pudding with khoya and nuts',
    price: 'Rs. 200',
    image: '/images/gajar-halwa.jpg',
    rating: 4.8,
    tag: 'Seasonal',
    category: 'Desserts',
  },
];

const categories = ['All', 'Falooda', 'Lassi', 'Desserts'];

const Drinks = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = drinksItems.filter((item) => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-20 bg-cream">
      {/* Hero */}
      <section className="relative py-16 bg-deep-red text-white">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/images/drinks-hero.jpg"
            alt=""
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=1200&q=80';
            }}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="font-playfair text-5xl sm:text-6xl font-bold mb-4">
            Drinks & <span className="text-gold">Desserts</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Refreshing beverages and creamy desserts to complete your meal
          </p>
        </div>
      </section>

      {/* Filter & Search */}
      <section className="py-8 bg-white shadow-sm sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category
                      ? 'bg-deep-red text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search items..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&q=80';
                    }}
                  />
                  {/* Tag */}
                  <div className="absolute top-3 left-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      item.tag === 'Signature' 
                        ? 'bg-gold text-deep-red' 
                        : item.tag === 'Family Recipe'
                        ? 'bg-purple-500 text-white'
                        : 'bg-deep-red text-white'
                    }`}>
                      {item.tag}
                    </span>
                  </div>
                  {/* Quick Add */}
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a
                      href="https://wa.me/923001234567"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gold text-deep-red flex items-center justify-center hover:bg-gold-light transition-colors shadow-lg"
                    >
                      <ShoppingBag className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-playfair text-lg font-bold text-deep-red">
                      {item.name}
                    </h3>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-gold fill-gold" />
                      <span className="text-sm font-medium text-gray-700">{item.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gold-dark font-bold text-lg">{item.price}</span>
                    <a
                      href="https://wa.me/923001234567"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-deep-red text-sm font-medium hover:text-gold-dark transition-colors"
                    >
                      Order Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No items found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-deep-red text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl font-bold mb-4">
            Try Our Signature Falooda Mix!
          </h2>
          <p className="text-white/80 mb-6">
            A unique blend of kheer, ice cream, and falooda - only at Shah Sweets
          </p>
          <a
            href="https://wa.me/923001234567"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gold text-deep-red px-8 py-3 rounded-full font-semibold hover:bg-gold-light transition-colors"
          >
            <ShoppingBag className="w-5 h-5" />
            <span>Order Now</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Drinks;
