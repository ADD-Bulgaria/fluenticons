
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6.998 5.5a1.5 1.5 0 1 1 3 0v11.485l7.901-8.062c5.572-6.3 14.95-6.161 19.93-.67 5 5.514 3.376 13.309.028 17.222l-.008.01-2.259 2.544-2.537 2.537-4.247 4.16-8.242 8.33-.005.005-.497.496a1.5 1.5 0 1 1-2.12-2.122l.49-.49.006-.006 8.252-8.34 4.253-4.165 2.463-2.463 2.18-2.456c2.635-3.09 3.742-9.144.02-13.247-3.738-4.123-11.05-4.37-15.482.667l-.026.03L12.224 19h11.274a1.5 1.5 0 1 1 0 3h-15a1.5 1.5 0 0 1-1.5-1.5z"/>`,
  'regular': `<path d="M35.795 9.84c-4.174-4.602-11.303-4.505-15.855.67l-.017.02-8.558 8.958h12.38a1.25 1.25 0 0 1 0 2.5H8.198c-.69 0-1.25-.56-1.25-1.25V5.268a1.25 1.25 0 0 1 2.5 0v12.606l8.631-9.035c5.45-6.174 14.307-6.478 19.567-.679 5.24 5.778 3.622 13.316-.014 17.195l-.01.01-8.978 9.173-.005.005-8.75 8.837-.005.004-.25.25a1.25 1.25 0 1 1-1.768-1.767l.246-.246.005-.005 8.74-8.827.005-.005 8.955-9.148c2.919-3.124 4.172-9.17-.023-13.796"/>`
} as const;

export default function ArrowUndoIcon({ 
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

  const gradientId = 'arrowundoicon_gradient';
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