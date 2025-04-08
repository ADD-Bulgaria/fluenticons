
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M16 16a7 7 0 1 0 0-14 7 7 0 0 0 0 14m-8.5 2A3.5 3.5 0 0 0 4 21.5v.5c0 2.393 1.523 4.417 3.685 5.793C9.859 29.177 12.802 30 16 30q.624 0 1.232-.041A8.97 8.97 0 0 1 14.5 23.5c0-2.071.7-3.98 1.876-5.5zm16 13a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15m1-12.25v3.75h3.75a.75.75 0 0 1 0 1.5H24.5v3.75a.75.75 0 0 1-1.5 0V24h-3.75a.75.75 0 0 1 0-1.5H23v-3.75a.75.75 0 0 1 1.5 0"/>`,
  'light': `<path d="M9 9a7 7 0 1 1 14 0A7 7 0 0 1 9 9m7-6a6 6 0 1 0 0 12 6 6 0 0 0 0-12m.375 15H7.5A3.5 3.5 0 0 0 4 21.5v.667C4 24.317 6.766 30 16 30q.64 0 1.238-.035-.466-.453-.865-.968Q16.189 29 16 29c-8.766 0-11-5.316-11-6.833V21.5A2.5 2.5 0 0 1 7.5 19h8.204q.303-.524.671-1M23.5 31a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15m1-12.25a.75.75 0 0 0-1.5 0v3.75h-3.75a.75.75 0 0 0 0 1.5H23v3.75a.75.75 0 0 0 1.5 0V24h3.75a.75.75 0 0 0 0-1.5H24.5z"/>`,
  'regular': `<path d="M23 9A7 7 0 1 1 9 9a7 7 0 0 1 14 0m-2 0a5 5 0 1 0-10 0 5 5 0 0 0 10 0M7.5 18A3.5 3.5 0 0 0 4 21.5v.5c0 2.393 1.523 4.417 3.685 5.793C9.859 29.177 12.802 30 16 30q.624 0 1.232-.041a9 9 0 0 1-1.53-1.962c-2.755-.049-5.199-.78-6.943-1.89C6.939 24.948 6 23.472 6 22v-.5A1.5 1.5 0 0 1 7.5 20h7.706a9 9 0 0 1 1.17-2zm16 13a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15m1-12.25v3.75h3.75a.75.75 0 0 1 0 1.5H24.5v3.75a.75.75 0 0 1-1.5 0V24h-3.75a.75.75 0 0 1 0-1.5H23v-3.75a.75.75 0 0 1 1.5 0"/>`
} as const;

export default function PersonAddIcon({ 
  variant = 'regular',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'filled' | 'light' | 'regular' }) {
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

  const gradientId = 'personaddicon_gradient';
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