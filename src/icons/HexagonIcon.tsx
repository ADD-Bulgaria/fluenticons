
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M15.427 6a3.25 3.25 0 0 0-2.84 1.67L4.38 22.42a3.25 3.25 0 0 0 0 3.16l8.207 14.75a3.25 3.25 0 0 0 2.84 1.67h17.148a3.25 3.25 0 0 0 2.84-1.67l8.208-14.75a3.25 3.25 0 0 0 0-3.16L35.415 7.67A3.25 3.25 0 0 0 32.575 6z"/>`,
  'regular': `<path d="M15.427 8.5a.75.75 0 0 0-.655.385l-8.208 14.75a.75.75 0 0 0 0 .73l8.208 14.75a.75.75 0 0 0 .655.385h17.148a.75.75 0 0 0 .656-.385l8.207-14.75a.75.75 0 0 0 0-.73L33.23 8.885a.75.75 0 0 0-.656-.385zm-2.84-.83A3.25 3.25 0 0 1 15.427 6h17.148c1.18 0 2.267.64 2.84 1.67l8.208 14.75a3.25 3.25 0 0 1 0 3.16l-8.208 14.75a3.25 3.25 0 0 1-2.84 1.67H15.427a3.25 3.25 0 0 1-2.84-1.67L4.38 25.58a3.25 3.25 0 0 1 0-3.16z"/>`
} as const;

export default function HexagonIcon({ 
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

  const gradientId = 'hexagonicon_gradient';
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