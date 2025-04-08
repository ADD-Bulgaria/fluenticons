
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M23 7.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-7.146-2.354a.5.5 0 0 0-.708.708L16.793 7.5l-1.647 1.646a.5.5 0 0 0 .708.708L17.5 8.207l1.646 1.647a.5.5 0 0 0 .708-.708L18.207 7.5l1.647-1.646a.5.5 0 0 0-.708-.708L17.5 6.793zM8 11h4.022a6.5 6.5 0 0 0 2.012 2H8a1 1 0 0 1-.117-1.993zM5 6h6.174a6.5 6.5 0 0 0-.155 2H5a1 1 0 0 1-.117-1.993zm4.883 10.007L10 16h4a1 1 0 0 1 .117 1.993L14 18h-4a1 1 0 0 1-.117-1.993"/>`,
  'regular': `<path d="M23 7.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-7.146-2.354a.5.5 0 0 0-.708.708L16.793 7.5l-1.647 1.646a.5.5 0 0 0 .708.708L17.5 8.207l1.646 1.647a.5.5 0 0 0 .708-.708L18.207 7.5l1.647-1.646a.5.5 0 0 0-.708-.708L17.5 6.793zM13.346 12.5a6.5 6.5 0 0 1-1.324-1.5H7.5a.75.75 0 0 0 0 1.5zM11 7.5q.002-.776.174-1.5H4.5a.75.75 0 0 0 0 1.5zm2.5 8.5a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5z"/>`
} as const;

export default function FilterDismissIcon({ 
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

  const gradientId = 'filterdismissicon_gradient';
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