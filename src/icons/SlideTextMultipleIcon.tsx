
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6.5 4A4.5 4.5 0 0 0 2 8.5v11A4.5 4.5 0 0 0 6.5 24h15a4.5 4.5 0 0 0 4.5-4.5v-11A4.5 4.5 0 0 0 21.5 4zM8 9h7a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2m0 4h12a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2m-1 5a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1m21 3a5 5 0 0 1-5 5H7.101A6.98 6.98 0 0 0 12 28h11a7 7 0 0 0 7-7v-7a6.98 6.98 0 0 0-2-4.899z"/>`,
  'regular': `<path d="M8 9a1 1 0 1 0 0 2h7a1 1 0 1 0 0-2zm-1 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1m1 3a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2zM2 8.5A4.5 4.5 0 0 1 6.5 4h15A4.5 4.5 0 0 1 26 8.5v11a4.5 4.5 0 0 1-4.5 4.5h-15A4.5 4.5 0 0 1 2 19.5zM6.5 6A2.5 2.5 0 0 0 4 8.5v11A2.5 2.5 0 0 0 6.5 22h15a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 21.5 6zM28 21a5 5 0 0 1-5 5H7.101A6.98 6.98 0 0 0 12 28h11a7 7 0 0 0 7-7v-7a6.98 6.98 0 0 0-2-4.899z"/>`
} as const;

export default function SlideTextMultipleIcon({ 
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

  const gradientId = 'slidetextmultipleicon_gradient';
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