
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M9.391 2.32C8.42 1.56 7 2.253 7 3.486V28.41c0 1.538 1.966 2.18 2.874.938l6.225-8.523a2 2 0 0 1 1.615-.82h9.69c1.512 0 2.17-1.912.978-2.844z"/>`,
  'light': `<path d="M5.999 3.503c0-1.253 1.445-1.954 2.429-1.178L27.424 17.32c1.117.881.494 2.677-.93 2.677H16.303a.5.5 0 0 0-.393.192L8.677 29.42c-.88 1.123-2.681.5-2.68-.925zm1.81-.393a.5.5 0 0 0-.81.393l-.003 24.993a.5.5 0 0 0 .894.309l7.232-9.233a1.5 1.5 0 0 1 1.18-.575h10.193a.5.5 0 0 0 .31-.893z"/>`,
  'regular': `<path d="M9 4.553v22.6l5.484-7.508a4 4 0 0 1 3.23-1.64h8.499zM7 3.486C7 2.253 8.42 1.56 9.391 2.32l18.991 14.84c1.192.931.534 2.844-.979 2.844h-9.69a2 2 0 0 0-1.614.82l-6.225 8.523C8.966 30.59 7 29.948 7 28.41z"/>`
} as const;

export default function CursorIcon({ 
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

  const gradientId = 'cursoricon_gradient';
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