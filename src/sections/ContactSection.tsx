import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold-dark font-medium text-sm uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-deep-red mt-2">
            Visit Us Today
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Come experience the taste of tradition at Shah Sweets
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            {/* Address */}
            <div className="bg-white rounded-2xl p-6 shadow-md flex items-start space-x-4">
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-7 h-7 text-gold-dark" />
              </div>
              <div>
                <h3 className="font-playfair text-xl font-bold text-deep-red mb-2">
                  Our Location
                </h3>
                <p className="text-gray-600">
                  Main Bazaar, Near Jama Masjid,<br />
                  Shabqadar, Charsadda,<br />
                  Khyber Pakhtunkhwa, Pakistan
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-2xl p-6 shadow-md flex items-start space-x-4">
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-7 h-7 text-gold-dark" />
              </div>
              <div>
                <h3 className="font-playfair text-xl font-bold text-deep-red mb-2">
                  Phone Number
                </h3>
                <p className="text-gray-600">
                  +92 300 1234567<br />
                  +92 91 1234567
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-2xl p-6 shadow-md flex items-start space-x-4">
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-7 h-7 text-gold-dark" />
              </div>
              <div>
                <h3 className="font-playfair text-xl font-bold text-deep-red mb-2">
                  Opening Hours
                </h3>
                <p className="text-gray-600">
                  Monday - Sunday<br />
                  8:00 AM - 11:00 PM<br />
                  <span className="text-gold-dark font-medium">Open 7 Days a Week</span>
                </p>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-deep-red rounded-2xl p-6 flex items-center space-x-4 hover:bg-deep-red-light transition-colors group"
            >
              <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                <MessageCircle className="w-7 h-7 text-gold" />
              </div>
              <div>
                <h3 className="font-playfair text-xl font-bold text-gold mb-1">
                  Order on WhatsApp
                </h3>
                <p className="text-white/80">
                  Fastest way to place your order!
                </p>
              </div>
            </a>
          </div>

          {/* Map */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-md h-full min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.5!2d71.5!3d34.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDEyJzAwLjAiTiA3McKwMzAnMDAuMCJF!5e0!3m2!1sen!2s!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Shah Sweets Location"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
