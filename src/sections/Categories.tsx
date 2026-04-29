import { Link } from 'react-router-dom';
import { Candy, Pizza, Coffee, ArrowRight } from 'lucide-react';

const categories = [
  {
    name: 'Traditional Sweets',
    description: 'Authentic Pakistani mithai made with pure desi ghee',
    icon: Candy,
    image: '/images/category-sweets.jpg',
    path: '/sweets',
    color: 'from-pink-500 to-rose-600',
  },
  {
    name: 'Fast Food',
    description: 'Delicious burgers, rolls, and savory snacks',
    icon: Pizza,
    image: '/images/category-fastfood.jpg',
    path: '/fast-food',
    color: 'from-orange-500 to-red-600',
  },
  {
    name: 'Drinks & Desserts',
    description: 'Refreshing beverages and creamy desserts',
    icon: Coffee,
    image: '/images/category-drinks.jpg',
    path: '/drinks',
    color: 'from-blue-500 to-cyan-600',
  },
];

const Categories = () => {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold-dark font-medium text-sm uppercase tracking-wider">
            Explore Our Menu
          </span>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-deep-red mt-2">
            Choose Your Favorites
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            From traditional sweets to modern fast food, we have something for everyone
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link
              key={category.name}
              to={category.path}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background Image */}
              <div className="aspect-[4/5] relative">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-${
                      index === 0 ? '1563729784474-d77dbb933a9e' :
                      index === 1 ? '1568901346375-23c9450c58cd' :
                      '1544145945-f90425340c7e'
                    }?w=600&q=80`;
                  }}
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-60`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <category.icon className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="font-playfair text-2xl font-bold mb-2">
                  {category.name}
                </h3>
                <p className="text-white/80 text-sm mb-4">
                  {category.description}
                </p>
                <div className="flex items-center text-gold font-medium text-sm group-hover:translate-x-2 transition-transform">
                  <span>View Items</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
