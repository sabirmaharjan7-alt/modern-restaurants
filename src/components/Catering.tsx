/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Sparkles, Users, Wine, ShieldCheck, Mail, Phone, MapPin, Calendar } from 'lucide-react';
import { PRIVATE_DINING_OPTIONS } from '../data';
import { useMobilePreview } from '../context/MobilePreviewContext';

export default function Catering() {
  const isMobileSimulated = useMobilePreview();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '12-18',
    space: 'Crucible Room',
    date: '',
    occasion: 'Corporate Dinner',
    customNotes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const occasions = [
    'Corporate Dinner',
    'Private Anniversary',
    'Bespoke Birthday',
    'Wine Tasting Masterclass',
    'Wedding Rehearsal',
    'Catering Event'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email address is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email address';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.date) newErrors.date = 'Preferred date is required';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // scroll to errors
      return;
    }
    setIsSubmitted(true);
  };

  return (
    <div id="catering-view" className="pt-24 min-h-screen bg-cream animate-fade-in pb-16">
      
      {/* Page Title Editorial */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 text-center pt-12 pb-16 space-y-4">
        <h4 className="font-mono text-xs uppercase tracking-widest text-clay font-bold">Unforgettable Celebrations</h4>
        <h1 className="font-serif text-2xl sm:text-4xl md:text-6xl font-light text-charcoal">
          Private Dining &amp; Gatherings
        </h1>
        <p className="text-charcoal/70 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
          From candlelit wine tastings in our stone cellar to full open-air terrace buyouts, we curate bespoke menus and micro-atmospheres for life's main moments.
        </p>
        <div className="w-16 h-0.5 bg-clay/50 mx-auto mt-4" />
      </section>

      {/* Private Dining Rooms Showroom */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 space-y-20 mb-24">
        {PRIVATE_DINING_OPTIONS.map((opt, idx) => (
          <div
            key={opt.id}
            className={`grid ${isMobileSimulated ? "grid-cols-1 gap-8" : "grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"} items-center bg-sand/20 border border-stone/15 p-5 sm:p-8 md:p-12 rounded-3xl`}
          >
            {/* Image Block */}
            <div className={`lg:col-span-6 relative aspect-16/10 rounded-2xl overflow-hidden shadow-md border border-stone/15 ${idx % 2 === 1 ? 'lg:order-last' : ''}`}>
              <img
                src={opt.image}
                alt={opt.name}
                className="w-full h-full object-cover transform hover:scale-102 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <span className="absolute bottom-4 left-4 bg-charcoal/90 text-cream px-4 py-2 rounded-lg font-serif italic text-sm">
                Capacity: {opt.capacity}
              </span>
            </div>

            {/* Description Block */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <span className="font-mono text-[9px] uppercase tracking-widest text-clay font-bold flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> Featured space
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-light text-charcoal">{opt.name}</h2>
              <p className="text-charcoal/75 text-sm md:text-base leading-relaxed">{opt.description}</p>
              
              {/* Features bullets */}
              <div className="space-y-3 pt-2">
                <h4 className="font-mono text-[10px] uppercase text-olive tracking-widest font-bold">Includes:</h4>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
                  {opt.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-charcoal/85">
                      <span className="w-1.5 h-1.5 rounded-full bg-clay shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Embedded Inquiry Form Block */}
      <section id="event-inquiry-section" className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="bg-sand/30 border border-stone/20 p-6 sm:p-10 md:p-12 rounded-3xl shadow-sm text-left">
          
          {/* Header */}
          <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
            <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-charcoal">Gathering Inquiry</h3>
            <p className="text-charcoal/65 text-xs md:text-sm leading-relaxed">
              Tell us about your upcoming event. Our Private Dining Manager will reach out within 24 hours with custom menu layouts and space availabilities.
            </p>
            <div className="w-12 h-0.5 bg-clay/40 mx-auto mt-2" />
          </div>

          {/* Form */}
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className={`grid ${isMobileSimulated ? "grid-cols-1 gap-6" : "grid-cols-1 md:grid-cols-2 gap-6"}`}>
                
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="block font-mono text-[11px] uppercase text-olive tracking-widest font-semibold">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full bg-cream/80 border ${errors.name ? 'border-red-400' : 'border-stone/25'} px-4 py-3 rounded-xl text-sm text-charcoal focus:outline-hidden focus:border-clay focus:ring-1 focus:ring-clay`}
                    placeholder="Elena Rostov"
                  />
                  {errors.name && <p className="text-red-500 font-mono text-[10px] mt-1">{errors.name}</p>}
                </div>

                {/* Email address */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="block font-mono text-[11px] uppercase text-olive tracking-widest font-semibold">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full bg-cream/80 border ${errors.email ? 'border-red-400' : 'border-stone/25'} px-4 py-3 rounded-xl text-sm text-charcoal focus:outline-hidden focus:border-clay focus:ring-1 focus:ring-clay`}
                    placeholder="elena@example.com"
                  />
                  {errors.email && <p className="text-red-500 font-mono text-[10px] mt-1">{errors.email}</p>}
                </div>

                {/* Phone number */}
                <div className="space-y-1.5">
                  <label htmlFor="phone" className="block font-mono text-[11px] uppercase text-olive tracking-widest font-semibold">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full bg-cream/80 border ${errors.phone ? 'border-red-400' : 'border-stone/25'} px-4 py-3 rounded-xl text-sm text-charcoal focus:outline-hidden focus:border-clay focus:ring-1 focus:ring-clay`}
                    placeholder="(415) 555-0189"
                  />
                  {errors.phone && <p className="text-red-500 font-mono text-[10px] mt-1">{errors.phone}</p>}
                </div>

                {/* Preferred Date */}
                <div className="space-y-1.5">
                  <label htmlFor="date" className="block font-mono text-[11px] uppercase text-olive tracking-widest font-semibold">
                    Proposed Date *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className={`w-full bg-cream/80 border ${errors.date ? 'border-red-400' : 'border-stone/25'} px-4 py-3 rounded-xl text-sm text-charcoal focus:outline-hidden focus:border-clay focus:ring-1 focus:ring-clay`}
                  />
                  {errors.date && <p className="text-red-500 font-mono text-[10px] mt-1">{errors.date}</p>}
                </div>

                {/* Guest Size Selector */}
                <div className="space-y-1.5">
                  <label htmlFor="guests" className="block font-mono text-[11px] uppercase text-olive tracking-widest font-semibold">
                    Guest Count
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    className="w-full bg-cream/80 border border-stone/25 px-4 py-3 rounded-xl text-sm text-charcoal focus:outline-hidden focus:border-clay focus:ring-1 focus:ring-clay"
                  >
                    <option value="8-12">8 - 12 Guests</option>
                    <option value="12-18">12 - 18 Guests (Crucible Room)</option>
                    <option value="18-25">18 - 25 Guests</option>
                    <option value="25-50">25 - 50 Guests (Garden Terrace)</option>
                    <option value="50+">50+ Guests (Terrace Buyout)</option>
                  </select>
                </div>

                {/* Occasion Selector */}
                <div className="space-y-1.5">
                  <label htmlFor="occasion" className="block font-mono text-[11px] uppercase text-olive tracking-widest font-semibold">
                    Occasion
                  </label>
                  <select
                    id="occasion"
                    name="occasion"
                    value={formData.occasion}
                    onChange={handleInputChange}
                    className="w-full bg-cream/80 border border-stone/25 px-4 py-3 rounded-xl text-sm text-charcoal focus:outline-hidden focus:border-clay focus:ring-1 focus:ring-clay"
                  >
                    {occasions.map((occ, oIdx) => (
                      <option key={oIdx} value={occ}>{occ}</option>
                    ))}
                  </select>
                </div>

              </div>

              {/* Custom Details */}
              <div className="space-y-1.5">
                <label htmlFor="customNotes" className="block font-mono text-[11px] uppercase text-olive tracking-widest font-semibold">
                  Event Details / Culinary Accommodations
                </label>
                <textarea
                  id="customNotes"
                  name="customNotes"
                  rows={4}
                  value={formData.customNotes}
                  onChange={handleInputChange}
                  className="w-full bg-cream/80 border border-stone/25 px-4 py-3 rounded-xl text-sm text-charcoal focus:outline-hidden focus:border-clay focus:ring-1 focus:ring-clay"
                  placeholder="Tell us about special beverage pairings, dietary requirements, or decorative visions..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                id="submit-catering-btn"
                className="w-full bg-clay text-cream hover:bg-clay/90 py-4 rounded-xl font-mono text-xs uppercase tracking-widest font-semibold shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer"
              >
                Send Event Proposal
              </button>
            </form>
          ) : (
            /* Success State */
            <div className="text-center py-12 space-y-6 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-olive/10 flex items-center justify-center text-olive mx-auto">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-3xl font-light text-charcoal">Thank you, {formData.name}</h3>
              <div className="max-w-md mx-auto space-y-3">
                <p className="text-charcoal/70 text-sm leading-relaxed">
                  We have received your event blueprint for the proposed date of <span className="font-semibold text-clay">{formData.date}</span>.
                </p>
                <p className="text-charcoal/75 text-xs leading-relaxed">
                  Our private events manager will review our calendars and prepare a draft menu for you. Expect an email or a call at <span className="font-semibold">{formData.phone}</span> very shortly.
                </p>
              </div>
              <div className="pt-4">
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-sand hover:bg-stone/20 text-charcoal px-5 py-2 rounded-xl font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Submit Another Request
                </button>
              </div>
            </div>
          )}

        </div>
      </section>

    </div>
  );
}
