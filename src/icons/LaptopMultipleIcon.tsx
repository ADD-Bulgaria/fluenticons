
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6.627 5h10.622a2.75 2.75 0 0 1 2.75 2.75v6.622a2.25 2.25 0 0 0 1.5-2.122v-4.5a4.25 4.25 0 0 0-4.25-4.25h-8.5A2.25 2.25 0 0 0 6.627 5M6.25 6A2.25 2.25 0 0 0 4 8.25v6.5A2.25 2.25 0 0 0 6.25 17h10.5A2.25 2.25 0 0 0 19 14.75v-6.5A2.25 2.25 0 0 0 16.75 6zm-3.5 12.5a.75.75 0 0 0 0 1.5h17.5a.75.75 0 0 0 0-1.5z"/>`,
  'regular': `<path d="M6.627 5a2.25 2.25 0 0 1 2.122-1.5h8.5a4.25 4.25 0 0 1 4.25 4.25v4.5a2.25 2.25 0 0 1-1.5 2.122V7.75A2.75 2.75 0 0 0 17.249 5zM4 8.25A2.25 2.25 0 0 1 6.25 6h10.5A2.25 2.25 0 0 1 19 8.25v6.5A2.25 2.25 0 0 1 16.75 17H6.25A2.25 2.25 0 0 1 4 14.75zm2.25-.75a.75.75 0 0 0-.75.75v6.5c0 .414.336.75.75.75h10.5a.75.75 0 0 0 .75-.75v-6.5a.75.75 0 0 0-.75-.75zm-3.5 11a.75.75 0 0 0 0 1.5h17.5a.75.75 0 0 0 0-1.5z"/>`
} as const;

export default function LaptopMultipleIcon({ 
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

  const gradientId = 'laptopmultipleicon_gradient';
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