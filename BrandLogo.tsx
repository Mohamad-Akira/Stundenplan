import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: number;
  withBackground?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 48,
  withBackground = false,
}) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
    >
      {withBackground ? (
        <div className="absolute inset-0 rounded-2xl bg-[#FFF5ED] border border-orange-200/80 shadow-md shadow-orange-900/5 p-1 flex items-center justify-center overflow-hidden">
          {/* Blueprint Construction Geometry from icon.png */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 100 100"
            fill="none"
          >
            {/* Concentric Circles */}
            <circle cx="50" cy="50" r="44" stroke="#ea580c" strokeWidth="0.8" strokeOpacity="0.4" />
            <circle cx="50" cy="50" r="32" stroke="#ea580c" strokeWidth="0.6" strokeOpacity="0.35" />
            <circle cx="50" cy="50" r="18" stroke="#ea580c" strokeWidth="0.6" strokeOpacity="0.35" />
            
            {/* Dotted Axis Guidelines */}
            <line x1="50" y1="0" x2="50" y2="100" stroke="#ea580c" strokeWidth="0.6" strokeDasharray="2 2" strokeOpacity="0.5" />
            <line x1="0" y1="76" x2="100" y2="76" stroke="#ea580c" strokeWidth="0.6" strokeOpacity="0.4" />

            {/* Tangent Triangle Guidelines */}
            <path
              d="M 50 2 L 86 76 L 14 76 Z"
              stroke="#ea580c"
              strokeWidth="0.6"
              strokeDasharray="2 2"
              strokeOpacity="0.35"
              fill="none"
            />

            {/* Inner Pivot Target (+) at (50, 49) */}
            <circle cx="50" cy="49" r="2.5" stroke="#ea580c" strokeWidth="0.6" strokeOpacity="0.5" />
            <line x1="50" y1="47.5" x2="50" y2="50.5" stroke="#ea580c" strokeWidth="0.5" strokeOpacity="0.6" />
            <line x1="48.5" y1="49" x2="51.5" y2="49" stroke="#ea580c" strokeWidth="0.5" strokeOpacity="0.6" />
          </svg>

          {/* 3D Boomerang Chevron */}
          <svg
            viewBox="0 0 100 100"
            className="w-[84%] h-[84%] relative z-10 drop-shadow-sm"
            fill="none"
          >
            <defs>
              <linearGradient id="chevronOrangeGrad" x1="50" y1="18" x2="50" y2="78" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#f97316" />
                <stop offset="35%" stopColor="#fb923c" />
                <stop offset="100%" stopColor="#ea580c" />
              </linearGradient>
              <linearGradient id="chevronShading" x1="20" y1="30" x2="80" y2="70" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#ffedd5" stopOpacity="0.6" />
                <stop offset="60%" stopColor="#ea580c" stopOpacity="0" />
                <stop offset="100%" stopColor="#9a3412" stopOpacity="0.25" />
              </linearGradient>
            </defs>

            {/* Main Chevron Shape */}
            <path
              d="M 50 18 C 55 18 59 21 62 26 L 81 66 C 84 71 82 77 77 79 C 72 81 66 79 63 74 L 50 49 L 37 74 C 34 79 28 81 23 79 C 18 77 16 71 19 66 L 38 26 C 41 21 45 18 50 18 Z"
              fill="url(#chevronOrangeGrad)"
            />
            {/* Subtle Volumetric Overlay */}
            <path
              d="M 50 18 C 55 18 59 21 62 26 L 81 66 C 84 71 82 77 77 79 C 72 81 66 79 63 74 L 50 49 L 37 74 C 34 79 28 81 23 79 C 18 77 16 71 19 66 L 38 26 C 41 21 45 18 50 18 Z"
              fill="url(#chevronShading)"
            />
          </svg>
        </div>
      ) : (
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-xs"
          fill="none"
        >
          <defs>
            <linearGradient id="chevronSimpleGrad" x1="50" y1="18" x2="50" y2="78" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#fb923c" />
              <stop offset="50%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#ea580c" />
            </linearGradient>
          </defs>
          <path
            d="M 50 18 C 55 18 59 21 62 26 L 81 66 C 84 71 82 77 77 79 C 72 81 66 79 63 74 L 50 49 L 37 74 C 34 79 28 81 23 79 C 18 77 16 71 19 66 L 38 26 C 41 21 45 18 50 18 Z"
            fill="url(#chevronSimpleGrad)"
          />
        </svg>
      )}
    </div>
  );
};
