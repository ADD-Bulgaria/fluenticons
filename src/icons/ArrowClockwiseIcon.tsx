
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M9 24c0-8.284 6.716-15 15-15 3.938 0 7.52 1.516 10.198 4H30.5a1.5 1.5 0 0 0 0 3h7a1.5 1.5 0 0 0 1.5-1.5v-7a1.5 1.5 0 0 0-3 0v3.084A17.94 17.94 0 0 0 24 6C14.059 6 6 14.059 6 24s8.059 18 18 18 18-8.059 18-18q-.001-1.39-.205-2.725a1.5 1.5 0 1 0-2.966.45q.17 1.112.171 2.275c0 8.284-6.716 15-15 15S9 32.284 9 24"/>`,
  'regular': `<path d="M8.5 24c0-8.56 6.94-15.5 15.5-15.5 4.509 0 8.568 1.924 11.402 5H31.25a1.25 1.25 0 1 0 0 2.5h6.5c.69 0 1.25-.56 1.25-1.25v-6.5a1.25 1.25 0 1 0-2.5 0v2.798A17.94 17.94 0 0 0 24 6C14.059 6 6 14.059 6 24s8.059 18 18 18 18-8.059 18-18q-.002-1.506-.24-2.95a1.25 1.25 0 0 0-2.467.408q.206 1.24.207 2.542c0 8.56-6.94 15.5-15.5 15.5S8.5 32.56 8.5 24"/>`
} as const;

export default function ArrowClockwiseIcon({ 
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

  const gradientId = 'arrowclockwiseicon_gradient';
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