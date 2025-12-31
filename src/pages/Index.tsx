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

const Index = () => {
  return (
    <>
      {/* SEO Meta */}
      <title>Soul Assembly | Music Collective</title>
      <meta name="description" content="Soul Assembly is a music collective inspired by the legacy of soul and funk. Discover our artists, releases, and submit your demos." />
      
      <main className="relative min-h-screen overflow-hidden bg-background">
        {/* Background Elements */}
        <GridBackground />
        
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
        <div className="relative z-10 flex items-center justify-center min-h-screen">
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
      </main>
    </>
  );
};

export default Index;
