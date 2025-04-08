
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M5.754 3a3.75 3.75 0 0 0-3.75 3.75v11.765l2.65-5.533A5.25 5.25 0 0 1 9.39 10h13.612v-.25A3.75 3.75 0 0 0 19.25 6h-5.587a.25.25 0 0 1-.177-.073l-2.12-2.122A2.75 2.75 0 0 0 9.421 3zM2.116 21.764l-.008.021a1.637 1.637 0 0 0 1.533 2.21h15.974a3.75 3.75 0 0 0 3.244-1.868l3.768-6.497c1.063-1.834-.26-4.13-2.379-4.13H9.39a3.75 3.75 0 0 0-3.382 2.13l-3.843 8.02z"/>`,
  'regular': `<path d="M5.754 3a3.75 3.75 0 0 0-3.75 3.75V21l.001.047A2.864 2.864 0 0 0 4.867 24h14.605a3.75 3.75 0 0 0 3.244-1.869l3.77-6.5c1.45-2.5-.354-5.631-3.244-5.631H23v-.25A3.75 3.75 0 0 0 19.25 6h-5.586a.25.25 0 0 1-.177-.073l-2.12-2.122A2.75 2.75 0 0 0 9.421 3zM21.5 10H9.39a3.75 3.75 0 0 0-3.383 2.13l-2.503 5.226V6.75a2.25 2.25 0 0 1 2.25-2.25h3.668c.331 0 .649.132.883.366l2.122 2.121a1.75 1.75 0 0 0 1.237.513h5.586a2.25 2.25 0 0 1 2.25 2.25zm-2.028 12.5H4.867a1.363 1.363 0 0 1-1.23-1.952l3.723-7.77A2.25 2.25 0 0 1 9.39 11.5h13.852c1.734 0 2.816 1.879 1.947 3.379l-3.77 6.5a2.25 2.25 0 0 1-1.947 1.121"/>`
} as const;

export default function FolderOpenIcon({ 
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

  const gradientId = 'folderopenicon_gradient';
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