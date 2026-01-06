import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/image.png"
          alt="Elegant dining atmosphere"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/70 via-brand-dark/50 to-brand-dark"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-brand-gold uppercase tracking-[0.2em] text-sm md:text-base mb-4 animate-fade-in-up">
          Experience the Art of Taste
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-brand-cream mb-6 leading-tight">
          Modern Flavors, <br />
          <span className="italic font-light text-brand-gray">Timeless Elegance</span>
        </h1>
        <p className="text-brand-gray text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto">
          A culinary journey where rustic charcoal meets refined French technique. 
          Immerse yourself in an atmosphere of golden warmth and dark mystique.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#reservation"
            className="px-8 py-4 bg-brand-gold text-brand-dark font-bold uppercase tracking-widest text-sm hover:bg-brand-goldHover transition-all duration-300 transform hover:-translate-y-1"
          >
            Reserve Your Table
          </a>
          <a
            href="#menu"
            className="px-8 py-4 border border-brand-cream text-brand-cream font-bold uppercase tracking-widest text-sm hover:bg-brand-cream hover:text-brand-dark transition-all duration-300"
          >
            View Menu
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-brand-gray/50">
        <ArrowDown size={32} />
      </div>
    </section>
  );
};

export default Hero;