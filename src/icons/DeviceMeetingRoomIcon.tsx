
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M8.97 10.403A5.94 5.94 0 0 1 14.708 6h18.586a5.94 5.94 0 0 1 5.736 4.403l4.756 17.769c1.057 3.95-1.92 7.828-6.009 7.828H10.224c-4.09 0-7.066-3.878-6.01-7.828zM13.25 38a1.25 1.25 0 1 0 0 2.5h21.5a1.25 1.25 0 1 0 0-2.5z"/>`,
  'regular': `<path d="M14.707 6a5.94 5.94 0 0 0-5.736 4.403L4.215 28.172C3.158 32.122 6.135 36 10.224 36h27.552c4.09 0 7.066-3.878 6.01-7.828l-4.757-17.77A5.94 5.94 0 0 0 33.293 6zm-3.321 5.049a3.44 3.44 0 0 1 3.32-2.549h18.587a3.44 3.44 0 0 1 3.321 2.549l4.756 17.77a3.72 3.72 0 0 1-3.594 4.681H10.224a3.72 3.72 0 0 1-3.594-4.682zM13.249 38a1.25 1.25 0 1 0 0 2.5H34.75a1.25 1.25 0 1 0 0-2.5z"/>`
} as const;

export default function DeviceMeetingRoomIcon({ 
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

  const gradientId = 'devicemeetingroomicon_gradient';
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