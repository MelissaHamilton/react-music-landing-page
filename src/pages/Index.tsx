import { useEffect, useRef } from 'react';
import GridBackground from '@/components/GridBackground';
import SoulAssemblyLogo from '@/components/SoulAssemblyLogo';
import FloatingImage from '@/components/FloatingImage';
import ScrollIndicator from '@/components/ScrollIndicator';
import GlassNavbar from '@/components/GlassNavbar';
import ImageStack from '@/components/ImageStack';
import DemosCTA from '@/components/DemosCTA';
import WikiLink from '@/components/WikiLink';

import artistLeft from '@/assets/artist-left.jpg';
import artistRight from '@/assets/artist-right.jpg';
import bandPerformance from '@/assets/band-performance.jpg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const UnicornStudio: any;

const Index = () => {
  const unicornRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sceneRef = useRef<any>(null);

  useEffect(() => {
    if (typeof UnicornStudio !== "undefined" && unicornRef.current) {
      console.log("Adding Unicorn Studio scene to:", unicornRef.current.id);
      UnicornStudio.addScene({
        elementId: unicornRef.current.id,
        projectId: "Vvq3qQhEUAf6CHt79Y6U",
        scale: 1,
        dpi: 1.5,
        lazyLoad: false,
        altText: "Interactive background animation",
        ariaLabel: "Unicorn Studio background animation",
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .then((scene: any) => {
        sceneRef.current = scene;
        console.log("Unicorn Studio scene added successfully:", scene);
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .catch((err: any) => {
        console.error("Failed to add Unicorn Studio scene:", err);
      });
    } else {
      console.log("UnicornStudio debug:", {
        available: typeof UnicornStudio !== "undefined",
        refReady: !!unicornRef.current
      });
    }

    return () => {
      if (sceneRef.current?.destroy) {
        console.log("Destroying Unicorn Studio scene");
        sceneRef.current.destroy();
        sceneRef.current = null;
      }
    };
  }, []);

  return (
    <>
      {/* SEO Meta */}
      <title>Soul Assembly | Music Collective</title>
      <meta name="description" content="Soul Assembly is a music collective inspired by the legacy of soul and funk. Discover our artists, releases, and submit your demos." />
      
      <main className="relative min-h-screen overflow-hidden bg-background">
        {/* Unicorn Studio Animation Background */}
        <div
          ref={unicornRef}
          id="unicorn-hero-bg"
          className="absolute inset-0 w-full h-full"
          style={{ 
            zIndex: 1,
            backgroundColor: 'hsl(0 0% 0%)', // Fallback if animation fails
          }}
        >
          {/* Animation renders here */}
        </div>

        {/* Grid Background - sits on top of Unicorn but behind content */}
        <div style={{ position: 'relative', zIndex: 2 }}>
          <GridBackground />
        </div>
        
        {/* Main Content Container - All content on top */}
        <div className="relative" style={{ zIndex: 100 }}>
          {/* Demo CTA - Top Right */}
          <DemosCTA />
          
          {/* Floating Left Image */}
          <FloatingImage
            src={artistLeft}
            alt="Soul artist performing on stage"
            caption="Live Performance"
            position="left"
          />
          
          {/* Floating Right Image */}
          <FloatingImage
            src={artistRight}
            alt="Musician playing guitar"
            caption="The Sound"
            position="right"
          />
          
          {/* Center Logo */}
          <div className="relative flex items-center justify-center min-h-screen">
            <SoulAssemblyLogo />
          </div>
          
          {/* Image Stack - Center Bottom */}
          <ImageStack 
            src={bandPerformance} 
            alt="Soul Assembly band performance"
          />
          
          {/* Scroll Indicator - Bottom Left */}
          <ScrollIndicator />
          
          {/* Glass Navigation Bar */}
          <GlassNavbar />
          
          {/* Wiki Link - Bottom Right */}
          <WikiLink />
        </div>
      </main>
    </>
  );
};

export default Index;
