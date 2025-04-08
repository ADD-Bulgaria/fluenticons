
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M2 9.25A7.25 7.25 0 0 1 9.25 2h3.5a3.25 3.25 0 0 1 3 2h-5.5A6.25 6.25 0 0 0 4 10.25v5.5a3.25 3.25 0 0 1-2-3zm3 1C5 7.35 7.35 5 10.25 5h5.5a3.25 3.25 0 0 1 3 2h-7.5A4.25 4.25 0 0 0 7 11.25v7.5a3.25 3.25 0 0 1-2-3zM11.25 8A3.25 3.25 0 0 0 8 11.25v7.5A3.25 3.25 0 0 0 11.25 22h7.5A3.25 3.25 0 0 0 22 18.75v-7.5A3.25 3.25 0 0 0 18.75 8z"/>`,
  'regular': `<path d="M2 9.25A7.25 7.25 0 0 1 9.25 2h3.5a3.25 3.25 0 0 1 3 2h-1.775c-.316-.31-.748-.5-1.225-.5h-3.5A5.75 5.75 0 0 0 3.5 9.25v3.5c0 .477.19.91.5 1.225v1.775a3.25 3.25 0 0 1-2-3zm3 1C5 7.35 7.35 5 10.25 5h5.5a3.25 3.25 0 0 1 3 2h-1.775c-.316-.31-.748-.5-1.225-.5h-5.5a3.75 3.75 0 0 0-3.75 3.75v5.5c0 .477.19.91.5 1.225v1.775a3.25 3.25 0 0 1-2-3zM11.25 8A3.25 3.25 0 0 0 8 11.25v7.5A3.25 3.25 0 0 0 11.25 22h7.5A3.25 3.25 0 0 0 22 18.75v-7.5A3.25 3.25 0 0 0 18.75 8zM9.5 11.25c0-.966.784-1.75 1.75-1.75h7.5c.966 0 1.75.784 1.75 1.75v7.5a1.75 1.75 0 0 1-1.75 1.75h-7.5a1.75 1.75 0 0 1-1.75-1.75z"/>`
} as const;

export default function TabsIcon({ 
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

  const gradientId = 'tabsicon_gradient';
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