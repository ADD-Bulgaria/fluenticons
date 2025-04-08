
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M3 6.75c0-.69.56-1.25 1.25-1.25h19a5.75 5.75 0 0 1 0 11.5H8.75a3.25 3.25 0 0 0 0 6.5h16.982l-.866-.866a1.25 1.25 0 0 1 1.768-1.768l3 3a1.25 1.25 0 0 1 0 1.768l-3 3a1.25 1.25 0 0 1-1.768-1.768l.866-.866H8.75a5.75 5.75 0 0 1 0-11.5h14.5a3.25 3.25 0 0 0 0-6.5h-19C3.56 8 3 7.44 3 6.75"/>`,
  'regular': `<path d="M3 7a1 1 0 0 1 1-1h19.5a5.5 5.5 0 1 1 0 11h-15a3.5 3.5 0 1 0 0 7h18.086l-1.293-1.293a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L26.586 26H8.5a5.5 5.5 0 1 1 0-11h15a3.5 3.5 0 1 0 0-7H4a1 1 0 0 1-1-1"/>`
} as const;

export default function ArrowWrapIcon({ 
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
        viewBox="0 0 32 32"
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

  const gradientId = 'arrowwrapicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
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