
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M15.75 27.25a8.25 8.25 0 0 1 16.218-2.147l-.099.106c-.462.496-.94 1.01-1.82 1.389-1.064.46-2.819.733-5.847-.024-3.38-.845-5.657-.342-7.25.645a7.2 7.2 0 0 0-1.157.897 8 8 0 0 1-.045-.866M6 12a6 6 0 0 1 6-6h24a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6H12a6 6 0 0 1-6-6zm10 2.25a2 2 0 1 0 0-4 2 2 0 0 0 0 4m8-2c0 .69.56 1.25 1.25 1.25h7.5a1.25 1.25 0 1 0 0-2.5h-7.5c-.69 0-1.25.56-1.25 1.25m0 4.25c-5.937 0-10.75 4.813-10.75 10.75S18.063 38 24 38s10.75-4.813 10.75-10.75S29.937 16.5 24 16.5"/>`,
  'regular': `<path d="M24 16c-5.799 0-10.5 4.701-10.5 10.5S18.201 37 24 37s10.5-4.701 10.5-10.5S29.799 16 24 16m-8 10.5a8 8 0 0 1 15.892-1.316l-.023.025c-.462.496-.94 1.01-1.82 1.389-1.064.46-2.819.733-5.847-.024-3.38-.845-5.657-.342-7.25.645a7 7 0 0 0-.842.614A8 8 0 0 1 16 26.5m2-14.25a2 2 0 1 1-4 0 2 2 0 0 1 4 0M25.25 11a1.25 1.25 0 1 0 0 2.5h7.5a1.25 1.25 0 1 0 0-2.5zm-13-5A6.25 6.25 0 0 0 6 12.25v23.5A6.25 6.25 0 0 0 12.25 42h23.5A6.25 6.25 0 0 0 42 35.75v-23.5A6.25 6.25 0 0 0 35.75 6zM8.5 12.25a3.75 3.75 0 0 1 3.75-3.75h23.5a3.75 3.75 0 0 1 3.75 3.75v23.5a3.75 3.75 0 0 1-3.75 3.75h-23.5a3.75 3.75 0 0 1-3.75-3.75z"/>`
} as const;

export default function WasherIcon({ 
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

  const gradientId = 'washericon_gradient';
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