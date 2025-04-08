
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M8.028 4a2.75 2.75 0 0 0-2.654 2.026L4.422 9.52A2.75 2.75 0 0 0 2 12.25v2.25c0 .865.4 1.636 1.023 2.14a3.25 3.25 0 0 0 6.32.61h4.814a3.252 3.252 0 0 0 6.258-.258A2.75 2.75 0 0 0 22 14.5v-1.688a2.75 2.75 0 0 0-2.083-2.668l-2.183-.546-2.508-4.246A2.75 2.75 0 0 0 12.858 4zM6.822 6.421A1.25 1.25 0 0 1 8.028 5.5H9.5v4H5.982zM11 9.5v-4h1.858c.443 0 .852.234 1.077.614l2 3.386zm-4.75 5a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5m9.25 1.75a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0"/>`,
  'regular': `<path d="M5.374 6.026A2.75 2.75 0 0 1 8.028 4h4.83a2.75 2.75 0 0 1 2.368 1.352l2.508 4.246 2.183.546A2.75 2.75 0 0 1 22 12.812V14.5a2.75 2.75 0 0 1-1.585 2.492 3.251 3.251 0 0 1-6.258.258H9.343a3.251 3.251 0 0 1-6.32-.61A2.75 2.75 0 0 1 2 14.5v-2.25a2.75 2.75 0 0 1 2.422-2.73zm8.664 9.724a3.25 3.25 0 0 1 6.274-.591c.12-.191.188-.417.188-.659v-1.688a1.25 1.25 0 0 0-.947-1.213L17.156 11H4.75c-.69 0-1.25.56-1.25 1.25v2.267a3.25 3.25 0 0 1 5.962 1.233zM11 9.5h4.934l-2-3.386a1.25 1.25 0 0 0-1.076-.614H11zm-1.5-4H8.028a1.25 1.25 0 0 0-1.206.921L5.982 9.5H9.5zm-3.25 9a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5m9.25 1.75a1.75 1.75 0 1 0 3.5 0 1.75 1.75 0 0 0-3.5 0"/>`
} as const;

export default function VehicleCarProfileIcon({ 
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

  const gradientId = 'vehiclecarprofileicon_gradient';
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