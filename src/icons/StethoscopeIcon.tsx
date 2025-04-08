
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M3 2.5a1 1 0 0 0-1 1V9c0 1.741.614 3.256 1.71 4.337.873.86 2.01 1.406 3.29 1.592v.821a6.25 6.25 0 1 0 12.5 0v-.657a3.252 3.252 0 0 0-1-6.343 3.25 3.25 0 0 0-1 6.343v.657a4.25 4.25 0 1 1-8.5 0v-.821c1.28-.186 2.417-.732 3.29-1.592C13.385 12.257 14 10.741 14 9V3.5a1 1 0 0 0-1-1h-1.998a1 1 0 1 0 0 2H12V9c0 1.259-.436 2.244-1.115 2.913C10.205 12.584 9.215 13 8 13c-1.216 0-2.204-.416-2.885-1.087C4.435 11.243 4 10.259 4 9V4.5h1a1 1 0 0 0 0-2zm15.5 8.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5"/>`,
  'regular': `<path d="M2.75 2.5a.75.75 0 0 0-.75.75V9c0 3.06 2.29 5.585 5.25 5.954v.796a6 6 0 0 0 12 0v-.844A3.001 3.001 0 0 0 18.5 9a3 3 0 0 0-.75 5.906v.844a4.5 4.5 0 0 1-9 0v-.796A6 6 0 0 0 14 9V3.25a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0 0 1.5h1.75v5a4.5 4.5 0 1 1-9 0V4h1.75a.75.75 0 0 0 0-1.5zm15.75 8a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"/>`
} as const;

export default function StethoscopeIcon({ 
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

  const gradientId = 'stethoscopeicon_gradient';
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