
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6 12.25A6.25 6.25 0 0 1 12.25 6h23.5A6.25 6.25 0 0 1 42 12.25V31h-1.765l-4.882-7H39.5V12.25a3.75 3.75 0 0 0-3.75-3.75h-23.5a3.75 3.75 0 0 0-3.75 3.75V24h4.147l-4.882 7H6zM37.187 31h-6.505l-2.19-7h3.814zm-9.125 0h-8.124l2.19-7h3.744zm.782 2.5h-9.688l-2.463 7.873-.003.008-.198.619h15.006l-.193-.632zM19.508 24l-2.19 7h-6.505l4.881-7zm-2.972 9.5H6v2.25A6.25 6.25 0 0 0 12.25 42h1.618l.439-1.373.002-.008zM42 33.5H31.464l2.229 7.127.003.009L34.11 42h1.639A6.25 6.25 0 0 0 42 35.75z"/>`,
  'regular': `<path d="M6 12.25A6.25 6.25 0 0 1 12.25 6h23.5A6.25 6.25 0 0 1 42 12.25v23.5A6.25 6.25 0 0 1 35.75 42h-23.5A6.25 6.25 0 0 1 6 35.75zm6.25-3.75a3.75 3.75 0 0 0-3.75 3.75V23h31V12.25a3.75 3.75 0 0 0-3.75-3.75zM8.5 29.947l3.1-4.447H8.5zM10.813 31h6.505l1.72-5.5h-4.39zM8.5 33.5v2.25a3.75 3.75 0 0 0 3.75 3.75h2.41l1.876-6zm10.656 0-1.877 6h13.442l-1.877-6zm12.308 0 1.877 6h2.409a3.75 3.75 0 0 0 3.75-3.75V33.5zm5.723-2.5-3.835-5.5h-4.39l1.72 5.5zm-9.125 0-1.72-5.5h-4.684l-1.72 5.5zM39.5 29.946V25.5h-3.1z"/>`
} as const;

export default function Space3dIcon({ 
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

  const gradientId = 'space3dicon_gradient';
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