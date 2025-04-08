
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M8 4.5a2.5 2.5 0 0 1 5 0V6h3.379a2.25 2.25 0 0 1 1.59.659l2.811 2.81a.75.75 0 0 1 0 1.061l-2.81 2.811a2.25 2.25 0 0 1-1.591.659H13v6.75c0 .69-.56 1.25-1.25 1.25h-2.5C8.56 22 8 21.44 8 20.75V14H5.25A2.25 2.25 0 0 1 3 11.75v-3.5A2.25 2.25 0 0 1 5.25 6H8zm3.5 0a1 1 0 1 0-2 0V6h2zm-2 16h2V14h-2z"/>`,
  'regular': `<path d="M8 4.5a2.5 2.5 0 0 1 5 0V6h3.379a2.25 2.25 0 0 1 1.59.659l2.811 2.81a.75.75 0 0 1 0 1.061l-2.81 2.811a2.25 2.25 0 0 1-1.591.659H13v6.75c0 .69-.56 1.25-1.25 1.25h-2.5C8.56 22 8 21.44 8 20.75V14H5.25A2.25 2.25 0 0 1 3 11.75v-3.5A2.25 2.25 0 0 1 5.25 6H8zM9.5 6h2V4.5a1 1 0 1 0-2 0zm0 8v6.5h2V14zm-5-5.75v3.5c0 .414.336.75.75.75h11.129a.75.75 0 0 0 .53-.22l2.28-2.28-2.28-2.28a.75.75 0 0 0-.53-.22H5.25a.75.75 0 0 0-.75.75"/>`
} as const;

export default function StreetSignIcon({ 
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

  const gradientId = 'streetsignicon_gradient';
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