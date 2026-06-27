/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Leaf, Flame, ShieldAlert, Award, Sparkles, MapPin } from 'lucide-react';
import { CHEF_BIO } from '../data';
import { useMobilePreview } from '../context/MobilePreviewContext';

interface StoryProps {
  setActiveTab: (tab: string) => void;
}

export default function Story({ setActiveTab }: StoryProps) {
  const isMobileSimulated = useMobilePreview();
  const farmPartners = [
    {
      name: "Siskiyou Wildwood Co",
      location: "22 miles North",
      produce: "Foraged Chanterelles, ramp oil & pine needles",
      story: "Run by sibling foragers Thomas and Claire, who hike the mountain peaks at dawn to harvest wild flora for our stocks and garnishes."
    },
    {
      name: "Larchmont Organic Orchards",
      location: "8 miles East",
      produce: "Heritage peaches, Gravenstein apples & plums",
      story: "A third-generation family orchard providing the hand-picked tree fruits that caramelize under our dessert embers each night."
    },
    {
      name: "Mendoza Family Farm",
      location: "34 miles South",
      produce: "Toybox tomatoes, Romanesco & root vegetables",
      story: "Utilizing regenerative, zero-till agriculture methods that produce the sweetest, nutrient-dense crops imaginable."
    }
  ];

  return (
    <div id="story-view" className="pt-24 min-h-screen bg-cream animate-fade-in pb-16">
      
      {/* Narrative Editorial Banner */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 text-center pt-12 pb-16 space-y-6">
        <h4 className="font-mono text-xs uppercase tracking-widest text-clay font-bold">The Story of Us</h4>
        <h1 className="font-serif text-2xl sm:text-4xl md:text-6xl font-light text-charcoal">
          Simplicity as a <span className="italic">radical act</span>
        </h1>
        <p className="text-charcoal/70 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          We believe that as cooking has become more industrial, it has lost its voice. We started Hearth &amp; Vine to return to the primal origins of gathering: live wood coals, honest soils, and slow conversations.
        </p>
        <div className="w-16 h-0.5 bg-clay/50 mx-auto mt-4" />
      </section>

      {/* Cinematic Full-bleed philosophy trigger */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
        <div className={`grid ${isMobileSimulated ? "grid-cols-1 gap-8" : "grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12"} items-center bg-sand/30 border border-stone/20 p-6 sm:p-10 md:p-16 rounded-3xl`}>
          <div className="lg:col-span-6 space-y-6 text-left">
            <h3 className="font-serif text-2xl sm:text-3xl font-light text-charcoal">The Alchemy of Oak &amp; Embers</h3>
            <p className="text-charcoal/75 text-sm md:text-base leading-relaxed">
              Cooking over live coals requires absolute presence. Our fire is lit five hours before service, using dry cured hickory for depth and seasoned cherry wood for a sweet, perfumed smoke. 
            </p>
            <p className="text-charcoal/75 text-sm md:text-base leading-relaxed">
              We do not use gas or electric burners. Every temperature shift is managed by manually shifting burning logs on our custom crank grill. It is hard, hot, physical work—but it produces flavors that simply cannot be replicated by modern technology.
            </p>
            
            <div className="flex gap-4 pt-2">
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-clay" />
                <span className="font-mono text-xs text-charcoal">Hickory &amp; Cherry Fuel</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-olive" />
                <span className="font-mono text-xs text-charcoal">Hand-Crafted Fire</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 aspect-16/10 rounded-2xl overflow-hidden shadow-lg border border-stone/20">
            <img
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80"
              alt="Hand roasting over burning wood coals"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Chef deep dive */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
        <div className={`grid ${isMobileSimulated ? "grid-cols-1 gap-8" : "grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16"} items-center`}>
          <div className="lg:col-span-5 order-last lg:order-first">
            <div className="aspect-3/4 rounded-3xl overflow-hidden shadow-lg border border-stone/15">
              <img
                src={CHEF_BIO.image}
                alt={CHEF_BIO.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="lg:col-span-7 space-y-6 text-left">
            <h4 className="font-mono text-xs uppercase tracking-widest text-clay font-bold">The Visionary</h4>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light text-charcoal">Chef {CHEF_BIO.name}</h2>
            <p className="font-serif text-lg italic text-clay leading-relaxed">
              "{CHEF_BIO.quote}"
            </p>
            <p className="text-charcoal/80 text-sm md:text-base leading-relaxed">
              Before founding Hearth &amp; Vine, Julian was the head chef of a renowned coastal sanctuary, where he felt a growing disconnect from the luxury food system. He wanted to build a place that honored the grower as much as the diner, where guests could taste the raw minerality of the Valley soils directly in their glasses and bowls.
            </p>
            <p className="text-charcoal/80 text-sm md:text-base leading-relaxed">
              Every afternoon, you will find Julian at the pass, hand-stoking the embers and greeting regulars at the Hearth Counter.
            </p>
          </div>
        </div>
      </section>

      {/* Soil Partnerships: The Growers */}
      <section className="py-20 bg-sand/20 border-y border-stone/20 mb-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <div className="max-w-2xl mx-auto space-y-4 mb-16">
            <h4 className="font-mono text-xs uppercase tracking-widest text-clay font-bold">The Real Heroes</h4>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light text-charcoal">Our Soil &amp; Forage Partners</h2>
            <p className="text-charcoal/65 text-sm">
              We owe 90% of our flavors to the caretakers who nurture the soil and harvest with conscious love. Meet our main supply circle.
            </p>
            <div className="w-12 h-0.5 bg-clay/50 mx-auto mt-4" />
          </div>

          <div className={`grid ${isMobileSimulated ? "grid-cols-1 gap-6" : "grid-cols-1 md:grid-cols-3 gap-8"} text-left`}>
            {farmPartners.map((farm, idx) => (
              <div
                key={idx}
                className="bg-cream p-6 sm:p-8 rounded-2xl border border-stone/10 shadow-xs space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="font-serif text-xl font-bold text-charcoal leading-none">{farm.name}</h3>
                    <div className="flex items-center gap-1 text-olive bg-olive/10 px-2.5 py-1 rounded-md font-mono text-[9px] uppercase tracking-widest shrink-0 font-semibold">
                      <MapPin className="w-2.5 h-2.5" />
                      {farm.location}
                    </div>
                  </div>
                  <p className="font-mono text-xs text-clay font-medium">{farm.produce}</p>
                  <p className="text-charcoal/70 text-xs md:text-sm leading-relaxed">{farm.story}</p>
                </div>
                <div className="pt-4 border-t border-stone/10 flex items-center gap-2 text-olive text-xs">
                  <Leaf className="w-3.5 h-3.5" />
                  <span>100% Certified Organic Farm</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Narrative Closer */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 text-center pt-16">
        <div className="space-y-6">
          <h3 className="font-serif text-2xl md:text-3xl font-light text-charcoal">The door is open. Come pull up a chair.</h3>
          <p className="text-charcoal/75 text-sm leading-relaxed max-w-lg mx-auto">
            Experience food as it was intended: simple, raw, and deeply shared. We are honored to serve you.
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <button
              onClick={() => setActiveTab('reserve')}
              className="bg-clay text-cream px-6 py-3 rounded-xl font-mono text-xs uppercase tracking-wider font-semibold hover:bg-clay/90 transition-all duration-150 cursor-pointer shadow-xs"
            >
              Book Your Table
            </button>
            <button
              onClick={() => setActiveTab('menu')}
              className="bg-transparent border border-charcoal/35 text-charcoal px-6 py-3 rounded-xl font-mono text-xs uppercase tracking-wider font-semibold hover:bg-sand transition-all duration-150 cursor-pointer"
            >
              View Menu
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
