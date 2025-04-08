
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M25.06 4.44a1.5 1.5 0 0 0-2.12 0l-11.5 11.5a1.5 1.5 0 0 0 2.12 2.12l8.94-8.939V30.5a1.5 1.5 0 0 0 3 0V9.121l8.94 8.94a1.5 1.5 0 0 0 2.12-2.122zM7.5 22A1.5 1.5 0 0 1 9 23.5v12a3.5 3.5 0 0 0 3.5 3.5h23a3.5 3.5 0 0 0 3.5-3.5v-12a1.5 1.5 0 0 1 3 0v12a6.5 6.5 0 0 1-6.5 6.5h-23A6.5 6.5 0 0 1 6 35.5v-12A1.5 1.5 0 0 1 7.5 22"/>`,
  'regular': `<path d="M23.116 4.366a1.25 1.25 0 0 1 1.768 0l11.5 11.5a1.25 1.25 0 0 1-1.768 1.768L25.25 8.268V30.75a1.25 1.25 0 1 1-2.5 0V8.268l-9.366 9.366a1.25 1.25 0 0 1-1.768-1.768zM7.25 22c.69 0 1.25.56 1.25 1.25v12.5a3.75 3.75 0 0 0 3.75 3.75h23.5a3.75 3.75 0 0 0 3.75-3.75v-12.5a1.25 1.25 0 1 1 2.5 0v12.5A6.25 6.25 0 0 1 35.75 42h-23.5A6.25 6.25 0 0 1 6 35.75v-12.5c0-.69.56-1.25 1.25-1.25"/>`
} as const;

export default function ShareIosIcon({ 
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

  const gradientId = 'shareiosicon_gradient';
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