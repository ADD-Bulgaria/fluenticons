
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12 7.5a5.5 5.5 0 1 0 11 0 5.5 5.5 0 0 0-11 0M20.5 4a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h1a2.5 2.5 0 0 0-2-1c-.833 0-1.572.407-2.027 1.036a.5.5 0 0 1-.81-.586A3.5 3.5 0 0 1 17.5 4c.98 0 1.865.403 2.5 1.05V4.5a.5.5 0 0 1 .5-.5M15 9.95v.55a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-1c.456.608 1.183 1 2 1 .766 0 1.452-.344 1.911-.888a.5.5 0 1 1 .764.645A3.5 3.5 0 0 1 17.5 11 3.5 3.5 0 0 1 15 9.95M8 13h6.034a6.5 6.5 0 0 1-2.012-2H8l-.117.007A1 1 0 0 0 8 13M5 6h6.174a6.5 6.5 0 0 0-.155 2H5a1 1 0 0 1-.117-1.993zm4.883 10.007L10 16h4a1 1 0 0 1 .117 1.993L14 18h-4a1 1 0 0 1-.117-1.993"/>`,
  'regular': `<path d="M12 7.5a5.5 5.5 0 1 0 11 0 5.5 5.5 0 0 0-11 0M20.5 4a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h1a2.5 2.5 0 0 0-2-1c-.833 0-1.572.407-2.027 1.036a.5.5 0 0 1-.81-.586A3.5 3.5 0 0 1 17.5 4c.98 0 1.865.403 2.5 1.05V4.5a.5.5 0 0 1 .5-.5M15 9.95v.55a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-1c.456.608 1.183 1 2 1 .766 0 1.452-.344 1.911-.888a.5.5 0 1 1 .764.645A3.5 3.5 0 0 1 17.5 11 3.5 3.5 0 0 1 15 9.95M7.5 12.5h5.846a6.5 6.5 0 0 1-1.324-1.5H7.5a.75.75 0 0 0 0 1.5m3.5-5q.002-.776.174-1.5H4.5a.75.75 0 0 0 0 1.5zm2.5 8.5a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5z"/>`
} as const;

export default function FilterSyncIcon({ 
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

  const gradientId = 'filtersyncicon_gradient';
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