
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M16.5 25.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/><path d="M10.75 5A5.75 5.75 0 0 0 5 10.75v21.5A5.75 5.75 0 0 0 10.75 38h21.5A5.75 5.75 0 0 0 38 32.25v-21.5A5.75 5.75 0 0 0 32.25 5zM19 25.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0m-9-10.25c0-.69.56-1.25 1.25-1.25h20.5a1.25 1.25 0 1 1 0 2.5h-20.5c-.69 0-1.25-.56-1.25-1.25m12.25 9.25h9.5a1.25 1.25 0 1 1 0 2.5h-9.5a1.25 1.25 0 1 1 0-2.5"/><path d="M15.25 42.5a5.74 5.74 0 0 1-4.747-2.504q.123.004.247.004h21.5A7.75 7.75 0 0 0 40 32.25v-21.5q0-.123-.004-.247A5.74 5.74 0 0 1 42.5 15.25v17c0 5.66-4.59 10.25-10.25 10.25z"/>`,
  'regular': `<path d="M19 25.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0m-2.5 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0M10 15.25c0-.69.56-1.25 1.25-1.25h20.5a1.25 1.25 0 1 1 0 2.5h-20.5c-.69 0-1.25-.56-1.25-1.25m12.25 9.25a1.25 1.25 0 1 0 0 2.5h9.5a1.25 1.25 0 1 0 0-2.5z"/><path d="M10.75 5A5.75 5.75 0 0 0 5 10.75v21.5A5.75 5.75 0 0 0 10.75 38h21.5A5.75 5.75 0 0 0 38 32.25v-21.5A5.75 5.75 0 0 0 32.25 5zM7.5 10.75a3.25 3.25 0 0 1 3.25-3.25h21.5a3.25 3.25 0 0 1 3.25 3.25v21.5c0 .456-.094.89-.264 1.285A3.24 3.24 0 0 1 32.25 35.5h-21.5a3.24 3.24 0 0 1-2.999-1.995A3.2 3.2 0 0 1 7.5 32.25z"/><path d="M15.25 42.5a5.74 5.74 0 0 1-4.747-2.504q.123.004.247.004h21.5A7.75 7.75 0 0 0 40 32.25v-21.5q0-.123-.004-.247A5.74 5.74 0 0 1 42.5 15.25v17c0 5.66-4.59 10.25-10.25 10.25z"/>`
} as const;

export default function FormMultipleIcon({ 
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

  const gradientId = 'formmultipleicon_gradient';
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