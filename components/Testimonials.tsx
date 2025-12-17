import React from 'react';
import { Testimonial } from '../types';
import { Star, Quote } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Isabella Rossi",
    role: "Food Critic",
    comment: "An absolute triumph. The balance of flavors in the Smoked Wagyu is unlike anything I've tasted in the city. The atmosphere is intoxicating.",
    rating: 5
  },
  {
    id: 2,
    name: "James Sterling",
    role: "Regular Guest",
    comment: "The perfect spot for our anniversary. The service was impeccable—attentive but not intrusive. Truly a five-star experience.",
    rating: 5
  },
  {
    id: 3,
    name: "Sarah Jenkins",
    role: "Event Planner",
    comment: "Elegant, moody, and sophisticated. The wine pairing suggestions were spot on. A hidden gem that won't stay hidden for long.",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section 
      id="testimonials" 
      ref={ref}
      className={`py-20 bg-brand-dark relative overflow-hidden transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
        {/* Background Decorative Quote */}
        <div className="absolute top-10 left-10 text-brand-charcoal opacity-20 pointer-events-none">
            <Quote size={200} />
        </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-brand-cream">Guest Experiences</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-brand-charcoal/50 p-8 rounded-sm border border-brand-gray/10 hover:border-brand-gold/30 transition-all duration-300">
              <div className="flex text-brand-gold mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-brand-gray italic mb-6 leading-relaxed">"{t.comment}"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-brand-gray/20 flex items-center justify-center text-brand-cream font-serif font-bold">
                    {t.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h4 className="text-brand-cream font-bold text-sm uppercase tracking-wide">{t.name}</h4>
                  <p className="text-brand-gold text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;