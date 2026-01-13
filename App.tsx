import React from 'react';
import ImageSlice from './components/ImageSlice';
import StickyCTA from './components/StickyCTA';
import { LP_IMAGES } from './constants';

const App: React.FC = () => {
  return (
    // Main Container:
    // - min-h-screen to ensure full height
    // - bg-[#b2efff] to match the index.html and design spec (was #E0F2FE)
    <div className="min-h-screen bg-[#b2efff] flex flex-col items-center justify-start">
      
      {/* 
        Content Wrapper:
        - w-full to ensure it fills the full width on all devices
        - pb-32 to add padding at the bottom so the sticky CTA doesn't cover the last part of content
      */}
      <main className="w-full bg-white min-h-screen pb-32 flex flex-col">
        {LP_IMAGES.map((img, index) => (
          <ImageSlice
            key={img.id}
            src={img.src}
            alt={img.alt}
            isFirst={index === 0}
            isLast={index === LP_IMAGES.length - 1}
          />
        ))}
      </main>

      {/* Sticky Call to Action Button */}
      <StickyCTA />
      
      {/* 
        Global styles injection for custom animations 
        (Usually in index.css, but injected here for single-file XML requirement simplicity)
      */}
      <style>{`
        @keyframes shimmer {
          0% { left: -100%; }
          50% { left: 100%; }
          100% { left: 100%; }
        }
      `}</style>
    </div>
  );
};

export default App;