
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M14.694 21.633q.713-.2 1.38-.498L12.22 17.28a.75.75 0 1 1 1.06-1.06l4.168 4.167a10 10 0 0 0 1.073-.805L14.72 15.78a.75.75 0 1 1 1.06-1.06l3.802 3.8q.437-.508.805-1.072L16.22 13.28a.75.75 0 1 1 1.06-1.06l3.855 3.854q.298-.667.498-1.38L17.22 10.28a.75.75 0 1 1 1.06-1.06l3.68 3.68a10 10 0 0 0-.008-1.888L17.47 6.53a.75.75 0 0 1 1.06-1.06l2.717 2.716A10 10 0 0 0 12 2C6.477 2 2 6.477 2 12c0 4.172 2.555 7.748 6.186 9.247L5.47 18.53a.75.75 0 1 1 1.06-1.06l4.482 4.482a10 10 0 0 0 1.887.008l-3.68-3.68a.75.75 0 1 1 1.061-1.06z"/>`,
  'regular': `<path d="m13.441 20.378-3.159-3.158a.75.75 0 0 0-1.06 1.06l2.2 2.2a8.5 8.5 0 0 1-2.393-.514L6.532 17.47a.75.75 0 0 0-1.049-.012A8.5 8.5 0 0 1 17.457 5.484a.75.75 0 0 0 .014 1.046l2.493 2.493a8.5 8.5 0 0 1 .516 2.395L18.282 9.22a.75.75 0 0 0-1.06 1.06l3.157 3.158a8.5 8.5 0 0 1-.395 1.484l-2.702-2.702a.75.75 0 0 0-1.06 1.06l3.077 3.078a8.5 8.5 0 0 1-.78 1.098l-2.737-2.736a.75.75 0 0 0-1.06 1.06l2.736 2.737a8.5 8.5 0 0 1-1.098.78l-3.078-3.077a.75.75 0 0 0-1.06 1.06l2.703 2.703a8.4 8.4 0 0 1-1.484.395M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"/>`
} as const;

export default function CircleShadowIcon({ 
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

  const gradientId = 'circleshadowicon_gradient';
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