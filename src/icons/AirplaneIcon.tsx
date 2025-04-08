
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M21.01 3a2.02 2.02 0 0 0-2.008 2.223l1.512 14.93-4.367.273-2.494-4.365A4.09 4.09 0 0 0 10.102 14C8.942 14 8 14.941 8 16.102v4.833L6.956 21a3 3 0 0 0 0 6L8 27.065v4.833C8 33.058 8.941 34 10.102 34a4.09 4.09 0 0 0 3.551-2.06l2.494-4.366 4.367.273-1.512 14.93A2.02 2.02 0 0 0 21.011 45c1.494 0 2.85-.873 3.47-2.232L30.982 28.5c2.658.167 5.356.5 8.018.5a5 5 0 0 0 0-10c-2.662 0-5.36.333-8.018.499l-6.5-14.267A3.81 3.81 0 0 0 21.01 3"/>`,
  'regular': `<path d="M19.016 5.561A2.327 2.327 0 0 1 21.331 3a4.84 4.84 0 0 1 4.404 2.833l5.925 13.002c2.272-.112 4.565-.335 6.84-.335a5.5 5.5 0 1 1 0 11c-2.275 0-4.568-.223-6.84-.335l-5.925 13.002A4.84 4.84 0 0 1 21.33 45a2.327 2.327 0 0 1-2.315-2.561l1.4-13.827-3.756-.185-1.68 2.94A5.23 5.23 0 0 1 10.443 34 2.443 2.443 0 0 1 8 31.557v-3.555L7.966 28a4 4 0 0 1 0-8L8 19.998v-3.555A2.443 2.443 0 0 1 10.443 14a5.23 5.23 0 0 1 4.537 2.633l1.68 2.94 3.757-.185zm2.508-.053 1.645 16.248-7.919.389-2.44-4.272a2.73 2.73 0 0 0-2.31-1.372v5.878l-2.47.121H8a1.5 1.5 0 0 0 0 3h.03l2.47.121V31.5a2.73 2.73 0 0 0 2.31-1.372l2.44-4.272 7.92.39-1.646 16.247a2.34 2.34 0 0 0 1.936-1.361l6.628-14.546 8.112.4q.147.015.3.015a3 3 0 1 0-.3-5.985l-8.112.4L23.46 6.87a2.34 2.34 0 0 0-1.936-1.361"/>`
} as const;

export default function AirplaneIcon({ 
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

  const gradientId = 'airplaneicon_gradient';
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