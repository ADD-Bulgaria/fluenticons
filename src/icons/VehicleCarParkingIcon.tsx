
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M36.5 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2H39v28.75a1.25 1.25 0 1 0 2.5 0V16H44a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-4 4.187A6.3 6.3 0 0 0 30.979 6H16.673a6.25 6.25 0 0 0-6.07 4.763L9.81 14H7.25a1.25 1.25 0 1 0 0 2.5h1.948l-.433 1.767A4.25 4.25 0 0 0 6 22.25v17.5A3.25 3.25 0 0 0 9.25 43h3.5A3.25 3.25 0 0 0 16 39.75V36.5h16v3.25A3.25 3.25 0 0 0 35.25 43H37v-2.5h-1.75a.75.75 0 0 1-.75-.75V36.5H37V18H11.404l1.627-6.642A3.75 3.75 0 0 1 16.673 8.5H30.98c.536 0 1.053.114 1.521.322zM8.5 36.5h5v3.25a.75.75 0 0 1-.75.75h-3.5a.75.75 0 0 1-.75-.75zM12 26a2 2 0 1 1 4 0 2 2 0 0 1-4 0m22 2a2 2 0 1 1 0-4 2 2 0 0 1 0 4m-6.25 0a1.25 1.25 0 1 1 0 2.5h-7.5a1.25 1.25 0 1 1 0-2.5z"/>`,
  'regular': `<path d="M36.5 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2H39v28.75a1.25 1.25 0 1 0 2.5 0V16H44a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-4 4.187A6.3 6.3 0 0 0 30.979 6H16.673a6.25 6.25 0 0 0-6.07 4.763L9.81 14H7.25a1.25 1.25 0 1 0 0 2.5h1.948l-.433 1.767A4.25 4.25 0 0 0 6 22.25v17.5A3.25 3.25 0 0 0 9.25 43h3.5A3.25 3.25 0 0 0 16 39.75V36.5h16v3.25A3.25 3.25 0 0 0 35.25 43H37v-2.5h-1.75a.75.75 0 0 1-.75-.75V36.5H37V34H8.5V22.25c0-.966.784-1.75 1.75-1.75H37V18H11.404l1.627-6.642A3.75 3.75 0 0 1 16.673 8.5H30.98c.536 0 1.053.114 1.521.322zM20.25 28a1.25 1.25 0 1 0 0 2.5h7.5a1.25 1.25 0 1 0 0-2.5zM14 28a2 2 0 1 0 0-4 2 2 0 0 0 0 4m22-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0M8.5 39.75V36.5h5v3.25a.75.75 0 0 1-.75.75h-3.5a.75.75 0 0 1-.75-.75"/>`
} as const;

export default function VehicleCarParkingIcon({ 
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

  const gradientId = 'vehiclecarparkingicon_gradient';
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