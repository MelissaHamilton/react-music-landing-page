import { Menu, Music } from 'lucide-react';

const GlassNavbar = () => {
  const navItems = ['Home', 'About', 'Artists', 'Releases', 'Contact'];

  return (
    <nav className="fixed bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-50 animate-fade-up-delay-2 w-[calc(100%-2rem)] max-w-fit">
      <div className="glass rounded-full px-3 sm:px-4 md:px-8 py-2.5 sm:py-3 md:py-4">
        <div className="flex items-center gap-2 sm:gap-4 md:gap-8">
          {/* Menu Icon */}
          <button className="text-foreground hover:text-primary transition-colors shrink-0">
            <Menu className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          
          {/* Nav Links - Hidden on mobile, shown on tablet+ */}
          <div className="hidden sm:flex items-center gap-3 md:gap-6">
            {navItems.map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-xs md:text-base font-medium transition-colors link-hover whitespace-nowrap ${
                  index === 0 ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile: Show only Home */}
          <div className="flex sm:hidden items-center gap-2">
            <a href="#home" className="text-xs font-medium text-foreground">Home</a>
          </div>
          
          {/* Music Icon */}
          <button className="ml-1 sm:ml-2 md:ml-4 p-1.5 sm:p-2 bg-primary/20 rounded-lg hover:bg-primary/30 transition-colors group shrink-0">
            <Music className="w-4 h-4 md:w-5 md:h-5 text-primary group-hover:text-foreground transition-colors" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default GlassNavbar;
