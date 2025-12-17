import React from 'react';
import { MenuItem } from '../types';
import { useScrollReveal } from '../hooks/useScrollReveal';

const featuredItems: MenuItem[] = [
  {
    id: 1,
    name: "Smoked Wagyu Tartare",
    description: "Hand-cut wagyu beef, smoked egg yolk emulsion, caper berries, charcoal cracker.",
    price: "$28",
    image: "https://images.unsplash.com/photo-1544025162-d76690b6d029?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Starter"
  },
  {
    id: 2,
    name: "Pan-Seared Scallops",
    description: "Hokkaido scallops, cauliflower purée, truffle foam, crispy prosciutto.",
    price: "$34",
    image: "https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Starter"
  },
  {
    id: 3,
    name: "Duck Confit Ravioli",
    description: "House-made pasta, slow-cooked duck leg, sage butter, aged parmesan, fig reduction.",
    price: "$38",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Main"
  },
  {
    id: 4,
    name: "Gold Leaf Chocolate Dome",
    description: "Dark chocolate mousse, raspberry coulis, edible 24k gold, hazelnut praline.",
    price: "$22",
    image: "https://images.unsplash.com/photo-1579372786545-d24232daf58c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Dessert"
  }
];

const Menu: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section 
      id="menu" 
      ref={ref}
      className={`py-20 bg-brand-charcoal text-brand-cream transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-gold uppercase tracking-widest text-sm font-bold">Culinary Excellence</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-2">Featured Menu</h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {featuredItems.map((item) => (
            <div key={item.id} className="group flex flex-col sm:flex-row gap-6 bg-brand-dark/50 p-4 rounded-sm border border-transparent hover:border-brand-gold/30 hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] hover:bg-brand-dark transition-all duration-500">
              <div className="w-full sm:w-1/3 overflow-hidden rounded-sm">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-48 sm:h-32 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="w-full sm:w-2/3 flex flex-col justify-center">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-serif text-xl font-medium text-brand-cream group-hover:text-brand-gold transition-colors duration-300">{item.name}</h3>
                  <div className="flex-grow border-b border-brand-gray/30 mx-4 hidden sm:block"></div>
                  <span className="text-brand-gold font-bold font-serif text-lg">{item.price}</span>
                </div>
                <p className="text-brand-gray text-sm leading-relaxed mb-2">{item.description}</p>
                <span className="text-xs uppercase tracking-wider text-brand-gold/70">{item.category}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="text-brand-gold border-b border-brand-gold pb-1 hover:text-white hover:border-white transition-colors uppercase tracking-widest text-sm">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;