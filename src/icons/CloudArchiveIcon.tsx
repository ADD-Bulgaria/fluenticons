
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M24 7c-6.29 0-11.45 4.84-11.959 11H11.5a8.5 8.5 0 0 0 0 17H24v-3.17A3 3 0 0 1 22 29v-3a3 3 0 0 1 3-3h19.248a8.5 8.5 0 0 0-7.748-5h-.541C35.45 11.84 30.29 7 24 7m1 18a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zm1 7h18v9a4 4 0 0 1-4 4H30a4 4 0 0 1-4-4zm12 3h-6a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2"/>`,
  'regular': `<path d="M24 9.5a9.5 9.5 0 0 0-9.497 9.721 1.25 1.25 0 0 1-1.25 1.279H11.5a6 6 0 0 0 0 12H24V35H11.5a8.5 8.5 0 0 1 0-17h.541C12.55 11.84 17.71 7 24 7s11.45 4.84 11.959 11h.541a8.5 8.5 0 0 1 7.748 5h-2.874a6 6 0 0 0-4.874-2.5h-1.753a1.25 1.25 0 0 1-1.25-1.279q.003-.11.003-.221A9.5 9.5 0 0 0 24 9.5M25 25a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zm1 7h18v9a4 4 0 0 1-4 4H30a4 4 0 0 1-4-4zm12 3h-6a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2"/>`
} as const;

export default function CloudArchiveIcon({ 
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

  const gradientId = 'cloudarchiveicon_gradient';
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