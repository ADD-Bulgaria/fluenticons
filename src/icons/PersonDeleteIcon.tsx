
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M17.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11m-5.477 2A6.47 6.47 0 0 0 11 17.5c0 1.644.61 3.146 1.617 4.29q-1.203.212-2.617.211c-2.89 0-5.128-.656-6.69-2a3.75 3.75 0 0 1-1.306-2.844v-.907A2.25 2.25 0 0 1 4.254 14zm3.07.966-.069.058-.058.07a.5.5 0 0 0 0 .568l.058.07 1.77 1.769-1.767 1.767-.058.069a.5.5 0 0 0 0 .569l.058.069.069.058a.5.5 0 0 0 .569 0l.069-.058 1.767-1.767 1.769 1.77.069.057a.5.5 0 0 0 .569 0l.069-.058.058-.07a.5.5 0 0 0 0-.568l-.058-.069-1.77-1.77 1.773-1.768.058-.07a.5.5 0 0 0 0-.568l-.058-.07-.07-.057a.5.5 0 0 0-.568 0l-.07.057-1.771 1.77-1.77-1.77-.069-.057a.5.5 0 0 0-.492-.044zM10 2.005a5 5 0 1 1 0 10 5 5 0 0 1 0-10"/>`,
  'regular': `<path d="M17.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11m-5.477 2a6.5 6.5 0 0 0-.709 1.5h-7.06a.75.75 0 0 0-.75.75v.907c0 .656.286 1.28.783 1.707C5.545 19.945 7.441 20.5 10 20.5q.9 0 1.688-.09c.25.5.563.963.93 1.38Q11.413 22 10 22c-2.89 0-5.128-.656-6.69-2a3.75 3.75 0 0 1-1.306-2.844v-.907A2.25 2.25 0 0 1 4.254 14zm3.07.966-.069.058-.058.07a.5.5 0 0 0 0 .568l.058.07 1.77 1.769-1.767 1.767-.058.069a.5.5 0 0 0 0 .569l.058.069.069.058a.5.5 0 0 0 .569 0l.069-.058 1.767-1.767 1.769 1.77.069.057a.5.5 0 0 0 .569 0l.069-.058.058-.07a.5.5 0 0 0 0-.568l-.058-.069-1.77-1.77 1.773-1.768.058-.07a.5.5 0 0 0 0-.568l-.058-.07-.07-.057a.5.5 0 0 0-.568 0l-.07.057-1.771 1.77-1.77-1.77-.069-.057a.5.5 0 0 0-.492-.044zM10 2.005a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7"/>`
} as const;

export default function PersonDeleteIcon({ 
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

  const gradientId = 'persondeleteicon_gradient';
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