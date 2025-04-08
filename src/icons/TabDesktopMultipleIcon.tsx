
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M19 6.01a3.25 3.25 0 0 1 3.002 3.24v8a4.75 4.75 0 0 1-4.75 4.75h-8a3.25 3.25 0 0 1-3.24-3h8.739A4.25 4.25 0 0 0 19 14.75zM5.25 2A3.25 3.25 0 0 0 2 5.25v9.5A3.25 3.25 0 0 0 5.25 18h9.5A3.25 3.25 0 0 0 18 14.75V7.5h-7.25A2.25 2.25 0 0 1 8.5 5.25V2zm5.5 4H18v-.75A3.25 3.25 0 0 0 14.75 2H10v3.25c0 .414.336.75.75.75"/>`,
  'regular': `<path d="M9.248 22a3.25 3.25 0 0 1-3.24-3h1.508c.121.848.85 1.5 1.732 1.5h8a3.25 3.25 0 0 0 3.25-3.25v-8a1.75 1.75 0 0 0-1.5-1.732V6.009a3.25 3.25 0 0 1 3 3.241v8a4.75 4.75 0 0 1-4.75 4.75zM2 5.25A3.25 3.25 0 0 1 5.25 2h9.5A3.25 3.25 0 0 1 18 5.25v9.5A3.25 3.25 0 0 1 14.75 18h-9.5A3.25 3.25 0 0 1 2 14.75zM5.25 3.5A1.75 1.75 0 0 0 3.5 5.25v9.5c0 .966.784 1.75 1.75 1.75h9.5a1.75 1.75 0 0 0 1.75-1.75V7.5h-5.75A2.25 2.25 0 0 1 8.5 5.25V3.5zm4.75 0v1.75c0 .414.336.75.75.75h5.75v-.75a1.75 1.75 0 0 0-1.75-1.75z"/>`
} as const;

export default function TabDesktopMultipleIcon({ 
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

  const gradientId = 'tabdesktopmultipleicon_gradient';
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