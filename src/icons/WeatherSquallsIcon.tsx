
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M14 15.5a8.5 8.5 0 1 1 8.5 8.5h-17a1.5 1.5 0 0 1 0-3h17a5.5 5.5 0 1 0-5.5-5.5 1.5 1.5 0 0 1-3 0m17.098 8.424A6.5 6.5 0 0 1 37.404 19h.096a6.5 6.5 0 1 1 0 13h-2.303a6 6 0 1 1-10.736 5.308l-.096-.231a1.5 1.5 0 1 1 2.77-1.154l.096.23A3 3 0 1 0 30 32H5.5a1.5 1.5 0 0 1 0-3h32a3.5 3.5 0 1 0 0-7h-.096a3.5 3.5 0 0 0-3.396 2.651l-.053.213a1.5 1.5 0 1 1-2.91-.728z"/>`,
  'regular': `<path d="M15 15.702C15.167 11.407 18.699 8 23 8a8.001 8.001 0 0 1 0 16H5.25a1.25 1.25 0 1 1 0-2.5H23a5.5 5.5 0 1 0-.001-11 5.51 5.51 0 0 0-5.5 5.298 1.25 1.25 0 0 1-2.498-.096m17.133 8.36a6.035 6.035 0 0 1 5.854-4.562c3.31 0 6.013 2.682 6.013 6a6 6 0 0 1-6 6h-3.408c.575.877.908 1.924.908 3.04 0 2.979-2.412 5.46-5.422 5.46a5.42 5.42 0 0 1-4.85-2.997l-.096-.194a1.25 1.25 0 1 1 2.236-1.118l.097.194a2.92 2.92 0 0 0 2.613 1.615c1.599 0 2.922-1.332 2.922-2.96 0-1.672-1.358-3.04-3-3.04H5.25a1.25 1.25 0 1 1 0-2.5H38a3.5 3.5 0 0 0 3.5-3.5c0-1.929-1.576-3.5-3.513-3.5a3.535 3.535 0 0 0-3.428 2.669l-.096.384a1.25 1.25 0 0 1-2.426-.606z"/>`
} as const;

export default function WeatherSquallsIcon({ 
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
        viewBox="0 0 48 48"
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

  const gradientId = 'weathersquallsicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
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