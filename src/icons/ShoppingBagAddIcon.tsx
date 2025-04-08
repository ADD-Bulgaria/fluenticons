
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M7 7V5a3 3 0 0 1 5-2.236A3 3 0 0 1 17 5v2h1.5A1.5 1.5 0 0 1 20 8.5v2.998A6.5 6.5 0 0 0 17.5 11a6.5 6.5 0 0 0-3 .732V7h1V5a1.5 1.5 0 0 0-2.656-.956c.101.3.156.622.156.956v7.81a6.48 6.48 0 0 0-2 4.69c0 1.747.689 3.332 1.81 4.5H8a4 4 0 0 1-4-4V8.5A1.5 1.5 0 0 1 5.5 7zm1.5-2v2h3V5a1.5 1.5 0 0 0-3 0m9 7a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11m.501 8.503V18h2.496a.5.5 0 0 0 0-1H18v-2.5a.5.5 0 1 0-1 0V17h-2.504a.5.5 0 0 0 0 1H17v2.503a.5.5 0 1 0 1 0"/>`,
  'regular': `<path d="M7 7V5a3 3 0 0 1 5-2.236A3 3 0 0 1 17 5v2h1.5A1.5 1.5 0 0 1 20 8.5v2.998a6.5 6.5 0 0 0-1.5-.422V8.5h-3.99v3.227a6.5 6.5 0 0 0-1.5 1.073V8.5H5.5V18A2.5 2.5 0 0 0 8 20.5h3.732A6.5 6.5 0 0 0 12.81 22H8a4 4 0 0 1-4-4V8.5A1.5 1.5 0 0 1 5.5 7zm4.5 0V5a1.5 1.5 0 0 0-3 0v2zM13 7h2.5V5a1.5 1.5 0 0 0-2.656-.956c.101.3.156.622.156.956zm4.5 5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11m.501 8.503V18h2.496a.5.5 0 0 0 0-1H18v-2.5a.5.5 0 1 0-1 0V17h-2.504a.5.5 0 0 0 0 1H17v2.503a.5.5 0 1 0 1 0"/>`
} as const;

export default function ShoppingBagAddIcon({ 
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
        viewBox="0 0 24 24"
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

  const gradientId = 'shoppingbagaddicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
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