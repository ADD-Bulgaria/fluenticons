
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M13 17h1.5a2.5 2.5 0 0 0 2.5-2.5V13h-4zm0-5V8h4v4zm-1 0H8.744A4.5 4.5 0 0 0 8 10.671V8h4zm-3.439 3.44 1.56 1.56H12v-4H8.973q.027.246.027.5c0 .695-.157 1.353-.439 1.94M4.5 9c.925 0 1.785.28 2.5.758V8H3v1.256C3.47 9.09 3.974 9 4.5 9M13 7h4V5.5A2.5 2.5 0 0 0 14.5 3H13zm-1-4v4H8V3zM7 3v4H3V5.5A2.5 2.5 0 0 1 5.5 3z"/><path d="M4.5 17c.786 0 1.512-.26 2.096-.697l2.55 2.55a.5.5 0 1 0 .708-.707l-2.55-2.55A3.5 3.5 0 1 0 4.5 17m0-1a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5"/>`,
  'regular': `<path d="M17 5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5v3.757a4.5 4.5 0 0 1 1-.23V8h3v1.759a4.5 4.5 0 0 1 1 .913V8h4v4H8.742a4.5 4.5 0 0 1 .23 1H12v3H9.122l1 1H14.5a2.5 2.5 0 0 0 2.5-2.5zM14.5 16H13v-3h3v1.5l-.007.145A1.5 1.5 0 0 1 14.5 16M13 8h3v4h-3zm-1-1H8V4h4zm1-3h1.5l.145.007A1.5 1.5 0 0 1 16 5.5V7h-3zM4 7V5.5l.007-.144A1.5 1.5 0 0 1 5.5 4H7v3zm-2.616 4.905A3.5 3.5 0 0 0 6.6 16.3l2.543 2.558a.5.5 0 0 0 .707-.708L7.3 15.6a3.5 3.5 0 1 0-5.916-3.695m5.194.206a2.5 2.5 0 1 1-4.157 2.778 2.5 2.5 0 0 1 4.157-2.778"/>`
} as const;

export default function TableSearchIcon({ 
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
        viewBox="0 0 20 20"
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

  const gradientId = 'tablesearchicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
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