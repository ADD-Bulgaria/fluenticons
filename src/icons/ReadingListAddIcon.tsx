
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M4 7.5a1.5 1.5 0 0 1 2.75-.83 1 1 0 0 0 1.663-1.11A3.5 3.5 0 1 0 5.463 11H21a1 1 0 1 0 0-2H5.5A1.5 1.5 0 0 1 4 7.5M12 5a1 1 0 1 0 0 2h13a1 1 0 1 0 0-2zm-5 8a1 1 0 1 0 0 2h8.4a7.47 7.47 0 0 1 5.059-2zm-4 4h10.865a7.5 7.5 0 0 0-.715 2H3a1 1 0 1 1 0-2m4 4h6.016c.046.697.187 1.368.41 2H7a1 1 0 1 1 0-2m20-.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0m-6-4a.5.5 0 0 0-1 0V20h-3.5a.5.5 0 0 0 0 1H20v3.5a.5.5 0 0 0 1 0V21h3.5a.5.5 0 0 0 0-1H21z"/>`,
  'regular': `<path d="M3.504 7.51A1.979 1.979 0 0 1 7.13 6.414a.75.75 0 1 0 1.248-.833 3.479 3.479 0 1 0-2.932 5.407 1 1 0 0 0 .135.012h15.671a.75.75 0 1 0 0-1.5H5.616a1 1 0 0 0-.133-.012A1.98 1.98 0 0 1 3.504 7.51M11.75 6a.75.75 0 0 0 0 1.5h13.5a.75.75 0 0 0 0-1.5zm-5 7.25a.75.75 0 0 0 0 1.5h8.934a7.5 7.5 0 0 1 2.888-1.5zM2.748 17h11.117q-.376.711-.595 1.5H2.748a.75.75 0 1 1 0-1.5m3.997 3.5H13q.002.772.15 1.5H6.745a.75.75 0 1 1 0-1.5M27 20.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0m-6-4a.5.5 0 0 0-1 0V20h-3.5a.5.5 0 1 0 0 1H20v3.5a.5.5 0 1 0 1 0V21h3.5a.5.5 0 1 0 0-1H21z"/>`
} as const;

export default function ReadingListAddIcon({ 
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
        viewBox="0 0 28 28"
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

  const gradientId = 'readinglistaddicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 28"
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