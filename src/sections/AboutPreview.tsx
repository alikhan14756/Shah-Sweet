import { Link } from 'react-router-dom';
import { Award, Users, Clock, ArrowRight } from 'lucide-react';

const AboutPreview = () => {
  const features = [
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Only the finest ingredients used',
    },
    {
      icon: Users,
      title: '35+ Years Experience',
      description: 'Trusted by generations',
    },
    {
      icon: Clock,
      title: 'Fresh Daily',
      description: 'Made fresh every single day',
    },
  ];

  return (
    <section className="py-20 bg-deep-red text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 border-2 border-gold/30 rounded-3xl" />
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src="/images/shop-interior.jpg"
                alt="Shah Sweets Shop"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80';
                }}
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-gold text-deep-red p-6 rounded-2xl shadow-xl">
              <div className="text-center">
                <div className="font-playfair text-4xl font-bold">35+</div>
                <div className="text-sm font-medium">Years of Excellence</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-gold font-medium text-sm uppercase tracking-wider">
              Our Story
            </span>
            <h2 className="font-playfair text-4xl sm:text-5xl font-bold mt-2 mb-6">
              A Legacy of <span className="text-gold">Taste</span> Since 1989
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              Founded by Haji Sayed Gullab Shah, Shah Sweets has been serving the 
              people of Shabqadar with authentic traditional sweets and delicious 
              fast food for over three decades. What started as a small shop has 
              grown into a beloved local institution.
            </p>
            <p className="text-white/70 leading-relaxed mb-8">
              Our commitment to quality, hygiene, and authentic taste has earned us 
              the trust of thousands of customers. Every item is prepared with love 
              and care, using recipes passed down through generations.
            </p>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {features.map((feature) => (
                <div key={feature.title} className="text-center">
                  <div className="w-12 h-12 mx-auto bg-gold/20 rounded-xl flex items-center justify-center mb-3">
                    <feature.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h4 className="font-semibold text-sm">{feature.title}</h4>
                  <p className="text-white/60 text-xs mt-1">{feature.description}</p>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center space-x-2 bg-gold text-deep-red px-6 py-3 rounded-full font-semibold hover:bg-gold-light transition-colors"
            >
              <span>Read Our Full Story</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
