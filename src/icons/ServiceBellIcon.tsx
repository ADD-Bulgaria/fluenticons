
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M10 4a2 2 0 1 1 4 0v1.24a8.24 8.24 0 0 1 6.25 8.008.75.75 0 0 1-.75.75h-15a.75.75 0 0 1-.75-.75c0-3.86 2.668-7.098 6.25-7.999zm3.25 3.5a.75.75 0 0 0 0 1.5c1.253 0 2.143.618 2.886 1.68a.75.75 0 0 0 1.229-.86c-.93-1.33-2.229-2.32-4.115-2.32M2 17a2 2 0 0 1 2-2h16a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2"/>`,
  'regular': `<path d="M11.75 7.5a.75.75 0 0 0 0 1.5c1.322 0 2.712.759 3.41 1.756a.75.75 0 1 0 1.229-.86C15.413 8.502 13.567 7.5 11.75 7.5m-2.25-3a2.5 2.5 0 0 1 5 0v.88a8.245 8.245 0 0 1 5.75 7.87.75.75 0 0 1-.75.75h-15a.75.75 0 0 1-.75-.75c0-3.679 2.422-6.793 5.75-7.858zm3.5 0a1 1 0 1 0-2 0v.563a8.3 8.3 0 0 1 2-.005zm-7.708 8h13.417c-.37-3.376-3.216-6-6.688-6-3.475 0-6.354 2.628-6.73 6M4 15a2 2 0 1 0 0 4h16a2 2 0 1 0 0-4zm-.5 2a.5.5 0 0 1 .5-.5h16a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5"/>`
} as const;

export default function ServiceBellIcon({ 
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

  const gradientId = 'servicebellicon_gradient';
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