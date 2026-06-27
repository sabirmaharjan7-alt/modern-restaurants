/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Menu from './components/Menu';
import Story from './components/Story';
import Catering from './components/Catering';
import Ambience from './components/Ambience';
import Reserve from './components/Reserve';
import Slideshow from './components/Slideshow';
import { Presentation, Smartphone, Monitor, Info } from 'lucide-react';
import { MobilePreviewProvider } from './context/MobilePreviewContext';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [isSlideshowOpen, setIsSlideshowOpen] = useState<boolean>(false);
  const [isPreviewModeMobile, setIsPreviewModeMobile] = useState<boolean>(false);

  const renderActiveContent = () => {
    const getContent = () => {
      switch (activeTab) {
        case 'home':
          return <Home setActiveTab={setActiveTab} />;
        case 'menu':
          return <Menu setActiveTab={setActiveTab} />;
        case 'story':
          return <Story setActiveTab={setActiveTab} />;
        case 'catering':
          return <Catering />;
        case 'ambience':
          return <Ambience />;
        case 'reserve':
          return <Reserve />;
        default:
          return <Home setActiveTab={setActiveTab} />;
      }
    };

    return (
      <MobilePreviewProvider value={isPreviewModeMobile}>
        {getContent()}
      </MobilePreviewProvider>
    );
  };

  // If mobile preview simulator is turned on
  if (isPreviewModeMobile) {
    return (
      <div id="mobile-simulator-layout" className="min-h-screen bg-[#111111] flex flex-col items-center justify-center p-4 md:p-8 selection:bg-clay selection:text-cream font-sans">
        
        {/* Device Mode Controls (Ambient Sticky Pill) */}
        <div className="mb-6 flex items-center gap-3 bg-[#1A1A1A] backdrop-blur-md px-5 py-2.5 rounded-full border border-stone/80/20 text-cream shadow-xl">
          <span className="font-mono text-[10px] text-stone/40 uppercase tracking-widest font-bold">Responsive Viewer:</span>
          
          <button 
            onClick={() => {
              setIsPreviewModeMobile(false);
              // Scroll to top
              window.scrollTo({ top: 0 });
            }}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all hover:bg-cream/10 text-cream/70 cursor-pointer"
          >
            <Monitor className="w-3.5 h-3.5 text-stone/50" />
            <span>Desktop Widescreen</span>
          </button>
          
          <div className="w-px h-4 bg-stone/20" />
          
          <button 
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-clay text-cream transition-all cursor-default"
          >
            <Smartphone className="w-3.5 h-3.5 text-cream" />
            <span>iPhone 15 simulated</span>
          </button>
        </div>

        {/* Smartphone Device Frame Mockup Container */}
        <div className="relative w-[375px] h-[780px] bg-cream rounded-[48px] shadow-[0_0_0_12px_#262626,0_0_0_13px_#333333,0_20px_60px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.1)] overflow-hidden border border-stone/30 flex flex-col transition-all duration-500 transform scale-95 sm:scale-100 origin-center">
          
          {/* iOS Dynamic Notch & Status Bar */}
          <div className="h-10 bg-cream flex items-center justify-between px-6 shrink-0 z-50 text-[10px] font-mono font-bold text-charcoal select-none border-b border-stone/5 relative">
            <span className="font-sans font-semibold text-[11px] tracking-tight">9:41</span>
            
            {/* Dynamic Island / Camera Notch */}
            <div className="w-24 h-4 bg-[#262626] rounded-b-xl mx-auto absolute top-0 left-1/2 -translate-x-1/2 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#111111] absolute right-4" />
            </div>
            
            <div className="flex items-center gap-1.5">
              <span className="text-[9px] font-sans font-bold">5G</span>
              <div className="w-4.5 h-2.5 border border-charcoal rounded-xs p-0.5 flex items-center">
                <div className="w-full h-full bg-charcoal rounded-3xs" />
              </div>
            </div>
          </div>
          
          {/* Simulated App Container (with custom scrollbar) */}
          <div className="flex-1 overflow-y-auto flex flex-col justify-between relative scrollbar-thin scrollbar-thumb-stone/30">
            {/* Force mobile-responsive state for Header inside mockup */}
            <Header 
              activeTab={activeTab} 
              setActiveTab={setActiveTab} 
              onOpenSlideshow={() => setIsSlideshowOpen(true)} 
              isMobileForced={true}
            />
            
            {/* Simulated Main Content Area */}
            <main id="primary-layout-container" className="flex-1 w-full relative z-10 pt-0">
              {renderActiveContent()}
            </main>

            {/* Simulated Footer */}
            <Footer setActiveTab={setActiveTab} />
          </div>

          {/* iOS Home Grab Indicator Bar */}
          <div className="h-5 bg-cream flex items-center justify-center shrink-0 z-50 select-none border-t border-stone/5">
            <div className="w-28 h-1 bg-charcoal/25 rounded-full" />
          </div>
        </div>

        {/* Informative Tip */}
        <p className="mt-5 text-stone/50 text-[11px] font-mono tracking-wide max-w-xs text-center leading-relaxed flex items-center gap-1.5 justify-center">
          <Info className="w-3.5 h-3.5 text-clay" />
          <span>Fully interactive mobile preview • Touch scroll enabled</span>
        </p>

        {/* Floating Presentation Helper Badge */}
        <div className="fixed bottom-6 right-6 z-40">
          <button
            onClick={() => setIsSlideshowOpen(true)}
            className="flex items-center gap-2 bg-clay text-cream hover:bg-clay/95 hover:scale-105 active:scale-95 px-5 py-3.5 rounded-full shadow-2xl transition-all duration-300 font-sans text-xs uppercase tracking-wider font-bold border border-cream/25 cursor-pointer group"
            title="Open Case Study Presentation Slides"
          >
            <Presentation className="w-4 h-4 group-hover:rotate-6 transition-transform" />
            <span>Portfolio Slides</span>
          </button>
        </div>

        {/* Immersive Slideshow Modal Overlay */}
        <Slideshow 
          isOpen={isSlideshowOpen} 
          onClose={() => setIsSlideshowOpen(false)} 
          setActiveTab={setActiveTab}
        />
      </div>
    );
  }

  // Standard responsive widescreen view
  return (
    <div id="restaurant-brochure-app" className="min-h-screen bg-cream flex flex-col justify-between selection:bg-clay selection:text-cream">
      {/* Sticky Top Navigation */}
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onOpenSlideshow={() => setIsSlideshowOpen(true)} 
      />

      {/* Main Page Layout Container */}
      <main id="primary-layout-container" className="flex-1 w-full relative z-10">
        {renderActiveContent()}
      </main>

      {/* Floating Presentation Helper Badge (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        <button
          onClick={() => setIsSlideshowOpen(true)}
          className="flex items-center gap-2 bg-clay text-cream hover:bg-clay/95 hover:scale-105 active:scale-95 px-5 py-3.5 rounded-full shadow-2xl transition-all duration-300 font-sans text-xs uppercase tracking-wider font-bold border border-cream/25 cursor-pointer group"
          title="Open Case Study Presentation Slides"
        >
          <Presentation className="w-4 h-4 group-hover:rotate-6 transition-transform" />
          <span>Portfolio Slides</span>
        </button>
      </div>

      {/* Mobile Simulator Trigger Button (Bottom Left) */}
      <div className="fixed bottom-6 left-6 z-40">
        <button
          onClick={() => {
            setIsPreviewModeMobile(true);
            window.scrollTo({ top: 0 });
          }}
          className="flex items-center gap-2 bg-charcoal text-cream hover:bg-charcoal/90 hover:scale-105 active:scale-95 px-5 py-3.5 rounded-full shadow-2xl transition-all duration-300 font-sans text-xs uppercase tracking-wider font-bold border border-stone/80/20 cursor-pointer group"
          title="See how it looks on mobile!"
        >
          <Smartphone className="w-4 h-4 group-hover:scale-110 transition-transform text-clay" />
          <span>Simulate Mobile View</span>
        </button>
      </div>

      {/* Immersive Slideshow Modal Overlay */}
      <Slideshow 
        isOpen={isSlideshowOpen} 
        onClose={() => setIsSlideshowOpen(false)} 
        setActiveTab={setActiveTab}
      />

      {/* Footer Details */}
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}
