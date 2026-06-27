/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Layers, 
  MousePointer, 
  Palette, 
  Type, 
  Smartphone, 
  Sparkles, 
  CheckCircle,
  Copy,
  Presentation,
  Flame,
  Award
} from 'lucide-react';
import { MENU_ITEMS, GALLERY_IMAGES, PRIVATE_DINING_OPTIONS, REVIEWS } from '../data';

interface SlideshowProps {
  isOpen: boolean;
  onClose: () => void;
  setActiveTab: (tab: string) => void;
}

export default function Slideshow({ isOpen, onClose, setActiveTab }: SlideshowProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [copiedText, setCopiedText] = useState<string | null>(null);

  // Keyboard navigation for slides
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentSlide]);

  if (!isOpen) return null;

  const slides = [
    {
      title: "Hearth & Vine Portfolio Deck",
      subtitle: "Case Study & Design System",
      type: "cover",
      tagline: "DESIGN OVERVIEW",
      description: "A luxury brand presentation of Hearth & Vine, showing how we combined warm, human minimalism with a natural flow that drives guest reservation actions.",
      palette: [
        { name: "Cream (Base)", hex: "#FAF9F6", desc: "Soothing neutral canvas" },
        { name: "Sand (Surfaces)", hex: "#F2EFE9", desc: "Warm clay-like texturing" },
        { name: "Moss Green (Brand)", hex: "#4A5D4E", desc: "Natural, organic forest branding" },
        { name: "Charcoal (Type)", hex: "#2D2D2D", desc: "Readability, high contrast" },
        { name: "Stone (Borders)", hex: "#EBE8E0", desc: "Subtle separation dividers" }
      ],
      typography: [
        { font: "Cormorant Garamond", style: "Display & Headings", note: "Elegant, serif with light weight options to evoke premium, Michelin-like authenticity." },
        { font: "Inter", style: "Body Text & Controls", note: "High legibility, responsive sans-serif for comfortable reading and clear reservation forms." },
        { font: "JetBrains Mono", style: "Metadata & Small Accents", note: "Clean, precise tabular numerals for pricing, hours, and tags." }
      ],
      uxPillars: [
        { title: "Sourcing Honesty", text: "Highlighting raw ingredients and grower distances immediately to establish sensory trust." },
        { title: "Whitespace Sanctuary", text: "Generous margins to allow high-quality food imagery to breathe, preventing mental fatigue." },
        { title: "High-Fidelity Action Cards", text: "Designing forms that feel like authentic booking tickets instead of standard generic fields." }
      ]
    },
    {
      title: "01 / Immersive Landing Layout",
      subtitle: "First Impressions & Direct Action Hooks",
      type: "page",
      targetTab: "home",
      tagline: "HERO SECTION STRATEGY",
      description: "How we structured the home view to tell an immediate story through physical and sensory cues.",
      uiHighlights: [
        "Live-fire signature badge with natural glowing pulse animations.",
        "Split-grid desktop visual to balance high-contrast copy with raw food plates.",
        "Quick-info dashboard anchors (Hours, Location) displayed cleanly before scroll.",
        "Dual action hooks: premium high-contrast filled CTA paired with bordered outline buttons."
      ],
      designNotes: "Designed using responsive columns that seamlessly stack on small screens, placing critical hours and booking call-to-actions directly into the user's primary thumb-zone.",
      talkingPoints: "“The design doesn’t rely on flashy icons. Instead, it pairs light, airy layouts with strong editorial headlines to make the user feel like they are flipping open a boutique culinary journal.”"
    },
    {
      title: "02 / The Curated Menu Display",
      subtitle: "A High-Legibility Digital Tasting Paper",
      type: "page",
      targetTab: "menu",
      tagline: "INFORMATION ARCHITECTURE",
      description: "A digital menu built to resemble traditional handmade paper, structured logically by courses.",
      uiHighlights: [
        "Traditional spacing hierarchy with clean dividers and balanced left/right margins.",
        "Interactive diet category selector (Begin, Mains, Dessert, Vines) with horizontal fluid scrolling.",
        "In-line ingredient searches that filter instantly with zero lag.",
        "Dietary badges (GF, V, Signature) styled beautifully as micro-capsules."
      ],
      designNotes: "Using modern React useMemo Hooks to group dishes. Prevents layout shifts during filtering, keeping the digital menu fast, responsive, and completely lag-free.",
      talkingPoints: "“By using a two-column classical bistro layout on desktop and single-column cards on mobile, we preserved the premium dining feel of physical parchment menu slips.”"
    },
    {
      title: "03 / Story & Radical Sourcing",
      subtitle: "Elevating the Producers",
      type: "page",
      targetTab: "story",
      tagline: "BRAND PHILOSOPHY",
      description: "How the website establishes trust and emotional loyalty through radical transparency of its foraging supply circle.",
      uiHighlights: [
        "Prominent Chef Quote block featuring hand-crafted editorial signatures and direct photo portraits.",
        "Interactive supplier partnership layout showcasing exact physical distances (e.g. '8 miles East').",
        "Ember & Wood-coal cooking explainer highlighting artisan physical techniques."
      ],
      designNotes: "The grower partnership block utilizes elegant flexbox grids that resize seamlessly, giving organic suppliers a beautiful dedicated space to tell their stories.",
      talkingPoints: "“We avoided mock corporate layouts. Instead, we honored the real people behind the flavors, making the brand feel incredibly human and deeply rooted.”"
    },
    {
      title: "04 / Private Dining & Events",
      subtitle: "Bespoke Atmosphere Showroom",
      type: "page",
      targetTab: "catering",
      tagline: "CONVERSION OPTIMIZATION",
      description: "Designed for corporate bookings and family celebrations. Balances beautiful spaces with robust data entry.",
      uiHighlights: [
        "Alternating modular layout blocks to represent specific spaces clearly.",
        "Capacity and feature checklists styled with clean organic dots.",
        "Custom-tailored events proposal form with in-place validation and responsive confirmation screens."
      ],
      designNotes: "The booking forms utilize beautiful border-styling triggers that shift colors on focus to match our warm earth theme, providing an elevated, premium feedback loop.",
      talkingPoints: "“Instead of sending users to a generic external contact form, we built a seamless custom inquiry engine that captures capacity requirements and culinary preferences on-site.”"
    },
    {
      title: "05 / Visual Lookbook & Lightbox",
      subtitle: "Sensory Ambience & Fluid Grid",
      type: "page",
      targetTab: "ambience",
      tagline: "INTERACTIVE GALLERY",
      description: "An elegant, interactive lookbook built for users to preview the exact dining environment.",
      uiHighlights: [
        "A responsive masonry-style grid featuring visual filters (Food, Spaces, Details).",
        "Hover overlay triggers that display category metadata and contextual descriptions in real-time.",
        "Custom-built fullscreen overlay lightbox complete with sliding slide controls and keyboard listeners."
      ],
      designNotes: "Designed without external bloated library dependencies to guarantee lightning-fast load speeds, utilizing custom React state hooks and CSS transitions for micro-animations.",
      talkingPoints: "“The gallery isn't just a grid of photos—it's a sensory experience designed to give prospective diners a visual taste of the soft lighting, physical textures, and handcrafted plates.”"
    },
    {
      title: "06 / Table Booking & Map Engine",
      subtitle: "Interactive Reservations & Verified Trust",
      type: "page",
      targetTab: "reserve",
      tagline: "CONVERSION CORE",
      description: "The primary transactional engine of the website. Converts digital curiosity into physical bookings.",
      uiHighlights: [
        "High-fidelity booking ticket form styled with physical layout details (Main Room, Counter, Terrace).",
        "A fully custom, clean, vector-rendered schematic map highlighting street corners and valet parking.",
        "Testimonials block utilizing authentic Google and Michelin verified rating badges.",
        "Collapsible FAQ accordion for immediate, clean reservation assistance."
      ],
      designNotes: "The custom vector schematic map mockups are lightweight SVG elements. They render perfectly crisp at any resolution without slow third-party API loads, protecting client site speed.",
      talkingPoints: "“The reservations slide highlights how we combined design and utility. The ticket-style confirmation slip feels physically rewarding to complete, while the star-rating aggregates remove last-minute friction.”"
    }
  ];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const activeSlideData = slides[currentSlide];

  const handleJumpToPage = (tab: string) => {
    setActiveTab(tab);
    onClose();
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const copySlideText = () => {
    let textToCopy = `Slide: ${activeSlideData.title}\n${activeSlideData.subtitle}\n\n`;
    if (activeSlideData.type === 'cover') {
      textToCopy += `Description: ${activeSlideData.description}\n\n`;
      textToCopy += `Palette:\n${activeSlideData.palette?.map(p => `- ${p.name} (${p.hex}): ${p.desc}`).join('\n')}\n\n`;
      textToCopy += `Typography:\n${activeSlideData.typography?.map(t => `- ${t.font} (${t.style}): ${t.note}`).join('\n')}`;
    } else {
      textToCopy += `Description: ${activeSlideData.description}\n\n`;
      textToCopy += `UI Highlights:\n${activeSlideData.uiHighlights?.map(h => `- ${h}`).join('\n')}\n\n`;
      textToCopy += `UX & Tech Notes: ${activeSlideData.designNotes}\n\n`;
      textToCopy += `Portfolio Pitch: ${activeSlideData.talkingPoints}`;
    }

    navigator.clipboard.writeText(textToCopy);
    setCopiedText("Copied Slide Details!");
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <div id="portfolio-slideshow-overlay" className="fixed inset-0 bg-charcoal/90 z-[100] backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-fade-in">
      <div className="bg-cream w-full max-w-6xl rounded-3xl overflow-hidden shadow-2xl flex flex-col h-[90vh] md:h-[80vh] border border-stone/30 relative">
        
        {/* Header bar */}
        <div className="px-6 py-4 bg-sand border-b border-stone/20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Presentation className="w-5 h-5 text-clay" />
            <div>
              <span className="font-serif font-bold text-charcoal text-base">Hearth &amp; Vine Case Study Deck</span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-olive block mt-0.5">Portfolio presentation mode • Use Arrow Keys</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={copySlideText}
              className="px-3.5 py-1.5 rounded-lg border border-stone/30 bg-cream/70 hover:bg-cream hover:border-clay/40 text-xs font-mono flex items-center gap-1.5 transition-all text-charcoal cursor-pointer"
              title="Copy slide notes for portfolio slides"
            >
              <Copy className="w-3.5 h-3.5 text-clay" />
              {copiedText || "Copy Slide Notes"}
            </button>
            
            <button
              onClick={onClose}
              className="p-2 hover:bg-stone/10 rounded-full transition-colors text-charcoal cursor-pointer"
              aria-label="Close Slideshow"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Slides content body */}
        <div className="flex-1 overflow-y-auto grid grid-cols-1 lg:grid-cols-12 gap-0">
          
          {/* Left Column: The Presentation Slide Card (Visual Frame) */}
          <div className="lg:col-span-7 bg-[#EBE8E0]/40 p-6 md:p-10 flex items-center justify-center border-r border-stone/20">
            <div className="w-full max-w-lg aspect-4/3 bg-cream rounded-2xl shadow-xl border border-stone/25 p-8 flex flex-col justify-between relative overflow-hidden text-left transform hover:scale-[1.01] transition-transform duration-300">
              {/* Cover layout */}
              {activeSlideData.type === 'cover' ? (
                <div className="space-y-6 my-auto">
                  <div className="inline-flex items-center gap-2 bg-clay/10 text-clay px-3 py-1 rounded-full">
                    <Flame className="w-3 h-3 fill-clay/20 animate-pulse" />
                    <span className="font-mono text-[9px] uppercase tracking-widest font-bold">Brand Presentation</span>
                  </div>
                  <h2 className="font-serif text-4xl md:text-5xl font-light text-charcoal leading-tight">
                    Hearth &amp; Vine <br />
                    <span className="italic font-normal text-clay">Bistro Case Study</span>
                  </h2>
                  <p className="text-charcoal/70 text-xs md:text-sm leading-relaxed max-w-sm">
                    {activeSlideData.description}
                  </p>
                  <div className="flex gap-2 flex-wrap pt-2">
                    {activeSlideData.palette?.slice(0, 4).map((color, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 bg-sand/50 px-2 py-1 rounded-md border border-stone/15">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color.hex }} />
                        <span className="font-mono text-[9px] text-charcoal font-semibold">{color.hex}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                /* Page Slide layout representing layout hierarchy */
                <div className="flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-stone/20 pb-2">
                      <span className="font-mono text-[9px] uppercase tracking-widest text-clay font-bold">{activeSlideData.tagline}</span>
                      <span className="bg-clay text-cream text-[9px] font-mono px-2 py-0.5 rounded-full">Slide {currentSlide}</span>
                    </div>
                    
                    <h3 className="font-serif text-2xl font-light text-charcoal leading-tight">
                      {activeSlideData.title?.split('/')[1] || activeSlideData.title}
                    </h3>
                    <p className="text-charcoal/70 text-xs leading-relaxed">
                      {activeSlideData.description}
                    </p>

                    {/* Miniature UI Layout simulation */}
                    <div className="bg-sand/30 border border-dashed border-stone/25 rounded-xl p-4 space-y-2 mt-4">
                      <span className="font-mono text-[8px] uppercase tracking-widest text-olive block font-bold">Key Interactive Elements:</span>
                      <div className="grid grid-cols-2 gap-2 text-[10px] text-charcoal/80 font-serif">
                        {activeSlideData.uiHighlights?.slice(0, 4).map((h, idx) => (
                          <div key={idx} className="flex items-start gap-1.5 bg-cream p-1.5 rounded-md border border-stone/10">
                            <span className="text-clay font-bold mt-0.5">•</span>
                            <span className="leading-snug line-clamp-2">{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Quick Preview Anchor */}
                  {activeSlideData.targetTab && (
                    <div className="pt-4 border-t border-stone/20 flex justify-between items-center mt-4 shrink-0">
                      <span className="font-mono text-[8px] text-olive uppercase tracking-widest">Interactive Component</span>
                      <button
                        onClick={() => handleJumpToPage(activeSlideData.targetTab!)}
                        className="text-xs font-mono text-clay hover:text-olive font-bold flex items-center gap-1 cursor-pointer transition-colors"
                      >
                        Navigate to live view →
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* Aesthetic footer details representing brand */}
              <div className="mt-auto border-t border-stone/25 pt-4 flex items-center justify-between text-[9px] font-mono text-olive/60">
                <span>HEARTH &amp; VINE • BRAND CASE STUDY</span>
                <span>{currentSlide + 1} / {slides.length}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Notes & Tech Highlights */}
          <div className="lg:col-span-5 p-6 md:p-10 flex flex-col justify-between bg-cream text-left">
            <div className="space-y-6">
              
              <div className="space-y-1">
                <span className="font-mono text-[9px] uppercase tracking-widest text-clay font-bold block">{activeSlideData.subtitle}</span>
                <h2 className="font-serif text-3xl font-light text-charcoal">{activeSlideData.title}</h2>
              </div>

              <div className="w-12 h-0.5 bg-clay/50" />

              {/* Slide Specific detailed study guidelines */}
              {activeSlideData.type === 'cover' ? (
                <div className="space-y-6">
                  {/* Palette details list */}
                  <div className="space-y-3">
                    <h4 className="font-mono text-[10px] uppercase text-olive tracking-widest font-bold">The Design Palette</h4>
                    <div className="grid grid-cols-1 gap-2.5">
                      {activeSlideData.palette?.map((color, idx) => (
                        <div key={idx} className="flex items-center justify-between text-xs border-b border-stone/15 pb-1.5">
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded-full border border-stone/20" style={{ backgroundColor: color.hex }} />
                            <span className="font-serif font-bold text-charcoal">{color.name}</span>
                          </div>
                          <div className="text-right">
                            <span className="font-mono text-xs font-semibold text-clay block">{color.hex}</span>
                            <span className="text-[10px] text-charcoal/50 block">{color.desc}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Typography Guidelines */}
                  <div className="space-y-3 pt-2">
                    <h4 className="font-mono text-[10px] uppercase text-olive tracking-widest font-bold">Typography Hierarchy</h4>
                    <div className="space-y-2.5">
                      {activeSlideData.typography?.map((typo, idx) => (
                        <div key={idx} className="text-xs">
                          <span className="block font-serif font-bold text-charcoal">{typo.font} <span className="font-mono text-[9px] uppercase text-clay font-normal">({typo.style})</span></span>
                          <p className="text-charcoal/65 text-xs leading-normal mt-0.5">{typo.note}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                /* Regular page detailed study guidelines */
                <div className="space-y-6">
                  {/* UI Highlights */}
                  <div className="space-y-3">
                    <h4 className="font-mono text-[10px] uppercase text-olive tracking-widest font-bold">Interaction Features</h4>
                    <ul className="space-y-2 text-xs text-charcoal/80">
                      {activeSlideData.uiHighlights?.map((h, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle className="w-3.5 h-3.5 text-olive shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Design & UX blueprint strategy */}
                  <div className="bg-sand/35 border border-stone/20 p-4 rounded-2xl space-y-2">
                    <h4 className="font-mono text-[10px] uppercase text-olive tracking-widest font-bold flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-clay" /> UX Design Blueprint
                    </h4>
                    <p className="text-charcoal/75 text-xs leading-relaxed italic">
                      {activeSlideData.designNotes}
                    </p>
                  </div>

                  {/* Portfolio talking points */}
                  <div className="space-y-2 pt-2">
                    <h4 className="font-mono text-[10px] uppercase text-olive tracking-widest font-bold flex items-center gap-1.5">
                      <MousePointer className="w-3.5 h-3.5 text-clay" /> Portfolio Interview Talking Point
                    </h4>
                    <p className="text-charcoal/80 text-xs leading-relaxed font-serif bg-clay/5 p-3.5 rounded-xl border border-clay/10 italic">
                      {activeSlideData.talkingPoints}
                    </p>
                  </div>
                </div>
              )}

            </div>

            {/* Quick Action Navigation Bar */}
            <div className="pt-6 border-t border-stone/20 mt-6 flex items-center justify-between shrink-0">
              <span className="font-mono text-[10px] uppercase text-olive font-bold">Use keyboard arrows</span>
              <div className="flex gap-2">
                {activeSlideData.targetTab && (
                  <button
                    onClick={() => handleJumpToPage(activeSlideData.targetTab!)}
                    className="bg-clay text-cream hover:bg-clay/90 px-4 py-2 rounded-lg text-[10px] font-mono uppercase tracking-widest transition-all cursor-pointer"
                  >
                    Jump to Live Page
                  </button>
                )}
              </div>
            </div>

          </div>

        </div>

        {/* Carousel controls and slide dots footer */}
        <div className="px-6 py-4 bg-sand border-t border-stone/20 flex items-center justify-between shrink-0">
          <button
            onClick={handlePrev}
            className="p-2.5 border border-stone/30 bg-cream/70 hover:bg-cream hover:border-clay/40 rounded-xl flex items-center gap-1.5 text-xs font-mono transition-all text-charcoal cursor-pointer"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Prev</span>
          </button>
          
          {/* Progress dots indicators */}
          <div className="flex gap-2 items-center">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentSlide === idx 
                    ? 'w-6 bg-clay' 
                    : 'w-2.5 bg-stone hover:bg-clay/40'
                }`}
                title={`Go to Slide ${idx + 1}`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-2.5 border border-stone/30 bg-cream/70 hover:bg-cream hover:border-clay/40 rounded-xl flex items-center gap-1.5 text-xs font-mono transition-all text-charcoal cursor-pointer"
            aria-label="Next Slide"
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
