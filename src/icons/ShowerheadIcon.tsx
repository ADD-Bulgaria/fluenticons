
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="m28.377 6.623-2.883 2.884a11.6 11.6 0 0 0-3.002-3.002l2.884-2.883a2.122 2.122 0 0 1 3.001 3.001M7.707 19.707a1 1 0 1 0-1.414-1.414l-3 3a1 1 0 1 0 1.414 1.414zm3 1.586a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414l3-3a1 1 0 0 1 1.414 0m3 4.414a1 1 0 0 0-1.414-1.414l-3 3a1 1 0 1 0 1.414 1.414zM8.237 9.622a2.13 2.13 0 0 0-2.978 3.047l14.096 14.096a2.13 2.13 0 0 0 3.024-3.002l-.01-.011L8.273 9.656zm1.097-1.027-.026-.025c3.926-3.542 9.982-3.423 13.764.359s3.901 9.838.36 13.764l-.002-.002z"/>`,
  'regular': `<path d="M20.508 7.07c-3.512-1.773-7.852-1.343-10.962 1.29a3.124 3.124 0 0 0-3.594 5.008l12.704 12.704a3.123 3.123 0 0 0 4.99-3.627c2.63-3.112 3.056-7.45 1.28-10.96l3.153-3.155a3.122 3.122 0 1 0-4.416-4.415zm-9.413 2.61a8.001 8.001 0 0 1 11.226 11.226zm-3.729.687a1.123 1.123 0 0 1 1.548-.037l12.781 12.78a1.122 1.122 0 0 1-1.625 1.548L7.366 11.954a1.123 1.123 0 0 1 0-1.588m14.864-2.19 2.848-2.847a1.122 1.122 0 1 1 1.587 1.587l-2.847 2.847a10 10 0 0 0-1.588-1.587M7.707 19.707a1 1 0 1 0-1.414-1.414l-3 3a1 1 0 1 0 1.414 1.414zm3 1.586a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414l3-3a1 1 0 0 1 1.414 0m3 4.414a1 1 0 0 0-1.414-1.414l-3 3a1 1 0 1 0 1.414 1.414z"/>`
} as const;

export default function ShowerheadIcon({ 
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
        viewBox="0 0 32 32"
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

  const gradientId = 'showerheadicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
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