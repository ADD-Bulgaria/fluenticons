
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'color': `<path fill-rule="evenodd" d="M4.5 4a.5.5 0 0 0-.5.5V8a1 1 0 0 1-2 0V4.5A2.5 2.5 0 0 1 4.5 2H8a1 1 0 0 1 0 2zM15 3a1 1 0 0 1 1-1h3.5A2.5 2.5 0 0 1 22 4.5V8a1 1 0 1 1-2 0V4.5a.5.5 0 0 0-.5-.5H16a1 1 0 0 1-1-1M3 15a1 1 0 0 1 1 1v3.5a.5.5 0 0 0 .5.5H8a1 1 0 1 1 0 2H4.5A2.5 2.5 0 0 1 2 19.5V16a1 1 0 0 1 1-1m18 0a1 1 0 0 1 1 1v3.5a2.5 2.5 0 0 1-2.5 2.5H16a1 1 0 1 1 0-2h3.5a.5.5 0 0 0 .5-.5V16a1 1 0 0 1 1-1" clip-rule="evenodd"/><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6M7.5 8.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5"/>`,
  'filled': `<path d="M3 6.5A3.5 3.5 0 0 1 6.5 3H9a1 1 0 0 1 0 2H6.5A1.5 1.5 0 0 0 5 6.5V9a1 1 0 1 1-2 0zm18 11a3.5 3.5 0 0 1-3.5 3.5H15a1 1 0 1 1 0-2h2.5a1.5 1.5 0 0 0 1.5-1.5V15a1 1 0 1 1 2 0zm0-11A3.5 3.5 0 0 0 17.5 3H15a1 1 0 1 0 0 2h2.5A1.5 1.5 0 0 1 19 6.5V9a1 1 0 1 0 2 0zM6.5 21A3.5 3.5 0 0 1 3 17.5V15a1 1 0 1 1 2 0v2.5A1.5 1.5 0 0 0 6.5 19H9a1 1 0 1 1 0 2zm5.5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6M7.5 8.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5"/>`,
  'regular': `<path d="M17.75 3A3.25 3.25 0 0 1 21 6.25v3a.75.75 0 0 1-1.5 0v-3a1.75 1.75 0 0 0-1.75-1.75h-3a.75.75 0 0 1 0-1.5zM6.25 3A3.25 3.25 0 0 0 3 6.25v3a.75.75 0 0 0 1.5 0v-3c0-.966.784-1.75 1.75-1.75h3a.75.75 0 0 0 0-1.5zm11.5 18A3.25 3.25 0 0 0 21 17.75v-3a.75.75 0 0 0-1.5 0v3a1.75 1.75 0 0 1-1.75 1.75h-3a.75.75 0 0 0 0 1.5zM3 17.75A3.25 3.25 0 0 0 6.25 21h3a.75.75 0 0 0 0-1.5h-3a1.75 1.75 0 0 1-1.75-1.75v-3a.75.75 0 0 0-1.5 0zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0-1.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m-4.5-5a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>`
} as const;

export default function SearchVisualIcon({ 
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

  const gradientId = 'searchvisualicon_gradient';
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