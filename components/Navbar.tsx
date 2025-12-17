import React, { useState, useEffect } from 'react';
import { Menu, X, UtensilsCrossed } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Contact', href: '#footer' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-brand-dark/95 backdrop-blur-sm shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <UtensilsCrossed className="h-8 w-8 text-brand-gold mr-2" />
            <span className="font-serif text-2xl font-bold tracking-wider text-brand-cream">
              Lumière <span className="text-brand-gold">&</span> Cinder
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm uppercase tracking-widest text-brand-gray hover:text-brand-gold transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#reservation"
              className="bg-brand-gold text-brand-dark px-6 py-2 rounded-sm font-bold uppercase text-xs tracking-widest hover:bg-brand-goldHover transition-colors duration-200"
            >
              Book a Table
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-cream hover:text-brand-gold focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-brand-charcoal transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-brand-gray hover:text-brand-gold uppercase tracking-widest text-sm py-2"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#reservation"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center bg-brand-gold text-brand-dark px-6 py-3 rounded-sm font-bold uppercase text-xs tracking-widest mt-4"
          >
            Book a Table
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;