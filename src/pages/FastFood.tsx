import { useState } from 'react';
import { Star, ShoppingBag, Search, Flame } from 'lucide-react';

const fastFoodItems = [
  {
    id: 1,
    name: 'Zinger Burger',
    description: 'Crispy chicken fillet with special sauce and fresh veggies',
    price: 'Rs. 450',
    image: '/images/zinger.jpg',
    rating: 4.8,
    tag: 'Best Seller',
    category: 'Burgers',
    spicy: true,
  },
  {
    id: 2,
    name: 'Chicken Roll',
    description: 'Spiced chicken wrapped in fresh paratha with chutney',
    price: 'Rs. 350',
    image: '/images/chicken-roll.jpg',
    rating: 4.7,
    tag: 'Popular',
    category: 'Rolls',
    spicy: true,
  },
  {
    id: 3,
    name: 'Beef Burger',
    description: 'Juicy beef patty with cheese and caramelized onions',
    price: 'Rs. 500',
    image: '/images/beef-burger.jpg',
    rating: 4.6,
    tag: 'Premium',
    category: 'Burgers',
    spicy: false,
  },
  {
    id: 4,
    name: 'Chicken Shawarma',
    description: 'Middle Eastern style wrap with garlic sauce',
    price: 'Rs. 300',
    image: '/images/shawarma.jpg',
    rating: 4.5,
    tag: 'Hot',
    category: 'Rolls',
    spicy: true,
  },
  {
    id: 5,
    name: 'Club Sandwich',
    description: 'Triple decker with chicken, egg, and fresh vegetables',
    price: 'Rs. 400',
    image: '/images/club-sandwich.jpg',
    rating: 4.4,
    tag: 'Classic',
    category: 'Sandwiches',
    spicy: false,
  },
  {
    id: 6,
    name: 'French Fries',
    description: 'Crispy golden fries with special seasoning',
    price: 'Rs. 200',
    image: '/images/fries.jpg',
    rating: 4.6,
    tag: 'Side',
    category: 'Sides',
    spicy: false,
  },
  {
    id: 7,
    name: 'Chicken Nuggets',
    description: '8 pieces of crispy chicken nuggets with dips',
    price: 'Rs. 350',
    image: '/images/nuggets.jpg',
    rating: 4.5,
    tag: 'Kids Favorite',
    category: 'Sides',
    spicy: false,
  },
  {
    id: 8,
    name: 'Seekh Kebab Roll',
    description: 'Grilled seekh kebabs in soft naan with raita',
    price: 'Rs. 380',
    image: '/images/kebab-roll.jpg',
    rating: 4.7,
    tag: 'Special',
    category: 'Rolls',
    spicy: true,
  },
];

const categories = ['All', 'Burgers', 'Rolls', 'Sandwiches', 'Sides'];

const FastFood = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = fastFoodItems.filter((item) => {
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
            src="/images/fastfood-hero.jpg"
            alt=""
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1200&q=80';
            }}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="font-playfair text-5xl sm:text-6xl font-bold mb-4">
            Fast <span className="text-gold">Food</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Delicious burgers, rolls, and snacks made fresh to order
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
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80';
                    }}
                  />
                  {/* Tags */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      item.tag === 'Best Seller' 
                        ? 'bg-gold text-deep-red' 
                        : item.tag === 'Hot'
                        ? 'bg-red-500 text-white'
                        : 'bg-deep-red text-white'
                    }`}>
                      {item.tag}
                    </span>
                    {item.spicy && (
                      <span className="px-2 py-1 rounded-full bg-orange-500 text-white">
                        <Flame className="w-3 h-3" />
                      </span>
                    )}
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
            Craving Something Delicious?
          </h2>
          <p className="text-white/80 mb-6">
            Order now and get your food delivered fresh and hot
          </p>
          <a
            href="https://wa.me/923001234567"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gold text-deep-red px-8 py-3 rounded-full font-semibold hover:bg-gold-light transition-colors"
          >
            <ShoppingBag className="w-5 h-5" />
            <span>Order on WhatsApp</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default FastFood;
