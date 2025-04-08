
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12 6.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0M6.5 3a.5.5 0 0 1 .5.5V6h2a.5.5 0 0 1 0 1H6.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5m4.5 8.19A6.48 6.48 0 0 1 6.5 13a6.5 6.5 0 0 1-2.969-.716A2.75 2.75 0 0 0 2 14.75V17c0 .865.4 1.636 1.023 2.14a3.25 3.25 0 0 0 6.32.61h4.814a3.251 3.251 0 0 0 6.258-.258A2.75 2.75 0 0 0 22 17v-1.688a2.75 2.75 0 0 0-2.083-2.668l-2.183-.546-2.508-4.246A2.75 2.75 0 0 0 13 6.504q-.002.774-.174 1.496h.032c.443 0 .852.234 1.077.614l2 3.386H11zm-6.5 7.56a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0m12.75 1.75a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5"/>`,
  'regular': `<path d="M12 6.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0M6.5 3a.5.5 0 0 1 .5.5V6h2a.5.5 0 0 1 0 1H6.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5m6.326 5q.172-.722.174-1.496a2.75 2.75 0 0 1 2.226 1.348l2.508 4.246 2.183.546A2.75 2.75 0 0 1 22 15.312V17a2.75 2.75 0 0 1-1.585 2.492 3.251 3.251 0 0 1-6.258.258H9.343a3.251 3.251 0 0 1-6.32-.61A2.75 2.75 0 0 1 2 17v-2.25a2.75 2.75 0 0 1 1.531-2.466c.89.458 1.9.716 2.969.716a6.48 6.48 0 0 0 4.5-1.81V12h4.934l-2-3.386A1.25 1.25 0 0 0 12.859 8zm1.212 10.25a3.25 3.25 0 0 1 6.274-.59A1.24 1.24 0 0 0 20.5 17v-1.688a1.25 1.25 0 0 0-.947-1.213l-2.397-.599H4.75c-.69 0-1.25.56-1.25 1.25v2.267a3.25 3.25 0 0 1 5.962 1.233zM6.25 17a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5m9.25 1.75a1.75 1.75 0 1 0 3.5 0 1.75 1.75 0 0 0-3.5 0"/>`
} as const;

export default function VehicleCarProfileLtrClockIcon({ 
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

  const gradientId = 'vehiclecarprofileltrclockicon_gradient';
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