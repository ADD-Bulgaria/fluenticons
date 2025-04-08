
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M40.057 9.894a1.5 1.5 0 0 0-1.113-2.787L7.392 19.702c-2.078.83-2.104 3.76-.042 4.627l29.258 12.293-7.728 3.513a1.5 1.5 0 0 0 1.241 2.73l11-5a1.5 1.5 0 0 0 .764-1.942l-5-12a1.5 1.5 0 1 0-2.77 1.154l3.66 8.781L9.637 22.036z"/>`,
  'regular': `<path d="M39.474 9.407a1.25 1.25 0 0 0-.948-2.313L7.216 19.918c-1.863.763-1.863 3.401 0 4.164l30.208 12.374-8.713 4.167a1.25 1.25 0 1 0 1.078 2.255l11.5-5.5c.6-.287.87-.994.615-1.608l-5-12a1.25 1.25 0 1 0-2.308.961l3.952 9.483L8.728 22z"/>`
} as const;

export default function ArrowTurnLeftRightIcon({ 
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

  const gradientId = 'arrowturnleftrighticon_gradient';
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