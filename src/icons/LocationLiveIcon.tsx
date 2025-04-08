
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M9 2.725a.75.75 0 0 1 .799-.699c5.992.394 10.782 5.185 11.175 11.179a.75.75 0 0 1-1.497.098c-.343-5.242-4.535-9.435-9.777-9.78a.75.75 0 0 1-.7-.798M7.589 21.386l.388.386a.75.75 0 0 0 1.057 0l1.346-1.337c.728-.723 1.568-1.559 2.012-2.003a5.496 5.496 0 1 0-7.773 0 1162 1162 0 0 0 2.97 2.954M8.5 15.75a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5M9.818 5.503a.75.75 0 1 0-.134 1.494 6.99 6.99 0 0 1 6.319 6.317.75.75 0 1 0 1.494-.136 8.49 8.49 0 0 0-7.679-7.675"/>`,
  'regular': `<path d="M9.799 2.026A.75.75 0 0 0 9.7 3.523c5.242.345 9.434 4.538 9.777 9.78a.75.75 0 1 0 1.497-.098C20.581 7.21 15.791 2.42 9.799 2.026M8.497 15.622a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25m-.52 6.15-.39-.386-2.969-2.954a5.496 5.496 0 1 1 7.773 0c-.444.444-1.284 1.28-2.012 2.003l-1.346 1.337a.75.75 0 0 1-1.057 0M5.678 11.72a3.996 3.996 0 0 0 0 5.651c.482.482 1.32 1.316 2.039 2.03l.787.782.816-.812c.729-.724 1.567-1.557 2.01-2a3.996 3.996 0 1 0-5.652-5.651m4.14-6.217a.75.75 0 0 0-.135 1.494 6.99 6.99 0 0 1 6.319 6.317.75.75 0 1 0 1.494-.136 8.49 8.49 0 0 0-7.679-7.675"/>`
} as const;

export default function LocationLiveIcon({ 
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

  const gradientId = 'locationliveicon_gradient';
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