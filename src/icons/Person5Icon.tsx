
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M16 16a7 7 0 1 0 0-14 7 7 0 0 0 0 14m-8.5 2A3.5 3.5 0 0 0 4 21.5v.5c0 2.394 1.523 4.418 3.685 5.794C9.859 29.177 12.802 30 16 30c1.142 0 2.251-.105 3.305-.303A2.5 2.5 0 0 1 21 26.05v-.415a2.5 2.5 0 0 1-1.739-2.622L19.74 18zm13.755-.095A1 1 0 0 1 22.25 17h6.25a1 1 0 1 1 0 2h-5.34l-.295 3.09 1.91-.26a4.606 4.606 0 1 1 .62 9.17h-.617a5.22 5.22 0 0 1-3.532-1.375l-.422-.388a1 1 0 0 1 1.352-1.474l.423.388a3.22 3.22 0 0 0 2.179.849h.616a2.606 2.606 0 1 0-.35-5.188l-3.16.429a1 1 0 0 1-1.13-1.086z"/>`,
  'regular': `<path d="M23 9A7 7 0 1 1 9 9a7 7 0 0 1 14 0m-2 0a5 5 0 1 0-10 0 5 5 0 0 0 10 0M6 21.5A1.5 1.5 0 0 1 7.5 20h12.048l.19-2H7.5A3.5 3.5 0 0 0 4 21.5v.5c0 2.394 1.523 4.418 3.685 5.794C9.859 29.177 12.802 30 16 30c1.142 0 2.251-.105 3.305-.303a2.5 2.5 0 0 1-.172-2.004C18.151 27.891 17.1 28 16 28c-2.877 0-5.434-.744-7.241-1.894C6.939 24.95 6 23.473 6 22zM22.25 17a1 1 0 0 0-.995.905l-.5 5.25a1 1 0 0 0 1.13 1.086l3.16-.429a2.606 2.606 0 1 1 .35 5.188h-.617a3.22 3.22 0 0 1-2.18-.849l-.422-.388a1 1 0 0 0-1.352 1.474l.422.388A5.22 5.22 0 0 0 24.778 31h.616a4.606 4.606 0 1 0-.619-9.17l-1.91.26.294-3.09H28.5a1 1 0 1 0 0-2z"/>`
} as const;

export default function Person5Icon({ 
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

  const gradientId = 'person5icon_gradient';
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