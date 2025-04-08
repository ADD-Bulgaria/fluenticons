
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M15.952 4.079A4 4 0 0 1 18.684 3H25.5A3.5 3.5 0 0 1 29 6.5v6.757a4 4 0 0 1-1.172 2.829L16.005 27.909a4.25 4.25 0 0 1-6.01 0l-6.326-6.326a4.25 4.25 0 0 1 .101-6.109zM22.5 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>`,
  'light': `<path d="M23 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4m-4.382-8a4.5 4.5 0 0 0-3.13 1.266L3.344 16.02a3.5 3.5 0 0 0-.04 4.99l7.256 7.257a3.5 3.5 0 0 0 4.91.04l12.16-11.769A4.5 4.5 0 0 0 29 13.305V6.5A3.5 3.5 0 0 0 25.5 3zm-2.434 1.985A3.5 3.5 0 0 1 18.618 4H25.5A2.5 2.5 0 0 1 28 6.5v6.805a3.5 3.5 0 0 1-1.066 2.515L14.773 27.588a2.5 2.5 0 0 1-3.507-.028L4.01 20.303a2.5 2.5 0 0 1 .029-3.564z"/>`,
  'regular': `<path d="M22.5 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m-3.816-9a4 4 0 0 0-2.732 1.079L3.77 15.474a4.25 4.25 0 0 0-.101 6.11l6.326 6.325a4.25 4.25 0 0 0 6.01 0l11.823-11.823A4 4 0 0 0 29 13.257V6.5A3.5 3.5 0 0 0 25.5 3zm-1.366 2.54A2 2 0 0 1 18.684 5H25.5A1.5 1.5 0 0 1 27 6.5v6.757a2 2 0 0 1-.586 1.415L14.591 26.495a2.25 2.25 0 0 1-3.182 0l-6.326-6.326a2.25 2.25 0 0 1 .054-3.234z"/>`
} as const;

export default function TagIcon({ 
  variant = 'regular',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'filled' | 'light' | 'regular' }) {
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

  const gradientId = 'tagicon_gradient';
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