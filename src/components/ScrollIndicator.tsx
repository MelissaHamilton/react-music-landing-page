import { ChevronDown } from 'lucide-react';

const ScrollIndicator = () => {
  return (
    <div className="absolute bottom-8 md:bottom-12 left-4 md:left-12 animate-fade-up-delay-3">
      <div className="relative w-24 h-24 md:w-32 md:h-32">
        {/* Circular Text */}
        <svg 
          className="circular-text w-full h-full" 
          viewBox="0 0 100 100"
        >
          <defs>
            <path 
              id="circlePath" 
              d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
            />
          </defs>
          <text className="text-[8px] fill-foreground uppercase tracking-[0.2em]">
            <textPath href="#circlePath">
              EXPLORE · TO · SCROLL · EXPLORE · TO · SCROLL · 
            </textPath>
          </text>
        </svg>
        
        {/* Center Arrow */}
        <div className="absolute inset-0 flex items-center justify-center">
          <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-foreground animate-bounce" />
        </div>
      </div>
    </div>
  );
};

export default ScrollIndicator;
