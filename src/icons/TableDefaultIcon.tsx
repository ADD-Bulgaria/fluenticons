
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M22 29h2.5a4.5 4.5 0 0 0 4.5-4.5V22h-7zm0-9h7v-8h-7zm-2-8v8h-8v-8zm2-2h7V7.5A4.5 4.5 0 0 0 24.5 3H22zm-2-7v7h-8V3zm0 19v7h-8v-7zm-10-2v-8H3v8zm0-10V3H7.5A4.5 4.5 0 0 0 3 7.5V10zm0 19v-7H3v2.5A4.5 4.5 0 0 0 7.5 29z"/>`,
  'regular': `<path d="M3 7.5A4.5 4.5 0 0 1 7.5 3h17A4.5 4.5 0 0 1 29 7.5v17a4.5 4.5 0 0 1-4.5 4.5h-17A4.5 4.5 0 0 1 3 24.5zM7.5 5A2.5 2.5 0 0 0 5 7.5V11h6V5zM5 13v6h6v-6zm8 0v6h6v-6zm8 0v6h6v-6zm-2 8h-6v6h6zm2 6h3.5a2.5 2.5 0 0 0 2.5-2.5V21h-6zm0-16h6V7.5A2.5 2.5 0 0 0 24.5 5H21zm-2-6h-6v6h6zM5 21v3.5A2.5 2.5 0 0 0 7.5 27H11v-6z"/>`
} as const;

export default function TableDefaultIcon({ 
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

  const gradientId = 'tabledefaulticon_gradient';
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