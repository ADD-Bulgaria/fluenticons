
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M7.056 8A11.97 11.97 0 0 1 16 4c6.627 0 12 5.373 12 12s-5.373 12-12 12S4 22.627 4 16q0-.424.029-.841c.042-.61-.42-1.159-1.03-1.159-.492 0-.913.361-.953.851Q2.001 15.421 2 16c0 7.732 6.268 14 14 14s14-6.268 14-14S23.732 2 16 2A13.96 13.96 0 0 0 6 6.202V4a1 1 0 0 0-2 0v5a1 1 0 0 0 1 1h5a1 1 0 1 0 0-2zm7.936 2.266C13.66 9.504 12 10.467 12 12.003v7.995c0 1.535 1.659 2.498 2.992 1.736l6.998-3.997c1.344-.768 1.344-2.706 0-3.473z"/>`,
  'regular': `<path d="M16 4a11.97 11.97 0 0 0-8.944 4H10a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0v2.202A13.96 13.96 0 0 1 16 2c7.732 0 14 6.268 14 14s-6.268 14-14 14S2 23.732 2 16q0-.58.046-1.149c.04-.49.46-.851.952-.851.611 0 1.073.55 1.031 1.159q-.03.417-.029.841c0 6.627 5.373 12 12 12s12-5.373 12-12S22.627 4 16 4m-1.008 6.266C13.66 9.504 12 10.467 12 12.003v7.995c0 1.535 1.659 2.498 2.992 1.736l6.998-3.997c1.344-.768 1.344-2.706 0-3.473zM14 12.003 20.998 16 14 19.998z"/>`
} as const;

export default function ReplayIcon({ 
  variant = 'regular',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'filled' | 'regular' }) {
  const width = typeof size === 'number' ? `${size}px` : size;
  const height = typeof size === 'number' ? `${size}px` : size;
  
  if (!gradient) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill={color || 'currentColor'}
        className={className}
        style={{ width, height, flexShrink: 0, verticalAlign: 'middle', ...style }}
        aria-hidden={title ? undefined : true}
        focusable="false"
        role={title ? "img" : "presentation"}
        {...props}
      >
        {title && <title>{title}</title>}
        <g dangerouslySetInnerHTML={{ __html: svgContent[variant] || svgContent['regular'] || '' }} />
      </svg>
    );
  }

  const gradientId = 'replayicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill={`url(#${gradientId})`}
      className={className}
      style={{ width, height, flexShrink: 0, verticalAlign: 'middle', ...style }}
      aria-hidden={title ? undefined : true}
      focusable="false"
      role={title ? "img" : "presentation"}
      {...props}
    >
      {title && <title>{title}</title>}
      <defs>
        <linearGradient
          id={gradientId}
          x1="0%" y1="0%" x2="100%" y2="0%"
          gradientTransform={gradient.angle !== undefined ? `rotate(${gradient.angle})` : undefined}
        >
          <stop offset="0%" stopColor={gradient.start} />
          <stop offset="100%" stopColor={gradient.end} />
        </linearGradient>
      </defs>
      <g dangerouslySetInnerHTML={{ __html: svgContent[variant] || svgContent['regular'] || '' }} />
    </svg>
  );
}