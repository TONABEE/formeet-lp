import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { FORM_URL } from '../constants';

const StickyCTA: React.FC = () => {
  const handleClick = () => {
    window.open(FORM_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 pb-6 safe-area-bottom flex justify-center pointer-events-none">
      <div className="w-full max-w-md pointer-events-auto">
        {/* Main CTA Button */}
        {/* 
            Design Spec: 濃い黄（#f9c12e）
            Border/Shadow for 3D effect
        */}
        <button
          onClick={handleClick}
          className="group relative w-full bg-[#f9c12e] hover:bg-[#e0ac29] text-black font-bold text-lg md:text-xl py-4 rounded-full shadow-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 border-b-4 border-[#d4a017]"
        >
          {/* Shine effect overlay */}
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <div className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 animate-[shimmer_3s_infinite]" />
          </div>

          <Sparkles className="w-5 h-5 text-slate-800" />
          <span>モニターに応募する (無料)</span>
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </button>
        
        {/* Subtext below button */}
        <div className="text-center mt-2">
           <p className="text-xs font-medium text-slate-700 bg-white/90 backdrop-blur-sm inline-block px-3 py-1 rounded-full shadow-sm">
             先着100名限定 / 3分で完了
           </p>
        </div>
      </div>
      
      <style>{`
        /* Add support for iPhone X+ home indicator area */
        .safe-area-bottom {
          padding-bottom: env(safe-area-inset-bottom, 24px);
        }
      `}</style>
    </div>
  );
};

export default StickyCTA;