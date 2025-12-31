import { ArrowRight } from 'lucide-react';

const DemosCTA = () => {
  return (
    <div className="absolute top-6 md:top-8 right-6 md:right-8 z-40 animate-fade-up">
      <a 
        href="#contact" 
        className="group flex items-center gap-2 text-sm md:text-base text-muted-foreground hover:text-foreground transition-colors"
      >
        <span>Send your demos</span>
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </a>
    </div>
  );
};

export default DemosCTA;
