
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'light': `<path d="M20 10.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0M23.5 4A4.5 4.5 0 0 1 28 8.5v13a4.5 4.5 0 0 1-4.5 4.5h-13A4.5 4.5 0 0 1 6 21.5v-13A4.5 4.5 0 0 1 10.5 4zM27 8.5A3.5 3.5 0 0 0 23.5 5h-13A3.5 3.5 0 0 0 7 8.5v13c0 .786.26 1.512.697 2.096l8.101-8.101a1.7 1.7 0 0 1 2.404 0l8.101 8.101c.438-.584.697-1.31.697-2.096zm-1.404 15.803-8.101-8.1a.7.7 0 0 0-.99 0l-8.101 8.1c.584.438 1.31.697 2.096.697h13c.786 0 1.512-.26 2.096-.697M23.33 28c-.773.625-1.757 1-2.829 1h-10A7.5 7.5 0 0 1 3 21.5v-10c0-1.072.375-2.056 1-2.829V21.5a6.5 6.5 0 0 0 6.5 6.5z"/>`
} as const;

export default function ImageCopyIcon({ 
  variant = 'light',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'light' }) {
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
        <g dangerouslySetInnerHTML={{ __html: svgContent[variant] || svgContent['light'] || '' }} />
      </svg>
    );
  }

  const gradientId = 'imagecopyicon_gradient';
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
      <g dangerouslySetInnerHTML={{ __html: svgContent[variant] || svgContent['light'] || '' }} />
    </svg>
  );
}