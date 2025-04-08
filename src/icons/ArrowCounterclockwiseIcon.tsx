
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M39 24c0-8.284-6.716-15-15-15-3.938 0-7.52 1.516-10.198 4H17.5a1.5 1.5 0 0 1 0 3h-7A1.5 1.5 0 0 1 9 14.5v-7a1.5 1.5 0 1 1 3 0v3.084A17.94 17.94 0 0 1 24 6c9.941 0 18 8.059 18 18s-8.059 18-18 18S6 33.941 6 24q.001-1.39.205-2.725a1.5 1.5 0 1 1 2.966.45Q9.001 22.837 9 24c0 8.284 6.716 15 15 15s15-6.716 15-15"/>`,
  'regular': `<path d="M39.5 24c0-8.56-6.94-15.5-15.5-15.5a15.46 15.46 0 0 0-11.402 5h4.152a1.25 1.25 0 1 1 0 2.5h-6.5C9.56 16 9 15.44 9 14.75v-6.5a1.25 1.25 0 1 1 2.5 0v2.798A17.94 17.94 0 0 1 24 6c9.941 0 18 8.059 18 18s-8.059 18-18 18S6 33.941 6 24q.002-1.506.24-2.95a1.25 1.25 0 0 1 2.467.408A15.6 15.6 0 0 0 8.5 24c0 8.56 6.94 15.5 15.5 15.5S39.5 32.56 39.5 24"/>`
} as const;

export default function ArrowCounterclockwiseIcon({ 
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

  const gradientId = 'arrowcounterclockwiseicon_gradient';
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