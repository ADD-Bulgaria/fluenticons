
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6.384 4.616a1.25 1.25 0 1 0-1.768 1.768l16.22 16.22q-.081.165-.167.328c-2.108 4.022-5.739 6.835-12.52 9.261a1.35 1.35 0 0 0-.656 2.037 17.9 17.9 0 0 0 5.821 5.367c7.198 4.156 16.074 2.776 21.695-2.82l6.607 6.607a1.25 1.25 0 0 0 1.768-1.768zm24.93 3.805c8.523 4.92 11.5 15.757 6.737 24.327l-15.49-15.49c.432-2.78.245-5.882-.652-9.558a1.35 1.35 0 0 1 1.383-1.668c2.802.15 5.54.955 8.022 2.389"/>`,
  'regular': `<path d="M6.384 4.616a1.25 1.25 0 1 0-1.768 1.768l16.22 16.22q-.081.165-.167.328c-2.108 4.022-5.739 6.835-12.52 9.261a1.35 1.35 0 0 0-.656 2.037 17.9 17.9 0 0 0 5.821 5.367c7.198 4.156 16.074 2.776 21.695-2.82l6.607 6.607a1.25 1.25 0 0 0 1.768-1.768zM33.24 35.008c-4.841 4.815-12.48 6.002-18.677 2.424A15.5 15.5 0 0 1 10.457 34c6.139-2.408 9.91-5.342 12.23-9.544zm-3.177-24.422c7.13 4.116 9.752 13.04 6.136 20.311l1.85 1.85c4.763-8.569 1.787-19.406-6.736-24.326a17.9 17.9 0 0 0-8.022-2.389A1.35 1.35 0 0 0 21.91 7.7c.897 3.676 1.084 6.778.653 9.559l2.122 2.122c.798-3.235.8-6.72.005-10.694l.469.08c1.714.32 3.369.93 4.906 1.819"/>`
} as const;

export default function WeatherMoonOffIcon({ 
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
        viewBox="0 0 48 48"
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

  const gradientId = 'weathermoonofficon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
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