
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M3 6.25A3.25 3.25 0 0 1 6.25 3h11.5A3.25 3.25 0 0 1 21 6.25v5.627A4 4 0 0 0 18.5 11a4 4 0 0 0-3.25 1.668A4 4 0 0 0 12 11a4 4 0 0 0-3.25 1.668A4 4 0 0 0 5.5 11c-.946 0-1.815.328-2.5.877zM14.5 15a2.5 2.5 0 0 0-5 0v6h5zm1.5 6h2.75A2.25 2.25 0 0 0 21 18.75V15a2.5 2.5 0 0 0-5 0zm-8 0H5.25A2.25 2.25 0 0 1 3 18.75V15a2.5 2.5 0 0 1 5 0z"/>`,
  'regular': `<path d="M6.25 3A3.25 3.25 0 0 0 3 6.25v12.5A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V6.25A3.25 3.25 0 0 0 17.75 3zm13.25 8.627a3.5 3.5 0 0 0-2-.627c-1.116 0-2.11.522-2.75 1.335A3.5 3.5 0 0 0 12 11c-1.116 0-2.11.522-2.75 1.335A3.5 3.5 0 0 0 6.5 11c-.744 0-1.433.232-2 .627V6.25c0-.966.784-1.75 1.75-1.75h11.5c.966 0 1.75.784 1.75 1.75zM14 14.5v5h-4v-5a2 2 0 1 1 4 0m1.5 5v-5a2 2 0 1 1 4 0v4.25a.75.75 0 0 1-.75.75zm-10.25 0a.75.75 0 0 1-.75-.75V14.5a2 2 0 1 1 4 0v5z"/>`
} as const;

export default function SeatIcon({ 
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

  const gradientId = 'seaticon_gradient';
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