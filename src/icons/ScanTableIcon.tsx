
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M3.5 5.25c0-.966.784-1.75 1.75-1.75h3a.75.75 0 0 0 0-1.5h-3A3.25 3.25 0 0 0 2 5.25v3a.75.75 0 0 0 1.5 0zm0 13.5c0 .966.784 1.75 1.75 1.75h3a.75.75 0 0 1 0 1.5h-3A3.25 3.25 0 0 1 2 18.75v-3a.75.75 0 0 1 1.5 0zM18.75 3.5c.966 0 1.75.784 1.75 1.75v3a.75.75 0 0 0 1.5 0v-3A3.25 3.25 0 0 0 18.75 2h-3a.75.75 0 0 0 0 1.5zm1.75 15.25a1.75 1.75 0 0 1-1.75 1.75h-3a.75.75 0 0 0 0 1.5h3A3.25 3.25 0 0 0 22 18.75v-3a.75.75 0 0 0-1.5 0zM17.999 11v4a3 3 0 0 1-2.824 2.995L15 18H9a3 3 0 0 1-2.995-2.824L6 15v-4zm-3-5a3 3 0 0 1 2.995 2.824l.005.176v.5h-12V9a3 3 0 0 1 2.824-2.995L8.999 6z"/>`,
  'regular': `<path d="M5.25 3.5A1.75 1.75 0 0 0 3.5 5.25v3a.75.75 0 0 1-1.5 0v-3A3.25 3.25 0 0 1 5.25 2h3a.75.75 0 0 1 0 1.5zm0 17a1.75 1.75 0 0 1-1.75-1.75v-3a.75.75 0 0 0-1.5 0v3A3.25 3.25 0 0 0 5.25 22h3a.75.75 0 0 0 0-1.5zM20.5 5.25a1.75 1.75 0 0 0-1.75-1.75h-3a.75.75 0 0 1 0-1.5h3A3.25 3.25 0 0 1 22 5.25v3a.75.75 0 0 1-1.5 0zM18.75 20.5a1.75 1.75 0 0 0 1.75-1.75v-3a.75.75 0 0 1 1.5 0v3A3.25 3.25 0 0 1 18.75 22h-3a.75.75 0 0 1 0-1.5zm-.756-11.918A2.75 2.75 0 0 0 15.249 6h-6.5l-.168.005A2.75 2.75 0 0 0 6 8.75v6.5l.005.168A2.75 2.75 0 0 0 8.749 18h6.5l.167-.005A2.75 2.75 0 0 0 18 15.25v-6.5zM7.499 10.995h9v4.255l-.006.128a1.25 1.25 0 0 1-1.244 1.122h-6.5l-.128-.006A1.25 1.25 0 0 1 7.5 15.25zM8.749 7.5h6.5l.128.006a1.25 1.25 0 0 1 1.122 1.244v.745h-9V8.75l.006-.128A1.25 1.25 0 0 1 8.75 7.5"/>`
} as const;

export default function ScanTableIcon({ 
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

  const gradientId = 'scantableicon_gradient';
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