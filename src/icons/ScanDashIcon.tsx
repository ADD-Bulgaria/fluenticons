
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M10.25 7A3.25 3.25 0 0 0 7 10.25v5.25a1.5 1.5 0 0 1-3 0v-5.25A6.25 6.25 0 0 1 10.25 4h5.25a1.5 1.5 0 0 1 0 3zm0 34A3.25 3.25 0 0 1 7 37.75V32.5a1.5 1.5 0 0 0-3 0v5.25A6.25 6.25 0 0 0 10.25 44h5.25a1.5 1.5 0 0 0 0-3zM41 10.25A3.25 3.25 0 0 0 37.75 7H32.5a1.5 1.5 0 0 1 0-3h5.25A6.25 6.25 0 0 1 44 10.25v5.25a1.5 1.5 0 0 1-3 0zM37.75 41A3.25 3.25 0 0 0 41 37.75V32.5a1.5 1.5 0 0 1 3 0v5.25A6.25 6.25 0 0 1 37.75 44H32.5a1.5 1.5 0 0 1 0-3zM13 24a1.5 1.5 0 0 1 1.5-1.5h19a1.5 1.5 0 0 1 0 3h-19A1.5 1.5 0 0 1 13 24"/>`,
  'regular': `<path d="M10.25 6.5a3.75 3.75 0 0 0-3.75 3.75v5.5a1.25 1.25 0 1 1-2.5 0v-5.5A6.25 6.25 0 0 1 10.25 4h5.5a1.25 1.25 0 1 1 0 2.5zm0 35a3.75 3.75 0 0 1-3.75-3.75v-5.5a1.25 1.25 0 1 0-2.5 0v5.5A6.25 6.25 0 0 0 10.25 44h5.5a1.25 1.25 0 1 0 0-2.5zM41.5 10.25a3.75 3.75 0 0 0-3.75-3.75h-5.5a1.25 1.25 0 1 1 0-2.5h5.5A6.25 6.25 0 0 1 44 10.25v5.5a1.25 1.25 0 1 1-2.5 0zM37.75 41.5a3.75 3.75 0 0 0 3.75-3.75v-5.5a1.25 1.25 0 1 1 2.5 0v5.5A6.25 6.25 0 0 1 37.75 44h-5.5a1.25 1.25 0 1 1 0-2.5zm-25-17.5c0-.69.56-1.25 1.25-1.25h20a1.25 1.25 0 1 1 0 2.5H14c-.69 0-1.25-.56-1.25-1.25"/>`
} as const;

export default function ScanDashIcon({ 
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

  const gradientId = 'scandashicon_gradient';
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