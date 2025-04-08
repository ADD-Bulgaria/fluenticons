
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M37.5 43a1.5 1.5 0 0 0 1.5-1.5v-4.25A4.25 4.25 0 0 0 34.75 33h-21.5A4.25 4.25 0 0 0 9 37.25v4.25a1.5 1.5 0 0 0 1.5 1.5z"/><path d="M37.5 43a1.5 1.5 0 0 0 1.5-1.5v-4.25A4.25 4.25 0 0 0 34.75 33h-21.5A4.25 4.25 0 0 0 9 37.25v4.25a1.5 1.5 0 0 0 1.5 1.5zM24 29a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19"/><path d="M10.25 6.5a3.75 3.75 0 0 0-3.75 3.75v5.5a1.25 1.25 0 1 1-2.5 0v-5.5A6.25 6.25 0 0 1 10.25 4h5.5a1.25 1.25 0 1 1 0 2.5zm0 35q-.292 0-.571-.043l-.04-.007a3.75 3.75 0 0 1-3.139-3.7v-5.5a1.25 1.25 0 1 0-2.5 0v5.5A6.25 6.25 0 0 0 10.25 44h5.5a1.25 1.25 0 0 0 0-2.5zM41.5 10.25a3.75 3.75 0 0 0-3.75-3.75h-5.5a1.25 1.25 0 1 1 0-2.5h5.5A6.25 6.25 0 0 1 44 10.25v5.5a1.25 1.25 0 1 1-2.5 0zM37.75 41.5q.267 0 .524-.036l.032-.005A3.75 3.75 0 0 0 41.5 37.75v-5.5a1.25 1.25 0 1 1 2.5 0v5.5A6.25 6.25 0 0 1 37.75 44h-5.5a1.25 1.25 0 0 1 0-2.5z"/>`,
  'filled': `<path d="M10.25 6.5a3.75 3.75 0 0 0-3.75 3.75v5.5a1.25 1.25 0 1 1-2.5 0v-5.5A6.25 6.25 0 0 1 10.25 4h5.5a1.25 1.25 0 1 1 0 2.5zm0 35q-.292 0-.571-.043l-.04-.007a3.75 3.75 0 0 1-3.139-3.7v-5.5a1.25 1.25 0 1 0-2.5 0v5.5A6.25 6.25 0 0 0 10.25 44h5.5a1.25 1.25 0 0 0 0-2.5zM41.5 10.25a3.75 3.75 0 0 0-3.75-3.75h-5.5a1.25 1.25 0 1 1 0-2.5h5.5A6.25 6.25 0 0 1 44 10.25v5.5a1.25 1.25 0 1 1-2.5 0zM37.75 41.5q.267 0 .524-.036l.032-.005A3.75 3.75 0 0 0 41.5 37.75v-5.5a1.25 1.25 0 1 1 2.5 0v5.5A6.25 6.25 0 0 1 37.75 44h-5.5a1.25 1.25 0 0 1 0-2.5zM29.01 43a3.25 3.25 0 0 1 3.24-3.5h5.5c.48 0 .916-.194 1.232-.507Q39 38.75 39 38.5v-1.25A4.25 4.25 0 0 0 34.75 33h-21.5A4.25 4.25 0 0 0 9 37.25v1.25q0 .25.017.491a1.74 1.74 0 0 0 1.233.509h5.5a3.25 3.25 0 0 1 3.24 3.5zM24 29a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19"/>`,
  'regular': `<path d="M10.25 6.5a3.75 3.75 0 0 0-3.75 3.75v5.5a1.25 1.25 0 1 1-2.5 0v-5.5A6.25 6.25 0 0 1 10.25 4h5.5a1.25 1.25 0 1 1 0 2.5zm0 35q-.292 0-.571-.043l-.04-.007a3.75 3.75 0 0 1-3.139-3.7v-5.5a1.25 1.25 0 1 0-2.5 0v5.5A6.25 6.25 0 0 0 10.25 44h5.5a1.25 1.25 0 1 0 0-2.5zM41.5 10.25a3.75 3.75 0 0 0-3.75-3.75h-5.5a1.25 1.25 0 1 1 0-2.5h5.5A6.25 6.25 0 0 1 44 10.25v5.5a1.25 1.25 0 1 1-2.5 0zM37.75 41.5q.267 0 .524-.036l.032-.005A3.75 3.75 0 0 0 41.5 37.75v-5.5a1.25 1.25 0 1 1 2.5 0v5.5A6.25 6.25 0 0 1 37.75 44h-5.5a1.25 1.25 0 1 1 0-2.5zm-26.25-3q0 .51.111 1H10.25a1.74 1.74 0 0 1-1.233-.509A7 7 0 0 1 9 38.5v-1.25A4.25 4.25 0 0 1 13.25 33h21.5A4.25 4.25 0 0 1 39 37.25v1.25q0 .249-.018.493a1.75 1.75 0 0 1-1.232.507h-1.378q.128-.496.128-1v-1.25a1.75 1.75 0 0 0-1.75-1.75h-21.5a1.75 1.75 0 0 0-1.75 1.75zm19.5-19a7 7 0 1 0-14 0 7 7 0 0 0 14 0m2.5 0a9.5 9.5 0 1 1-19 0 9.5 9.5 0 0 1 19 0"/>`
} as const;

export default function ScanPersonIcon({ 
  variant = 'regular',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'color' | 'filled' | 'regular' }) {
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

  const gradientId = 'scanpersonicon_gradient';
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