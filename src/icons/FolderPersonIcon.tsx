
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M10.25 6A6.25 6.25 0 0 0 4 12.25V16h12.715c.331 0 .649-.132.883-.366l5.152-5.152-3.384-3.384A3.75 3.75 0 0 0 16.715 6zM4 34.75V18.5h12.715a3.75 3.75 0 0 0 2.651-1.098L25.768 11H37.75A6.25 6.25 0 0 1 44 17.25V29a7 7 0 1 0-11.899 5H31c-2.76 0-5 2.234-5 4.998v.502q0 .767.147 1.5H10.25A6.25 6.25 0 0 1 4 34.75M42 29a5 5 0 1 1-10 0 5 5 0 0 1 10 0m4 10.5c0 3.5-3.15 6.5-9 6.5s-9-3-9-6.5v-.502A3 3 0 0 1 31 36h12c1.657 0 3 1.34 3 2.998z"/>`,
  'regular': `<path d="M6.5 16v-3.75a3.75 3.75 0 0 1 3.75-3.75h6.465c.331 0 .649.132.883.366l3.384 3.384-3.384 3.384a1.25 1.25 0 0 1-.883.366zm3.75-10A6.25 6.25 0 0 0 4 12.25v22.5A6.25 6.25 0 0 0 10.25 41h15.897A7.7 7.7 0 0 1 26 39.5v-.502q0-.252.024-.498H10.25a3.75 3.75 0 0 1-3.75-3.75V18.5h10.215a3.75 3.75 0 0 0 2.651-1.098l3.902-3.902H37.75a3.75 3.75 0 0 1 3.75 3.75v6.388A6.99 6.99 0 0 1 44 29V17.25A6.25 6.25 0 0 0 37.75 11H23.268l-3.902-3.902A3.75 3.75 0 0 0 16.715 6zM42 29a5 5 0 1 1-10 0 5 5 0 0 1 10 0m4 10.5c0 3.5-3.15 6.5-9 6.5s-9-3-9-6.5v-.502A3 3 0 0 1 31 36h12c1.657 0 3 1.34 3 2.998z"/>`
} as const;

export default function FolderPersonIcon({ 
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

  const gradientId = 'folderpersonicon_gradient';
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