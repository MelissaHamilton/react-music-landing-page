const GridBackground = () => {
  return (
    <>
      {/* Grid Background */}
      <div className="fixed inset-0 grid-bg pointer-events-none" />
      
      {/* Teal Glow Effects */}
      <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Grain Overlay */}
      <div className="grain-overlay" />
    </>
  );
};

export default GridBackground;
