
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M22.775 8H10.25A6.25 6.25 0 0 0 4 14.25v19.5A6.25 6.25 0 0 0 10.25 40h12.525a1.3 1.3 0 0 1-.025-.25V8.25q0-.13.025-.25m2.45 32H37.75A6.25 6.25 0 0 0 44 33.75v-19.5A6.25 6.25 0 0 0 37.75 8H25.225q.024.12.025.25v31.5q0 .13-.025.25m14.159-13.616-4.25 4.25a1.25 1.25 0 0 1-1.768 0l-4.25-4.25a1.25 1.25 0 0 1 1.768-1.768L33 26.732V18.25a1.25 1.25 0 1 1 2.5 0v8.482l2.116-2.116a1.25 1.25 0 0 1 1.768 1.768m-26.518-9.018a1.25 1.25 0 0 1 1.768 0l4.25 4.25a1.25 1.25 0 0 1-1.768 1.768L15 21.268v8.482a1.25 1.25 0 1 1-2.5 0v-8.482l-2.116 2.116a1.25 1.25 0 0 1-1.768-1.768z"/>`,
  'regular': `<path d="M10.25 8A6.25 6.25 0 0 0 4 14.25v19.5A6.25 6.25 0 0 0 10.25 40h27.5A6.25 6.25 0 0 0 44 33.75v-19.5A6.25 6.25 0 0 0 37.75 8zm12.5 2.5v27h-12.5a3.75 3.75 0 0 1-3.75-3.75v-19.5a3.75 3.75 0 0 1 3.75-3.75zm2.5 27v-27h12.5a3.75 3.75 0 0 1 3.75 3.75v19.5a3.75 3.75 0 0 1-3.75 3.75zm13.134-11.116-4.25 4.25a1.25 1.25 0 0 1-1.768 0l-4.25-4.25a1.25 1.25 0 0 1 1.768-1.768L32 26.732V18.25a1.25 1.25 0 1 1 2.5 0v8.482l2.116-2.116a1.25 1.25 0 0 1 1.768 1.768m-24.518-9.018a1.25 1.25 0 0 1 1.768 0l4.25 4.25a1.25 1.25 0 0 1-1.768 1.768L16 21.268v8.482a1.25 1.25 0 1 1-2.5 0v-8.482l-2.116 2.116a1.25 1.25 0 0 1-1.768-1.768z"/>`
} as const;

export default function ElevatorIcon({ 
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

  const gradientId = 'elevatoricon_gradient';
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