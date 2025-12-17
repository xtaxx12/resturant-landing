import React from 'react';
import { ChefHat, Flame, Wine } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const About: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section 
      id="about" 
      ref={ref}
      className={`py-20 md:py-32 bg-brand-dark relative transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Grid */}
          <div className="relative grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Chef plating food"
              className="rounded-sm object-cover h-64 w-full transform translate-y-8"
            />
            <img
              src="https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Restaurant interior"
              className="rounded-sm object-cover h-64 w-full"
            />
            {/* Decorative Element */}
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[110%] h-[80%] border border-brand-gold/20 rounded-sm"></div>
          </div>

          {/* Text Content */}
          <div>
            <div className="flex items-center gap-2 text-brand-gold mb-4">
              <div className="h-[1px] w-10 bg-brand-gold"></div>
              <span className="uppercase tracking-widest text-sm font-bold">Our Story</span>
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl text-brand-cream mb-6 leading-tight">
              Where Fire Meets <span className="text-brand-gold italic">Finesse</span>
            </h2>
            
            <p className="text-brand-gray mb-6 leading-relaxed">
              Founded in 2024, Lumière & Cinder was born from a desire to strip fine dining back to its elemental roots. Chef Julian Vance combines the primitive intensity of open-fire cooking with the delicate precision of modern French gastronomy.
            </p>
            
            <p className="text-brand-gray mb-10 leading-relaxed">
              We believe in sourcing hyper-local ingredients and transforming them through heat, smoke, and time. Every dish tells a story of the land, served in a space designed for intimacy and conversation.
            </p>

            <div className="grid grid-cols-3 gap-6 border-t border-brand-charcoal pt-8">
              <div className="text-center">
                <Flame className="w-8 h-8 text-brand-gold mx-auto mb-2" />
                <p className="text-xs uppercase tracking-widest text-brand-gray">Wood Fired</p>
              </div>
              <div className="text-center">
                <ChefHat className="w-8 h-8 text-brand-gold mx-auto mb-2" />
                <p className="text-xs uppercase tracking-widest text-brand-gray">Master Chef</p>
              </div>
              <div className="text-center">
                <Wine className="w-8 h-8 text-brand-gold mx-auto mb-2" />
                <p className="text-xs uppercase tracking-widest text-brand-gray">Fine Wines</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;