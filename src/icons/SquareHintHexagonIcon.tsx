
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M20 7.25c0-.69.56-1.25 1.25-1.25h5.5a1.25 1.25 0 1 1 0 2.5h-5.5c-.69 0-1.25-.56-1.25-1.25m0 33.5c0 .69.56 1.25 1.25 1.25h5.5a1.25 1.25 0 1 0 0-2.5h-5.5c-.69 0-1.25.56-1.25 1.25m-14-14a1.25 1.25 0 1 0 2.5 0v-5.5a1.25 1.25 0 1 0-2.5 0zM40.75 28c-.69 0-1.25-.56-1.25-1.25v-5.5a1.25 1.25 0 1 1 2.5 0v5.5c0 .69-.56 1.25-1.25 1.25m-28-22a1.25 1.25 0 1 1 0 2.5h-.5a3.75 3.75 0 0 0-3.75 3.75v.5a1.25 1.25 0 1 1-2.5 0v-.5A6.25 6.25 0 0 1 12.25 6zM14 40.75c0 .69-.56 1.25-1.25 1.25h-.5A6.25 6.25 0 0 1 6 35.75v-.5a1.25 1.25 0 1 1 2.5 0v.5a3.75 3.75 0 0 0 3.75 3.75h.5c.69 0 1.25.56 1.25 1.25M35.25 6a1.25 1.25 0 1 0 0 2.5h.5a3.75 3.75 0 0 1 3.75 3.75v.5a1.25 1.25 0 1 0 2.5 0v-.5A6.25 6.25 0 0 0 35.75 6zM34 40.75c0 .69.56 1.25 1.25 1.25h.5A6.25 6.25 0 0 0 42 35.75v-.5a1.25 1.25 0 1 0-2.5 0v.5a3.75 3.75 0 0 1-3.75 3.75h-.5c-.69 0-1.25.56-1.25 1.25M16.86 14.385a2.75 2.75 0 0 1 2.381-1.375h9.52c.983 0 1.89.524 2.382 1.375l4.76 8.25c.491.85.491 1.898 0 2.748l-4.76 8.25a2.75 2.75 0 0 1-2.382 1.375h-9.52a2.75 2.75 0 0 1-2.382-1.376l-4.76-8.249a2.75 2.75 0 0 1 0-2.749z"/>`,
  'regular': `<path d="M20 7.25c0-.69.56-1.25 1.25-1.25h5.5a1.25 1.25 0 1 1 0 2.5h-5.5c-.69 0-1.25-.56-1.25-1.25m0 33.5c0 .69.56 1.25 1.25 1.25h5.5a1.25 1.25 0 1 0 0-2.5h-5.5c-.69 0-1.25.56-1.25 1.25m-14-14a1.25 1.25 0 1 0 2.5 0v-5.5a1.25 1.25 0 1 0-2.5 0zM40.75 28c-.69 0-1.25-.56-1.25-1.25v-5.5a1.25 1.25 0 1 1 2.5 0v5.5c0 .69-.56 1.25-1.25 1.25m-28-22a1.25 1.25 0 1 1 0 2.5h-.5a3.75 3.75 0 0 0-3.75 3.75v.5a1.25 1.25 0 1 1-2.5 0v-.5A6.25 6.25 0 0 1 12.25 6zM14 40.75c0 .69-.56 1.25-1.25 1.25h-.5A6.25 6.25 0 0 1 6 35.75v-.5a1.25 1.25 0 1 1 2.5 0v.5a3.75 3.75 0 0 0 3.75 3.75h.5c.69 0 1.25.56 1.25 1.25M35.25 6a1.25 1.25 0 1 0 0 2.5h.5a3.75 3.75 0 0 1 3.75 3.75v.5a1.25 1.25 0 1 0 2.5 0v-.5A6.25 6.25 0 0 0 35.75 6zM34 40.75c0 .69.56 1.25 1.25 1.25h.5A6.25 6.25 0 0 0 42 35.75v-.5a1.25 1.25 0 1 0-2.5 0v.5a3.75 3.75 0 0 1-3.75 3.75h-.5c-.69 0-1.25.56-1.25 1.25M19.241 13.01a2.75 2.75 0 0 0-2.382 1.375l-4.76 8.25a2.75 2.75 0 0 0 0 2.748l4.76 8.25a2.75 2.75 0 0 0 2.382 1.375h9.52a2.75 2.75 0 0 0 2.382-1.376l4.76-8.249a2.75 2.75 0 0 0 0-2.749l-4.76-8.249a2.75 2.75 0 0 0-2.382-1.375zm-.216 2.625a.25.25 0 0 1 .216-.125h9.52a.25.25 0 0 1 .217.125l4.76 8.249a.25.25 0 0 1 0 .25l-4.76 8.249a.25.25 0 0 1-.217.125h-9.52a.25.25 0 0 1-.216-.125l-4.761-8.25a.25.25 0 0 1 0-.25z"/>`
} as const;

export default function SquareHintHexagonIcon({ 
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

  const gradientId = 'squarehinthexagonicon_gradient';
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