
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20q-.002-1.68-.269-3.287a1.25 1.25 0 0 0-2.25-.522 5.5 5.5 0 0 1-9.964-2.76 1.25 1.25 0 0 0-.927-1.113 5.503 5.503 0 0 1-1.946-9.676 1.25 1.25 0 0 0-.506-2.213A20 20 0 0 0 24 4m0 22a2 2 0 1 1 0-4 2 2 0 0 1 0 4m-6 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-4-12a2 2 0 1 1 0-4 2 2 0 0 1 0 4m18 14a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/>`,
  'regular': `<path d="M4 24C4 12.954 12.954 4 24 4c1.418 0 2.802.148 4.138.429a1.25 1.25 0 0 1 .506 2.213 5.503 5.503 0 0 0 1.945 9.676c.515.136.887.582.928 1.112a5.5 5.5 0 0 0 9.963 2.76 1.25 1.25 0 0 1 2.251.523Q43.998 22.32 44 24c0 11.046-8.954 20-20 20S4 35.046 4 24M24 6.5C14.335 6.5 6.5 14.335 6.5 24S14.335 41.5 24 41.5 41.5 33.665 41.5 24q0-.192-.004-.382a8.002 8.002 0 0 1-12.36-5.146 8.002 8.002 0 0 1-3.786-11.92A18 18 0 0 0 24 6.5M26 24a2 2 0 1 1-4 0 2 2 0 0 1 4 0M16 34a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0-16a2 2 0 1 1-4 0 2 2 0 0 1 4 0m14 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>`
} as const;

export default function CookiesIcon({ 
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

  const gradientId = 'cookiesicon_gradient';
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