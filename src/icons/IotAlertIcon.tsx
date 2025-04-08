
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M19 4.491a2.5 2.5 0 0 1-3.012 2.448l-1.28 2.118c.325.298.6.649.81 1.04A5 5 0 0 0 11.502 15v.97a4 4 0 0 1-2.722-1.598l-1.794.848q.015.138.015.28a2.5 2.5 0 1 1-.623-1.652l1.754-.828a4 4 0 0 1 .784-3.567l-.991-1.13a2.5 2.5 0 1 1 1.164-.948l.983 1.12A4 4 0 0 1 12 8c.505 0 .99.094 1.434.265l1.245-2.06A2.5 2.5 0 1 1 19 4.492M16.503 11a4 4 0 0 0-4 4v3l-.95.8c-.307.26-.46.39-.507.491a.5.5 0 0 0 .242.662c.1.047.302.047.704.047h9.02c.403 0 .604 0 .705-.047a.5.5 0 0 0 .242-.662c-.047-.101-.2-.231-.508-.49L20.503 18v-3a4 4 0 0 0-4-4m1.5 10c-.219.583-.808 1-1.5 1-.693 0-1.282-.417-1.5-1z"/>`,
  'regular': `<path d="M19 4.491a2.5 2.5 0 0 1-3.012 2.448l-1.28 2.117c.325.299.6.65.81 1.04-.51.102-.991.281-1.432.525a2.5 2.5 0 1 0-2.556 3.835q-.03.268-.03.544v.97a4 4 0 0 1-2.72-1.598l-1.795.848q.015.138.015.28a2.5 2.5 0 1 1-.623-1.652l1.754-.828a4 4 0 0 1 .784-3.567l-.991-1.13a2.5 2.5 0 1 1 1.164-.948l.982 1.12A4 4 0 0 1 12 8c.505 0 .989.094 1.434.265l1.245-2.06A2.5 2.5 0 1 1 19 4.492m-1.5 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0M7 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-1.5 8.5a1 1 0 1 0-2 0 1 1 0 0 0 2 0M16.503 11a4 4 0 0 0-4 4v3l-.95.8c-.307.26-.46.39-.507.491a.5.5 0 0 0 .242.662c.1.047.302.047.704.047h9.02c.403 0 .604 0 .705-.047a.5.5 0 0 0 .242-.662c-.047-.101-.2-.231-.508-.49L20.503 18v-3a4 4 0 0 0-4-4m1.5 10c-.219.583-.808 1-1.5 1-.693 0-1.282-.417-1.5-1z"/>`
} as const;

export default function IotAlertIcon({ 
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

  const gradientId = 'iotalerticon_gradient';
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