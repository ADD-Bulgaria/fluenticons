
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M20 24a4 4 0 1 1-8 0 4 4 0 0 1 8 0"/><path d="M7 13a9 9 0 0 1 18 0v3.807l1.928 4.822A1 1 0 0 1 26 23H6a1 1 0 0 1-.928-1.371L7 16.807z"/><path fill-opacity=".2" d="M7 13a9 9 0 0 1 18 0v3.807l1.928 4.822A1 1 0 0 1 26 23H6a1 1 0 0 1-.928-1.371L7 16.807z"/><path d="M27 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/><path d="M27 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>`,
  'filled': `<path d="M7 13a9 9 0 0 1 14.084-7.428A4.5 4.5 0 0 0 25 13.388v3.42l1.928 4.82A1 1 0 0 1 26 23H6a1 1 0 0 1-.928-1.371L7 16.807zm5.125 12A3.99 3.99 0 0 0 16 28a3.99 3.99 0 0 0 3.875-3zM24 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>`,
  'regular': `<path d="M16 4a9 9 0 0 0-9 9v4.803l-1.929 4.826A1 1 0 0 0 6 24h6c0 2.217 1.783 4 4 4s4-1.783 4-4h6a1 1 0 0 0 .929-1.371L25 17.803v-4.414a4.5 4.5 0 0 1-2 0v4.606a1 1 0 0 0 .071.371L24.523 22H7.477l1.452-3.634a1 1 0 0 0 .071-.37V13a7 7 0 0 1 10.885-5.824 4.5 4.5 0 0 1 1.199-1.604A8.96 8.96 0 0 0 16 4m2 20c0 1.112-.888 2-2 2s-2-.888-2-2zm6-12a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>`
} as const;

export default function AlertBadgeIcon({ 
  variant = 'regular',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'color' | 'filled' | 'regular' }) {
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

  const gradientId = 'alertbadgeicon_gradient';
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