
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M5 19h15.281S20 19.5 20 20s.281 1 .281 1H6a1 1 0 0 1-1-1z"/><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H18a2.5 2.5 0 0 1 2.5 2.5v14.25a.75.75 0 0 1-.75.75H5.5a1 1 0 0 0 1 1h13.25a.75.75 0 0 1 0 1.5H6.5A2.5 2.5 0 0 1 4 19.5z"/><path fill-opacity=".3" d="M4 4.5A2.5 2.5 0 0 1 6.5 2H18a2.5 2.5 0 0 1 2.5 2.5v14.25a.75.75 0 0 1-.75.75H5.5a1 1 0 0 0 1 1h13.25a.75.75 0 0 1 0 1.5H6.5A2.5 2.5 0 0 1 4 19.5z"/><path fill-opacity=".3" d="M4 4.5A2.5 2.5 0 0 1 6.5 2H18a2.5 2.5 0 0 1 2.5 2.5v14.25a.75.75 0 0 1-.75.75H5.5a1 1 0 0 0 1 1h13.25a.75.75 0 0 1 0 1.5H6.5A2.5 2.5 0 0 1 4 19.5z"/><path fill-opacity=".3" d="M4 4.5A2.5 2.5 0 0 1 6.5 2H18a2.5 2.5 0 0 1 2.5 2.5v14.25a.75.75 0 0 1-.75.75H5.5a1 1 0 0 0 1 1h13.25a.75.75 0 0 1 0 1.5H6.5A2.5 2.5 0 0 1 4 19.5z"/><path d="m10.542 8.608 1.1-2.23a.678.678 0 0 1 1.216 0l1.1 2.23 2.461.357c.556.08.778.764.376 1.157l-1.78 1.735.42 2.45a.678.678 0 0 1-.984.716l-2.201-1.157-2.2 1.157a.678.678 0 0 1-.985-.715l.42-2.45-1.78-1.736a.678.678 0 0 1 .376-1.157z"/>`,
  'filled': `<path d="M11.6 9.527a.68.68 0 0 1-.51.371l-1.454.212 1.052 1.025a.68.68 0 0 1 .195.6l-.249 1.448 1.3-.684a.68.68 0 0 1 .632 0l1.3.684-.249-1.448a.68.68 0 0 1 .195-.6l1.052-1.025-1.453-.212a.68.68 0 0 1-.51-.37L12.25 8.21zM4 4.5A2.5 2.5 0 0 1 6.5 2H18a2.5 2.5 0 0 1 2.5 2.5v14.25a.75.75 0 0 1-.75.75H5.5a1 1 0 0 0 1 1h13.25a.75.75 0 0 1 0 1.5H6.5A2.5 2.5 0 0 1 4 19.5zm6.542 4.108-2.46.357a.678.678 0 0 0-.377 1.157l1.78 1.735-.42 2.45a.678.678 0 0 0 .984.716l2.201-1.157 2.2 1.157a.678.678 0 0 0 .985-.715l-.42-2.45 1.78-1.736a.678.678 0 0 0-.376-1.157l-2.46-.357-1.1-2.23a.678.678 0 0 0-1.217 0z"/>`,
  'regular': `<path d="m10.542 8.608 1.1-2.23a.678.678 0 0 1 1.216 0l1.1 2.23 2.461.357c.556.08.778.764.376 1.157l-1.78 1.735.42 2.45a.678.678 0 0 1-.984.716l-2.201-1.157-2.2 1.157a.678.678 0 0 1-.985-.715l.42-2.45-1.78-1.736a.678.678 0 0 1 .376-1.157zm1.058.92a.68.68 0 0 1-.51.37l-1.454.212 1.052 1.025a.68.68 0 0 1 .195.6l-.249 1.448 1.3-.684a.68.68 0 0 1 .632 0l1.3.684-.249-1.448a.68.68 0 0 1 .195-.6l1.052-1.025-1.453-.212a.68.68 0 0 1-.51-.37L12.25 8.21zM6.5 2A2.5 2.5 0 0 0 4 4.5v15A2.5 2.5 0 0 0 6.5 22h13.25a.75.75 0 0 0 0-1.5H6.5a1 1 0 0 1-1-1h14.25a.75.75 0 0 0 .75-.75V4.5A2.5 2.5 0 0 0 18 2zM19 18H5.5V4.5a1 1 0 0 1 1-1H18a1 1 0 0 1 1 1z"/>`
} as const;

export default function BookStarIcon({ 
  variant = 'regular',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'color' | 'filled' | 'regular' }) {
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

  const gradientId = 'bookstaricon_gradient';
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