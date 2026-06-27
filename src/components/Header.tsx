/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Flame, Menu, X, Calendar, Presentation, Sparkles } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenSlideshow: () => void;
  isMobileForced?: boolean;
}

export default function Header({ activeTab, setActiveTab, onOpenSlideshow, isMobileForced = false }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'menu', label: 'Menu' },
    { id: 'story', label: 'Our Story' },
    { id: 'catering', label: 'Private Dining' },
    { id: 'ambience', label: 'Ambience' },
    { id: 'reserve', label: 'Reserve & Find Us' }
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="app-header"
      className={isMobileForced ? "sticky top-0 left-0 right-0 z-50 bg-cream border-b border-stone/20 py-3.5 shadow-xs w-full" : `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-cream/90 backdrop-blur-md border-b border-stone/30 py-3 shadow-xs'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          id="brand-logo-btn"
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 text-left group focus:outline-hidden"
        >
          <div className="w-9 h-9 rounded-full bg-clay/10 flex items-center justify-center text-clay transition-transform duration-500 group-hover:rotate-12">
            <Flame className="w-5 h-5 fill-clay/20" />
          </div>
          <div>
            <span className="font-serif text-xl font-bold tracking-wide text-charcoal block leading-none">
              Hearth &amp; Vine
            </span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-olive block mt-0.5">
              Est. 2024 • BISTRO
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav id="desktop-nav" className={isMobileForced ? "hidden" : "hidden lg:flex items-center gap-8"}>
          {navItems.map((item) => (
            <button
              key={item.id}
              id={`nav-item-${item.id}`}
              onClick={() => handleNavClick(item.id)}
              className={`font-sans text-sm tracking-wide transition-all duration-200 focus:outline-hidden relative py-1 ${
                activeTab === item.id
                  ? 'text-clay font-medium'
                  : 'text-charcoal/75 hover:text-clay'
              }`}
            >
              {item.label}
              {activeTab === item.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-clay rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className={isMobileForced ? "hidden" : "hidden lg:flex items-center gap-4"}>
          <button
            id="header-portfolio-slides-btn"
            onClick={onOpenSlideshow}
            className="flex items-center gap-1.5 border border-clay/35 bg-cream hover:bg-sand text-clay px-4 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all duration-200 cursor-pointer shadow-xs hover:shadow-sm"
          >
            <Presentation className="w-3.5 h-3.5" />
            Portfolio Slides
          </button>
          
          <button
            id="header-reserve-btn"
            onClick={() => handleNavClick('reserve')}
            className="flex items-center gap-2 bg-clay text-cream hover:bg-clay/90 px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5" />
            Reserve Table
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          id="mobile-menu-trigger"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={isMobileForced ? "p-2 text-charcoal hover:text-clay focus:outline-hidden" : "lg:hidden p-2 text-charcoal hover:text-clay focus:outline-hidden"}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Sliding Drawer */}
      <div
        id="mobile-drawer"
        className={`absolute inset-x-0 bottom-0 top-[60px] bg-cream z-40 transition-transform duration-300 transform border-t border-stone/30 ${
          isMobileForced ? 'h-[calc(780px-100px)] overflow-y-auto' : 'fixed inset-0 top-[60px] lg:hidden'
        } ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full px-8 py-10 justify-between">
          <div className="flex flex-col gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`mobile-nav-item-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`text-left font-serif text-2xl tracking-wide py-1.5 border-b border-stone/10 ${
                  activeTab === item.id
                    ? 'text-clay font-bold pl-2 border-l-2 border-l-clay border-b-transparent'
                    : 'text-charcoal/80'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-4 mb-20">
            <button
              id="mobile-drawer-slides-btn"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenSlideshow();
              }}
              className="w-full flex items-center justify-center gap-2.5 border-2 border-clay text-clay hover:bg-sand/30 py-3.5 rounded-xl font-medium tracking-wide"
            >
              <Presentation className="w-4 h-4" />
              Open Portfolio Slides
            </button>

            <button
              id="mobile-drawer-reserve-btn"
              onClick={() => handleNavClick('reserve')}
              className="w-full flex items-center justify-center gap-2.5 bg-clay text-cream hover:bg-clay/90 py-3.5 rounded-xl font-medium tracking-wide shadow-sm"
            >
              <Calendar className="w-4 h-4" />
              Book a Table
            </button>
            <div className="text-center">
              <p className="font-mono text-[10px] text-olive uppercase tracking-widest">
                Call us direct
              </p>
              <p className="font-serif text-lg text-charcoal font-semibold mt-1">
                (415) 555-0189
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
