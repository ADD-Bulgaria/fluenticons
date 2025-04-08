
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M8.972 10.403A5.94 5.94 0 0 1 14.708 6h18.586a5.94 5.94 0 0 1 5.736 4.403l4.755 17.769c1.057 3.95-1.92 7.828-6.009 7.828H21V22.75A5.75 5.75 0 0 0 15.25 17h-7.5q-.28 0-.55.026zM21 40.25q0 .126-.005.25H34.75a1.25 1.25 0 1 0 0-2.5H21zM11.5 29a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m-3.75-7.5c-.69 0-1.25.56-1.25 1.25v17.5c0 .69.56 1.25 1.25 1.25h7.5c.69 0 1.25-.56 1.25-1.25v-17.5c0-.69-.56-1.25-1.25-1.25zM4 22.75A3.75 3.75 0 0 1 7.75 19h7.5A3.75 3.75 0 0 1 19 22.75v17.5A3.75 3.75 0 0 1 15.25 44h-7.5A3.75 3.75 0 0 1 4 40.25z"/>`,
  'regular': `<path d="M14.708 6a5.94 5.94 0 0 0-5.736 4.403l-1.773 6.623Q7.471 17 7.75 17h2.045l1.593-5.951a3.44 3.44 0 0 1 3.32-2.549h18.587a3.44 3.44 0 0 1 3.32 2.549l4.756 17.77a3.72 3.72 0 0 1-3.594 4.681H21V36h16.776c4.09 0 7.066-3.878 6.01-7.828l-4.756-17.77A5.94 5.94 0 0 0 33.294 6zM34.75 40.5H20.995q.005-.124.005-.25V38h13.751a1.25 1.25 0 0 1 0 2.5M11.501 29a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M4 22.75A3.75 3.75 0 0 1 7.75 19h7.5A3.75 3.75 0 0 1 19 22.75v17.5A3.75 3.75 0 0 1 15.25 44h-7.5A3.75 3.75 0 0 1 4 40.25zm3.75-1.25c-.69 0-1.25.56-1.25 1.25v17.5c0 .69.56 1.25 1.25 1.25h7.5c.69 0 1.25-.56 1.25-1.25v-17.5c0-.69-.56-1.25-1.25-1.25z"/>`
} as const;

export default function DeviceMeetingRoomRemoteIcon({ 
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

  const gradientId = 'devicemeetingroomremoteicon_gradient';
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