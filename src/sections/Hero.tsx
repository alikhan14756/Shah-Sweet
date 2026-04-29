import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, ChevronRight, Star } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Delicious sweets and fast food"
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=1920&q=80';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-red/80 via-deep-red/60 to-deep-red/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div
          className={`transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Star className="w-4 h-4 text-gold" />
            <span className="text-gold text-sm font-medium">Premium Quality Since 1989</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            Shah <span className="text-gold">Sweets</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-white/90 mb-4 font-light">
            Authentic Taste of Tradition
          </p>
          <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
            Serving the finest traditional sweets, fast food, and desserts 
            in Shabqadar for over 35 years
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-gold text-deep-red px-8 py-4 rounded-full font-semibold text-lg hover:bg-gold-light hover:shadow-xl hover:scale-105 transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <Phone className="w-5 h-5" />
              <span>Order on WhatsApp</span>
            </a>
            <Link
              to="/sweets"
              className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 hover:border-white/50 transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <span>View Menu</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="font-playfair text-3xl sm:text-4xl font-bold text-gold">35+</div>
              <div className="text-white/70 text-sm mt-1">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="font-playfair text-3xl sm:text-4xl font-bold text-gold">50+</div>
              <div className="text-white/70 text-sm mt-1">Menu Items</div>
            </div>
            <div className="text-center">
              <div className="font-playfair text-3xl sm:text-4xl font-bold text-gold">10K+</div>
              <div className="text-white/70 text-sm mt-1">Happy Customers</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-gold rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
