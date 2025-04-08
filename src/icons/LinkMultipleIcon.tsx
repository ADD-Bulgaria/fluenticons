
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'color': `<path fill-rule="evenodd" d="M1 10a5 5 0 0 1 5-5h7a5 5 0 0 1 0 10H6a5 5 0 0 1-5-5m5-3a3 3 0 0 0 0 6h7a3 3 0 1 0 0-6z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M1 10a5 5 0 0 1 5-5h7a5 5 0 0 1 0 10H6a5 5 0 0 1-5-5m5-3a3 3 0 0 0 0 6h7a3 3 0 1 0 0-6z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M1 10a5 5 0 0 1 5-5h7a5 5 0 0 1 0 10H6a5 5 0 0 1-5-5m5-3a3 3 0 0 0 0 6h7a3 3 0 1 0 0-6z" clip-rule="evenodd"/><path d="M15.83 9H11a5 5 0 0 0 0 10h7a5 5 0 0 0 0-10h-.1a5 5 0 0 1 0 2h.1a3 3 0 1 1 0 6h-7a3 3 0 1 1 0-6h4.83a3 3 0 0 0 0-2"/><path d="M15.83 9H11a5 5 0 0 0 0 10h7a5 5 0 0 0 0-10h-.1a5 5 0 0 1 0 2h.1a3 3 0 1 1 0 6h-7a3 3 0 1 1 0-6h4.83a3 3 0 0 0 0-2"/><path d="M15.83 9H11a5 5 0 0 0 0 10h7a5 5 0 0 0 0-10h-.1a5 5 0 0 1 0 2h.1a3 3 0 1 1 0 6h-7a3 3 0 1 1 0-6h4.83a3 3 0 0 0 0-2"/>`,
  'filled': `<path d="M6.5 4a5.5 5.5 0 0 0-1.99 10.63c.04-.7.19-1.37.433-1.994A3.5 3.5 0 0 1 6.5 6h6a3.5 3.5 0 1 1 0 7H12a1 1 0 1 0 0 2h.5a5.5 5.5 0 1 0 0-11zm12.613 8.213A3.001 3.001 0 0 1 18 18h-7a3 3 0 1 1 0-6h1a1 1 0 0 0 0-2h-1a5 5 0 0 0 0 10h7a5 5 0 0 0 1.496-9.772 6.5 6.5 0 0 1-.383 1.985"/>`,
  'regular': `<path d="M6.25 4a5.25 5.25 0 0 0-1.703 10.218c.06-.51.181-1.002.353-1.468A3.751 3.751 0 0 1 6.25 5.5h6.5a3.75 3.75 0 1 1 0 7.5h-1a.75.75 0 0 0 0 1.5h1a5.25 5.25 0 1 0 0-10.5zm13.14 6.196c-.092.5-.243.98-.443 1.434A3.502 3.502 0 0 1 18 18.5h-7a3.5 3.5 0 1 1 0-7h1.25a.75.75 0 0 0 0-1.5H11a5 5 0 0 0 0 10h7a5 5 0 0 0 1.39-9.804"/>`
} as const;

export default function LinkMultipleIcon({ 
  variant = 'regular',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'color' | 'filled' | 'regular' }) {
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

  const gradientId = 'linkmultipleicon_gradient';
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