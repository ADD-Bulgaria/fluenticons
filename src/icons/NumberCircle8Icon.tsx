
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M44 24c0 11.046-8.954 20-20 20S4 35.046 4 24 12.954 4 24 4s20 8.954 20 20m-20-8.5c-1.997 0-3.5 1.518-3.5 3.25S22.003 22 24 22s3.5-1.518 3.5-3.25-1.503-3.25-3.5-3.25m3.91 7.61c1.272-1.044 2.09-2.594 2.09-4.36 0-3.238-2.75-5.75-6-5.75s-6 2.512-6 5.75c0 1.766.818 3.316 2.09 4.36-1.843 1.15-3.09 3.1-3.09 5.39 0 3.694 3.244 6.5 7 6.5s7-2.806 7-6.5c0-2.29-1.247-4.24-3.09-5.39M24 24.5c-2.595 0-4.5 1.895-4.5 4s1.905 4 4.5 4 4.5-1.895 4.5-4-1.905-4-4.5-4"/>`,
  'regular': `<path d="M24 6.5C14.335 6.5 6.5 14.335 6.5 24S14.335 41.5 24 41.5 41.5 33.665 41.5 24 33.665 6.5 24 6.5M4 24C4 12.954 12.954 4 24 4s20 8.954 20 20-8.954 20-20 20S4 35.046 4 24m20-8.5c1.997 0 3.5 1.518 3.5 3.25S25.997 22 24 22s-3.5-1.518-3.5-3.25 1.503-3.25 3.5-3.25m3.91 7.61c1.272-1.044 2.09-2.594 2.09-4.36 0-3.238-2.75-5.75-6-5.75s-6 2.512-6 5.75c0 1.766.818 3.316 2.09 4.36-1.843 1.15-3.09 3.1-3.09 5.39 0 3.694 3.244 6.5 7 6.5s7-2.806 7-6.5c0-2.29-1.247-4.24-3.09-5.39M24 24.5c2.595 0 4.5 1.895 4.5 4s-1.905 4-4.5 4-4.5-1.895-4.5-4 1.905-4 4.5-4"/>`
} as const;

export default function NumberCircle8Icon({ 
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

  const gradientId = 'numbercircle8icon_gradient';
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