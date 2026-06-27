/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Camera, ChevronLeft, ChevronRight, X, Sparkles, Eye } from 'lucide-react';
import { GALLERY_IMAGES } from '../data';
import { GalleryImage } from '../types';

export default function Ambience() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'food' | 'spaces' | 'details'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Artifacts' },
    { id: 'food', label: 'Plating & Embers' },
    { id: 'spaces', label: 'The Sanctuary' },
    { id: 'details', label: 'Raw Ingredients' }
  ];

  const filteredImages = useMemo(() => {
    return GALLERY_IMAGES.filter(img => activeCategory === 'all' || img.category === activeCategory);
  }, [activeCategory]);

  const handleOpenLightbox = (imgId: string) => {
    const index = filteredImages.findIndex(img => img.id === imgId);
    if (index !== -1) {
      setLightboxIndex(index);
    }
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev! - 1));
    }
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev! + 1));
    }
  };

  return (
    <div id="ambience-view" className="pt-24 min-h-screen bg-cream animate-fade-in pb-16">
      
      {/* Editorial Header */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 text-center pt-12 pb-16 space-y-4">
        <h4 className="font-mono text-xs uppercase tracking-widest text-clay font-bold">The Sensory Journal</h4>
        <h1 className="font-serif text-4xl md:text-6xl font-light text-charcoal">
          A Visual Lookbook
        </h1>
        <p className="text-charcoal/70 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
          Capture the quiet details of our days. The hand-thrown dinnerware, wood smoke filtering through string lights, and the natural grain of our cherrywood coals.
        </p>
        <div className="w-16 h-0.5 bg-clay/50 mx-auto mt-4" />
      </section>

      {/* Filter Tabs */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <div className="flex justify-center gap-3 md:gap-5 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id as any);
                setLightboxIndex(null);
              }}
              className={`px-5 py-2.5 rounded-xl font-serif text-sm transition-all duration-200 cursor-pointer border ${
                activeCategory === cat.id
                  ? 'bg-clay text-cream border-clay shadow-xs font-bold'
                  : 'bg-sand/30 text-charcoal/80 border-stone/25 hover:border-clay/50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Gallery */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredImages.map((img) => (
            <div
              key={img.id}
              onClick={() => handleOpenLightbox(img.id)}
              className="group relative aspect-square rounded-3xl overflow-hidden shadow-xs hover:shadow-xl border border-stone/15 cursor-pointer bg-sand/10"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                <div className="flex justify-end">
                  <div className="w-9 h-9 rounded-full bg-cream/20 backdrop-blur-xs flex items-center justify-center text-cream">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-left space-y-1">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-clay font-bold block">
                    {img.category}
                  </span>
                  <p className="font-serif text-base text-cream leading-snug">{img.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fullscreen Lightbox Overlay */}
      {lightboxIndex !== null && (
        <div
          id="lookbook-lightbox"
          className="fixed inset-0 bg-charcoal/95 z-50 flex items-center justify-center p-4 backdrop-blur-md animate-fade-in"
          onClick={handleCloseLightbox}
        >
          {/* Close button */}
          <button
            onClick={handleCloseLightbox}
            className="absolute top-6 right-6 p-2 text-cream hover:text-clay transition-colors cursor-pointer bg-cream/10 rounded-full"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev Image Button */}
          <button
            onClick={handlePrevImage}
            className="absolute left-6 top-1/2 -translate-y-1/2 p-3 text-cream hover:text-clay transition-colors bg-cream/10 hover:bg-cream/20 rounded-full cursor-pointer select-none"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Image Button */}
          <button
            onClick={handleNextImage}
            className="absolute right-6 top-1/2 -translate-y-1/2 p-3 text-cream hover:text-clay transition-colors bg-cream/10 hover:bg-cream/20 rounded-full cursor-pointer select-none"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Active Image and Caption */}
          <div className="max-w-4xl w-full flex flex-col items-center gap-4" onClick={(e) => e.stopPropagation()}>
            <div className="relative max-h-[70vh] rounded-2xl overflow-hidden border border-cream/10 shadow-2xl bg-black">
              <img
                src={filteredImages[lightboxIndex].src}
                alt={filteredImages[lightboxIndex].alt}
                className="max-h-[70vh] max-w-full object-contain mx-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Caption */}
            <div className="text-center space-y-1 max-w-2xl px-6">
              <span className="font-mono text-[9px] uppercase tracking-widest text-clay font-bold block">
                {filteredImages[lightboxIndex].category} • {lightboxIndex + 1} of {filteredImages.length}
              </span>
              <p className="font-serif text-lg text-cream font-light leading-relaxed">
                {filteredImages[lightboxIndex].alt}
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
