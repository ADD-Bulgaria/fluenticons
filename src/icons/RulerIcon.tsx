
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M14.022 7.815A4.25 4.25 0 0 1 18.25 4h11.5A4.25 4.25 0 0 1 34 8.25v31.5A4.25 4.25 0 0 1 29.75 44h-11.5A4.25 4.25 0 0 1 14 39.75V8.25q0-.22.022-.435M16.5 10.25v2.5h4.25a1.25 1.25 0 1 0 0-2.5zm0 6.25V19h8.25a1.25 1.25 0 1 0 0-2.5zm0 6.25v2.5h4.25a1.25 1.25 0 1 0 0-2.5zm0 6.25v2.5h8.25a1.25 1.25 0 1 0 0-2.5zm0 6.25v2.5h4.25a1.25 1.25 0 1 0 0-2.5z"/>`,
  'regular': `<path d="M18.25 4A4.25 4.25 0 0 0 14 8.25v31.5A4.25 4.25 0 0 0 18.25 44h11.5A4.25 4.25 0 0 0 34 39.75V8.25A4.25 4.25 0 0 0 29.75 4zm-1.75 8.75h4.25a1.25 1.25 0 1 0 0-2.5H16.5v-2c0-.966.784-1.75 1.75-1.75h11.5c.966 0 1.75.784 1.75 1.75v31.5a1.75 1.75 0 0 1-1.75 1.75h-11.5a1.75 1.75 0 0 1-1.75-1.75v-2h4.25a1.25 1.25 0 1 0 0-2.5H16.5V31.5h8.25a1.25 1.25 0 1 0 0-2.5H16.5v-3.75h4.25a1.25 1.25 0 1 0 0-2.5H16.5V19h8.25a1.25 1.25 0 1 0 0-2.5H16.5z"/>`
} as const;

export default function RulerIcon({ 
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

  const gradientId = 'rulericon_gradient';
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