import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-black text-brand-gray py-16 border-t border-brand-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Brand & Address */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl text-brand-cream">Lumière & Cinder</h3>
            <p className="text-sm leading-relaxed">
              An intimate dining experience bringing modern French cuisine to the heart of the city.
            </p>
            <div className="flex items-start gap-3 mt-4">
              <MapPin className="w-5 h-5 text-brand-gold mt-1" />
              <p className="text-sm">123 Culinary Avenue,<br />Metropolis District, NY 10012</p>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-brand-cream uppercase tracking-widest text-sm font-bold mb-4">Contact</h4>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-brand-gold" />
              <span className="text-sm">+1 (212) 555-0199</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-brand-gold" />
              <span className="text-sm">reservations@lumierecinder.com</span>
            </div>
            
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-brand-gray hover:text-brand-gold transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-brand-gray hover:text-brand-gold transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-brand-gray hover:text-brand-gold transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="text-brand-cream uppercase tracking-widest text-sm font-bold mb-4">Opening Hours</h4>
            <div className="flex justify-between text-sm border-b border-brand-gray/10 pb-2">
              <span>Mon - Thu</span>
              <span>17:00 - 22:00</span>
            </div>
            <div className="flex justify-between text-sm border-b border-brand-gray/10 pb-2">
              <span>Fri - Sat</span>
              <span>17:00 - 23:00</span>
            </div>
            <div className="flex justify-between text-sm pb-2">
              <span>Sunday</span>
              <span>Closed</span>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-charcoal mt-12 pt-8 text-center text-xs text-brand-gray/50 uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Lumière & Cinder. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;