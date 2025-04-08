
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M11.25 6A5.25 5.25 0 0 0 6 11.25v25.5C6 39.65 8.35 42 11.25 42h12.794A12.94 12.94 0 0 1 22 35c0-7.18 5.82-13 13-13 2.577 0 4.98.75 7 2.044V11.25C42 8.35 39.65 6 36.75 6zM24 35c0 6.075 4.925 11 11 11s11-4.925 11-11-4.925-11-11-11-11 4.925-11 11m14.293-3.293a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L39.586 35H34a4 4 0 0 0-4 4 1 1 0 1 1-2 0 6 6 0 0 1 6-6h5.586z"/>`,
  'regular': `<path d="M6 11.25C6 8.35 8.35 6 11.25 6h25.5C39.65 6 42 8.35 42 11.25v12.794c-.78-.5-1.618-.919-2.5-1.244V11.25a2.75 2.75 0 0 0-2.75-2.75h-25.5a2.75 2.75 0 0 0-2.75 2.75v25.5a2.75 2.75 0 0 0 2.75 2.75H22.8c.325.882.744 1.72 1.244 2.5H11.25A5.25 5.25 0 0 1 6 36.75zM24 35c0 6.075 4.925 11 11 11s11-4.925 11-11-4.925-11-11-11-11 4.925-11 11m14.293-3.293a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L39.586 35H34a4 4 0 0 0-4 4 1 1 0 1 1-2 0 6 6 0 0 1 6-6h5.586z"/>`
} as const;

export default function SquareArrowForwardIcon({ 
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

  const gradientId = 'squarearrowforwardicon_gradient';
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