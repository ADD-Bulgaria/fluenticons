
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6.75 3A3.75 3.75 0 0 0 3 6.75V9.5h6.5V3zM3 17v-6h6.5v6zm0 4.25V18.5h6.5V25H6.75A3.75 3.75 0 0 1 3 21.25M13.166 25H11v-1.5h2.542l-.02.077zM25 13.012V11h-6.5v6h.856l3.038-3.038a3.28 3.28 0 0 1 2.606-.95m0-6.262V9.5h-6.5V3h2.75A3.75 3.75 0 0 1 25 6.75M11 3h6v1.5h-6zm6 14v-6h-6v6zm6.1-2.33-7.903 7.902a2.7 2.7 0 0 0-.706 1.247l-.458 1.831a1.087 1.087 0 0 0 1.319 1.318l1.83-.457a2.7 2.7 0 0 0 1.248-.707l7.902-7.902a2.286 2.286 0 0 0-3.232-3.233"/>`,
  'regular': `<path d="M3 6.75A3.75 3.75 0 0 1 6.75 3h14.5A3.75 3.75 0 0 1 25 6.75v6.262a3.3 3.3 0 0 0-1.5.22V11h-5v6h.856l-4.865 4.865a3.7 3.7 0 0 0-.97 1.712L13.167 25H6.75A3.75 3.75 0 0 1 3 21.25zM4.5 18.5v2.75a2.25 2.25 0 0 0 2.25 2.25H9.5v-5zm5-1.5v-6h-5v6zm7.5 0v-6h-6v6zm6.5-10.25a2.25 2.25 0 0 0-2.25-2.25H18.5v5h5zM9.5 4.5H6.75A2.25 2.25 0 0 0 4.5 6.75V9.5h5zm13.6 10.17-7.903 7.902a2.7 2.7 0 0 0-.706 1.247l-.458 1.831a1.087 1.087 0 0 0 1.319 1.318l1.83-.457a2.7 2.7 0 0 0 1.248-.707l7.902-7.902a2.286 2.286 0 0 0-3.232-3.233"/>`
} as const;

export default function TableColumnTopBottomEditIcon({ 
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

  const gradientId = 'tablecolumntopbottomediticon_gradient';
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