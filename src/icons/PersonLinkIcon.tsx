
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M24 4c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10S29.523 4 24 4M12.25 28A4.25 4.25 0 0 0 8 32.249V33c0 3.755 1.942 6.567 4.92 8.38 2.728 1.66 6.33 2.5 10.215 2.608A8.4 8.4 0 0 1 22 39.75c0-4.556 3.582-8.25 8-8.25h9.934A4.25 4.25 0 0 0 35.75 28zM24 39.75a6.25 6.25 0 0 1 6.25-6.25h1.5a1.25 1.25 0 1 1 0 2.5h-1.5a3.75 3.75 0 1 0 0 7.5h1.5a1.25 1.25 0 1 1 0 2.5h-1.5A6.25 6.25 0 0 1 24 39.75m22 0a6.25 6.25 0 0 0-6.25-6.25h-1.5a1.25 1.25 0 1 0 0 2.5h1.5a3.75 3.75 0 1 1 0 7.5h-1.5a1.25 1.25 0 1 0 0 2.5h1.5A6.25 6.25 0 0 0 46 39.75m-17 0c0-.69.56-1.25 1.25-1.25h9.5a1.25 1.25 0 1 1 0 2.5h-9.5c-.69 0-1.25-.56-1.25-1.25"/>`,
  'regular': `<path d="M24 4c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10S29.523 4 24 4m-7.5 10a7.5 7.5 0 1 1 15 0 7.5 7.5 0 0 1-15 0m-4.25 14A4.25 4.25 0 0 0 8 32.249V33c0 3.755 1.942 6.567 4.92 8.38 2.728 1.66 6.33 2.5 10.215 2.608a8.4 8.4 0 0 1-.967-2.547c-3.165-.208-5.92-.962-7.948-2.196-2.36-1.437-3.72-3.5-3.72-6.245v-.751a1.75 1.75 0 0 1 1.75-1.749h23.5a1.75 1.75 0 0 1 1.582 1h2.602A4.25 4.25 0 0 0 35.75 28zM24 39.75a6.25 6.25 0 0 1 6.25-6.25h1.5a1.25 1.25 0 1 1 0 2.5h-1.5a3.75 3.75 0 1 0 0 7.5h1.5a1.25 1.25 0 1 1 0 2.5h-1.5A6.25 6.25 0 0 1 24 39.75m22 0a6.25 6.25 0 0 0-6.25-6.25h-1.5a1.25 1.25 0 1 0 0 2.5h1.5a3.75 3.75 0 1 1 0 7.5h-1.5a1.25 1.25 0 1 0 0 2.5h1.5A6.25 6.25 0 0 0 46 39.75m-17 0c0-.69.56-1.25 1.25-1.25h9.5a1.25 1.25 0 1 1 0 2.5h-9.5c-.69 0-1.25-.56-1.25-1.25"/>`
} as const;

export default function PersonLinkIcon({ 
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

  const gradientId = 'personlinkicon_gradient';
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