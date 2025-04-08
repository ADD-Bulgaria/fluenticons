
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6.25 3A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h11.5A3.25 3.25 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3zM4.5 6.25c0-.966.784-1.75 1.75-1.75h5V7h-1.5A2.75 2.75 0 0 0 7 9.75v1.5H4.5zm2.5 6.5v-1.5h4.25V7h1.5v4.25H17v1.5h-4.25V17h-1.5v-4.25zm0 0v1.5A2.75 2.75 0 0 0 9.75 17h1.5v2.5h-5a1.75 1.75 0 0 1-1.75-1.75v-5zM12.75 17h1.5A2.75 2.75 0 0 0 17 14.25v-1.5h2.5v5a1.75 1.75 0 0 1-1.75 1.75h-5zM17 11.25v-1.5A2.75 2.75 0 0 0 14.25 7h-1.5V4.5h5c.966 0 1.75.784 1.75 1.75v5z"/>`,
  'regular': `<path d="M6.25 3A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h11.5A3.25 3.25 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3zM4.5 6.25c0-.966.784-1.75 1.75-1.75h5V7h-1.5A2.75 2.75 0 0 0 7 9.75v1.5H4.5zm2.5 6.5v1.5A2.75 2.75 0 0 0 9.75 17h1.5v2.5h-5a1.75 1.75 0 0 1-1.75-1.75v-5zm4.25 2.75h-1.5c-.69 0-1.25-.56-1.25-1.25v-1.5h2.75zm1.5 1.5h1.5A2.75 2.75 0 0 0 17 14.25v-1.5h2.5v5a1.75 1.75 0 0 1-1.75 1.75h-5zm2.75-4.25v1.5c0 .69-.56 1.25-1.25 1.25h-1.5v-2.75zm1.5-1.5v-1.5A2.75 2.75 0 0 0 14.25 7h-1.5V4.5h5c.966 0 1.75.784 1.75 1.75v5zM12.75 8.5h1.5c.69 0 1.25.56 1.25 1.25v1.5h-2.75zm-1.5 0v2.75H8.5v-1.5c0-.69.56-1.25 1.25-1.25z"/>`
} as const;

export default function SubGridIcon({ 
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

  const gradientId = 'subgridicon_gradient';
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