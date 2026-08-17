import React from 'react';

/**
 * Heritage Cinemas Official Transparent Logo Component
 * Stylized H with Golden Yellow Swoosh + "HERITAGE CINEMAS" Wordmark
 * Completely transparent background, scalable SVG.
 */
export const HeritageLogo = ({
  height = 36,
  className = '',
  style = {},
  alt = 'Heritage Cinemas'
}) => {
  return (
    <svg
      viewBox="0 0 520 100"
      height={height}
      className={`heritage-cinemas-logo ${className}`}
      style={{
        display: 'inline-block',
        verticalAlign: 'middle',
        maxWidth: '100%',
        height: typeof height === 'number' ? `${height}px` : height,
        width: 'auto',
        ...style
      }}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={alt}
    >
      <defs>
        <linearGradient id="heritageYellowSwoosh" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ffd000" />
          <stop offset="100%" stopColor="#ffc000" />
        </linearGradient>
      </defs>

      {/* 1. Yellow Arch Swoosh over H */}
      <path
        d="M 6 46 C 14 24 38 6 82 2 C 58 12 36 26 22 48 C 16 56 10 52 6 46 Z"
        fill="url(#heritageYellowSwoosh)"
      />

      {/* 2. Stylized Script 'H' */}
      <path
        d="M 28 42 C 22 52 14 58 8 60 C 5 61 3 59 5 56 C 8 52 18 40 26 28 C 34 16 45 10 54 10 C 60 10 63 14 58 24 L 46 48 C 44 52 42 56 46 56 C 52 56 64 44 72 32 L 80 18 C 84 12 89 10 94 10 C 99 10 101 14 97 22 L 76 64 C 71 74 65 78 58 78 C 50 78 47 72 52 62 L 60 46 C 56 50 48 56 40 58 C 34 60 28 58 28 50 C 28 46 30 42 32 38 Z"
        fill="#ffffff"
      />

      {/* 3. "ERITAGE" Text Wordmark */}
      <text
        x="100"
        y="58"
        fill="#ffffff"
        fontFamily="'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        fontWeight="900"
        fontSize="54"
        letterSpacing="2.5"
      >
        ERITAGE
      </text>

      {/* 4. "CINEMAS" Text Wordmark */}
      <text
        x="332"
        y="58"
        fill="#ffffff"
        fontFamily="'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        fontWeight="800"
        fontSize="54"
        letterSpacing="3"
      >
        CINEMAS
      </text>
    </svg>
  );
};

export default HeritageLogo;
