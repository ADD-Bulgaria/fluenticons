
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M23 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M8.876 16a6.5 6.5 0 0 0 3.337 2.251A2.5 2.5 0 0 0 14 22.5a9.5 9.5 0 0 0 9.017-6.5H24a4 4 0 0 1 2.4.8l3.2 2.4a1 1 0 0 1-1.2 1.6L26 19v5.5a4.5 4.5 0 0 1-4.5 4.5h-11A4.5 4.5 0 0 1 6 24.5V19l-2.4 1.8a1 1 0 1 1-1.2-1.6l3.2-2.4A4 4 0 0 1 8 16zM24 8a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0v-1h1a1 1 0 1 0 0-2h-1V7a1 1 0 1 0-2 0v1zm-9-2a7 7 0 0 1 7 7 8 8 0 0 1-8 8 1 1 0 1 1 0-2 6 6 0 0 0 6-6 5 5 0 0 0-5-5 4 4 0 0 0-4 4 3 3 0 0 0 3 3 2 2 0 0 0 2-2 1 1 0 0 0-1-1 1 1 0 1 1-2 0 2 2 0 0 1 2-2 3 3 0 0 1 3 3 4 4 0 0 1-4 4 5 5 0 0 1-5-5 6 6 0 0 1 6-6"/>`,
  'regular': `<path d="M21.5 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m.5 8a7 7 0 0 0-7-7 6 6 0 0 0-6 6 5 5 0 0 0 5 5 4 4 0 0 0 4-4 3 3 0 0 0-3-3 2 2 0 0 0-2 2 1 1 0 1 0 2 0 1 1 0 0 1 1 1 2 2 0 0 1-2 2 3 3 0 0 1-3-3 4 4 0 0 1 4-4 5 5 0 0 1 5 5 6 6 0 0 1-6 6 1 1 0 1 0 0 2 8 8 0 0 0 8-8M7.447 16.106A1 1 0 0 1 8 17v7.5a2.5 2.5 0 0 0 2.5 2.5h11a2.5 2.5 0 0 0 2.5-2.5V17a1 1 0 0 1 1.6-.8l4 3a1 1 0 0 1-1.2 1.6L26 19v5.5a4.5 4.5 0 0 1-4.5 4.5h-11A4.5 4.5 0 0 1 6 24.5V19l-2.4 1.8a1 1 0 1 1-1.2-1.6l4-3a1 1 0 0 1 1.047-.094M23 9a1 1 0 0 1 1-1h1V7a1 1 0 1 1 2 0v1h1a1 1 0 0 1 0 2h-1v1a1 1 0 0 1-2 0v-1h-1a1 1 0 0 1-1-1"/>`
} as const;

export default function GiftOpenIcon({ 
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

  const gradientId = 'giftopenicon_gradient';
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