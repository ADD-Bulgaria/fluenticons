
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10m12 0a5 5 0 1 0 0-10 5 5 0 0 0 0 10m-7 7a5 5 0 1 1-10 0 5 5 0 0 1 10 0m7 5a5 5 0 1 0 0-10 5 5 0 0 0 0 10"/>`,
  'regular': `<path d="M13 8A5 5 0 1 0 3 8a5 5 0 0 0 10 0m-1.875 0a3.125 3.125 0 1 1-6.25 0 3.125 3.125 0 0 1 6.25 0M25 8a5 5 0 1 0-10 0 5 5 0 0 0 10 0m-1.875 0a3.125 3.125 0 1 1-6.25 0 3.125 3.125 0 0 1 6.25 0M8 25a5 5 0 1 1 0-10 5 5 0 0 1 0 10m0-1.875a3.125 3.125 0 1 0 0-6.25 3.125 3.125 0 0 0 0 6.25M25 20a5 5 0 1 0-10 0 5 5 0 0 0 10 0m-1.875 0a3.125 3.125 0 1 1-6.25 0 3.125 3.125 0 0 1 6.25 0"/>`
} as const;

export default function GridCirclesIcon({ 
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
        viewBox="0 0 28 28"
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

  const gradientId = 'gridcirclesicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 28"
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