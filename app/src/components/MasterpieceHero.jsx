import React from 'react';

const MasterpieceHero = () => {
  return (
    <div
      className="flex min-h-screen w-full flex-col items-center justify-center p-8"
      style={{ backgroundColor: '#1c1917' }}
    >
      <div className="mb-0 flex justify-center">
        <img
          src="/ROI_FIRST_LOGO.png"
          alt="ROI-First AI Solutions"
          className="h-80 w-auto object-contain"
        />
      </div>

      <img
        src="/AI_SOLUTIONS.png"
        alt="AI Solutions"
        className="w-full max-w-5xl select-none object-contain"
      />

      <p className="mt-5 text-center text-sm font-medium uppercase tracking-[0.2em] text-white/80">
        We Deliver Artificial Intelligence Solutions That Prioritize Return on Investment, In Record Time.
      </p>

      <p className="mt-2 text-center text-sm text-white/50">© 2026 Artificial Intelligence Developments, LLC</p>
    </div>
  );
};

export default MasterpieceHero;
