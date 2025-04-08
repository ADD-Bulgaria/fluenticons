
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M3 5.25A2.25 2.25 0 0 1 5.25 3h13.5A2.25 2.25 0 0 1 21 5.25v13.5a.75.75 0 0 1-.75.75h-1v-8.25q0-.165-.036-.325l-.739-3.326a3 3 0 0 0-2.928-2.349H8.453A3 3 0 0 0 5.525 7.6l-.74 3.325a1.5 1.5 0 0 0-.035.325v8.25h-1a.75.75 0 0 1-.75-.75zM8.453 6a2.25 2.25 0 0 0-2.196 1.762l-.74 3.325a1 1 0 0 0-.017.163v9c0 .966.784 1.75 1.75 1.75h1.5a1.75 1.75 0 0 0 1.75-1.75v-.75h3v.75c0 .966.784 1.75 1.75 1.75h1.5a1.75 1.75 0 0 0 1.75-1.75v-9a1 1 0 0 0-.018-.163l-.739-3.325A2.25 2.25 0 0 0 15.547 6zm-.732 2.087a.75.75 0 0 1 .732-.587h7.094a.75.75 0 0 1 .732.587l.536 2.413h-9.63zM7 20.25v-.75h2v.75a.25.25 0 0 1-.25.25h-1.5a.25.25 0 0 1-.25-.25m10-.75v.75a.25.25 0 0 1-.25.25h-1.5a.25.25 0 0 1-.25-.25v-.75zm-6.25-3h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1 0-1.5m-.745-2.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0M15 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>`,
  'regular': `<path d="M9.005 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2M16 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-5.25 1.5a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5zM3 5.25A2.25 2.25 0 0 1 5.25 3h13.5A2.25 2.25 0 0 1 21 5.25v13.5a.75.75 0 0 1-.75.75H18.5v.75A1.75 1.75 0 0 1 16.75 22h-1.5a1.75 1.75 0 0 1-1.75-1.75v-.75h-3v.75A1.75 1.75 0 0 1 8.75 22h-1.5a1.75 1.75 0 0 1-1.75-1.75v-.75H3.75a.75.75 0 0 1-.75-.75zm6 15v-.75H7v.75c0 .138.112.25.25.25h1.5a.25.25 0 0 0 .25-.25M7 18h10v-6H7zm8 1.5v.75c0 .138.112.25.25.25h1.5a.25.25 0 0 0 .25-.25v-.75zm4.5-1.5V5.25a.75.75 0 0 0-.75-.75H5.25a.75.75 0 0 0-.75.75V18h1v-6.75a1 1 0 0 1 .018-.163l.739-3.325A2.25 2.25 0 0 1 8.453 6h7.094a2.25 2.25 0 0 1 2.196 1.762l.74 3.325a1 1 0 0 1 .017.163V18zM8.453 7.5a.75.75 0 0 0-.732.587L7.185 10.5h9.63l-.536-2.413a.75.75 0 0 0-.732-.587z"/>`
} as const;

export default function VehicleTruckIcon({ 
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

  const gradientId = 'vehicletruckicon_gradient';
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