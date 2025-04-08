
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M9 9h1V8H9zm3.25-6h-9.5A1.75 1.75 0 0 0 1 4.75v7.5c0 .966.784 1.75 1.75 1.75h9.5A1.75 1.75 0 0 0 14 12.25v-7.5A1.75 1.75 0 0 0 12.25 3M4.146 9.854A.5.5 0 0 0 5 9.5a.5.5 0 1 1 1 0A1.503 1.503 0 0 1 4.5 11 1.503 1.503 0 0 1 3 9.5v-2A1.503 1.503 0 0 1 4.5 6 1.503 1.503 0 0 1 6 7.5a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5.5.5 0 1 0-1 0v2c0 .133.053.26.146.354M11.5 9a.5.5 0 0 1 .5.5.5.5 0 0 1-.5.5H11v.5a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5V10H9v.5a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.5-.5.5.5 0 0 1 .5-.5H8V8h-.5a.5.5 0 0 1-.5-.5.5.5 0 0 1 .5-.5H8v-.5a.5.5 0 1 1 1 0V7h1v-.5a.5.5 0 1 1 1 0V7h.5a.5.5 0 0 1 .5.5.5.5 0 0 1-.5.5H11v1z"/>`,
  'regular': `<path d="M4 9.5v-2a.5.5 0 1 1 1 0 .5.5 0 1 0 1 0 1.5 1.5 0 0 0-3 0v2a1.5 1.5 0 0 0 3 0 .5.5 0 1 0-1 0 .5.5 0 1 1-1 0m7.854.354A.5.5 0 0 0 11.5 9H11V8h.5a.5.5 0 0 0 0-1H11v-.5a.5.5 0 0 0-1 0V7H9v-.5a.5.5 0 1 0-1 0V7h-.5a.5.5 0 1 0 0 1H8v1h-.5a.5.5 0 1 0 0 1H8v.5a.5.5 0 0 0 1 0V10h1v.5a.5.5 0 0 0 1 0V10h.5a.5.5 0 0 0 .354-.146M9 8h1v1H9zM2.75 3A1.75 1.75 0 0 0 1 4.75v7.5c0 .966.784 1.75 1.75 1.75h9.5A1.75 1.75 0 0 0 14 12.25v-7.5A1.75 1.75 0 0 0 12.25 3zM2 4.75A.75.75 0 0 1 2.75 4h9.5a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-.75.75h-9.5a.75.75 0 0 1-.75-.75z"/>`
} as const;

export default function CodeCsRectangleIcon({ 
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

  const gradientId = 'codecsrectangleicon_gradient';
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