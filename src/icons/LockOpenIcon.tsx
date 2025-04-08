
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M32 10a5.5 5.5 0 1 1 11 0v1a1.25 1.25 0 1 0 2.5 0v-1a8 8 0 1 0-16 0v4H14.25A6.25 6.25 0 0 0 8 20.25v15.5A6.25 6.25 0 0 0 14.25 42h19.5A6.25 6.25 0 0 0 40 35.75v-15.5A6.25 6.25 0 0 0 33.75 14H32zm-8 21a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>`,
  'regular': `<path d="M32 10a5.5 5.5 0 1 1 11 0v1a1.25 1.25 0 1 0 2.5 0v-1a8 8 0 1 0-16 0v4H14.25A6.25 6.25 0 0 0 8 20.25v15.5A6.25 6.25 0 0 0 14.25 42h19.5A6.25 6.25 0 0 0 40 35.75v-15.5A6.25 6.25 0 0 0 33.75 14H32zm-17.75 6.5h19.5a3.75 3.75 0 0 1 3.75 3.75v15.5a3.75 3.75 0 0 1-3.75 3.75h-19.5a3.75 3.75 0 0 1-3.75-3.75v-15.5a3.75 3.75 0 0 1 3.75-3.75M27 28a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>`
} as const;

export default function LockOpenIcon({ 
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

  const gradientId = 'lockopenicon_gradient';
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