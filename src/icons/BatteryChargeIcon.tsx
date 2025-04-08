
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6 6a1 1 0 0 0-2 0v2H3a1 1 0 0 0-1 1v3.5A2.5 2.5 0 0 0 4.5 15h1v8a1 1 0 1 0 2 0v-8h1a2.5 2.5 0 0 0 2.5-2.5V9a1 1 0 0 0-1-1H9V6a1 1 0 0 0-2 0v2H6zm7.5 2a1 1 0 0 0-1 1v6a1.5 1.5 0 0 1-1.5 1.5h-.25c-.69 0-1.25.56-1.25 1.25V23a1 1 0 0 0 1 1h13a4.5 4.5 0 0 0 4.5-4.5V19h.5a1.5 1.5 0 0 0 1.5-1.5v-3a1.5 1.5 0 0 0-1.5-1.5H28v-.5A4.5 4.5 0 0 0 23.5 8z"/>`,
  'regular': `<path d="M6 6a1 1 0 0 0-2 0v2H3a1 1 0 0 0-1 1v3.5A2.5 2.5 0 0 0 4.5 15h1v8a1 1 0 1 0 2 0v-8h1a2.5 2.5 0 0 0 2.5-2.5V9a1 1 0 0 0-1-1H9V6a1 1 0 0 0-2 0v2H6zm-2 6.5V10h5v2.5a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5M12.5 9a1 1 0 0 1 1-1h10a4.5 4.5 0 0 1 4.5 4.5v.5h.5a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5H28v.5a4.5 4.5 0 0 1-4.5 4.5H10a1 1 0 1 1 0-2h13.5a2.5 2.5 0 0 0 2.5-2.5v-7a2.5 2.5 0 0 0-2.5-2.5h-10a1 1 0 0 1-1-1"/>`
} as const;

export default function BatteryChargeIcon({ 
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

  const gradientId = 'batterychargeicon_gradient';
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