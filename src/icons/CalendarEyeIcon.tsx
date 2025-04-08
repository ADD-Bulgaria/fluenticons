
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M17 7v4.567a5.79 5.79 0 0 0-6.469 1.009 5.5 5.5 0 0 0-1.098 1.405C9.181 14.451 9 14.983 9 15.5c0 .484.156 1.001.42 1.5H5.5A2.5 2.5 0 0 1 3 14.5V7zm-2.5-4A2.5 2.5 0 0 1 17 5.5V6H3v-.5A2.5 2.5 0 0 1 5.5 3zm0 9c-2.764 0-4.5 2.318-4.5 3.5 0 1.2 1.739 3.5 4.5 3.5s4.5-2.318 4.5-3.5c0-1.2-1.739-3.5-4.5-3.5m0 6a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m1.5-2.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>`,
  'regular': `<path d="M14.5 3A2.5 2.5 0 0 1 17 5.5v6.067a5.7 5.7 0 0 0-1-.371V7H4v7.5A1.5 1.5 0 0 0 5.5 16h3.552c.066.331.193.67.368 1H5.5A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3zm0 1h-9A1.5 1.5 0 0 0 4 5.5V6h12v-.5A1.5 1.5 0 0 0 14.5 4m0 8c-2.764 0-4.5 2.318-4.5 3.5 0 1.2 1.739 3.5 4.5 3.5s4.5-2.318 4.5-3.5c0-1.2-1.739-3.5-4.5-3.5m0 6a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m1.5-2.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>`
} as const;

export default function CalendarEyeIcon({ 
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
        viewBox="0 0 20 20"
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

  const gradientId = 'calendareyeicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
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