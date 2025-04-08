
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M15 16a7 7 0 1 0 0-14 7 7 0 0 0 0 14m-8.5 2A3.5 3.5 0 0 0 3 21.5v.5c0 2.393 1.523 4.417 3.685 5.793C8.859 29.177 11.802 30 15 30c1.69 0 3.31-.23 4.782-.651a4 4 0 0 1-.025-.246L19.749 29h-3.098l-.048-.003c-1.845-.118-2.791-2.325-1.534-3.74L17 23.085V21a6.5 6.5 0 0 1 .732-3zm17-2a5 5 0 0 0-5 5v2.656l-2.31 2.597a.75.75 0 0 0 .51 1.247h13.599a.75.75 0 0 0 .509-1.247L28.5 23.657V21a5 5 0 0 0-5-5m0 15c-1.192 0-2.168-.883-2.245-2h4.49c-.077 1.117-1.053 2-2.245 2"/>`,
  'regular': `<path d="M22 9A7 7 0 1 1 8 9a7 7 0 0 1 14 0m-2 0a5 5 0 1 0-10 0 5 5 0 0 0 10 0M6.5 18A3.5 3.5 0 0 0 3 21.5v.5c0 2.393 1.523 4.417 3.685 5.793C8.859 29.177 11.802 30 15 30c1.69 0 3.31-.23 4.782-.651a4 4 0 0 1-.025-.246L19.749 29h-3.098l-.048-.003A2.21 2.21 0 0 1 14.88 28c-2.828-.021-5.339-.76-7.12-1.894C5.939 24.95 5 23.472 5 22v-.5A1.5 1.5 0 0 1 6.5 20h10.575c.11-.711.335-1.385.656-2zm17-2a5 5 0 0 0-5 5v2.656l-2.31 2.597a.75.75 0 0 0 .51 1.247h13.599a.75.75 0 0 0 .509-1.247L28.5 23.657V21a5 5 0 0 0-5-5m0 15c-1.192 0-2.168-.883-2.245-2h4.49c-.077 1.117-1.053 2-2.245 2"/>`
} as const;

export default function PersonAlertIcon({ 
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

  const gradientId = 'personalerticon_gradient';
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