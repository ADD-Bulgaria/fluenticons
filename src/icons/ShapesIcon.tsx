
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M23.25 15.5h7.603C29.887 8.993 24.276 4 17.5 4 10.044 4 4 10.044 4 17.5c0 6.776 4.993 12.387 11.5 13.353V23.25a7.75 7.75 0 0 1 7.75-7.75m0 2.5A5.25 5.25 0 0 0 18 23.25v15.5c0 2.9 2.35 5.25 5.25 5.25h15.5c2.9 0 5.25-2.35 5.25-5.25v-15.5c0-2.9-2.35-5.25-5.25-5.25z"/>`,
  'regular': `<path d="M17.5 6.5c-6.075 0-11 4.925-11 11 0 5.392 3.88 9.878 9 10.819v2.534C8.993 29.887 4 24.276 4 17.5 4 10.044 10.044 4 17.5 4c6.776 0 12.387 4.993 13.353 11.5h-2.534c-.94-5.12-5.427-9-10.819-9M23.25 18A5.25 5.25 0 0 0 18 23.25v15.5c0 2.9 2.35 5.25 5.25 5.25h15.5c2.9 0 5.25-2.35 5.25-5.25v-15.5c0-2.9-2.35-5.25-5.25-5.25zm-2.75 5.25a2.75 2.75 0 0 1 2.75-2.75h15.5a2.75 2.75 0 0 1 2.75 2.75v15.5a2.75 2.75 0 0 1-2.75 2.75h-15.5a2.75 2.75 0 0 1-2.75-2.75z"/>`
} as const;

export default function ShapesIcon({ 
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

  const gradientId = 'shapesicon_gradient';
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