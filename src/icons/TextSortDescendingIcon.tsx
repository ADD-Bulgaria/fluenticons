
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M4 3a1 1 0 0 0-2 0v7a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V3a1 1 0 1 0-2 0v6H8V6a1 1 0 0 0-2 0v3H4zm14.5 0a1 1 0 1 0-2 0v15.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l3.5 3.5a1 1 0 0 0 1.414 0l3.5-3.5a1 1 0 0 0-1.414-1.414L18.5 18.586zM7 13a1 1 0 0 1 .92.606l3 7a1 1 0 1 1-1.839.788L8.484 20H5.517l-.598 1.394a1 1 0 1 1-1.838-.788l3-7a1 1 0 0 1 .92-.606m0 3.539L6.374 18h1.253z"/>`,
  'regular': `<path d="M3.5 2.75a.75.75 0 0 0-1.5 0v7.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-7.5a.75.75 0 0 0-1.5 0V9.5H7.75V5.75a.75.75 0 0 0-1.5 0V9.5H3.5zm4.188 10.702a.75.75 0 0 0-1.376 0l-3.25 7.5a.75.75 0 1 0 1.376.596L5.11 20h3.782l.671 1.548a.75.75 0 1 0 1.376-.596zm.553 5.048H5.76L7 15.636zM17.25 2a.75.75 0 0 1 .75.75v16.69l2.22-2.22a.75.75 0 1 1 1.06 1.06l-3.5 3.5a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06l2.22 2.22V2.75a.75.75 0 0 1 .75-.75"/>`
} as const;

export default function TextSortDescendingIcon({ 
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

  const gradientId = 'textsortdescendingicon_gradient';
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