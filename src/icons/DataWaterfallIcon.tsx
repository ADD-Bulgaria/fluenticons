
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M2.75 3a.75.75 0 0 0 0 1.5H4v5.75a2.25 2.25 0 0 0 2.25 2.25h6.25v6.25A2.25 2.25 0 0 0 14.75 21h6.5a.75.75 0 0 0 0-1.5H20v-6.25A2.25 2.25 0 0 0 17.75 11H11.5V5.25A2.25 2.25 0 0 0 9.25 3z"/>`,
  'regular': `<path d="M2 3.75A.75.75 0 0 1 2.75 3h6.5a2.25 2.25 0 0 1 2.25 2.25V11h6.25A2.25 2.25 0 0 1 20 13.25v6.25h1.25a.75.75 0 0 1 0 1.5h-6.5a2.25 2.25 0 0 1-2.25-2.25V12.5H6.25A2.25 2.25 0 0 1 4 10.25V4.5H2.75A.75.75 0 0 1 2 3.75M18.5 19.5v-6.25a.75.75 0 0 0-.75-.75H14v6.25c0 .414.336.75.75.75zM10 5.25a.75.75 0 0 0-.75-.75H5.5v5.75c0 .414.336.75.75.75H10z"/>`
} as const;

export default function DataWaterfallIcon({ 
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

  const gradientId = 'datawaterfallicon_gradient';
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