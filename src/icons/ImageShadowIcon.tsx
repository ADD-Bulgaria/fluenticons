
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'light': `<path d="M19 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M6.5 2A4.5 4.5 0 0 0 2 6.5v13A4.5 4.5 0 0 0 6.5 24h13a4.5 4.5 0 0 0 4.5-4.5v-13A4.5 4.5 0 0 0 19.5 2zM3 6.5A3.5 3.5 0 0 1 6.5 3h13A3.5 3.5 0 0 1 23 6.5v13c0 .786-.26 1.512-.697 2.096l-8.1-8.101a1.7 1.7 0 0 0-2.405 0l-8.101 8.101A3.5 3.5 0 0 1 3 19.5zm1.404 15.803 8.101-8.1a.7.7 0 0 1 .99 0l8.101 8.1A3.5 3.5 0 0 1 19.5 23h-13c-.786 0-1.512-.26-2.096-.697M8 25.5a4.5 4.5 0 0 0 4.5 4.5h9a8.5 8.5 0 0 0 8.5-8.5v-9c0-2.485-2.016-4.5-4.5-4.5v11.5a6 6 0 0 1-6 6z"/>`
} as const;

export default function ImageShadowIcon({ 
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

  const gradientId = 'imageshadowicon_gradient';
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