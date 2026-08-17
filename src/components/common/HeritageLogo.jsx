import React from 'react';

/**
 * Heritage Cinemas Official Transparent Logo Component
 * Uses the real uploaded Heritage Cinemas PNG logo asset.
 * Transparent background, no box, no border, no colored container.
 */
export const HeritageLogo = ({
  height = 36,
  className = '',
  style = {},
  alt = 'Heritage Cinemas'
}) => {
  return (
    <img
      src="/heritage-logo.png"
      alt={alt}
      className={`heritage-cinemas-logo ${className}`}
      style={{
        height: typeof height === 'number' ? `${height}px` : height,
        width: 'auto',
        display: 'inline-block',
        verticalAlign: 'middle',
        background: 'transparent',
        border: 'none',
        padding: 0,
        objectFit: 'contain',
        filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.45)) contrast(1.05)',
        ...style
      }}
    />
  );
};

export default HeritageLogo;
