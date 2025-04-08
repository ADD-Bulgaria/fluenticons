
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M23.5 13a1.5 1.5 0 0 1 1.5 1.5V23h5.5a1.5 1.5 0 0 1 0 3h-7a1.5 1.5 0 0 1-1.5-1.5v-10a1.5 1.5 0 0 1 1.5-1.5"/><path d="M24 9c8.284 0 15 6.716 15 15s-6.716 15-15 15S9 32.284 9 24q.002-1.162.171-2.275a1.5 1.5 0 0 0-2.966-.45Q6.001 22.61 6 24c0 9.941 8.059 18 18 18s18-8.059 18-18S33.941 6 24 6c-4.61 0-8.816 1.734-12 4.584V7.5a1.5 1.5 0 0 0-3 0v7a1.5 1.5 0 0 0 1.5 1.5h7a1.5 1.5 0 0 0 0-3h-3.698A14.94 14.94 0 0 1 24 9"/>`,
  'filled': `<path d="M24 9c8.284 0 15 6.716 15 15s-6.716 15-15 15S9 32.284 9 24q.002-1.162.171-2.275a1.5 1.5 0 0 0-2.966-.45Q6.001 22.61 6 24c0 9.941 8.059 18 18 18s18-8.059 18-18S33.941 6 24 6c-4.61 0-8.816 1.734-12 4.584V7.5a1.5 1.5 0 0 0-3 0v7a1.5 1.5 0 0 0 1.5 1.5h7a1.5 1.5 0 0 0 0-3h-3.698A14.94 14.94 0 0 1 24 9m1 5.5a1.5 1.5 0 0 0-3 0v10a1.5 1.5 0 0 0 1.5 1.5h7a1.5 1.5 0 0 0 0-3H25z"/>`,
  'regular': `<path d="M24 8.5c8.56 0 15.5 6.94 15.5 15.5S32.56 39.5 24 39.5 8.5 32.56 8.5 24q.002-1.302.207-2.542a1.25 1.25 0 0 0-2.466-.407A18 18 0 0 0 6 24c0 9.941 8.059 18 18 18s18-8.059 18-18S33.941 6 24 6a17.94 17.94 0 0 0-12.5 5.048V8.25a1.25 1.25 0 1 0-2.5 0v6.5c0 .69.56 1.25 1.25 1.25h6.5a1.25 1.25 0 1 0 0-2.5h-4.152c2.834-3.076 6.893-5 11.402-5m1 5.75a1.25 1.25 0 1 0-2.5 0v10c0 .69.56 1.25 1.25 1.25h7a1.25 1.25 0 1 0 0-2.5H25z"/>`
} as const;

export default function HistoryIcon({ 
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

  const gradientId = 'historyicon_gradient';
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