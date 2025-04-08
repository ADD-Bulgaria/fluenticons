
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M3 7.5A4.5 4.5 0 0 1 7.5 3h17A4.5 4.5 0 0 1 29 7.5v17a4.5 4.5 0 0 1-4.5 4.5h-17A4.5 4.5 0 0 1 3 24.5zm9 5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0M10.5 20a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m5.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m0-6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m5.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>`,
  'light': `<path d="M7.5 4A3.5 3.5 0 0 0 4 7.5v17A3.5 3.5 0 0 0 7.5 28h17a3.5 3.5 0 0 0 3.5-3.5v-17A3.5 3.5 0 0 0 24.5 4zM3 7.5A4.5 4.5 0 0 1 7.5 3h17A4.5 4.5 0 0 1 29 7.5v17a4.5 4.5 0 0 1-4.5 4.5h-17A4.5 4.5 0 0 1 3 24.5zM9.5 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m8-1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M11 19.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>`,
  'regular': `<path d="M12 12.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M10.5 20a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m5.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m0-6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m5.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M7.5 3A4.5 4.5 0 0 0 3 7.5v17A4.5 4.5 0 0 0 7.5 29h17a4.5 4.5 0 0 0 4.5-4.5v-17A4.5 4.5 0 0 0 24.5 3zM5 7.5A2.5 2.5 0 0 1 7.5 5h17A2.5 2.5 0 0 1 27 7.5v17a2.5 2.5 0 0 1-2.5 2.5h-17A2.5 2.5 0 0 1 5 24.5z"/>`
} as const;

export default function CalendarMonthIcon({ 
  variant = 'regular',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'filled' | 'light' | 'regular' }) {
  const width = typeof size === 'number' ? `${size}px` : size;
  const height = typeof size === 'number' ? `${size}px` : size;
  
  if (!gradient) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
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

  const gradientId = 'calendarmonthicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
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