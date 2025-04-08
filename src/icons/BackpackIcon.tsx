
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M21.179 18.5a2.68 2.68 0 0 0-2.679 2.679c0 .177.144.321.321.321H29.18a.32.32 0 0 0 .321-.321 2.68 2.68 0 0 0-2.679-2.679zM24 4a8 8 0 0 0-7.951 7.113C11.239 13.872 8 19.058 8 25v3h32v-3c0-5.942-3.24-11.128-8.049-13.887A8 8 0 0 0 24 4m0 5c-1.764 0-3.461.285-5.048.813a5.501 5.501 0 0 1 10.096 0A16 16 0 0 0 24 9m-8 12.179A5.18 5.18 0 0 1 21.179 16h5.642A5.18 5.18 0 0 1 32 21.179 2.82 2.82 0 0 1 29.179 24H18.82A2.82 2.82 0 0 1 16 21.179m0 9.321v3.25a1.25 1.25 0 1 0 2.5 0V30.5H40v8.25c0 2.9-2.35 5.25-5.25 5.25h-21.5A5.25 5.25 0 0 1 8 38.75V30.5z"/>`,
  'regular': `<path d="M16 21.179A2.82 2.82 0 0 0 18.821 24H29.18A2.82 2.82 0 0 0 32 21.179 5.18 5.18 0 0 0 26.821 16H21.18A5.18 5.18 0 0 0 16 21.179m5.179-2.679h5.642a2.68 2.68 0 0 1 2.679 2.679.32.32 0 0 1-.321.321H18.82a.32.32 0 0 1-.321-.321 2.68 2.68 0 0 1 2.679-2.679M24 4a8 8 0 0 0-7.951 7.113C11.239 13.872 8 19.058 8 25v13.75c0 2.9 2.35 5.25 5.25 5.25h21.5c2.9 0 5.25-2.35 5.25-5.25V25c0-5.942-3.24-11.128-8.049-13.887A8 8 0 0 0 24 4m13.5 24h-27v-3c0-7.456 6.044-13.5 13.5-13.5S37.5 17.544 37.5 25zM16 30.5v3.25a1.25 1.25 0 1 0 2.5 0V30.5h19v8.25a2.75 2.75 0 0 1-2.75 2.75h-21.5a2.75 2.75 0 0 1-2.75-2.75V30.5zM24 9c-1.764 0-3.461.285-5.048.813a5.501 5.501 0 0 1 10.096 0A16 16 0 0 0 24 9"/>`
} as const;

export default function BackpackIcon({ 
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

  const gradientId = 'backpackicon_gradient';
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