/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Search, Flame, Sparkles, Filter, Leaf, ShieldAlert, X, Heart } from 'lucide-react';
import { MENU_ITEMS } from '../data';
import { MenuItem } from '../types';

interface MenuProps {
  setActiveTab: (tab: string) => void;
}

export default function Menu({ setActiveTab }: MenuProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'starters' | 'mains' | 'desserts' | 'drinks'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);

  const categories = [
    { id: 'all', label: 'Complete Collection' },
    { id: 'starters', label: 'To Begin' },
    { id: 'mains', label: 'Main Hearth' },
    { id: 'desserts', label: 'Sweet Finishes' },
    { id: 'drinks', label: 'Vines & Spirits' }
  ];

  const dietaryTags = [
    { label: 'All Diets', value: null },
    { label: 'Signature Cuts', value: 'Signature' },
    { label: 'Gluten-Free', value: 'GF' },
    { label: 'Vegetarian', value: 'V' }
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            item.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTag = !selectedTag || 
                         item.tags.some(tag => tag.includes(selectedTag));
      return matchesCategory && matchesSearch && matchesTag;
    });
  }, [activeCategory, searchQuery, selectedTag]);

  // Group filtered items by category if showing "all"
  const groupedItems = useMemo(() => {
    const groups: Record<string, MenuItem[]> = {
      starters: [],
      mains: [],
      desserts: [],
      drinks: []
    };
    filteredItems.forEach(item => {
      groups[item.category].push(item);
    });
    return groups;
  }, [filteredItems]);

  const renderItemCard = (item: MenuItem) => (
    <button
      key={item.id}
      onClick={() => setSelectedDish(item)}
      className="group w-full text-left flex flex-row items-center gap-4 sm:gap-8 py-6 border-b border-stone/20 hover:bg-sand/15 px-3 sm:px-6 rounded-2xl transition-all duration-300 cursor-pointer focus:outline-hidden focus:ring-1 focus:ring-clay/30"
    >
      {/* Left side: Image */}
      <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-xl overflow-hidden shrink-0 shadow-xs relative bg-sand/30 border border-stone/10">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        {item.tags.includes('Signature') && (
          <span className="absolute top-1 left-1 bg-clay text-cream text-[7px] font-mono uppercase tracking-wider px-1 py-0.5 rounded-sm shadow-xs font-bold scale-90">
            ★ Chef Pick
          </span>
        )}
      </div>

      {/* Right side: Details */}
      <div className="flex-1 space-y-2">
        <div className="flex justify-between items-baseline gap-4">
          <h4 className="font-serif text-base sm:text-lg md:text-xl font-bold text-charcoal group-hover:text-clay transition-colors flex items-center gap-2">
            {item.name}
            {item.tags.includes('Signature') && (
              <span className="w-2 h-2 rounded-full bg-clay inline-block animate-pulse" title="Signature creation" />
            )}
          </h4>
          <span className="font-serif text-base sm:text-lg md:text-xl font-medium text-clay shrink-0">${item.price}</span>
        </div>
        <p className="text-charcoal/70 text-xs sm:text-sm leading-relaxed max-w-4xl">
          {item.description}
        </p>
        <div className="flex gap-2 mt-2 flex-wrap">
          {item.tags.map((tag, idx) => (
            <span
              key={idx}
              className={`px-2 py-0.5 rounded-md font-mono text-[9px] uppercase tracking-wider ${
                tag === 'Signature'
                  ? 'bg-clay/10 text-clay border border-clay/25'
                  : 'bg-olive/10 text-olive border border-olive/25'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </button>
  );

  return (
    <div id="menu-view" className="pt-24 min-h-screen bg-cream animate-fade-in pb-16">
      {/* Editorial Header */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center pt-12 pb-16 space-y-4">
        <h4 className="font-mono text-xs uppercase tracking-widest text-clay font-bold">The Cellar &amp; Kitchen</h4>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl font-light text-charcoal">
          Tonight's Offerings
        </h1>
        <p className="text-charcoal/75 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
          We curate our menu daily based on morning harvests and local sea arrivals. Everything is prepared over hickory embers and plated on hand-spun local clay.
        </p>
        <div className="w-16 h-0.5 bg-clay/50 mx-auto mt-4" />
      </div>

      {/* Control Panel: Filters, Search, and Dietary */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <div className="bg-sand/40 border border-stone/20 p-5 rounded-2xl flex flex-col gap-6 md:flex-row md:items-center md:justify-between shadow-xs">
          
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-charcoal/45 w-4 h-4" />
            <input
              type="text"
              placeholder="Search dishes or ingredients..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-cream/80 border border-stone/25 pl-10 pr-4 py-2.5 rounded-xl text-sm focus:outline-hidden focus:border-clay focus:ring-1 focus:ring-clay transition-all duration-150 text-charcoal"
            />
          </div>

          {/* Dietary filters */}
          <div className="flex flex-wrap gap-2 items-center">
            <span className="font-mono text-[10px] uppercase text-olive tracking-widest mr-2 flex items-center gap-1">
              <Filter className="w-3 h-3" /> Diet Preferences:
            </span>
            {dietaryTags.map((tag) => (
              <button
                key={tag.value || 'all'}
                onClick={() => setSelectedTag(tag.value)}
                className={`px-3 py-1.5 rounded-lg font-mono text-xs transition-all cursor-pointer ${
                  selectedTag === tag.value
                    ? 'bg-clay text-cream shadow-xs'
                    : 'bg-cream text-charcoal/80 border border-stone/20 hover:border-clay/50'
                }`}
              >
                {tag.label}
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* Categories Bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 border-b border-stone/25">
        <div className="flex gap-4 md:gap-8 overflow-x-auto pb-4 scrollbar-none justify-start md:justify-center">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`font-serif text-lg md:text-xl shrink-0 transition-all duration-200 relative pb-3 cursor-pointer ${
                activeCategory === cat.id
                  ? 'text-clay font-bold scale-102'
                  : 'text-charcoal/60 hover:text-charcoal'
              }`}
            >
              {cat.label}
              {activeCategory === cat.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-clay rounded-full" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Editorial Menu Display */}
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {filteredItems.length === 0 ? (
          <div className="text-center py-20 bg-sand/20 rounded-2xl border border-dashed border-stone/30">
            <ShieldAlert className="w-12 h-12 text-clay/60 mx-auto mb-3" />
            <h3 className="font-serif text-xl font-bold text-charcoal">No dishes match your query</h3>
            <p className="text-charcoal/65 text-sm mt-1">Try clearing your filters or search criteria.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedTag(null);
                setActiveCategory('all');
              }}
              className="mt-4 bg-clay text-cream px-5 py-2 rounded-lg text-xs uppercase tracking-wider font-semibold hover:bg-clay/90 transition-all duration-150 cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : activeCategory !== 'all' ? (
          /* Render single category */
          <div className="space-y-6 animate-slide-up">
            <div className="grid grid-cols-1 gap-y-6 sm:gap-y-8">
              {filteredItems.map(renderItemCard)}
            </div>
          </div>
        ) : (
          /* Render grouped category menu (Traditional Tasting Paper layout) */
          <div className="space-y-20">
            {/* STARTERS SECTION */}
            {groupedItems.starters.length > 0 && (
              <div className="space-y-8 animate-slide-up" style={{ animationDelay: '100ms' }}>
                <div className="text-center space-y-1.5 border-b border-stone/25 pb-4">
                  <h3 className="font-serif text-2xl md:text-3xl italic text-clay font-normal">To Begin</h3>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-olive">Light ember bites &amp; greens</span>
                </div>
                <div className="grid grid-cols-1 gap-y-6 sm:gap-y-8">
                  {groupedItems.starters.map(renderItemCard)}
                </div>
              </div>
            )}

            {/* MAINS SECTION */}
            {groupedItems.mains.length > 0 && (
              <div className="space-y-8 animate-slide-up" style={{ animationDelay: '200ms' }}>
                <div className="text-center space-y-1.5 border-b border-stone/25 pb-4">
                  <h3 className="font-serif text-2xl md:text-3xl italic text-clay font-normal">The Hearth</h3>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-olive">Live-coals meats, seafood &amp; skillets</span>
                </div>
                <div className="grid grid-cols-1 gap-y-6 sm:gap-y-8">
                  {groupedItems.mains.map(renderItemCard)}
                </div>
              </div>
            )}

            {/* DESSERTS SECTION */}
            {groupedItems.desserts.length > 0 && (
              <div className="space-y-8 animate-slide-up" style={{ animationDelay: '300ms' }}>
                <div className="text-center space-y-1.5 border-b border-stone/25 pb-4">
                  <h3 className="font-serif text-2xl md:text-3xl italic text-clay font-normal">Sweet Finishes</h3>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-olive">Delicate confections from our ovens</span>
                </div>
                <div className="grid grid-cols-1 gap-y-6 sm:gap-y-8">
                  {groupedItems.desserts.map(renderItemCard)}
                </div>
              </div>
            )}

            {/* DRINKS SECTION */}
            {groupedItems.drinks.length > 0 && (
              <div className="space-y-8 animate-slide-up" style={{ animationDelay: '400ms' }}>
                <div className="text-center space-y-1.5 border-b border-stone/25 pb-4">
                  <h3 className="font-serif text-2xl md:text-3xl italic text-clay font-normal">Vines &amp; Spirits</h3>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-olive">Craft cocktails &amp; biodynamic bottles</span>
                </div>
                <div className="grid grid-cols-1 gap-y-6 sm:gap-y-8">
                  {groupedItems.drinks.map(renderItemCard)}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Note & CTA footer card */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 mt-24">
        <div className="bg-sand/30 border border-stone/20 rounded-2xl p-8 md:p-12 text-center space-y-6">
          <Leaf className="w-8 h-8 text-olive mx-auto" />
          <h3 className="font-serif text-2xl font-light text-charcoal">Are you hosting a special gathering?</h3>
          <p className="text-charcoal/70 text-sm max-w-lg mx-auto leading-relaxed">
            For tables larger than 8, or for exclusive private tasting sessions with Chef Julian in the Crucible Room, please contact our team.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setActiveTab('catering')}
              className="bg-olive hover:bg-olive/90 text-cream px-6 py-3 rounded-xl font-mono text-xs tracking-wider uppercase font-semibold transition-all duration-200"
            >
              Private Dining
            </button>
            <button
              onClick={() => setActiveTab('reserve')}
              className="bg-clay hover:bg-clay/90 text-cream px-6 py-3 rounded-xl font-mono text-xs tracking-wider uppercase font-semibold transition-all duration-200"
            >
              Book a Table
            </button>
          </div>
        </div>
      </div>

      {/* Modal / Enlarged Dish Detail */}
      {selectedDish && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/60 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedDish(null)}
        >
          <div 
            className="bg-cream max-w-2xl w-full rounded-3xl overflow-hidden shadow-2xl border border-stone/20 relative animate-scale-up max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedDish(null)}
              className="absolute top-4 right-4 bg-charcoal/85 text-cream hover:bg-clay p-2 sm:p-2.5 rounded-full transition-all z-10 cursor-pointer shadow-md"
              aria-label="Close details"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="overflow-y-auto flex-1 scrollbar-thin">
              {/* Image Banner */}
              <div className="w-full h-64 sm:h-80 relative bg-sand/20">
                <img 
                  src={selectedDish.image} 
                  alt={selectedDish.name} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                  <div>
                    <span className="bg-clay text-cream text-[9px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-md font-semibold shadow-xs">
                      {selectedDish.category}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-cream mt-2 tracking-tight">
                      {selectedDish.name}
                    </h3>
                  </div>
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-cream text-right shrink-0">
                    ${selectedDish.price}
                  </span>
                </div>
              </div>

              {/* Dish Content */}
              <div className="p-6 sm:p-8 space-y-6 text-left">
                <div className="space-y-3">
                  <h4 className="font-mono text-xs uppercase tracking-widest text-clay font-bold">Kitchen Description</h4>
                  <p className="text-charcoal/85 text-sm sm:text-base leading-relaxed font-serif">
                    {selectedDish.description}
                  </p>
                </div>

                {/* Fire Craft Story / Sourcing Detail */}
                <div className="bg-sand/30 border border-stone/20 p-5 rounded-2xl space-y-2.5">
                  <h5 className="font-serif text-sm font-bold text-charcoal flex items-center gap-2">
                    <Flame className="w-4 h-4 text-clay" /> Culinary Sourcing &amp; Preparation
                  </h5>
                  <p className="text-charcoal/70 text-xs leading-relaxed">
                    Every ingredient in this recipe is sourced under 50 miles from our bio-partners. Coals are carefully calibrated to release dry, rich hickory or sweet, aromatic cherry wood aromas. No artificial gas is used. This is pure culinary alchemy.
                  </p>
                </div>

                {/* Dietary Tags & Metadata */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <div className="flex gap-2">
                    {selectedDish.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="bg-olive/10 text-olive border border-olive/20 px-3 py-1 rounded-lg text-[10px] font-mono uppercase tracking-wider font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => {
                      setSelectedDish(null);
                      setActiveTab('reserve');
                    }}
                    className="bg-clay hover:bg-clay/90 text-cream px-5 py-2.5 rounded-xl font-mono text-[10px] uppercase tracking-wider font-semibold transition-all shadow-xs cursor-pointer flex items-center gap-2"
                  >
                    <Heart className="w-3.5 h-3.5 fill-current animate-pulse" /> Reserve to Taste
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
