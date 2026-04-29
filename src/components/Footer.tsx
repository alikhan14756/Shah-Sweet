import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Sweets', path: '/sweets' },
    { name: 'Fast Food', path: '/fast-food' },
    { name: 'Drinks & Desserts', path: '/drinks' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-deep-red text-white border-t-4 border-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/images/logo.jpg"
                alt="Shah Sweets"
                className="h-16 w-16 rounded-full object-cover border-2 border-gold"
              />
              <div>
                <h3 className="font-playfair text-xl font-bold text-gold">
                  Shah Sweets
                </h3>
                <p className="text-xs text-white/80">Since 1989</p>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Serving authentic traditional sweets and fast food since 1989. 
              A legacy of taste and quality in Shabqadar.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-lg font-semibold text-gold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-white/80 hover:text-gold transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-playfair text-lg font-semibold text-gold mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-white/80 text-sm">
                  Main Bazaar, Shabqadar,<br />Charsadda, KPK, Pakistan
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-white/80 text-sm">+92 300 1234567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-white/80 text-sm">
                  Daily: 8:00 AM - 11:00 PM
                </span>
              </li>
            </ul>
          </div>

          {/* Social & Order */}
          <div>
            <h4 className="font-playfair text-lg font-semibold text-gold mb-4">
              Follow Us
            </h4>
            <div className="flex space-x-4 mb-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-deep-red transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-deep-red transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <a
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gold text-deep-red px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-gold-light transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Order on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Shah Sweets. All rights reserved. 
            Crafted with love since 1989.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
