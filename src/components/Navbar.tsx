import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Sweets', path: '/sweets' },
    { name: 'Fast Food', path: '/fast-food' },
    { name: 'Drinks & Desserts', path: '/drinks' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/images/logo.jpg"
              alt="Shah Sweets"
              className="h-14 w-14 rounded-full object-cover border-2 border-gold"
            />
            <div className="hidden sm:block">
              <h1 className="font-playfair text-xl font-bold text-deep-red">
                Shah Sweets
              </h1>
              <p className="text-xs text-gold-dark font-medium">Since 1989</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? 'text-deep-red bg-gold/10'
                    : 'text-gray-700 hover:text-deep-red hover:bg-gold/5'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Order Now Button */}
          <div className="hidden lg:flex items-center">
            <a
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-gradient-to-r from-gold to-gold-light text-deep-red px-6 py-3 rounded-full font-semibold text-sm hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              <span>Order Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-deep-red hover:bg-gold/10 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive(link.path)
                  ? 'text-deep-red bg-gold/10'
                  : 'text-gray-700 hover:text-deep-red hover:bg-gold/5'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://wa.me/923001234567"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 bg-gradient-to-r from-gold to-gold-light text-deep-red px-6 py-3 rounded-full font-semibold text-sm mt-4"
          >
            <Phone className="w-4 h-4" />
            <span>Order on WhatsApp</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
