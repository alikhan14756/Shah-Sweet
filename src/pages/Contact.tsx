import { MapPin, Phone, Clock, MessageCircle, Mail, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen pt-20 bg-cream">
      {/* Hero */}
      <section className="relative py-16 bg-deep-red text-white">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/images/contact-hero.jpg"
            alt=""
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1200&q=80';
            }}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="font-playfair text-5xl sm:text-6xl font-bold mb-4">
            Contact <span className="text-gold">Us</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            We'd love to hear from you. Reach out for orders, inquiries, or just to say hello!
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Address */}
            <div className="bg-white rounded-2xl p-6 shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                <MapPin className="w-8 h-8 text-gold-dark" />
              </div>
              <h3 className="font-playfair text-xl font-bold text-deep-red mb-2">
                Visit Us
              </h3>
              <p className="text-gray-600 text-sm">
                Main Bazaar, Near Jama Masjid,<br />
                Shabqadar, Charsadda,<br />
                KPK, Pakistan
              </p>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-2xl p-6 shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                <Phone className="w-8 h-8 text-gold-dark" />
              </div>
              <h3 className="font-playfair text-xl font-bold text-deep-red mb-2">
                Call Us
              </h3>
              <p className="text-gray-600 text-sm">
                +92 300 1234567<br />
                +92 91 1234567
              </p>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-2xl p-6 shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-gold-dark" />
              </div>
              <h3 className="font-playfair text-xl font-bold text-deep-red mb-2">
                Opening Hours
              </h3>
              <p className="text-gray-600 text-sm">
                Daily: 8:00 AM - 11:00 PM<br />
                <span className="text-gold-dark font-medium">Open 7 Days</span>
              </p>
            </div>

            {/* WhatsApp */}
            <div className="bg-white rounded-2xl p-6 shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <MessageCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-playfair text-xl font-bold text-deep-red mb-2">
                WhatsApp
              </h3>
              <p className="text-gray-600 text-sm">
                +92 300 1234567<br />
                <span className="text-green-600 font-medium">Fastest Response</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map & Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Map */}
            <div className="bg-cream rounded-2xl overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.5!2d71.5!3d34.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDEyJzAwLjAiTiA3McKwMzAnMDAuMCJF!5e0!3m2!1sen!2s!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '500px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shah Sweets Location"
                className="w-full h-full"
              />
            </div>

            {/* Contact Form */}
            <div className="bg-cream rounded-2xl p-8 shadow-md">
              <h2 className="font-playfair text-3xl font-bold text-deep-red mb-2">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-6">
                Have a question or special request? Fill out the form below.
              </p>

              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+92 300 1234567"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all">
                    <option>General Inquiry</option>
                    <option>Place an Order</option>
                    <option>Feedback</option>
                    <option>Business Partnership</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 bg-deep-red text-white px-6 py-4 rounded-xl font-semibold hover:bg-deep-red-light transition-colors"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                <p className="text-gray-600 text-sm mb-4">
                  For faster response, order directly on WhatsApp
                </p>
                <a
                  href="https://wa.me/923001234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Order on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Order CTA */}
      <section className="py-16 bg-deep-red text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-4xl font-bold mb-4">
            Ready to Order?
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            The fastest way to get your favorite sweets and fast food is through WhatsApp. 
            Send us a message and we'll have your order ready!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-gold text-deep-red px-8 py-4 rounded-full font-semibold hover:bg-gold-light transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Order on WhatsApp</span>
            </a>
            <a
              href="tel:+923001234567"
              className="flex items-center space-x-2 bg-white/10 text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>Call Us Now</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
