import React from 'react';

// Recommended Font: 'Inter' or 'Geist' for that high-signal corporate look.
const HeroText = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-black">
      <h1
        className="font-black tracking-tighter text-transparent"
        style={{
          fontSize: 'clamp(4rem, 15vw, 12rem)',
          WebkitTextStroke: '1px #94a3b8', // Subtle slate-400 stroke
          backgroundImage: 'linear-gradient(to bottom, #1e293b, #000)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
        }}
      >
        ROI-First AI Solutions
      </h1>
    </div>
  );
};

export default HeroText;
