import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Testimonials from './components/Testimonials';
import ReservationForm from './components/ReservationForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-brand-dark min-h-screen text-brand-cream font-sans selection:bg-brand-gold selection:text-brand-dark">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Testimonials />
        <ReservationForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;