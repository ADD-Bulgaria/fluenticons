
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M2 7.75A3.75 3.75 0 0 1 5.75 4h16.5A3.75 3.75 0 0 1 26 7.75v6.65A7.5 7.5 0 0 0 14.5 24H5.75A3.75 3.75 0 0 1 2 20.25zM14 19.5a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0m5.349-4.08A4 4 0 0 1 24 17.313V16.5a.5.5 0 0 1 1 0v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h.727a2.998 2.998 0 0 0-4.848-.871.5.5 0 0 1-.707-.707 4 4 0 0 1 1.677-1.003m2.302 8.16A4 4 0 0 1 17 21.687v.814a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-.727a2.998 2.998 0 0 0 4.848.871.5.5 0 0 1 .707.707 4 4 0 0 1-1.677 1.003"/>`,
  'regular': `<path d="M2.004 7.75A3.75 3.75 0 0 1 5.754 4H22.25A3.75 3.75 0 0 1 26 7.75v6.652a7.5 7.5 0 0 0-1.5-1.247V7.75a2.25 2.25 0 0 0-2.25-2.25H5.755a2.25 2.25 0 0 0-2.25 2.25v12.5a2.25 2.25 0 0 0 2.25 2.25h7.87c.234.536.529 1.038.875 1.5H5.755a3.75 3.75 0 0 1-3.75-3.75zM14 19.5a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0m5.349-4.08A4 4 0 0 1 24 17.313V16.5a.5.5 0 0 1 1 0v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h.727a2.998 2.998 0 0 0-4.848-.871.5.5 0 0 1-.707-.707 4 4 0 0 1 1.677-1.003m2.302 8.16A4 4 0 0 1 17 21.687v.814a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-.727a2.998 2.998 0 0 0 4.848.871.5.5 0 0 1 .707.707 4 4 0 0 1-1.677 1.003"/>`
} as const;

export default function RectangleLandscapeSyncIcon({ 
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

  const gradientId = 'rectanglelandscapesyncicon_gradient';
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