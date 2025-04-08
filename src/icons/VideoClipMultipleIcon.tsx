
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M5.25 3A3.25 3.25 0 0 0 2 6.25v9a3.25 3.25 0 0 0 3.25 3.25h10.5A3.25 3.25 0 0 0 19 15.25v-9A3.25 3.25 0 0 0 15.75 3zM8 13.25V7.751a.75.75 0 0 1 1.155-.631l4.618 2.959a.5.5 0 0 1 0 .842L9.155 13.88A.75.75 0 0 1 8 13.249M7.75 21a3.25 3.25 0 0 1-2.74-1.5h11.24A3.75 3.75 0 0 0 20 15.75V6.01a3.25 3.25 0 0 1 1.5 2.74v7c0 2.9-2.35 5.25-5.25 5.25z"/>`,
  'regular': `<path d="M8 7.752v5.497a.75.75 0 0 0 1.155.631l4.618-2.959a.5.5 0 0 0 0-.842L9.155 7.12A.75.75 0 0 0 8 7.752M5.25 3A3.25 3.25 0 0 0 2 6.25v9a3.25 3.25 0 0 0 3.25 3.25h10.5A3.25 3.25 0 0 0 19 15.25v-9A3.25 3.25 0 0 0 15.75 3zM3.5 6.25c0-.966.784-1.75 1.75-1.75h10.5c.966 0 1.75.784 1.75 1.75v9A1.75 1.75 0 0 1 15.75 17H5.25a1.75 1.75 0 0 1-1.75-1.75zM5.01 19.5A3.25 3.25 0 0 0 7.75 21h8.5c2.9 0 5.25-2.35 5.25-5.25v-7A3.25 3.25 0 0 0 20 6.01v9.74a3.75 3.75 0 0 1-3.75 3.75z"/>`
} as const;

export default function VideoClipMultipleIcon({ 
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

  const gradientId = 'videoclipmultipleicon_gradient';
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