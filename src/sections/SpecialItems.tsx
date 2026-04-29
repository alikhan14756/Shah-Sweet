import { Sparkles, ArrowRight } from 'lucide-react';

const specialItems = [
  {
    id: 1,
    name: 'Shahi Falooda Mix',
    description: 'Our signature falooda with layers of kheer, ice cream, rose syrup, and basil seeds. A royal treat that combines the best of traditional desserts in one glass.',
    price: 'Rs. 350',
    image: '/images/falooda.jpg',
    badge: 'Signature',
  },
  {
    id: 2,
    name: 'Special Kheer',
    description: 'Creamy rice pudding slow-cooked with cardamom, saffron, and topped with nuts. Made with our secret family recipe passed down through generations.',
    price: 'Rs. 250',
    image: '/images/kheer.jpg',
    badge: 'Family Recipe',
  },
  {
    id: 3,
    name: 'Shah Sweets Platter',
    description: 'An exquisite assortment of our finest sweets including gulab jamun, rasgulla, barfi, and jalebi. Perfect for special occasions and celebrations.',
    price: 'Rs. 1500',
    image: '/images/platter.jpg',
    badge: 'Premium',
  },
];

const SpecialItems = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-cream to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gold/10 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-gold-dark font-medium text-sm">Exclusive to Shah Sweets</span>
          </div>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-deep-red mt-2">
            Special Items
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Unique creations that make Shah Sweets stand out from the rest
          </p>
        </div>

        {/* Special Items */}
        <div className="space-y-12">
          {specialItems.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center gap-8 lg:gap-12`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-gold/20 to-gold-light/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-${
                          index === 0 ? '1544145945-f90425340c7e' :
                          index === 1 ? '1601050690597-df05624f40c4' :
                          '1563729784474-d77dbb933a9e'
                        }?w=800&q=80`;
                      }}
                    />
                    {/* Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-2 bg-gold text-deep-red rounded-full text-sm font-bold shadow-lg">
                        {item.badge}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <h3 className="font-playfair text-3xl sm:text-4xl font-bold text-deep-red mb-4">
                  {item.name}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {item.description}
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                  <span className="text-3xl font-bold text-gold-dark">{item.price}</span>
                  <a
                    href="https://wa.me/923001234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-deep-red text-white px-6 py-3 rounded-full font-semibold hover:bg-deep-red-light transition-colors"
                  >
                    <span>Order Now</span>
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialItems;
