/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Calendar, Clock, Users, Star, MapPin, Phone, Mail, Sparkles, CheckCircle2, Navigation, MessageSquare } from 'lucide-react';
import { CONTACT_INFO, BUSINESS_HOURS, REVIEWS, FAQS } from '../data';
import { useMobilePreview } from '../context/MobilePreviewContext';

export default function Reserve() {
  const isMobileSimulated = useMobilePreview();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: 2,
    date: '',
    time: '6:30 PM',
    area: 'main-dining' as 'main-dining' | 'hearth-counter' | 'garden-terrace',
    dietaryNotes: ''
  });
  const [isReserved, setIsReserved] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const availableTimes = [
    '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM'
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
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.date) newErrors.date = 'Reservation date is required';
    return newErrors;
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setIsReserved(true);
  };

  const getAreaLabel = (area: string) => {
    switch (area) {
      case 'main-dining': return 'Main Dining Hall';
      case 'hearth-counter': return 'The Hearth Counter (Fireside)';
      case 'garden-terrace': return 'Open-Air Garden Terrace';
      default: return 'Main Dining';
    }
  };

  return (
    <div id="reserve-view" className="pt-24 min-h-screen bg-cream animate-fade-in pb-16">
      
      {/* Editorial Title */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 text-center pt-12 pb-16 space-y-4">
        <h4 className="font-mono text-xs uppercase tracking-widest text-clay font-bold">Join the Hearth</h4>
        <h1 className="font-serif text-2xl sm:text-4xl md:text-6xl font-light text-charcoal">
          Reservations &amp; Location
        </h1>
        <p className="text-charcoal/70 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
          Claim your chair. Choose to dine alongside our crackling wood ovens, within our cozy candlelit dining room, or underneath the climbing vines of our garden.
        </p>
        <div className="w-16 h-0.5 bg-clay/50 mx-auto mt-4" />
      </section>

      {/* Main Form & Location Layout */}
      <section className={`max-w-7xl mx-auto px-6 md:px-12 grid ${isMobileSimulated ? "grid-cols-1 gap-8" : "grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16"} items-start mb-24`}>
        
        {/* Left Column: Booking Form Container */}
        <div className="lg:col-span-7 bg-sand/30 border border-stone/15 p-5 sm:p-8 md:p-10 rounded-3xl shadow-xs">
          {!isReserved ? (
            <form onSubmit={handleBooking} className="space-y-6 text-left">
              
              <div className="text-center md:text-left border-b border-stone/25 pb-4 mb-4">
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-charcoal flex items-center justify-center md:justify-start gap-2">
                  <Calendar className="w-5 h-5 text-clay" /> Secure Your Seat
                </h3>
                <span className="font-mono text-[9px] uppercase tracking-widest text-olive block mt-1">
                  Tables released up to 30 days in advance
                </span>
              </div>

              {/* Standard inputs */}
              <div className={`grid ${isMobileSimulated ? "grid-cols-1 gap-6" : "grid-cols-1 md:grid-cols-2 gap-6"}`}>
                
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="block font-mono text-[11px] uppercase text-olive tracking-widest font-semibold">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full bg-cream/80 border ${errors.name ? 'border-red-400' : 'border-stone/25'} px-4 py-3 rounded-xl text-sm focus:outline-hidden focus:border-clay focus:ring-1 focus:ring-clay`}
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
                    className={`w-full bg-cream/80 border ${errors.email ? 'border-red-400' : 'border-stone/25'} px-4 py-3 rounded-xl text-sm focus:outline-hidden focus:border-clay focus:ring-1 focus:ring-clay`}
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
                    className={`w-full bg-cream/80 border ${errors.phone ? 'border-red-400' : 'border-stone/25'} px-4 py-3 rounded-xl text-sm focus:outline-hidden focus:border-clay focus:ring-1 focus:ring-clay`}
                    placeholder="(415) 555-0189"
                  />
                  {errors.phone && <p className="text-red-500 font-mono text-[10px] mt-1">{errors.phone}</p>}
                </div>

                {/* Date */}
                <div className="space-y-1.5">
                  <label htmlFor="date" className="block font-mono text-[11px] uppercase text-olive tracking-widest font-semibold">
                    Dine Date *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className={`w-full bg-cream/80 border ${errors.date ? 'border-red-400' : 'border-stone/25'} px-4 py-3 rounded-xl text-sm focus:outline-hidden focus:border-clay focus:ring-1 focus:ring-clay`}
                  />
                  {errors.date && <p className="text-red-500 font-mono text-[10px] mt-1">{errors.date}</p>}
                </div>

                {/* Guests */}
                <div className="space-y-1.5">
                  <label htmlFor="guests" className="block font-mono text-[11px] uppercase text-olive tracking-widest font-semibold">
                    Guests Count
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    className="w-full bg-cream/80 border border-stone/25 px-4 py-3 rounded-xl text-sm focus:outline-hidden focus:border-clay"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Time */}
                <div className="space-y-1.5">
                  <label htmlFor="time" className="block font-mono text-[11px] uppercase text-olive tracking-widest font-semibold">
                    Dine Time
                  </label>
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className="w-full bg-cream/80 border border-stone/25 px-4 py-3 rounded-xl text-sm focus:outline-hidden focus:border-clay"
                  >
                    {availableTimes.map((time) => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>

              </div>

              {/* Seating area selectors */}
              <div className="space-y-2">
                <label className="block font-mono text-[11px] uppercase text-olive tracking-widest font-semibold">
                  Preferred Seating Area
                </label>
                <div className={`grid ${isMobileSimulated ? "grid-cols-1 gap-3" : "grid-cols-1 md:grid-cols-3 gap-3"}`}>
                  
                  {/* Option 1 */}
                  <label
                    className={`flex flex-col p-4 rounded-xl border cursor-pointer transition-all ${
                      formData.area === 'main-dining'
                        ? 'border-clay bg-clay/5'
                        : 'border-stone/20 bg-cream/50 hover:bg-cream'
                    }`}
                  >
                    <input
                      type="radio"
                      name="area"
                      value="main-dining"
                      checked={formData.area === 'main-dining'}
                      onChange={() => setFormData(prev => ({ ...prev, area: 'main-dining' }))}
                      className="sr-only"
                    />
                    <span className="font-serif font-bold text-sm text-charcoal">Main Dining</span>
                    <span className="text-[10px] text-charcoal/60 mt-1 leading-normal">Cozy table near soft lights. Elegant.</span>
                  </label>

                  {/* Option 2 */}
                  <label
                    className={`flex flex-col p-4 rounded-xl border cursor-pointer transition-all ${
                      formData.area === 'hearth-counter'
                        ? 'border-clay bg-clay/5'
                        : 'border-stone/20 bg-cream/50 hover:bg-cream'
                    }`}
                  >
                    <input
                      type="radio"
                      name="area"
                      value="hearth-counter"
                      checked={formData.area === 'hearth-counter'}
                      onChange={() => setFormData(prev => ({ ...prev, area: 'hearth-counter' }))}
                      className="sr-only"
                    />
                    <span className="font-serif font-bold text-sm text-charcoal">Hearth Counter</span>
                    <span className="text-[10px] text-charcoal/60 mt-1 leading-normal">Watch live-fires up close. Sensory.</span>
                  </label>

                  {/* Option 3 */}
                  <label
                    className={`flex flex-col p-4 rounded-xl border cursor-pointer transition-all ${
                      formData.area === 'garden-terrace'
                        ? 'border-clay bg-clay/5'
                        : 'border-stone/20 bg-cream/50 hover:bg-cream'
                    }`}
                  >
                    <input
                      type="radio"
                      name="area"
                      value="garden-terrace"
                      checked={formData.area === 'garden-terrace'}
                      onChange={() => setFormData(prev => ({ ...prev, area: 'garden-terrace' }))}
                      className="sr-only"
                    />
                    <span className="font-serif font-bold text-sm text-charcoal">Garden Terrace</span>
                    <span className="text-[10px] text-charcoal/60 mt-1 leading-normal">Open-air dining under vines &amp; stars.</span>
                  </label>

                </div>
              </div>

              {/* Special dietary remarks */}
              <div className="space-y-1.5">
                <label htmlFor="dietaryNotes" className="block font-mono text-[11px] uppercase text-olive tracking-widest font-semibold">
                  Dietary Requirements &amp; Occasions
                </label>
                <textarea
                  id="dietaryNotes"
                  name="dietaryNotes"
                  rows={2}
                  value={formData.dietaryNotes}
                  onChange={handleInputChange}
                  className="w-full bg-cream/80 border border-stone/25 px-4 py-3 rounded-xl text-sm focus:outline-hidden focus:border-clay"
                  placeholder="Anniversaries, allergies, severe honey sensitivity..."
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                id="submit-booking-btn"
                className="w-full bg-clay text-cream hover:bg-clay/90 py-4 rounded-xl font-mono text-xs uppercase tracking-widest font-semibold shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer"
              >
                Confirm Booking Slip
              </button>

            </form>
          ) : (
            /* Successful Slip State */
            <div className="text-center py-12 space-y-6 animate-fade-in text-charcoal">
              <div className="w-16 h-16 rounded-full bg-olive/10 flex items-center justify-center text-olive mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-3xl font-light">Table Confirmed</h3>
              <p className="text-charcoal/70 text-sm max-w-md mx-auto leading-relaxed">
                Thank you, <span className="font-semibold">{formData.name}</span>. We have reserved a beautiful table for you in our <span className="font-semibold text-clay">{getAreaLabel(formData.area)}</span>.
              </p>

              {/* Receipt Slip */}
              <div className="max-w-md mx-auto bg-cream p-6 rounded-2xl border border-stone/20 shadow-xs space-y-4 text-left">
                <h4 className="font-mono text-[10px] uppercase tracking-widest text-olive border-b border-stone/20 pb-2 font-bold">
                  Reservation Ticket
                </h4>
                <div className="grid grid-cols-2 gap-y-3.5 text-sm">
                  <div>
                    <span className="block text-[10px] font-mono uppercase text-charcoal/50">Guests Size</span>
                    <span className="font-semibold font-serif text-base">{formData.guests} Guests</span>
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono uppercase text-charcoal/50">Proposed Date</span>
                    <span className="font-semibold font-serif text-base">{formData.date}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono uppercase text-charcoal/50">Dine Time</span>
                    <span className="font-semibold font-serif text-base">{formData.time}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono uppercase text-charcoal/50">Location Area</span>
                    <span className="font-semibold font-serif text-sm">{getAreaLabel(formData.area)}</span>
                  </div>
                </div>
                {formData.dietaryNotes && (
                  <div className="pt-2.5 border-t border-stone/15">
                    <span className="block text-[10px] font-mono uppercase text-charcoal/50">Notes</span>
                    <p className="text-xs italic text-charcoal/75 mt-1">"{formData.dietaryNotes}"</p>
                  </div>
                )}
              </div>

              <p className="text-[11px] text-charcoal/50 max-w-sm mx-auto leading-relaxed">
                An confirmation slip with direction details has been sent to <span className="font-semibold">{formData.email}</span>. To modify or cancel, please call us 2 hours prior.
              </p>

              <div className="pt-4">
                <button
                  onClick={() => setIsReserved(false)}
                  className="bg-sand hover:bg-stone/20 text-charcoal px-5 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Book Another Table
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Address, Schematic SVG Map, Hours */}
        <div className="lg:col-span-5 space-y-8">
          
          {/* Contact Cards */}
          <div className="bg-sand/20 border border-stone/15 rounded-3xl p-5 sm:p-6 md:p-8 space-y-6 text-left">
            <h3 className="font-serif text-xl font-bold text-charcoal">The Bistro Hearth</h3>
            
            <div className="space-y-4 text-sm text-charcoal/85">
              <div className="flex gap-4 items-start">
                <MapPin className="w-5 h-5 text-clay shrink-0 mt-0.5" />
                <div>
                  <span className="block font-mono text-[9px] uppercase text-olive tracking-widest font-bold">Address</span>
                  <span className="block font-semibold mt-1">{CONTACT_INFO.address}</span>
                  <a
                    href={CONTACT_INFO.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-clay hover:text-olive transition-colors font-mono mt-1.5"
                  >
                    <Navigation className="w-3 h-3" /> Get Directions (Google Maps)
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Phone className="w-5 h-5 text-clay shrink-0 mt-0.5" />
                <div>
                  <span className="block font-mono text-[9px] uppercase text-olive tracking-widest font-bold">Inquiries</span>
                  <a href={`tel:${CONTACT_INFO.phone}`} className="block font-semibold mt-1 hover:text-clay transition-colors">
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Mail className="w-5 h-5 text-clay shrink-0 mt-0.5" />
                <div>
                  <span className="block font-mono text-[9px] uppercase text-olive tracking-widest font-bold">Email Direct</span>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="block font-semibold mt-1 hover:text-clay transition-colors">
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Clean, Vector-Styled Map Section */}
          <div className="bg-sand/30 border border-stone/15 rounded-3xl p-5 sm:p-6 text-left space-y-4">
            <h4 className="font-serif text-lg font-bold text-charcoal flex items-center gap-2">
              <MapPin className="w-4.5 h-4.5 text-clay" /> Local Landmarks
            </h4>
            
            {/* Elegant SVG schematic map mockup */}
            <div className="w-full aspect-16/10 rounded-2xl bg-cream border border-stone/20 overflow-hidden relative shadow-inner">
              <svg viewBox="0 0 400 250" className="w-full h-full text-charcoal/10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {/* Grid guidelines representing street layout */}
                <path d="M10,60 L390,60" strokeDasharray="3 3" />
                <path d="M10,180 L390,180" />
                <path d="M120,10 L120,240" />
                <path d="M280,10 L280,240" strokeDasharray="3 3" />
                
                {/* Streets texts */}
                <text x="130" y="25" className="fill-olive font-mono text-[8px] uppercase tracking-wider" stroke="none">Larchmont Blvd</text>
                <text x="15" y="172" className="fill-olive font-mono text-[8px] uppercase tracking-wider" stroke="none">Grand Avenue</text>
                
                {/* Parks / Green areas */}
                <rect x="295" y="75" width="85" height="90" rx="10" className="fill-olive/5 stroke-olive/20" />
                <text x="310" y="125" className="fill-olive/50 font-serif text-[10px] italic" stroke="none">Grove Park</text>

                {/* River / Water */}
                <path d="M10,230 Q200,210 390,235" stroke="rgba(178,79,51,0.08)" strokeWidth="15" />

                {/* Landmark pins */}
                <circle cx="120" cy="110" r="16" className="fill-clay/10 stroke-clay/30" />
                <circle cx="120" cy="110" r="5" className="fill-clay stroke-cream" />
                
                {/* Pulses */}
                <circle cx="120" cy="110" r="30" className="stroke-clay/20 fill-none animate-ping" style={{ animationDuration: '3s' }} />

                <text x="145" y="115" className="fill-charcoal font-serif font-bold text-[11px]" stroke="none">Hearth &amp; Vine</text>
                <text x="145" y="128" className="fill-clay font-mono text-[8px] uppercase font-semibold" stroke="none">We are here</text>
              </svg>

              {/* Travel badge */}
              <div className="absolute bottom-3 left-3 bg-charcoal/90 text-cream px-3 py-1.5 rounded-lg font-mono text-[9px] uppercase tracking-widest flex items-center gap-1.5">
                <Navigation className="w-3 h-3 text-clay fill-clay/20" /> Valet Parking Available
              </div>
            </div>

            {/* Parking Guidelines */}
            <p className="text-charcoal/70 text-xs leading-relaxed">
              We are located at the corner of <span className="font-semibold text-charcoal">Larchmont Blvd and Grand Avenue</span>, directly opposite the historic Grove Park. Complimentary street parking is widely available along Larchmont. Valet parking is operated on Fridays and Saturdays from 5:00 PM onwards.
            </p>
          </div>

          {/* Business Hours */}
          <div className="bg-sand/10 border border-stone/15 rounded-3xl p-5 sm:p-6 text-left">
            <h4 className="font-serif text-lg font-bold text-charcoal mb-4">Hours of Sourcing &amp; Dining</h4>
            <div className="space-y-3">
              {BUSINESS_HOURS.map((h, idx) => (
                <div key={idx} className="flex justify-between text-sm border-b border-stone/20 pb-2.5">
                  <span className="text-charcoal/75">{h.days}</span>
                  <div className="text-right">
                    <span className="text-charcoal font-semibold block">{h.hours}</span>
                    {h.note && <span className="text-[10px] text-olive font-mono uppercase tracking-widest block mt-0.5">{h.note}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Social Proof Page / Google Ratings Display */}
      <section id="google-ratings" className="py-20 bg-sand/20 border-t border-stone/20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <h4 className="font-mono text-xs uppercase tracking-widest text-clay font-bold">Diner Testimonials</h4>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl font-light text-charcoal">
              Words from our warm tables
            </h2>
            <div className="w-16 h-0.5 bg-clay/50 mx-auto mt-4" />
          </div>

          {/* Star rating overview badge */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 bg-cream p-5 sm:p-8 rounded-3xl border border-stone/20 max-w-3xl mx-auto mb-16 text-center md:text-left shadow-xs">
            <div className="shrink-0 flex flex-col items-center gap-1.5 bg-sand/30 p-6 rounded-2xl border border-stone/15">
              <span className="font-serif text-5xl font-bold text-charcoal leading-none">4.9</span>
              <div className="flex text-amber-400 mt-1">
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
              </div>
              <span className="font-mono text-[9px] text-olive uppercase tracking-widest mt-1">428 Verified reviews</span>
            </div>
            <div className="space-y-3">
              <h3 className="font-serif text-lg sm:text-2xl font-light text-charcoal">Ranked #1 Culinary Experience</h3>
              <p className="text-charcoal/70 text-xs md:text-sm leading-relaxed">
                "Our commitment to organic wood fire isn't a design choice—it is our absolute truth. We are deeply grateful to our community for sharing the journey."
              </p>
              <div className="flex gap-4 justify-center md:justify-start">
                <span className="text-xs font-mono text-olive uppercase font-bold">• 98% Recommend rate</span>
                <span className="text-xs font-mono text-olive uppercase font-bold">• Local Foodies Choice 2025</span>
              </div>
            </div>
          </div>

          {/* Reviews list in 1-by-1 line layout for maximum horizontal breathing room */}
          <div className="max-w-4xl mx-auto space-y-6">
            {REVIEWS.map((r) => (
              <div
                key={r.id}
                className="bg-cream p-6 sm:p-8 rounded-2xl border border-stone/15 shadow-xs flex flex-col md:flex-row md:items-center justify-between text-left gap-6 relative transition-transform duration-300 hover:scale-[1.01]"
              >
                <div className="space-y-4 flex-1">
                  {/* Google/Yelp logo sources & Stars */}
                  <div className="flex justify-between items-center flex-wrap gap-2">
                    <div className="flex text-amber-400">
                      {[...Array(r.rating)].map((_, starIdx) => (
                        <Star key={starIdx} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="bg-sand px-2.5 py-1 rounded-md font-mono text-[9px] uppercase font-semibold text-olive tracking-widest">
                      {r.source} Verified
                    </span>
                  </div>
                  <p className="font-serif text-sm sm:text-base italic text-charcoal/95 leading-relaxed">
                    "{r.text}"
                  </p>
                </div>

                {/* Author block on the right for wide layouts, or bottom on mobile */}
                <div className="flex items-center gap-3.5 pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-stone/15 md:pl-8 mt-4 md:mt-0 shrink-0 md:w-56">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-stone/20 shrink-0">
                    <img src={r.avatar} alt={r.author} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <span className="block font-serif font-bold text-sm text-charcoal">{r.author}</span>
                    <span className="block text-[10px] font-mono uppercase text-olive tracking-wider">{r.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Helpful FAQs list at the end of Reservations */}
      <section id="faqs" className="max-w-4xl mx-auto px-6 md:px-12 mt-20 text-left">
        <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-charcoal text-center mb-8 font-light">
          Frequently Answered Questions
        </h3>
        
        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="bg-sand/20 border border-stone/15 rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full p-4 sm:p-5 flex justify-between items-center text-left focus:outline-hidden cursor-pointer"
              >
                <span className="font-serif font-bold text-sm md:text-base text-charcoal">{faq.question}</span>
                <span className="font-mono text-lg text-clay shrink-0 select-none ml-4">
                  {activeFaq === idx ? '−' : '+'}
                </span>
              </button>
              
              <div
                className={`transition-all duration-300 ease-in-out px-5 overflow-hidden ${
                  activeFaq === idx ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-charcoal/75 text-xs md:text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
