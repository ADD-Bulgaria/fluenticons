
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M3 6.25A3.25 3.25 0 0 1 6.25 3h11.5A3.25 3.25 0 0 1 21 6.25V20a1 1 0 1 1-2 0v-3.75c0-.69-.56-1.25-1.25-1.25H6.25C5.56 15 5 15.56 5 16.25V20a1 1 0 1 1-2 0zm2 7A3.2 3.2 0 0 1 6.25 13h11.5c.443 0 .865.089 1.25.25v-2c0-.69-.56-1.25-1.25-1.25H6.25C5.56 10 5 10.56 5 11.25zm14-7C19 5.56 18.44 5 17.75 5H6.25C5.56 5 5 5.56 5 6.25v2A3.2 3.2 0 0 1 6.25 8h11.5c.443 0 .865.089 1.25.25z"/>`,
  'regular': `<path d="M3 6.25A3.25 3.25 0 0 1 6.25 3h11.5A3.25 3.25 0 0 1 21 6.25v14a.75.75 0 0 1-1.5 0v-4a1.75 1.75 0 0 0-1.75-1.75H6.25a1.75 1.75 0 0 0-1.75 1.75v4a.75.75 0 0 1-1.5 0zm1.5 7.26A3.24 3.24 0 0 1 6.25 13h11.5c.644 0 1.245.188 1.75.51v-2.26a1.75 1.75 0 0 0-1.75-1.75H6.25a1.75 1.75 0 0 0-1.75 1.75zm15-7.26a1.75 1.75 0 0 0-1.75-1.75H6.25A1.75 1.75 0 0 0 4.5 6.25v2.26A3.24 3.24 0 0 1 6.25 8h11.5c.644 0 1.245.188 1.75.51z"/>`
} as const;

export default function StackVerticalIcon({ 
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
        viewBox="0 0 24 24"
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

  const gradientId = 'stackverticalicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
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