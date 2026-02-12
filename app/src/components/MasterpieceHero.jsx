import React from 'react';

const MasterpieceHero = () => {
  return (
    <div
      className="flex min-h-screen w-full flex-col items-center justify-center p-8"
      style={{ backgroundColor: '#4C4A4A' }}
    >
      <div className="mb-12 flex justify-center">
        <img
          src="/ROI_FIRST_LOGO.png"
          alt="ROI-First AI Solutions"
          className="h-20 w-auto object-contain"
        />
      </div>

      <svg
        viewBox="0 0 800 300"
        className="w-full max-w-5xl overflow-visible select-none"
      >
        <defs>
          <style>{`
            .hero-text {
              font-family: 'Inter', 'Geist', sans-serif;
              font-weight: 900;
              letter-spacing: -0.06em;
              text-transform: uppercase;
              paint-order: stroke fill; /* Critical: Renders stroke behind fill */
            }
          `}</style>
        </defs>

        <text
          x="50%"
          y="40%"
          textAnchor="middle"
          className="hero-text fill-slate-900 stroke-slate-700"
          strokeWidth="3"
        >
          ROI-First
        </text>

        <text
          x="50%"
          y="80%"
          textAnchor="middle"
          className="hero-text fill-transparent stroke-slate-500"
          strokeWidth="1.5"
        >
          AI Solutions
        </text>
      </svg>

      <p className="mt-8 text-center text-sm font-medium uppercase tracking-[0.2em] text-white/80">
        Artificial Intelligence Developments, LLC
      </p>

      <p className="mt-2 text-center text-sm text-white/50">roifirst.dev</p>
    </div>
  );
};

export default MasterpieceHero;
