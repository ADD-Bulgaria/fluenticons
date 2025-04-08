
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M13.409 2.513a3.75 3.75 0 0 0-2.818 0l-2.19.888 9.592 3.73 3.374-1.303a1.8 1.8 0 0 0-.46-.275zM22 7.191l-9.25 3.574v2.3A6.48 6.48 0 0 1 17.5 11c1.747 0 3.332.689 4.5 1.81zm-10.75 3.574v4.945a6.5 6.5 0 0 0-.25 1.791c0 .621.087 1.222.25 1.79v2.397a4 4 0 0 1-.659-.199l-7.498-3.04A1.75 1.75 0 0 1 2 16.827V7.192zM2.633 5.828 12 9.447l3.917-1.514-9.543-3.71-3.281 1.33q-.256.104-.46.275M23 17.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0m-5.458-3.498.086.015.063.02.068.035.047.032 2.548 2.542.057.07a.5.5 0 0 1-.695.695l-.07-.057L18 15.707v5.294l-.008.09a.5.5 0 0 1-.402.402l-.09.008-.09-.008a.5.5 0 0 1-.402-.402L17 21l-.001-5.292-1.645 1.646-.07.057a.5.5 0 0 1-.568 0l-.07-.057-.057-.07a.5.5 0 0 1 0-.568l.057-.07 2.513-2.512.056-.045.074-.042.083-.03.06-.012.056-.005z"/>`,
  'regular': `<path d="M10.591 2.513a3.75 3.75 0 0 1 2.818 0l7.498 3.04A1.75 1.75 0 0 1 22 7.175v5.635a6.5 6.5 0 0 0-1.5-1.077v-3.96l-7.75 2.992v2.298a6.5 6.5 0 0 0-1.5 2.645v-4.944L3.5 7.75v9.078a.25.25 0 0 0 .156.231l7.499 3.04q.047.02.095.036l.189.076q.088.036.179.06c.248.526.565 1.014.94 1.451a3.75 3.75 0 0 1-1.967-.233l-7.498-3.04A1.75 1.75 0 0 1 2 16.827V7.176a1.75 1.75 0 0 1 1.093-1.622zm2.254 1.39a2.25 2.25 0 0 0-1.69 0L9.24 4.68l7.527 2.927 2.67-1.03zM4.59 6.564l7.411 2.883 2.69-1.04L7.216 5.5zM23 17.501a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0m-5.458-3.498.086.015.063.02.068.035.047.032 2.548 2.542.057.07a.5.5 0 0 1-.695.695l-.07-.057L18 15.707v5.294l-.008.09a.5.5 0 0 1-.402.402l-.09.008-.09-.008a.5.5 0 0 1-.402-.402L17 21l-.001-5.292-1.645 1.646-.07.057a.5.5 0 0 1-.568 0l-.07-.057-.057-.07a.5.5 0 0 1 0-.568l.057-.07 2.513-2.512.056-.045.074-.042.083-.03.06-.012.056-.005z"/>`
} as const;

export default function BoxArrowUpIcon({ 
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

  const gradientId = 'boxarrowupicon_gradient';
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