
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M20.245 4.002c.967 0 1.75.784 1.75 1.75v12.496a1.75 1.75 0 0 1-1.75 1.75h-7.247q-.13 0-.256-.019V4.021q.125-.018.256-.019zM10.998 4q.125 0 .245.017v15.961a2 2 0 0 1-.245.017H3.75A1.75 1.75 0 0 1 2 18.245V5.75C2 4.784 2.784 4 3.75 4zM9.243 15.499H7.74l-.102.007a.75.75 0 0 0 0 1.486l.102.007h1.502l.102-.007a.75.75 0 0 0 0-1.486zm6.996 0h-1.5l-.102.007a.75.75 0 0 0 0 1.486l.102.007h1.5l.101-.007a.75.75 0 0 0 0-1.486z"/>`,
  'regular': `<path d="m12.748 4-.001.002h7.498c.967 0 1.75.784 1.75 1.75v12.496a1.75 1.75 0 0 1-1.75 1.75h-8.997l-.001-.003H3.75A1.75 1.75 0 0 1 2 18.245V5.75C2 4.784 2.784 4 3.75 4zm7.497 1.502h-7.497v12.996h7.497a.25.25 0 0 0 .25-.25V5.752a.25.25 0 0 0-.25-.25M11.248 5.5H3.75a.25.25 0 0 0-.25.25v12.495c0 .138.112.25.25.25h7.498zm3.49 9.999h1.5a.75.75 0 0 1 .102 1.493l-.101.007h-1.5a.75.75 0 0 1-.102-1.493zh1.5zm-6.997 0h1.502a.75.75 0 0 1 .102 1.493l-.102.007H7.74a.75.75 0 0 1-.102-1.493zh1.502z"/>`
} as const;

export default function DualScreenIcon({ 
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

  const gradientId = 'dualscreenicon_gradient';
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