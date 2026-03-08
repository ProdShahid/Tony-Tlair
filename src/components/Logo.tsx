import React from 'react';

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg width="56" height="56" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
        <defs>
          <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#2563EB" />
          </linearGradient>
          <linearGradient id="greenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22C55E" />
            <stop offset="100%" stopColor="#16A34A" />
          </linearGradient>
          <linearGradient id="redGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#EF4444" />
            <stop offset="100%" stopColor="#DC2626" />
          </linearGradient>
          <linearGradient id="yellowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FACC15" />
            <stop offset="100%" stopColor="#EAB308" />
          </linearGradient>
          <linearGradient id="orangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F97316" />
            <stop offset="100%" stopColor="#EA580C" />
          </linearGradient>
        </defs>
        <g strokeWidth="6" strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10">
          
          {/* --- LAYER 1: INNER VERTICALS (Back) --- */}
          <path d="M 37.5 30 L 37.5 90" stroke="url(#greenGrad)" />
          <path d="M 82.5 30 L 82.5 90" stroke="url(#redGrad)" />

          {/* --- LAYER 2: BACKGROUND DIAGONALS --- */}
          {/* Blue Up-Right (Outer BL -> Inner TL -> Inner Top Center) */}
          <path d="M 15 80 L 37.5 50 L 60 40" stroke="url(#blueGrad)" />
          
          {/* Yellow Up-Left (Outer BR -> Inner TR) */}
          <path d="M 105 80 L 82.5 50" stroke="url(#yellowGrad)" />
          
          {/* Orange Inner (Inner BL -> Inner Bottom Center) */}
          <path d="M 37.5 70 L 60 80" stroke="url(#orangeGrad)" />

          {/* --- LAYER 3: OUTER FRAME --- */}
          <path d="M 15 40 L 60 20" stroke="url(#blueGrad)" /> {/* Blue Top-Left */}
          <path d="M 60 20 L 105 40" stroke="url(#greenGrad)" /> {/* Green Top-Right */}
          <path d="M 105 40 L 105 80" stroke="url(#yellowGrad)" /> {/* Yellow Right */}
          <path d="M 105 80 L 60 100 L 15 80" stroke="url(#orangeGrad)" /> {/* Orange Bottom */}
          <path d="M 15 80 L 15 40" stroke="url(#blueGrad)" /> {/* Blue Left */}

          {/* --- LAYER 4: TOP & INNER STRUCTURE --- */}
          {/* Green Roof & Inner Diag */}
          <path d="M 60 20 L 37.5 30" stroke="url(#greenGrad)" />
          <path d="M 60 20 L 82.5 30" stroke="url(#greenGrad)" />
          <path d="M 82.5 30 L 60 40" stroke="url(#greenGrad)" />

          {/* Red Inner Diag (Inner BR -> Inner Bottom Center) */}
          <path d="M 82.5 70 L 60 80" stroke="url(#redGrad)" />

          {/* --- LAYER 5: FOREGROUND DIAGONALS (Overlays) --- */}
          {/* Blue Down-Right (Outer TL -> Inner BL) - Crosses Blue Up-Right */}
          <path d="M 15 40 L 37.5 70" stroke="url(#blueGrad)" />

          {/* Yellow Down-Left (Outer TR -> Inner BR) - Crosses Yellow Up-Left */}
          <path d="M 105 40 L 82.5 70" stroke="url(#yellowGrad)" />

          {/* --- LAYER 6: FINAL INTERLACING FIXES --- */}
          {/* Ensure Green Top-Inner is over Blue Top-Inner at (60, 40) */}
          <path d="M 71.25 35 L 60 40" stroke="url(#greenGrad)" />
          
          {/* Ensure Red Bottom-Inner is over Orange Bottom-Inner at (60, 80) */}
          <path d="M 71.25 75 L 60 80" stroke="url(#redGrad)" />

        </g>
      </svg>
      <div className="flex flex-col justify-center pt-1">
        <span className="text-4xl font-bold text-[#2C353E] leading-none tracking-wide">REVOLT</span>
        <span className="text-[0.65rem] font-medium tracking-[0.2em] text-[#828A95] uppercase mt-1">Global Services & Consulting</span>
      </div>
    </div>
  );
}
