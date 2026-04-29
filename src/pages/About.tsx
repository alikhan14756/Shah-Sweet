import { Award, Heart, Shield, Star, CheckCircle } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Made with Love',
      description: 'Every item is prepared with care and dedication, just like home cooking.',
    },
    {
      icon: Shield,
      title: 'Quality Assured',
      description: 'We use only the finest ingredients and maintain strict hygiene standards.',
    },
    {
      icon: Award,
      title: '35+ Years Legacy',
      description: 'Three generations of expertise in crafting the perfect sweets.',
    },
  ];

  const milestones = [
    { year: '1989', event: 'Shah Sweets founded by Haji Sayed Gullab Shah' },
    { year: '1995', event: 'Expanded to include fast food section' },
    { year: '2005', event: 'Introduced special falooda mix - became instant hit' },
    { year: '2015', event: 'Shop renovation and modernization' },
    { year: '2024', event: 'Continuing the legacy of taste and quality' },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-deep-red text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/images/pattern.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-gold font-medium text-sm uppercase tracking-wider">
            Our Story
          </span>
          <h1 className="font-playfair text-5xl sm:text-6xl font-bold mt-4 mb-6">
            The Shah Sweets <span className="text-gold">Legacy</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            A journey of passion, tradition, and unwavering commitment to quality
            that spans over three decades.
          </p>
        </div>
      </section>

      {/* Full Story Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="absolute -inset-4 border-2 border-gold/30 rounded-3xl transform rotate-3" />
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/images/shop-old.jpg"
                  alt="Shah Sweets Through the Years"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80';
                  }}
                />
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="font-playfair text-4xl font-bold text-deep-red mb-6">
                From a Small Shop to a Local Legend
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  In 1989, Haji Sayed Gullab Shah started Shah Sweets with a simple dream - 
                  to bring the authentic taste of traditional Pakistani mithai to the people 
                  of Shabqadar. With just a small shop and a handful of family recipes, 
                  he began his journey.
                </p>
                <p>
                  What set Shah Sweets apart from the beginning was the unwavering commitment 
                  to quality. Every sweet was made with pure desi ghee, the finest dry fruits, 
                  and no compromises. Word spread quickly, and soon people from neighboring 
                  villages started coming to taste the famous Shah Sweets.
                </p>
                <p>
                  As the years passed, the menu expanded to include fast food items, but the 
                  core philosophy remained the same - quality above all. Today, Shah Sweets 
                  stands as a testament to that vision, serving thousands of happy customers 
                  and becoming an integral part of celebrations in countless families.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-deep-red">
              Our Journey
            </h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gold/30 hidden md:block" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                    <div className="bg-cream rounded-xl p-6 shadow-md inline-block">
                      <span className="text-gold-dark font-bold text-xl">{milestone.year}</span>
                      <p className="text-gray-700 mt-2">{milestone.event}</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gold border-4 border-white shadow-lg z-10 my-4 md:my-0" />
                  <div className="w-full md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-deep-red text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold font-medium text-sm uppercase tracking-wider">
              What We Stand For
            </span>
            <h2 className="font-playfair text-4xl font-bold mt-2">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center p-8 bg-white/5 rounded-2xl backdrop-blur-sm">
                <div className="w-16 h-16 mx-auto bg-gold/20 rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-playfair text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-white/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Promise */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-gold-dark font-medium text-sm uppercase tracking-wider">
                Our Promise
              </span>
              <h2 className="font-playfair text-4xl font-bold text-deep-red mt-2 mb-6">
                Quality You Can Trust
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                At Shah Sweets, quality is not just a word - it's our way of life. 
                We believe that our customers deserve nothing but the best, and we 
                go to great lengths to ensure that every item that leaves our kitchen 
                meets the highest standards.
              </p>

              <ul className="space-y-4">
                {[
                  '100% pure desi ghee in all sweets',
                  'Fresh ingredients sourced daily',
                  'Strict hygiene protocols followed',
                  'No artificial preservatives',
                  'Traditional recipes, authentic taste',
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-gold-dark flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-square rounded-2xl overflow-hidden">
                    <img
                      src="/images/quality-1.jpg"
                      alt="Quality Ingredients"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1601050690597-df05624f40c4?w=400&q=80';
                      }}
                    />
                  </div>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                    <img
                      src="/images/quality-2.jpg"
                      alt="Fresh Preparation"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=400&q=80';
                      }}
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                    <img
                      src="/images/quality-3.jpg"
                      alt="Traditional Methods"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=400&q=80';
                      }}
                    />
                  </div>
                  <div className="aspect-square rounded-2xl overflow-hidden">
                    <img
                      src="/images/quality-4.jpg"
                      alt="Final Product"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&q=80';
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Owner Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-deep-red to-deep-red-light rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Owner Image */}
              <div className="relative">
                <img
                  src="/images/owner.jpg"
                  alt="Haji Sayed Gullab Shah"
                  className="w-full h-full object-cover min-h-[400px]"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/logo.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-red/50 to-transparent lg:hidden" />
              </div>

              {/* Owner Message */}
              <div className="p-8 lg:p-12 text-white flex flex-col justify-center">
                <div className="flex items-center space-x-2 mb-4">
                  <Star className="w-5 h-5 text-gold fill-gold" />
                  <Star className="w-5 h-5 text-gold fill-gold" />
                  <Star className="w-5 h-5 text-gold fill-gold" />
                </div>
                <h2 className="font-playfair text-3xl lg:text-4xl font-bold mb-2">
                  A Message from the Founder
                </h2>
                <p className="text-gold font-medium mb-6">
                  Haji Sayed Gullab Shah
                </p>
                <blockquote className="text-lg lg:text-xl leading-relaxed text-white/90 italic mb-6">
                  "When I started Shah Sweets in 1989, my only goal was to serve 
                  the people of Shabqadar with the authentic taste of tradition. 
                  Today, as I look back at our journey, I am filled with gratitude 
                  for the love and trust our customers have shown us.
                </blockquote>
                <blockquote className="text-lg lg:text-xl leading-relaxed text-white/90 italic mb-8">
                  Every sweet that leaves our shop carries with it our family's 
                  legacy and our promise of quality. This is not just a business 
                  for us - it's our passion, our pride, and our way of serving 
                  the community we love."
                </blockquote>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-0.5 bg-gold" />
                  <span className="text-gold font-medium">Founder, Shah Sweets</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
