import React, { useState } from 'react';
import { ReservationFormData } from '../types';
import { Calendar, Clock, Users, CheckCircle } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const ReservationForm: React.FC = () => {
  const [formData, setFormData] = useState<ReservationFormData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 2
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const { ref, isVisible } = useScrollReveal();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      // Reset form logic would go here
    }, 1500);
  };

  const animationClasses = `transition-all duration-1000 ease-out transform ${
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
  }`;

  if (status === 'success') {
    return (
      <section 
        id="reservation" 
        ref={ref}
        className={`py-20 bg-brand-charcoal flex items-center justify-center ${animationClasses}`}
      >
        <div className="text-center p-12 bg-brand-dark border border-brand-gold rounded-sm max-w-lg mx-4 animate-fade-in-up">
          <CheckCircle className="w-16 h-16 text-brand-gold mx-auto mb-6" />
          <h3 className="font-serif text-3xl text-brand-cream mb-4">Reservation Confirmed</h3>
          <p className="text-brand-gray mb-6">
            Thank you, {formData.name}. We look forward to welcoming you on {formData.date} at {formData.time}.
          </p>
          <button 
            onClick={() => setStatus('idle')}
            className="text-brand-gold hover:text-brand-cream underline underline-offset-4"
          >
            Make another reservation
          </button>
        </div>
      </section>
    );
  }

  return (
    <section 
      id="reservation" 
      ref={ref}
      className={`py-20 bg-brand-charcoal ${animationClasses}`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-dark p-8 md:p-12 rounded-sm shadow-2xl border-t-4 border-brand-gold">
          <div className="text-center mb-10">
            <span className="text-brand-gold uppercase tracking-widest text-sm font-bold">Join Us</span>
            <h2 className="font-serif text-4xl text-brand-cream mt-2">Book a Table</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Personal Info */}
              <div className="space-y-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-brand-gray mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-brand-charcoal border border-brand-gray/20 text-brand-cream px-4 py-3 focus:outline-none focus:border-brand-gold transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-brand-gray mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-brand-charcoal border border-brand-gray/20 text-brand-cream px-4 py-3 focus:outline-none focus:border-brand-gold transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-brand-gray mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-brand-charcoal border border-brand-gray/20 text-brand-cream px-4 py-3 focus:outline-none focus:border-brand-gold transition-colors"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              {/* Booking Details */}
              <div className="space-y-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-brand-gray mb-2">
                    <div className="flex items-center gap-2"><Calendar size={14} /> Date</div>
                  </label>
                  <input
                    type="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full bg-brand-charcoal border border-brand-gray/20 text-brand-cream px-4 py-3 focus:outline-none focus:border-brand-gold transition-colors [color-scheme:dark]"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-brand-gray mb-2">
                    <div className="flex items-center gap-2"><Clock size={14} /> Time</div>
                  </label>
                  <select
                    name="time"
                    required
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full bg-brand-charcoal border border-brand-gray/20 text-brand-cream px-4 py-3 focus:outline-none focus:border-brand-gold transition-colors"
                  >
                    <option value="">Select a time</option>
                    <option value="17:00">5:00 PM</option>
                    <option value="17:30">5:30 PM</option>
                    <option value="18:00">6:00 PM</option>
                    <option value="18:30">6:30 PM</option>
                    <option value="19:00">7:00 PM</option>
                    <option value="19:30">7:30 PM</option>
                    <option value="20:00">8:00 PM</option>
                    <option value="20:30">8:30 PM</option>
                    <option value="21:00">9:00 PM</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-brand-gray mb-2">
                     <div className="flex items-center gap-2"><Users size={14} /> Guests</div>
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full bg-brand-charcoal border border-brand-gray/20 text-brand-cream px-4 py-3 focus:outline-none focus:border-brand-gold transition-colors"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                    <option value="9+">9+ (Contact us)</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6">
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-brand-gold text-brand-dark font-bold uppercase tracking-widest text-sm py-4 hover:bg-brand-goldHover transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? 'Confirming Availability...' : 'Confirm Reservation'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ReservationForm;