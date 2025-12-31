interface FloatingImageProps {
  src: string;
  alt: string;
  caption: string;
  position: 'left' | 'right';
  className?: string;
}

const FloatingImage = ({ src, alt, caption, position, className = '' }: FloatingImageProps) => {
  const positionClasses = position === 'left' 
    ? 'left-4 md:left-8 lg:left-16' 
    : 'right-4 md:right-8 lg:right-16';
  
  const floatClass = position === 'left' ? 'float-subtle' : 'float-subtle-delay';

  return (
    <div className={`absolute ${positionClasses} top-16 md:top-20 ${floatClass} ${className}`}>
      <div className="flex items-start gap-3">
        {position === 'left' && (
          <span className="vertical-text text-xs md:text-sm text-muted-foreground tracking-widest uppercase mt-4">
            {caption}
          </span>
        )}
        
        <div className="relative group">
          {/* Image Container */}
          <div className="w-32 md:w-44 lg:w-52 h-48 md:h-64 lg:h-80 overflow-hidden border border-foreground/10">
            <img 
              src={src} 
              alt={alt}
              className="w-full h-full object-cover grayscale-[20%] transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
            />
          </div>
          
          {/* Squiggle Decoration */}
          {position === 'left' && (
            <svg 
              className="absolute -bottom-8 -left-4 w-16 h-16 text-secondary opacity-80"
              viewBox="0 0 100 100"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M10,50 Q25,20 40,50 T70,50 T100,50" strokeLinecap="round" />
              <path d="M10,60 Q25,30 40,60 T70,60 T100,60" strokeLinecap="round" />
            </svg>
          )}
        </div>
        
        {position === 'right' && (
          <span className="vertical-text text-xs md:text-sm text-muted-foreground tracking-widest uppercase mt-4">
            {caption}
          </span>
        )}
      </div>
    </div>
  );
};

export default FloatingImage;
