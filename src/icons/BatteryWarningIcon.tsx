
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M8.244 11.2a1.5 1.5 0 0 1 .556.556l4.01 6.998A1.5 1.5 0 0 1 11.507 21H3.489a1.5 1.5 0 0 1-1.302-2.246l4.01-6.998a1.5 1.5 0 0 1 2.047-.556M7.5 18a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1M17 6a3 3 0 0 1 3 3v1h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1v1a3 3 0 0 1-3 3h-3.471l-3.861-6.741a2.5 2.5 0 0 0-4.339 0l-2.965 5.176A3 3 0 0 1 2 15V9a3 3 0 0 1 3-3zm-9.502 7a.5.5 0 0 0-.5.5v3l.008.09a.5.5 0 0 0 .992-.09v-3l-.008-.09a.5.5 0 0 0-.492-.41"/>`,
  'regular': `<path d="M8.244 11.2a1.5 1.5 0 0 1 .556.556l4.01 6.998A1.5 1.5 0 0 1 11.507 21H3.489a1.5 1.5 0 0 1-1.302-2.246l4.01-6.998a1.5 1.5 0 0 1 2.047-.556M7.5 18a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1M17 6a3 3 0 0 1 3 3v1h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1v1a3 3 0 0 1-3 3h-3.471l-.859-1.5h4.328a1.5 1.5 0 0 0 1.493-1.355l.007-.145V9a1.5 1.5 0 0 0-1.355-1.493l-.145-.007H5a1.5 1.5 0 0 0-1.493 1.356L3.5 9l-.001 5.453-1.135 1.982A3 3 0 0 1 2 15V9a3 3 0 0 1 3-3zm-9.502 7a.5.5 0 0 0-.492.41l-.008.09v3l.008.09a.5.5 0 0 0 .984 0l.008-.09v-3l-.008-.09a.5.5 0 0 0-.492-.41"/>`
} as const;

export default function BatteryWarningIcon({ 
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

  const gradientId = 'batterywarningicon_gradient';
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