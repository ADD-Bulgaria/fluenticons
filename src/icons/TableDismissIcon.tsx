
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'light': `<path d="M3 7.5A4.5 4.5 0 0 1 7.5 3h17A4.5 4.5 0 0 1 29 7.5v8.875a9 9 0 0 0-1-.671V12h-7v2.852a9 9 0 0 0-1 .354V12h-8v8h3.206a9 9 0 0 0-.354 1H12v7h3.704q.303.524.671 1H7.5A4.5 4.5 0 0 1 3 24.5zM4 21v3.5A3.5 3.5 0 0 0 7.5 28H11v-7zm0-1h7v-8H4zM7.5 4A3.5 3.5 0 0 0 4 7.5V11h7V4zM20 4h-8v7h8zm1 0v7h7V7.5A3.5 3.5 0 0 0 24.5 4zm2.5 12a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15m2.72 3.72-2.72 2.72-2.72-2.72a.75.75 0 1 0-1.06 1.06l2.72 2.72-2.72 2.72a.75.75 0 1 0 1.06 1.06l2.72-2.72 2.72 2.72a.75.75 0 1 0 1.06-1.06l-2.72-2.72 2.72-2.72a.75.75 0 1 0-1.06-1.06"/>`
} as const;

export default function TableDismissIcon({ 
  variant = 'light',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'light' }) {
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
        <g dangerouslySetInnerHTML={{ __html: svgContent[variant] || svgContent['light'] || '' }} />
      </svg>
    );
  }

  const gradientId = 'tabledismissicon_gradient';
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
      <g dangerouslySetInnerHTML={{ __html: svgContent[variant] || svgContent['light'] || '' }} />
    </svg>
  );
}