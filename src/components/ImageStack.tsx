interface ImageStackProps {
  src: string;
  alt: string;
}

const ImageStack = ({ src, alt }: ImageStackProps) => {
  return (
    <div className="absolute bottom-36 md:bottom-44 left-1/2 -translate-x-1/2 z-20 animate-fade-up-delay-1">
      {/* Stacked Images Effect */}
      <div className="relative perspective-1000">
        {/* Background layers for stack effect */}
        <div className="absolute inset-0 bg-card/20 rounded-xl transform rotate-[4deg] translate-x-3 translate-y-3 border border-foreground/5 scale-[0.97]" />
        <div className="absolute inset-0 bg-card/40 rounded-xl transform -rotate-[3deg] -translate-x-2 translate-y-2 border border-foreground/5 scale-[0.98]" />
        
        {/* Main Image with curved effect */}
        <div className="relative w-72 md:w-96 lg:w-[28rem] h-44 md:h-56 lg:h-64 overflow-hidden rounded-xl border border-foreground/10 shadow-2xl shadow-primary/10">
          <img 
            src={src} 
            alt={alt}
            className="w-full h-full object-cover"
          />
          
          {/* Curved glass overlay effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/5 via-transparent to-background/40" />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background/60 to-transparent" />
        </div>
      </div>
    </div>
  );
};

export default ImageStack;
