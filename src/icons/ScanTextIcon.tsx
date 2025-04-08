
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M5.75 4A1.75 1.75 0 0 0 4 5.75V9a1 1 0 0 1-2 0V5.75A3.75 3.75 0 0 1 5.75 2H9a1 1 0 0 1 0 2zm0 20A1.75 1.75 0 0 1 4 22.25V19a1 1 0 1 0-2 0v3.25A3.75 3.75 0 0 0 5.75 26H9a1 1 0 1 0 0-2zM24 5.75A1.75 1.75 0 0 0 22.25 4H19a1 1 0 1 1 0-2h3.25A3.75 3.75 0 0 1 26 5.75V9a1 1 0 1 1-2 0zM22.25 24A1.75 1.75 0 0 0 24 22.25V19a1 1 0 1 1 2 0v3.25A3.75 3.75 0 0 1 22.25 26H19a1 1 0 1 1 0-2zM8 9a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1m0 5a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1m1 4a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2z"/>`,
  'regular': `<path d="M5.75 3.5A2.25 2.25 0 0 0 3.5 5.75v3a.75.75 0 0 1-1.5 0v-3A3.75 3.75 0 0 1 5.75 2h3a.75.75 0 0 1 0 1.5zm0 21a2.25 2.25 0 0 1-2.25-2.25v-3a.75.75 0 0 0-1.5 0v3A3.75 3.75 0 0 0 5.75 26h3a.75.75 0 0 0 0-1.5zM24.5 5.75a2.25 2.25 0 0 0-2.25-2.25h-3a.75.75 0 0 1 0-1.5h3A3.75 3.75 0 0 1 26 5.75v3a.75.75 0 0 1-1.5 0zM22.25 24.5a2.25 2.25 0 0 0 2.25-2.25v-3a.75.75 0 0 1 1.5 0v3A3.75 3.75 0 0 1 22.25 26h-3a.75.75 0 0 1 0-1.5zM8 8.75A.75.75 0 0 1 8.75 8h10.5a.75.75 0 0 1 0 1.5H8.75A.75.75 0 0 1 8 8.75M8.75 13a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5zM8 18.75a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75"/>`
} as const;

export default function ScanTextIcon({ 
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
        viewBox="0 0 28 28"
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

  const gradientId = 'scantexticon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 28"
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