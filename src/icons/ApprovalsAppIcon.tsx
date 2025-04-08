
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M21.44 3.44a1.5 1.5 0 0 1 2.12 0l5 5a1.5 1.5 0 0 1 0 2.12l-5 5a1.5 1.5 0 0 1-2.12-2.12L23.877 11C15.65 11.067 9 17.757 9 26c0 8.284 6.716 15 15 15 7.779 0 14.175-5.921 14.926-13.502.082-.825.746-1.498 1.574-1.498s1.507.674 1.438 1.5C41.176 36.74 33.436 44 24 44c-9.941 0-18-8.059-18-18 0-9.9 7.994-17.935 17.88-18l-2.44-2.44a1.5 1.5 0 0 1 0-2.12m11.12 19.12a1.5 1.5 0 0 0-2.12-2.12l-7.94 7.939-2.94-2.94a1.5 1.5 0 0 0-2.12 2.122l4 4a1.5 1.5 0 0 0 2.12 0z"/>`,
  'regular': `<path d="M21.616 3.366a1.25 1.25 0 0 1 1.768 0l5.25 5.25a1.25 1.25 0 0 1 0 1.768l-5.25 5.25a1.25 1.25 0 0 1-1.768-1.768l3.337-3.337q-.473-.03-.953-.029c-8.56 0-15.5 6.94-15.5 15.5S15.44 41.5 24 41.5c8.14 0 14.814-6.274 15.45-14.25.055-.688.61-1.25 1.3-1.25s1.255.561 1.207 1.25C41.315 36.608 33.521 44 24 44c-9.941 0-18-8.059-18-18S14.059 8 24 8q.245 0 .489.007l-2.873-2.873a1.25 1.25 0 0 1 0-1.768m11.268 18.768a1.25 1.25 0 0 0-1.768-1.768L22.5 28.982l-3.366-3.366a1.25 1.25 0 0 0-1.768 1.768l4.25 4.25a1.25 1.25 0 0 0 1.768 0z"/>`
} as const;

export default function ApprovalsAppIcon({ 
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

  const gradientId = 'approvalsappicon_gradient';
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