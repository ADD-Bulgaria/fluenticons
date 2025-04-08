
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M8.5 5.25A3.25 3.25 0 0 1 11.75 2h12A3.25 3.25 0 0 1 27 5.25v18a3.25 3.25 0 0 1-3.25 3.25h-12a3.25 3.25 0 0 1-3.25-3.25zM5 8.75c0-1.352.826-2.511 2-3.001v17.75a4.5 4.5 0 0 0 4.5 4.5h11.751a3.25 3.25 0 0 1-3.001 2H11.5A6.5 6.5 0 0 1 5 23.5z"/>`,
  'light': `<path d="M11.25 2A3.25 3.25 0 0 0 8 5.25v18.5A3.25 3.25 0 0 0 11.25 27h12.5A3.25 3.25 0 0 0 27 23.75V5.25A3.25 3.25 0 0 0 23.75 2zM9 5.25A2.25 2.25 0 0 1 11.25 3h12.5A2.25 2.25 0 0 1 26 5.25v18.5A2.25 2.25 0 0 1 23.75 26h-12.5A2.25 2.25 0 0 1 9 23.75zm-3 .655A3.24 3.24 0 0 0 5 8.25v15.5A6.25 6.25 0 0 0 11.25 30h9.5a3.24 3.24 0 0 0 2.345-1H11.25A5.25 5.25 0 0 1 6 23.75z"/>`,
  'regular': `<path d="M11.75 2A3.25 3.25 0 0 0 8.5 5.25v18a3.25 3.25 0 0 0 3.25 3.25h12A3.25 3.25 0 0 0 27 23.25v-18A3.25 3.25 0 0 0 23.75 2zM10.5 5.25c0-.69.56-1.25 1.25-1.25h12c.69 0 1.25.56 1.25 1.25v18c0 .69-.56 1.25-1.25 1.25h-12c-.69 0-1.25-.56-1.25-1.25zM7 5.749c-1.174.49-2 1.649-2 3V23.5a6.5 6.5 0 0 0 6.5 6.5h8.75a3.25 3.25 0 0 0 3.001-2H11.5A4.5 4.5 0 0 1 7 23.5z"/>`
} as const;

export default function CopyIcon({ 
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

  const gradientId = 'copyicon_gradient';
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