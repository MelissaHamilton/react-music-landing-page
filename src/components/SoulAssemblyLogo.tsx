const SoulAssemblyLogo = () => {
  return (
    <div className="logo-animate flex flex-col items-start justify-center relative z-[200] pl-8 md:pl-16">
      <div className="relative text-left">
        {/* Main Logo Text */}
        <h1 className="font-display text-[10vw] md:text-[10vw] lg:text-[12vw] font-bold tracking-tighter leading-[0.85] text-foreground">
          <span className="block">Soul</span>
          <span className="block">Assembly</span>
        </h1>
        
        {/* Decorative Circle */}
        <div className="absolute -bottom-4 right-8 md:right-16 w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-foreground opacity-60" />
      </div>
    </div>
  );
};

export default SoulAssemblyLogo;
