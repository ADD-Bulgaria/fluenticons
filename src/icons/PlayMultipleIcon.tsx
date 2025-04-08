
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M4.44 12.56a1.5 1.5 0 0 0 1.795.245l8-4.5a1.5 1.5 0 0 0 0-2.611l-8.01-4.506A1.52 1.52 0 0 0 4 2.5v9c0 .398.158.78.44 1.06m7.32-1.72 1.22-.68q.018.124.02.25a1.51 1.51 0 0 1-.76 1.31l-5.08 2.86A3.6 3.6 0 0 1 5.5 15a3 3 0 0 1-.91-.13A3.33 3.33 0 0 1 3 13.94a3.46 3.46 0 0 1-1-2.44V5.91a1.48 1.48 0 0 1 1-1.39v6.98a2.513 2.513 0 0 0 3.7 2.19l5.05-2.84a.01.01 0 0 0 .01-.01"/>`,
  'regular': `<path d="M4.44 12.56a1.5 1.5 0 0 0 1.795.245l8-4.5a1.5 1.5 0 0 0 0-2.611l-8.01-4.506A1.52 1.52 0 0 0 4 2.5v9c0 .398.158.78.44 1.06m.706-10.414a.5.5 0 0 1 .599-.081l8 4.5a.5.5 0 0 1 0 .87l-7.99 4.494a.493.493 0 0 1-.755-.43v-9a.5.5 0 0 1 .146-.353m6.614 8.694 1.22-.68q.018.124.02.25a1.51 1.51 0 0 1-.76 1.31l-5.08 2.86A3.6 3.6 0 0 1 5.5 15a3 3 0 0 1-.91-.13A3.33 3.33 0 0 1 3 13.94a3.46 3.46 0 0 1-1-2.44V5.91a1.48 1.48 0 0 1 1-1.39v6.98a2.513 2.513 0 0 0 3.7 2.19l5.05-2.84.007-.003z"/>`
} as const;

export default function PlayMultipleIcon({ 
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
        viewBox="0 0 16 16"
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

  const gradientId = 'playmultipleicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
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