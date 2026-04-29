import { Star, ShoppingBag } from 'lucide-react';

const bestSellers = [
  {
    id: 1,
    name: 'Gulab Jamun',
    description: 'Soft, spongy milk solids soaked in fragrant sugar syrup',
    price: 'Rs. 800/kg',
    image: '/images/gulab-jamun.jpg',
    rating: 4.9,
    tag: 'Best Seller',
  },
  {
    id: 2,
    name: 'Barfi Mix',
    description: 'Assorted milk barfi with pistachios and almonds',
    price: 'Rs. 1200/kg',
    image: '/images/barfi.jpg',
    rating: 4.8,
    tag: 'Popular',
  },
  {
    id: 3,
    name: 'Zinger Burger',
    description: 'Crispy chicken fillet with special sauce',
    price: 'Rs. 450',
    image: '/images/zinger.jpg',
    rating: 4.7,
    tag: 'Hot',
  },
  {
    id: 4,
    name: 'Chicken Roll',
    description: 'Spiced chicken wrapped in fresh paratha',
    price: 'Rs. 350',
    image: '/images/chicken-roll.jpg',
    rating: 4.8,
    tag: 'Best Seller',
  },
];

const BestSellers = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold-dark font-medium text-sm uppercase tracking-wider">
            Customer Favorites
          </span>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-deep-red mt-2">
            Best Selling Items
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Our most loved items that keep our customers coming back for more
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((item, index) => (
            <div
              key={item.id}
              className="group bg-cream rounded-2xl overflow-hidden shadow-md hover-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-${
                      index === 0 ? '1563729784474-d77dbb933a9e' :
                      index === 1 ? '1601050690597-df05624f40c4' :
                      index === 2 ? '1568901346375-23c9450c58cd' :
                      '1626700051175-6818013e1d4f'
                    }?w=400&q=80`;
                  }}
                />
                {/* Tag */}
                <div className="absolute top-3 left-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    item.tag === 'Best Seller' 
                      ? 'bg-gold text-deep-red' 
                      : item.tag === 'Hot'
                      ? 'bg-red-500 text-white'
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

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="/sweets"
            className="inline-flex items-center space-x-2 border-2 border-deep-red text-deep-red px-8 py-3 rounded-full font-semibold hover:bg-deep-red hover:text-white transition-all duration-300"
          >
            <span>View Full Menu</span>
            <ShoppingBag className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
