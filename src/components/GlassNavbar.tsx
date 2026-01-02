import { useState } from 'react';
import { Menu, Music, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const GlassNavbar = () => {
  const navItems = ['Home', 'About', 'Artists', 'Releases', 'Contact'];
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-50 animate-fade-up-delay-2 w-auto max-w-[calc(100%-2rem)]">
      <div className="glass rounded-full px-4 sm:px-5 md:px-6 lg:px-8 py-3 md:py-4">
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-8">
          {/* Mobile Menu with Sheet */}
          <div className="sm:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <button className="text-foreground hover:text-primary transition-colors">
                  <Menu className="w-5 h-5" />
                </button>
              </SheetTrigger>
              <SheetContent side="bottom" className="bg-primary/10 backdrop-blur-xl border-t border-primary/20 rounded-t-3xl z-[300]">
                <div className="flex flex-col items-center gap-4 py-6">
                  {navItems.map((item, index) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      onClick={() => setOpen(false)}
                      className={`text-lg font-medium transition-colors ${
                        index === 0 ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Menu Icon */}
          <button className="hidden sm:block text-foreground hover:text-primary transition-colors">
            <Menu className="w-5 h-5" />
          </button>

          {/* Mobile: Show Home */}
          <a href="#home" className="sm:hidden text-sm font-medium text-foreground">
            Home
          </a>
          
          {/* Nav Links - Hidden on mobile, shown on tablet+ */}
          <div className="hidden sm:flex items-center gap-2 md:gap-4 lg:gap-6">
            {navItems.map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-xs md:text-sm lg:text-base font-medium transition-colors link-hover whitespace-nowrap ${
                  index === 0 ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item}
              </a>
            ))}
          </div>
          
          {/* Music Icon */}
          <button className="p-2 bg-primary/20 rounded-lg hover:bg-primary/30 transition-colors group shrink-0">
            <Music className="w-5 h-5 text-primary group-hover:text-foreground transition-colors" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default GlassNavbar;
