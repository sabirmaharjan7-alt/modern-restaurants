/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, Flame, Heart, Sparkles, Star, Clock, MapPin } from 'lucide-react';
import { CHOOSE_US_HIGHLIGHTS, CHEF_BIO, MENU_ITEMS } from '../data';
import { useMobilePreview } from '../context/MobilePreviewContext';

interface HomeProps {
  setActiveTab: (tab: string) => void;
}

export default function Home({ setActiveTab }: HomeProps) {
  const isMobileSimulated = useMobilePreview();
  // Get 3 signature menu items
  const signatureItems = MENU_ITEMS.filter(item => item.tags.includes('Signature')).slice(0, 3);

  return (
    <div id="home-view" className="animate-fade-in">
      {/* Cinematic Hero Section */}
      <section id="hero-section" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-cream">
        {/* Decorative subtle ambient glows */}
        <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-clay/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-olive/5 rounded-full blur-3xl" />

        <div className={`max-w-7xl mx-auto px-6 md:px-12 grid ${isMobileSimulated ? "grid-cols-1 gap-8" : "grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16"} items-center relative z-10 py-12`}>
          {/* Text Column */}
          <div className="lg:col-span-6 space-y-8 text-left">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 bg-clay/10 text-clay px-3.5 py-1.5 rounded-full">
              <Flame className="w-3.5 h-3.5 fill-clay/20 animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest font-semibold">Live Fire • Farm to Fork</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-light leading-tight text-charcoal">
              Honest cooking <br />
              <span className="italic font-normal text-clay">crafted over live coals</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-charcoal/75 text-base md:text-lg leading-relaxed max-w-xl">
              At Hearth &amp; Vine, we strip dining back to its core. Live fire, fresh soils, biodynamic wines, and a warm table waiting just for you in Valley Grove.
            </p>

            {/* Quick stats / Highlights badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-3 bg-sand/50 p-3 rounded-xl border border-stone/10">
                <Clock className="w-5 h-5 text-olive shrink-0" />
                <div>
                  <span className="block font-mono text-[10px] uppercase text-olive tracking-widest">Dinner Served</span>
                  <span className="block text-xs font-semibold text-charcoal mt-0.5">Tue - Sun, 5:00 PM</span>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-sand/50 p-3 rounded-xl border border-stone/10">
                <MapPin className="w-5 h-5 text-olive shrink-0" />
                <div>
                  <span className="block font-mono text-[10px] uppercase text-olive tracking-widest">Our Location</span>
                  <span className="block text-xs font-semibold text-charcoal mt-0.5">Valley Grove, CA</span>
                </div>
              </div>
            </div>

            {/* Direct Calls to Action */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                id="hero-reserve-cta"
                onClick={() => setActiveTab('reserve')}
                className="bg-clay text-cream hover:bg-clay/95 px-8 py-4 rounded-xl text-sm font-semibold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-xl cursor-pointer text-center"
              >
                Reserve a Table
              </button>
              <button
                id="hero-menu-cta"
                onClick={() => setActiveTab('menu')}
                className="bg-transparent hover:bg-sand text-charcoal border border-charcoal/30 px-8 py-4 rounded-xl text-sm font-semibold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                Explore Menu
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Immersive Image Collage Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full max-w-md md:max-w-xl mx-auto aspect-square">
              {/* Main large visual */}
              <div className="absolute top-4 left-4 right-12 bottom-12 rounded-3xl overflow-hidden shadow-2xl border border-stone/20">
                <img
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80"
                  alt="Live hearth fired wood cooking platter"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Offset floating card 1: Ambiance */}
              <div className="absolute bottom-0 right-0 w-1/2 aspect-3/4 rounded-2xl overflow-hidden shadow-xl border-4 border-cream">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80"
                  alt="Cozy elegant dining space and atmosphere"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Offset floating badge: Social proof */}
              <div className="absolute top-1/10 right-0 bg-cream p-4 rounded-2xl shadow-xl border border-stone/10 flex flex-col items-center gap-1.5 transform translate-x-4 -rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center gap-1">
                  <Star className="w-4.5 h-4.5 fill-amber-400 text-amber-400" />
                  <Star className="w-4.5 h-4.5 fill-amber-400 text-amber-400" />
                  <Star className="w-4.5 h-4.5 fill-amber-400 text-amber-400" />
                  <Star className="w-4.5 h-4.5 fill-amber-400 text-amber-400" />
                  <Star className="w-4.5 h-4.5 fill-amber-400 text-amber-400" />
                </div>
                <span className="font-serif font-bold text-charcoal text-base leading-none">4.9 Stars</span>
                <span className="font-mono text-[9px] text-olive uppercase tracking-widest">Michelin Rated &amp; Google Favorite</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Philosophy Section (Bento Grid) */}
      <section id="philosophy" className="py-24 bg-sand/30 border-y border-stone/20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <div className="max-w-2xl mx-auto space-y-4 mb-16">
            <h4 className="font-mono text-xs uppercase tracking-widest text-clay font-bold">Why Hearth &amp; Vine</h4>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl font-light text-charcoal">
              The purity of live flame, the honesty of local farms
            </h2>
            <div className="w-16 h-0.5 bg-clay/50 mx-auto mt-4" />
          </div>

          <div className={`grid ${isMobileSimulated ? "grid-cols-1 gap-6" : "grid-cols-1 md:grid-cols-3 gap-8"} text-left`}>
            {CHOOSE_US_HIGHLIGHTS.map((item, idx) => (
              <div
                key={idx}
                className="bg-cream p-6 sm:p-8 rounded-2xl border border-stone/10 shadow-xs hover:shadow-md transition-shadow duration-300 space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-olive/10 flex items-center justify-center text-olive">
                  {idx === 0 ? <Flame className="w-6 h-6" /> : idx === 1 ? <Heart className="w-6 h-6" /> : <Sparkles className="w-6 h-6" />}
                </div>
                <h3 className="font-serif text-xl font-bold text-charcoal">{item.title}</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curated Seasonal Highlights */}
      <section id="seasonal-specials" className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-4 text-left">
              <h4 className="font-mono text-xs uppercase tracking-widest text-clay font-bold">Seasonal Delights</h4>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl font-light text-charcoal">
                Straight from the embers tonight
              </h2>
            </div>
            <button
              onClick={() => setActiveTab('menu')}
              className="group text-clay font-mono text-xs uppercase tracking-wider font-semibold flex items-center gap-2 hover:text-olive transition-colors focus:outline-hidden"
            >
              View Full Digital Menu
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className={`grid ${isMobileSimulated ? "grid-cols-1 gap-6" : "grid-cols-1 md:grid-cols-3 gap-8"}`}>
            {signatureItems.map((item, idx) => {
              // Map images manually for the signature items
              const imageMap: Record<string, string> = {
                "m1": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80", // Steak
                "s2": "https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?auto=format&fit=crop&w=600&q=80", // Burrata
                "d1": "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=600&q=80"  // Peach dessert
              };

              return (
                <div
                  key={item.id}
                  className="bg-sand/20 rounded-2xl overflow-hidden border border-stone/10 group flex flex-col justify-between"
                >
                  <div className="relative aspect-4/3 overflow-hidden">
                    <img
                      src={imageMap[item.id] || "https://picsum.photos/seed/food/600/400"}
                      alt={item.name}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute top-4 right-4 bg-clay text-cream px-3 py-1 rounded-full font-mono text-[9px] uppercase tracking-widest">
                      Signature Creation
                    </span>
                  </div>
                  <div className="p-5 sm:p-6 space-y-4 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-baseline gap-2">
                        <h3 className="font-serif text-xl font-bold text-charcoal">{item.name}</h3>
                        <span className="font-serif text-lg font-medium text-clay">${item.price}</span>
                      </div>
                      <p className="text-charcoal/70 text-sm leading-relaxed mt-2">{item.description}</p>
                    </div>
                    {/* Tags */}
                    <div className="flex gap-2 flex-wrap">
                      {item.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="bg-cream text-olive border border-stone/20 px-2 py-0.5 rounded-md font-mono text-[9px] uppercase"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Meet the Chef / Our Story Warm Section */}
      <section id="chef-greet" className="py-24 bg-sand/40 border-t border-stone/20">
        <div className={`max-w-7xl mx-auto px-6 md:px-12 grid ${isMobileSimulated ? "grid-cols-1 gap-8" : "grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16"} items-center`}>
          {/* Chef Photo */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-3/4 rounded-3xl overflow-hidden shadow-xl border border-stone/20">
              <img
                src={CHEF_BIO.image}
                alt={CHEF_BIO.name}
                className="w-full h-full object-cover transform hover:scale-102 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Overlay card */}
            <div className="absolute bottom-4 right-4 sm:-bottom-6 sm:-right-6 bg-cream p-4 sm:p-5 rounded-xl sm:rounded-2xl shadow-lg border border-stone/10 max-w-[190px] sm:max-w-[240px] text-left">
              <span className="font-mono text-[9px] text-clay uppercase tracking-widest block font-bold">Kitchen philosophy</span>
              <p className="font-serif text-xs sm:text-sm italic text-charcoal/80 mt-1 leading-relaxed">
                "We don't cook for status. We cook to bring people together."
              </p>
            </div>
          </div>

          {/* Chef Story and welcome */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h4 className="font-mono text-xs uppercase tracking-widest text-clay font-bold">Meet the Chef</h4>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light text-charcoal leading-snug">
              "We cook with live embers, raw sea salt, and memories."
            </h2>
            <div className="w-12 h-0.5 bg-clay" />
            
            <p className="text-charcoal/85 text-base leading-relaxed">
              {CHEF_BIO.story}
            </p>
            <p className="text-charcoal/70 text-sm leading-relaxed italic">
              — Chef {CHEF_BIO.name}, Founder
            </p>

            <div className="pt-4">
              <button
                onClick={() => setActiveTab('story')}
                className="bg-olive text-cream hover:bg-olive/90 px-6 py-3 rounded-xl text-xs uppercase tracking-wider font-semibold shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer"
              >
                Read Our Story &amp; Philosophy
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Immediate CTA to reservations */}
      <section id="book-now-bar" className="py-16 bg-charcoal text-cream text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(178,79,51,0.08),transparent)]" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light">Gather at our hearth tonight</h2>
          <p className="text-cream/70 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Seating at the kitchen counter is limited and highly coveted. Claim your spot for an evening of warm lights and wood-fired delicacies.
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <button
              onClick={() => setActiveTab('reserve')}
              className="bg-clay text-cream hover:bg-clay/90 px-8 py-3.5 rounded-xl font-mono text-xs tracking-wider uppercase font-semibold transition-all duration-200"
            >
              Book Reservation
            </button>
            <button
              onClick={() => setActiveTab('menu')}
              className="bg-transparent hover:bg-cream/10 border border-cream/25 text-cream px-8 py-3.5 rounded-xl font-mono text-xs tracking-wider uppercase font-semibold transition-all duration-200"
            >
              View Menu
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
