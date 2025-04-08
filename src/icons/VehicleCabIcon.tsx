
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M11 2a1 1 0 0 0-1 1v1h-.176a3.75 3.75 0 0 0-3.631 2.813L5.629 9H4.25a.75.75 0 0 0 0 1.5h.991l-.288 1.117A2.75 2.75 0 0 0 3 14.25v9A2.75 2.75 0 0 0 5.75 26h1a2.75 2.75 0 0 0 2.75-2.75v-1h9v1A2.75 2.75 0 0 0 21.25 26h1A2.75 2.75 0 0 0 25 23.25v-9a2.75 2.75 0 0 0-1.953-2.633l-.289-1.117h.992a.75.75 0 0 0 0-1.5h-1.379l-.564-2.187A3.75 3.75 0 0 0 18.176 4H18V3a1 1 0 0 0-1-1zm7.176 3.5a2.25 2.25 0 0 1 2.178 1.688l1.113 4.312H6.533l1.112-4.312A2.25 2.25 0 0 1 9.824 5.5zM20 22.25h3.5v1c0 .69-.56 1.25-1.25 1.25h-1c-.69 0-1.25-.56-1.25-1.25zm-12 1c0 .69-.56 1.25-1.25 1.25h-1c-.69 0-1.25-.56-1.25-1.25v-1H8zm-1-7a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0m12.75 1.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5m-3.5 0a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5z"/>`,
  'regular': `<path d="M9.5 16.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0m10.25 1.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5m-8.75.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75m-1-14.5V2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v1.75h.158a3.75 3.75 0 0 1 3.638 2.84L22.398 9h1.352a.75.75 0 0 1 0 1.5h-.977l.28 1.12A2.75 2.75 0 0 1 25 14.25v9A2.75 2.75 0 0 1 22.25 26h-1a2.75 2.75 0 0 1-2.75-2.75v-1h-9v1A2.75 2.75 0 0 1 6.75 26h-1A2.75 2.75 0 0 1 3 23.25v-9c0-1.24.82-2.287 1.947-2.631l.28-1.119H4.25a.75.75 0 0 1 0-1.5h1.352l.602-2.41a3.75 3.75 0 0 1 3.638-2.84zm1.5 0h5V2.5h-5zm-1.658 1.5A2.25 2.25 0 0 0 7.66 6.954L6.523 11.5h14.954l-1.136-4.546a2.25 2.25 0 0 0-2.183-1.704zM20 22.25v1c0 .69.56 1.25 1.25 1.25h1c.69 0 1.25-.56 1.25-1.25v-1zm-12 1v-1H4.5v1c0 .69.56 1.25 1.25 1.25h1c.69 0 1.25-.56 1.25-1.25M22.25 13H5.75c-.69 0-1.25.56-1.25 1.25v6.5h19v-6.5c0-.69-.56-1.25-1.25-1.25"/>`
} as const;

export default function VehicleCabIcon({ 
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

  const gradientId = 'vehiclecabicon_gradient';
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