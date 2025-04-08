
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M8 12.25A4.25 4.25 0 0 1 12.25 8h23.5A4.25 4.25 0 0 1 40 12.25v8.424A7 7 0 0 0 32.101 32H12.25A4.25 4.25 0 0 1 8 27.75zm18 24.748c0-.522.08-1.025.228-1.498H5.25a1.25 1.25 0 1 0 0 2.5h20.766a8 8 0 0 1-.016-.5zM42 27a5 5 0 1 1-10 0 5 5 0 0 1 10 0m4 10.5c0 3.5-3.15 6.5-9 6.5s-9-3-9-6.5v-.502A3 3 0 0 1 31 34h12c1.657 0 3 1.34 3 2.998z"/>`,
  'regular': `<path d="M12.25 8A4.25 4.25 0 0 0 8 12.25v15.5A4.25 4.25 0 0 0 12.25 32h19.851a7 7 0 0 1-1.641-2.5H12.25a1.75 1.75 0 0 1-1.75-1.75v-15.5c0-.966.784-1.75 1.75-1.75h23.5c.967 0 1.75.784 1.75 1.75v7.768c.89.062 1.733.291 2.5.656V12.25A4.25 4.25 0 0 0 35.75 8zm-7 27.5h20.978A5 5 0 0 0 26 36.998v.502q0 .252.016.5H5.25a1.25 1.25 0 1 1 0-2.5M42 27a5 5 0 1 1-10 0 5 5 0 0 1 10 0m4 10.5c0 3.5-3.15 6.5-9 6.5s-9-3-9-6.5v-.502A3 3 0 0 1 31 34h12c1.657 0 3 1.34 3 2.998z"/>`
} as const;

export default function LaptopPersonIcon({ 
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

  const gradientId = 'laptoppersonicon_gradient';
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