
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M15 5h2v3h-2z"/><path d="M15 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zM7 16a9 9 0 1 1 18 0v1H7z"/><path d="M7 16a9 9 0 1 1 18 0v1H7z"/><path d="M2 19a3 3 0 0 1 3-3h22a3 3 0 0 1 3 3v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/><path fill-opacity=".6" d="M2 19a3 3 0 0 1 3-3h22a3 3 0 0 1 3 3v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/><path d="M13 23a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6h-6zm-5-3a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0v-3a1 1 0 0 1 1-1m17 1a1 1 0 1 0-2 0v3a1 1 0 0 0 2 0zm-4-9a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0zm-5-1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1m-3 1a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0z"/>`,
  'filled': `<path d="M20.667 2H16a1 1 0 0 0-1 1v4.055A9 9 0 0 0 7 16H5a3 3 0 0 0-3 3v9a1 1 0 0 0 1 1h10v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4h10a1 1 0 0 0 1-1v-9a3 3 0 0 0-3-3h-2a9 9 0 0 0-8-8.945V6h3.667a.667.667 0 0 0 .667-.667V2.667A.667.667 0 0 0 20.667 2M12 13a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1m8 0a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1m-3 1v3a1 1 0 1 1-2 0v-3a1 1 0 1 1 2 0m-9 6a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0v-3a1 1 0 0 1 1-1m16 0a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0v-3a1 1 0 0 1 1-1"/>`,
  'regular': `<path d="M21 14a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0zm-5-1a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1m-3 1a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0zm-5 6a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0v-3a1 1 0 0 1 1-1m17 1a1 1 0 1 0-2 0v3a1 1 0 0 0 2 0zM16 2h4.667c.368 0 .667.298.667.667v2.666a.667.667 0 0 1-.667.667H17v1.055A9 9 0 0 1 25 16h2a3 3 0 0 1 3 3v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-9a3 3 0 0 1 3-3h2a9 9 0 0 1 8-8.945V3a1 1 0 0 1 1-1m0 7a7 7 0 0 0-7 7v1a1 1 0 0 1-1 1H5a1 1 0 0 0-1 1v8h8.5v-3a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v3H28v-8a1 1 0 0 0-1-1h-3a1 1 0 0 1-1-1v-1a7 7 0 0 0-7-7m1.5 16h-3v2h3z"/>`
} as const;

export default function BuildingGovernmentIcon({ 
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

  const gradientId = 'buildinggovernmenticon_gradient';
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