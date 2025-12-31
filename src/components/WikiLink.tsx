import { HelpCircle } from 'lucide-react';

const WikiLink = () => {
  return (
    <div className="absolute bottom-6 md:bottom-8 right-6 md:right-8 z-40 animate-fade-up-delay-2">
      <a 
        href="#wiki" 
        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <HelpCircle className="w-4 h-4" />
        <span>Wiki</span>
      </a>
    </div>
  );
};

export default WikiLink;
