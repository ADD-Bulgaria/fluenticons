
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M22 4c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10S27.523 4 22 4M10.25 28A4.25 4.25 0 0 0 6 32.249V33c0 3.755 1.942 6.567 4.92 8.38C13.85 43.163 17.786 44 22 44c1.172 0 2.322-.065 3.435-.196A12.95 12.95 0 0 1 22 35c0-2.577.75-4.98 2.044-7zM24 35c0 6.075 4.925 11 11 11s11-4.925 11-11-4.925-11-11-11-11 4.925-11 11m8.647-7.093A7 7 0 0 1 40 29.601V29a1 1 0 1 1 2 0v3a1 1 0 0 1-1 1h-3a1 1 0 1 1 0-2h.57a5 5 0 0 0-7.106-.035 1 1 0 0 1-1.414-1.415 7 7 0 0 1 2.597-1.643m4.706 14.186A7 7 0 0 1 30 40.399V41a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-.57a5 5 0 0 0 5.25 1.21 5 5 0 0 0 1.856-1.175 1 1 0 0 1 1.414 1.415 7 7 0 0 1-2.597 1.643"/>`,
  'regular': `<path d="M22 4c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10S27.523 4 22 4m-7.5 10a7.5 7.5 0 1 1 15 0 7.5 7.5 0 0 1-15 0m-4.25 14A4.25 4.25 0 0 0 6 32.249V33c0 3.755 1.942 6.567 4.92 8.38C13.85 43.163 17.786 44 22 44c1.172 0 2.322-.065 3.435-.196a13 13 0 0 1-1.725-2.355q-.838.051-1.71.051c-3.932 0-7.37-.788-9.78-2.255C9.86 37.808 8.5 35.745 8.5 33v-.751a1.75 1.75 0 0 1 1.75-1.749H22.8c.325-.882.744-1.72 1.244-2.5zM24 35c0 6.075 4.925 11 11 11s11-4.925 11-11-4.925-11-11-11-11 4.925-11 11m8.647-7.093A7 7 0 0 1 40 29.601V29a1 1 0 1 1 2 0v3a1 1 0 0 1-1 1h-3a1 1 0 1 1 0-2h.57a5 5 0 0 0-7.106-.035 1 1 0 0 1-1.414-1.415 7 7 0 0 1 2.597-1.643m4.706 14.186A7 7 0 0 1 30 40.399V41a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-.57a5 5 0 0 0 5.25 1.21 5 5 0 0 0 1.856-1.175 1 1 0 0 1 1.414 1.415 7 7 0 0 1-2.597 1.643"/>`
} as const;

export default function PersonSyncIcon({ 
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

  const gradientId = 'personsyncicon_gradient';
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