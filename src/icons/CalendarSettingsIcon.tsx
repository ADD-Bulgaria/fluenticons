
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6 12.25A6.25 6.25 0 0 1 12.25 6h23.5A6.25 6.25 0 0 1 42 12.25V14H6zm0 4.25v19.25A6.25 6.25 0 0 0 12.25 42h11.794A12.94 12.94 0 0 1 22 35c0-7.18 5.82-13 13-13 2.577 0 4.98.75 7 2.044V16.5zm22.894 13.282a2 2 0 0 1-1.465 2.537l-3.26.748a11 11 0 0 0-.043 3.6l3.464.868a2 2 0 0 1 1.436 2.491l-.997 3.482a11 11 0 0 0 3.086 1.785l2.518-2.607a2 2 0 0 1 2.876-.001l2.484 2.567a11 11 0 0 0 3.095-1.84l-.981-3.196a2 2 0 0 1 1.464-2.537l3.26-.748a11 11 0 0 0 .043-3.6l-3.463-.868a2 2 0 0 1-1.437-2.491l.998-3.482a11 11 0 0 0-3.087-1.785l-2.518 2.607a2 2 0 0 1-2.876.001l-2.484-2.567a11 11 0 0 0-3.095 1.841zM35 38a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>`,
  'regular': `<path d="M6 12.25A6.25 6.25 0 0 1 12.25 6h23.5A6.25 6.25 0 0 1 42 12.25v11.794c-.78-.5-1.618-.919-2.5-1.244v-6.3h-31v19.25a3.75 3.75 0 0 0 3.75 3.75H22.8c.325.882.744 1.72 1.244 2.5H12.25A6.25 6.25 0 0 1 6 35.75zm6.25-3.75a3.75 3.75 0 0 0-3.75 3.75V14h31v-1.75a3.75 3.75 0 0 0-3.75-3.75zm16.644 21.282a2 2 0 0 1-1.465 2.537l-3.26.748a11 11 0 0 0-.043 3.6l3.464.868a2 2 0 0 1 1.436 2.491l-.997 3.482a11 11 0 0 0 3.086 1.785l2.518-2.607a2 2 0 0 1 2.876-.001l2.484 2.567a11 11 0 0 0 3.095-1.84l-.981-3.196a2 2 0 0 1 1.464-2.537l3.26-.748a11 11 0 0 0 .043-3.6l-3.463-.868a2 2 0 0 1-1.437-2.491l.998-3.482a11 11 0 0 0-3.087-1.785l-2.518 2.607a2 2 0 0 1-2.876.001l-2.484-2.567a11 11 0 0 0-3.095 1.841zM35 38a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>`
} as const;

export default function CalendarSettingsIcon({ 
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

  const gradientId = 'calendarsettingsicon_gradient';
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