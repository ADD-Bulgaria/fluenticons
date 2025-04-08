
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="m35.232 37 6.634 6.634a1.25 1.25 0 0 0 1.768-1.768l-37.5-37.5a1.25 1.25 0 1 0-1.768 1.768l9.105 9.105A11.9 11.9 0 0 0 12.04 20h-.54a8.5 8.5 0 0 0 0 17zM45 28.5a8.5 8.5 0 0 1-4.436 7.468L16.35 11.754A11.95 11.95 0 0 1 24 9c6.29 0 11.45 4.84 11.959 11h.541a8.5 8.5 0 0 1 8.5 8.5"/>`,
  'regular': `<path d="m35.232 37 6.634 6.634a1.25 1.25 0 0 0 1.768-1.768l-37.5-37.5a1.25 1.25 0 1 0-1.768 1.768l9.105 9.105A11.9 11.9 0 0 0 12.04 20h-.54a8.5 8.5 0 0 0 0 17zm-2.5-2.5H11.5a6 6 0 0 1 0-12h1.753a1.25 1.25 0 0 0 1.25-1.279L14.5 21c0-1.39.298-2.709.834-3.898zM45 28.5a8.5 8.5 0 0 1-4.436 7.468l-1.878-1.879A6.002 6.002 0 0 0 36.5 22.5h-1.753a1.25 1.25 0 0 1-1.25-1.279q.003-.11.003-.221a9.5 9.5 0 0 0-9.5-9.5 9.46 9.46 0 0 0-5.872 2.032l-1.778-1.778A11.95 11.95 0 0 1 24 9c6.29 0 11.45 4.84 11.959 11h.541a8.5 8.5 0 0 1 8.5 8.5"/>`
} as const;

export default function CloudOffIcon({ 
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

  const gradientId = 'cloudofficon_gradient';
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