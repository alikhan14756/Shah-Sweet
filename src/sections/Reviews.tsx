import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Ahmad Khan',
    role: 'Regular Customer',
    rating: 5,
    text: 'Best sweets in Shabqadar! The gulab jamun is absolutely divine. I have been coming here for 15 years and the quality has never dropped. Highly recommended!',
    avatar: 'AK',
  },
  {
    id: 2,
    name: 'Fatima Bibi',
    role: 'Local Resident',
    rating: 5,
    text: 'Shah Sweets is our go-to place for all celebrations. Their special falooda mix is unlike anything else. The owner is very humble and treats everyone like family.',
    avatar: 'FB',
  },
  {
    id: 3,
    name: 'Mohammad Ali',
    role: 'Business Owner',
    rating: 5,
    text: 'Clean, hygienic, and delicious! Their fast food section is amazing too. The zinger burger rivals any big chain. Fast service and great prices.',
    avatar: 'MA',
  },
  {
    id: 4,
    name: 'Sanaullah',
    role: 'Food Enthusiast',
    rating: 5,
    text: 'I drive from Peshawar just to get their barfi mix. The taste is authentic and reminds me of my childhood. A true gem of Shabqadar!',
    avatar: 'SN',
  },
];

const Reviews = () => {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold-dark font-medium text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-deep-red mt-2">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Real feedback from our valued customers who have been part of our journey
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-gold/30 mb-4" />

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 leading-relaxed mb-6">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-deep-red text-gold flex items-center justify-center font-bold">
                  {review.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-deep-red">{review.name}</h4>
                  <p className="text-gray-500 text-sm">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <div className="text-center mt-12">
          <a
            href="https://g.co/kgs/example"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-deep-red hover:text-gold-dark transition-colors"
          >
            <span className="font-medium">View more reviews on Google</span>
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
