
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20m-5-20c0-2.61.385-4.797 1.21-6.289.773-1.395 1.933-2.211 3.79-2.211s3.017.816 3.79 2.211C28.614 19.203 29 21.391 29 24c0 2.61-.385 4.797-1.21 6.289-.773 1.395-1.933 2.211-3.79 2.211s-3.017-.816-3.79-2.211C19.386 28.797 19 26.609 19 24m5-11c2.83 0 4.796 1.367 5.977 3.5 1.127 2.037 1.523 4.725 1.523 7.5s-.396 5.463-1.523 7.5C28.796 33.633 26.83 35 24 35s-4.796-1.367-5.977-3.5C16.896 29.463 16.5 26.775 16.5 24s.396-5.463 1.523-7.5C19.205 14.367 21.17 13 24 13"/>`,
  'regular': `<path d="M41.5 24c0 9.665-7.835 17.5-17.5 17.5S6.5 33.665 6.5 24 14.335 6.5 24 6.5 41.5 14.335 41.5 24M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20m-5-20c0-2.61.385-4.797 1.21-6.289.773-1.395 1.933-2.211 3.79-2.211s3.017.816 3.79 2.211C28.614 19.203 29 21.391 29 24c0 2.61-.385 4.797-1.21 6.289-.773 1.395-1.933 2.211-3.79 2.211s-3.017-.816-3.79-2.211C19.386 28.797 19 26.609 19 24m5-11c-2.83 0-4.796 1.367-5.977 3.5-1.127 2.037-1.523 4.725-1.523 7.5s.396 5.463 1.523 7.5C19.205 33.633 21.17 35 24 35s4.796-1.367 5.977-3.5c1.127-2.037 1.523-4.725 1.523-7.5s-.396-5.463-1.523-7.5C28.796 14.367 26.83 13 24 13"/>`
} as const;

export default function NumberCircle0Icon({ 
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

  const gradientId = 'numbercircle0icon_gradient';
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