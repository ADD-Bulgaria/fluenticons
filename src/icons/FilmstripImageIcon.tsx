
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M2 5.25A3.25 3.25 0 0 1 5.25 2h9.5A3.25 3.25 0 0 1 18 5.25V8h-5.75A4.25 4.25 0 0 0 8 12.25V16H5.25A3.25 3.25 0 0 1 2 12.75zM4.75 4a.75.75 0 0 0-.75.75v.5a.75.75 0 0 0 1.5 0v-.5A.75.75 0 0 0 4.75 4m.75 4.75a.75.75 0 0 0-1.5 0v.5a.75.75 0 0 0 1.5 0zM15.25 4a.75.75 0 0 0-.75.75v.5a.75.75 0 0 0 1.5 0v-.5a.75.75 0 0 0-.75-.75M5.5 12.75a.75.75 0 0 0-1.5 0v.5a.75.75 0 0 0 1.5 0zm3.5-.5A3.25 3.25 0 0 1 12.25 9h6.5A3.25 3.25 0 0 1 22 12.25v6.5c0 .61-.168 1.179-.459 1.666l-4.487-4.31a2.25 2.25 0 0 0-3.074 0l-4.5 4.345A3.24 3.24 0 0 1 9 18.75zm8.75 2.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5m-5.5 7.5a3.23 3.23 0 0 1-1.711-.487l4.466-4.31a.75.75 0 0 1 1.024 0l4.467 4.289A3.24 3.24 0 0 1 18.75 22z"/>`,
  'regular': `<path d="M2 5.25A3.25 3.25 0 0 1 5.25 2h9.5A3.25 3.25 0 0 1 18 5.25V8h-1.5V5.25a1.75 1.75 0 0 0-1.75-1.75h-9.5A1.75 1.75 0 0 0 3.5 5.25v7.5c0 .966.784 1.75 1.75 1.75H8V16H5.25A3.25 3.25 0 0 1 2 12.75zm17 8a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0m-10-1A3.25 3.25 0 0 1 12.25 9h6.5A3.25 3.25 0 0 1 22 12.25v6.5A3.25 3.25 0 0 1 18.75 22h-6.5A3.25 3.25 0 0 1 9 18.75zm3.25-1.75a1.75 1.75 0 0 0-1.75 1.75v6.5q.001.286.086.542l3.394-3.185a2.25 2.25 0 0 1 3.074 0l3.37 3.153q.075-.244.076-.51v-6.5a1.75 1.75 0 0 0-1.75-1.75zm0 10h6.5c.235 0 .46-.047.665-.13l-3.386-3.168a.75.75 0 0 0-1.024 0l-3.388 3.18c.196.076.41.118.633.118M5.75 5a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0v-.5A.75.75 0 0 1 5.75 5m.75 3.75a.75.75 0 0 0-1.5 0v.5a.75.75 0 0 0 1.5 0zM14.25 5a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0v-.5a.75.75 0 0 1 .75-.75M6.5 11.75a.75.75 0 0 0-1.5 0v.5a.75.75 0 0 0 1.5 0z"/>`
} as const;

export default function FilmstripImageIcon({ 
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

  const gradientId = 'filmstripimageicon_gradient';
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