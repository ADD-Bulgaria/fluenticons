
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M29.993 38a6 6 0 1 1-12 0 6 6 0 0 1 12 0"/><path d="M24 4C15.716 4 9 10.716 9 19v8.487l-2.804 6.355A2.25 2.25 0 0 0 8.254 37h31.492a2.25 2.25 0 0 0 2.058-3.158L39 27.487V19c0-8.284-6.716-15-15-15"/>`,
  'filled': `<path d="M24 4C15.716 4 9 10.716 9 19v8.487l-2.804 6.355A2.25 2.25 0 0 0 8.254 37h31.492a2.25 2.25 0 0 0 2.058-3.158L39 27.487V19c0-8.284-6.716-15-15-15m0 40a6 6 0 0 1-5.917-5h11.834A6 6 0 0 1 24 44"/>`,
  'regular': `<path d="M11.5 19v8.75c0 .174-.036.346-.107.505L8.639 34.5h30.724l-2.756-6.245a1.25 1.25 0 0 1-.106-.505V19c0-6.904-5.596-12.5-12.5-12.5S11.5 12.096 11.5 19M18 37H8.254a2.25 2.25 0 0 1-2.058-3.158L9 27.487V19c0-8.284 6.716-15 15-15s15 6.716 15 15v8.487l2.804 6.355A2.25 2.25 0 0 1 39.746 37H30v1a6 6 0 0 1-12 0zm9.5 0h-7v1a3.5 3.5 0 1 0 7 0z"/>`
} as const;

export default function AlertIcon({ 
  variant = 'regular',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'color' | 'filled' | 'regular' }) {
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

  const gradientId = 'alerticon_gradient';
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