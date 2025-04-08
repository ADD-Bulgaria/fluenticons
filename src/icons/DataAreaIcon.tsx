
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M26 27.011a3 3 0 0 0-.25-.011H5.25a.25.25 0 0 1-.25-.25V13.484l5.606-2.403a1 1 0 0 1 .841.025l5.447 2.723L24.4 8.2A1 1 0 0 1 26 9z"/><path fill-opacity=".3" d="M26 27.011a3 3 0 0 0-.25-.011H5.25a.25.25 0 0 1-.25-.25V13.484l5.606-2.403a1 1 0 0 1 .841.025l5.447 2.723L24.4 8.2A1 1 0 0 1 26 9z"/><path fill-opacity=".3" d="M26 27.011a3 3 0 0 0-.25-.011H5.25a.25.25 0 0 1-.25-.25V13.484l5.606-2.403a1 1 0 0 1 .841.025l5.447 2.723L24.4 8.2A1 1 0 0 1 26 9z"/><path fill-opacity=".3" d="M26 27.011a3 3 0 0 0-.25-.011H5.25a.25.25 0 0 1-.25-.25V13.484l5.606-2.403a1 1 0 0 1 .841.025l5.447 2.723L24.4 8.2A1 1 0 0 1 26 9z"/><path d="M4.25 3c.69 0 1.25.56 1.25 1.25v20.5c0 .966.784 1.75 1.75 1.75h20.5a1.25 1.25 0 1 1 0 2.5H7.25A4.25 4.25 0 0 1 3 24.75V4.25C3 3.56 3.56 3 4.25 3"/>`,
  'filled': `<path d="M5.5 4.25a1.25 1.25 0 1 0-2.5 0v20.5A4.25 4.25 0 0 0 7.25 29h20.5a1.25 1.25 0 1 0 0-2.5H7.25a1.75 1.75 0 0 1-1.75-1.75zM7.25 25H26V9a1 1 0 0 0-1.6-.8l-7.506 5.63-5.447-2.724a1 1 0 0 0-.84-.025L7 12.626V24.75c0 .138.112.25.25.25"/>`,
  'regular': `<path d="M5 4a1 1 0 1 0-2 0v20.5A4.5 4.5 0 0 0 7.5 29H28a1 1 0 1 0 0-2h-2V9a1 1 0 0 0-1.6-.8l-7.506 5.63-5.447-2.724a1 1 0 0 0-.84-.025L5 13.484zm0 11.66 5.968-2.558 5.585 2.792A1 1 0 0 0 17.6 15.8L24 11v16H7.5A2.5 2.5 0 0 1 5 24.5z"/>`
} as const;

export default function DataAreaIcon({ 
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

  const gradientId = 'dataareaicon_gradient';
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