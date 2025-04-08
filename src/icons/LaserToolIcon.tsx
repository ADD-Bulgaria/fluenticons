
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M3.5 2a.5.5 0 0 0-.5.5V5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V2.5a.5.5 0 0 0-.5-.5zm7 8h4A1.5 1.5 0 0 0 16 8.5V8H4v.5A1.5 1.5 0 0 0 5.5 10h4v2.5a.5.5 0 0 0 1 0zM5 14.5a.5.5 0 0 1 .5-.5H7a.5.5 0 0 1 0 1H5.5a.5.5 0 0 1-.5-.5m8-.5a.5.5 0 0 0 0 1h1.5a.5.5 0 0 0 0-1zm-2.5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 2a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0zm-1.646-1.354a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708-.708l1.5-1.5a.5.5 0 0 1 .708 0m2.292.708a.5.5 0 0 1 .708-.708l1.5 1.5a.5.5 0 0 1-.708.708z"/>`,
  'regular': `<path d="M4 2.5a.5.5 0 0 0-1 0V5a2 2 0 0 0 1 1.732V7.5A1.5 1.5 0 0 0 5.5 9h4v3.5a.5.5 0 0 0 1 0V9h4A1.5 1.5 0 0 0 16 7.5v-.768A2 2 0 0 0 17 5V2.5a.5.5 0 0 0-1 0V5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zM5 7h10v.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5zm.5 7a.5.5 0 0 0 0 1H7a.5.5 0 0 0 0-1zm7 .5a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H13a.5.5 0 0 1-.5-.5M10 15a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m0 1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5m-1.146-.146a.5.5 0 0 0-.708-.708l-1.5 1.5a.5.5 0 0 0 .708.708zm2.292-.708a.5.5 0 0 0 0 .708l1.5 1.5a.5.5 0 0 0 .708-.708l-1.5-1.5a.5.5 0 0 0-.708 0"/>`
} as const;

export default function LaserToolIcon({ 
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

  const gradientId = 'lasertoolicon_gradient';
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