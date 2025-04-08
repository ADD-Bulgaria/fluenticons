
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M2 5.25A2.25 2.25 0 0 1 4.25 3h15.5A2.25 2.25 0 0 1 22 5.25v5a.75.75 0 0 1-.75.75h-8.5v2.001h1a.75.75 0 0 1 .75.75v2.254h1.75a.75.75 0 0 1 .75.75v.745h4.25a.75.75 0 0 1 0 1.5H17v1.253a.75.75 0 0 1-.75.75h-8.5a.75.75 0 0 1-.75-.75V19H2.75a.75.75 0 0 1 0-1.5h4.251v-.745a.75.75 0 0 1 .75-.75h1.75V13.75a.75.75 0 0 1 .75-.75h.999v-2h-8.5a.75.75 0 0 1-.75-.75zm15.998 2.752a1.002 1.002 0 1 0 0-2.004 1.002 1.002 0 0 0 0 2.004"/>`,
  'regular': `<path d="M17.998 8.002a1.002 1.002 0 1 0 0-2.004 1.002 1.002 0 0 0 0 2.004M4.25 3A2.25 2.25 0 0 0 2 5.25v5c0 .414.336.75.75.75h8.5v2.001h-1a.75.75 0 0 0-.75.75v2.254H7.752a.75.75 0 0 0-.75.75v.745H2.75a.75.75 0 0 0 0 1.5h4.251v1.253c0 .415.336.75.75.75h8.498a.75.75 0 0 0 .75-.75V19h4.251a.75.75 0 0 0 0-1.5H17v-.745a.75.75 0 0 0-.75-.75H14.5V13.75a.75.75 0 0 0-.75-.75h-1v-2h8.5a.75.75 0 0 0 .75-.75v-5A2.25 2.25 0 0 0 19.75 3zM3.5 5.25a.75.75 0 0 1 .75-.75h15.5a.75.75 0 0 1 .75.75V9.5h-17zm7.5 9.251h2v2.254c0 .414.335.75.75.75h1.75v1.998h-7v-1.998h1.75a.75.75 0 0 0 .75-.75z"/>`
} as const;

export default function MapDriveIcon({ 
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

  const gradientId = 'mapdriveicon_gradient';
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