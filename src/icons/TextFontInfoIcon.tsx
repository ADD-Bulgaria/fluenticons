
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M9.514 1.75a1 1 0 0 1 .929.666l3.153 8.887a6.5 6.5 0 0 0-1.539 1.643L9.46 5.626 6.605 13h5.417a6.5 6.5 0 0 0-.848 2H5.83l-1.398 3.611a1 1 0 0 1-1.865-.722l6-15.5a1 1 0 0 1 .946-.639M17 16v3a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-1 0m1.25-2.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M23 16.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-1 0a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0"/>`,
  'regular': `<path d="M9.51 2a.75.75 0 0 1 .697.5l3.182 8.965a6.5 6.5 0 0 0-1.157 1.226L9.47 4.908 6.337 13h5.685a6.5 6.5 0 0 0-.709 1.5H5.756L4.2 18.52a.75.75 0 1 1-1.4-.54l6-15.5A.75.75 0 0 1 9.51 2M17 16v3a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-1 0m1.25-2.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M23 16.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-1 0a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0"/>`
} as const;

export default function TextFontInfoIcon({ 
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

  const gradientId = 'textfontinfoicon_gradient';
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