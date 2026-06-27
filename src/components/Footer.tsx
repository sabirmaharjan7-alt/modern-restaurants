/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Flame, Star, Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import { CONTACT_INFO, BUSINESS_HOURS } from '../data';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="app-footer" className="bg-charcoal text-cream pt-20 pb-10 border-t border-stone/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
        {/* Brand Column */}
        <div className="space-y-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-clay/20 flex items-center justify-center text-clay">
              <Flame className="w-4 h-4 fill-clay/30" />
            </div>
            <span className="font-serif text-xl font-bold tracking-wide">
              Hearth &amp; Vine
            </span>
          </div>
          <p className="text-cream/70 text-sm leading-relaxed max-w-sm">
            Crafting memorable, wood-fired meals in the heart of Valley Grove. We source with integrity and cook with genuine passion.
          </p>
          {/* Social Icons */}
          <div className="flex items-center gap-4 pt-2">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-cream/10 flex items-center justify-center text-cream/80 hover:text-clay hover:bg-cream/20 transition-all duration-200"
              aria-label="Instagram Profile"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-cream/10 flex items-center justify-center text-cream/80 hover:text-clay hover:bg-cream/20 transition-all duration-200"
              aria-label="Facebook Profile"
            >
              <Facebook className="w-4 h-4" />
            </a>
            {/* Google Rating */}
            <div className="flex items-center gap-1.5 ml-2 bg-cream/5 px-3 py-1.5 rounded-lg">
              <span className="font-mono text-xs text-clay font-bold">4.9</span>
              <div className="flex text-amber-400">
                <Star className="w-3 h-3 fill-amber-400" />
                <Star className="w-3 h-3 fill-amber-400" />
                <Star className="w-3 h-3 fill-amber-400" />
                <Star className="w-3 h-3 fill-amber-400" />
                <Star className="w-3 h-3 fill-amber-400" />
              </div>
              <span className="text-[10px] text-cream/50">(420+ reviews)</span>
            </div>
          </div>
        </div>

        {/* Navigation Column */}
        <div className="space-y-6">
          <h4 className="font-mono text-xs uppercase tracking-widest text-clay font-bold">Explore</h4>
          <ul className="space-y-3.5 text-sm">
            <li>
              <button
                onClick={() => handleNavClick('home')}
                className="text-cream/75 hover:text-clay transition-colors text-left focus:outline-hidden"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick('menu')}
                className="text-cream/75 hover:text-clay transition-colors text-left focus:outline-hidden"
              >
                Our Digital Menu
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick('story')}
                className="text-cream/75 hover:text-clay transition-colors text-left focus:outline-hidden"
              >
                The Story &amp; Philosophy
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick('catering')}
                className="text-cream/75 hover:text-clay transition-colors text-left focus:outline-hidden"
              >
                Private Dining &amp; Catering
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick('ambience')}
                className="text-cream/75 hover:text-clay transition-colors text-left focus:outline-hidden"
              >
                Visual Lookbook
              </button>
            </li>
          </ul>
        </div>

        {/* Business Hours Column */}
        <div className="space-y-6">
          <h4 className="font-mono text-xs uppercase tracking-widest text-clay font-bold">Kitchen Hours</h4>
          <div className="space-y-3">
            {BUSINESS_HOURS.map((h, idx) => (
              <div key={idx} className="flex justify-between text-sm border-b border-cream/5 pb-2">
                <span className="text-cream/80">{h.days}</span>
                <div className="text-right">
                  <span className="text-cream font-medium block">{h.hours}</span>
                  {h.note && <span className="text-[10px] text-cream/45 block mt-0.5">{h.note}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact/Location Column */}
        <div className="space-y-6">
          <h4 className="font-mono text-xs uppercase tracking-widest text-clay font-bold">Say Hello</h4>
          <div className="space-y-4 text-sm text-cream/85">
            <div className="flex gap-3 items-start">
              <MapPin className="w-4 h-4 text-clay shrink-0 mt-0.5" />
              <span>{CONTACT_INFO.address}</span>
            </div>
            <div className="flex gap-3 items-center">
              <Phone className="w-4 h-4 text-clay shrink-0" />
              <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-clay transition-colors">
                {CONTACT_INFO.phone}
              </a>
            </div>
            <div className="flex gap-3 items-center">
              <Mail className="w-4 h-4 text-clay shrink-0" />
              <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-clay transition-colors">
                {CONTACT_INFO.email}
              </a>
            </div>
          </div>
          {/* Quick Find Us CTA */}
          <button
            onClick={() => handleNavClick('reserve')}
            className="w-full text-center bg-cream/5 hover:bg-cream/10 border border-cream/10 py-3 rounded-xl font-mono text-xs tracking-wider uppercase transition-all duration-200"
          >
            Find Us On The Map
          </button>
        </div>
      </div>

      {/* Subfooter */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-cream/50">
        <p>© {currentYear} Hearth &amp; Vine. All rights reserved.</p>
        <p className="font-mono text-[10px] uppercase tracking-widest">
          Handcrafted in Valley Grove • Organic Sourced
        </p>
      </div>
    </footer>
  );
}
