
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6.25 2A2.25 2.25 0 0 0 4 4.25v15.5A2.25 2.25 0 0 0 6.25 22h6.56a6.48 6.48 0 0 1-1.797-4.079c-.712-.119-1.343-.373-1.848-.767C8.418 16.575 8 15.73 8 14.75c0-.966.784-1.75 1.75-1.75h3.06a6.48 6.48 0 0 1 4.69-2c.886 0 1.73.177 2.5.498V4.25A2.25 2.25 0 0 0 17.75 2zM12 6.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5m-1.75-3h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1 0-1.5M23 17.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0m-5 .5.001 2.503a.5.5 0 1 1-1 0V18h-2.505a.5.5 0 0 1 0-1H17v-2.5a.5.5 0 1 1 1 0V17h2.497a.5.5 0 0 1 0 1z"/>`,
  'regular': `<path d="M6.25 2A2.25 2.25 0 0 0 4 4.25v15.5A2.25 2.25 0 0 0 6.25 22h6.56a6.5 6.5 0 0 1-1.078-1.5H6.25a.75.75 0 0 1-.75-.75V4.25a.75.75 0 0 1 .75-.75h11.5a.75.75 0 0 1 .75.75v6.826a6.5 6.5 0 0 1 1.5.422V4.25A2.25 2.25 0 0 0 17.75 2zm3.5 11h3.06a6.5 6.5 0 0 0-1.078 1.5H9.75a.25.25 0 0 0-.25.25c0 .52.207.926.585 1.22.244.19.579.347 1.006.44a6.5 6.5 0 0 0-.078 1.511c-.712-.119-1.343-.373-1.848-.767C8.418 16.575 8 15.73 8 14.75c0-.966.784-1.75 1.75-1.75M12 8.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2.5 1a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0m.75-5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5zM23 17.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0m-5 .5.001 2.503a.5.5 0 1 1-1 0V18h-2.505a.5.5 0 0 1 0-1H17v-2.5a.5.5 0 1 1 1 0V17h2.497a.5.5 0 0 1 0 1z"/>`
} as const;

export default function GuestAddIcon({ 
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

  const gradientId = 'guestaddicon_gradient';
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