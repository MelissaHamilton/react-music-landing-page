import { Menu, Music } from 'lucide-react';

const GlassNavbar = () => {
  const navItems = ['Home', 'About', 'Artists', 'Releases', 'Contact'];

  return (
    <nav className="fixed bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-50 animate-fade-up-delay-2">
      <div className="glass rounded-full px-4 md:px-8 py-3 md:py-4">
        <div className="flex items-center gap-4 md:gap-8">
          {/* Menu Icon */}
          <button className="text-foreground hover:text-primary transition-colors">
            <Menu className="w-5 h-5" />
          </button>
          
          {/* Nav Links */}
          <div className="flex items-center gap-4 md:gap-6">
            {navItems.map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-sm md:text-base font-medium transition-colors link-hover ${
                  index === 0 ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item}
              </a>
            ))}
          </div>
          
          {/* Music Icon */}
          <button className="ml-2 md:ml-4 p-2 bg-primary/20 rounded-lg hover:bg-primary/30 transition-colors group">
            <Music className="w-4 h-4 md:w-5 md:h-5 text-primary group-hover:text-foreground transition-colors" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default GlassNavbar;
