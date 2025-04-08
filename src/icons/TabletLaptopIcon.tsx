
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M22 17.25a.75.75 0 0 0-.75-.75H16.5V18h4.75l.101-.007A.75.75 0 0 0 22 17.25M4.25 11A2.25 2.25 0 0 0 2 13.25v5.5A2.25 2.25 0 0 0 4.25 21h9a2.25 2.25 0 0 0 2.25-2.25v-5.5A2.25 2.25 0 0 0 13.25 11zM7 17.75a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75M16.5 16h1.75A1.75 1.75 0 0 0 20 14.25v-7.5A1.75 1.75 0 0 0 18.25 5H5.75A1.75 1.75 0 0 0 4 6.75v3.285Q4.245 10 4.5 10h9a3 3 0 0 1 3 3z"/>`,
  'regular': `<path d="M21.25 16.5a.75.75 0 0 1 .101 1.493L21.25 18H16.5v-1.5zM4 10h1.5V6.75a.25.25 0 0 1 .25-.25h12.5a.25.25 0 0 1 .25.25v7.5a.25.25 0 0 1-.25.25H16.5V16h1.75A1.75 1.75 0 0 0 20 14.25v-7.5A1.75 1.75 0 0 0 18.25 5H5.75A1.75 1.75 0 0 0 4 6.75zm3.75 7a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5zm-3.5-6A2.25 2.25 0 0 0 2 13.25v5.5A2.25 2.25 0 0 0 4.25 21h9a2.25 2.25 0 0 0 2.25-2.25v-5.5A2.25 2.25 0 0 0 13.25 11zm-.75 2.25a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-.75.75h-9a.75.75 0 0 1-.75-.75z"/>`
} as const;

export default function TabletLaptopIcon({ 
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

  const gradientId = 'tabletlaptopicon_gradient';
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