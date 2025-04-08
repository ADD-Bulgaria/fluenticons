
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M17 2v5a1 1 0 1 0 2 0V2h2v7a1 1 0 1 0 2 0V2h2a1 1 0 0 1 1 1v11H6V3a1 1 0 0 1 1-1zm-3 21a8.98 8.98 0 0 1 3.343-7H6v2.75A3.25 3.25 0 0 0 9.25 22H12v4a4 4 0 0 0 5.144 3.834A8.98 8.98 0 0 1 14 23m16.5 0a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0M18 22.75c0 .414.336.75.75.75h8.5a.75.75 0 0 0 0-1.5h-8.5a.75.75 0 0 0-.75.75"/>`,
  'regular': `<path d="M7 2a1 1 0 0 0-1 1v15.75A3.25 3.25 0 0 0 9.25 22H12v4a4 4 0 0 0 5.144 3.834 9 9 0 0 1-1.676-1.905A2 2 0 0 1 14 26v-5a1 1 0 0 0-1-1H9.25C8.56 20 8 19.44 8 18.75V16h9.343A8.96 8.96 0 0 1 23 14H8V4h8v3a1 1 0 1 0 2 0V4h2v5a1 1 0 1 0 2 0V4h2v10.055a9 9 0 0 1 2 .457V3a1 1 0 0 0-1-1zm23.5 21a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0M18 22.75c0 .414.336.75.75.75h8.5a.75.75 0 0 0 0-1.5h-8.5a.75.75 0 0 0-.75.75"/>`
} as const;

export default function PaintBrushSubtractIcon({ 
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

  const gradientId = 'paintbrushsubtracticon_gradient';
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