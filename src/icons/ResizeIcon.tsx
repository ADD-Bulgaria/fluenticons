
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M19.75 6a1.25 1.25 0 1 1 0 2.5h-7.5a3.75 3.75 0 0 0-3.75 3.75v2.5a1.25 1.25 0 1 1-2.5 0v-2.5A6.25 6.25 0 0 1 12.25 6zM6 25.25A6.25 6.25 0 0 1 12.25 19h10.5A6.25 6.25 0 0 1 29 25.25v10.5A6.25 6.25 0 0 1 22.75 42h-10.5A6.25 6.25 0 0 1 6 35.75zM33.25 42a1.25 1.25 0 1 1 0-2.5h2.5a3.75 3.75 0 0 0 3.75-3.75v-7.5a1.25 1.25 0 1 1 2.5 0v7.5A6.25 6.25 0 0 1 35.75 42zm-5-33.5a1.25 1.25 0 1 1 0-2.5h7.5A6.25 6.25 0 0 1 42 12.25v7.5a1.25 1.25 0 1 1-2.5 0v-7.5a3.75 3.75 0 0 0-3.75-3.75z"/>`,
  'regular': `<path d="M19.75 6a1.25 1.25 0 1 1 0 2.5h-7.5a3.75 3.75 0 0 0-3.75 3.75v2.5a1.25 1.25 0 1 1-2.5 0v-2.5A6.25 6.25 0 0 1 12.25 6zM6 25.25A6.25 6.25 0 0 1 12.25 19h10.5A6.25 6.25 0 0 1 29 25.25v10.5A6.25 6.25 0 0 1 22.75 42h-10.5A6.25 6.25 0 0 1 6 35.75zM22.75 39.5a3.75 3.75 0 0 0 3.75-3.75v-10.5a3.75 3.75 0 0 0-3.75-3.75h-10.5a3.75 3.75 0 0 0-3.75 3.75v10.5a3.75 3.75 0 0 0 3.75 3.75zm10.5 2.5a1.25 1.25 0 1 1 0-2.5h2.5a3.75 3.75 0 0 0 3.75-3.75v-7.5a1.25 1.25 0 1 1 2.5 0v7.5A6.25 6.25 0 0 1 35.75 42zm-5-33.5a1.25 1.25 0 1 1 0-2.5h7.5A6.25 6.25 0 0 1 42 12.25v7.5a1.25 1.25 0 1 1-2.5 0v-7.5a3.75 3.75 0 0 0-3.75-3.75z"/>`
} as const;

export default function ResizeIcon({ 
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

  const gradientId = 'resizeicon_gradient';
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