
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M17 5h-.5A1.5 1.5 0 0 0 15 6.5v5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 22.5 5H22V4a2.5 2.5 0 0 0-5 0zm1.5-1a1 1 0 1 1 2 0v1h-2zm2 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-7.502-2.997h1.051Q14 6.244 14 6.5v5a2.5 2.5 0 0 0 2.5 2.5h5.495v6.249a1.75 1.75 0 0 1-1.75 1.75h-7.247q-.13 0-.256-.019V6.022q.125-.018.256-.019m3.24 11.497h-1.5l-.101.007a.75.75 0 0 0 0 1.486l.102.007h1.5l.101-.007a.75.75 0 0 0 0-1.486zM10.999 6q.125 0 .245.017V21.98a2 2 0 0 1-.245.017H3.75A1.75 1.75 0 0 1 2 20.246V7.751c0-.967.784-1.75 1.75-1.75zM9.243 17.5H7.74l-.102.007a.75.75 0 0 0 0 1.486L7.74 19h1.502l.102-.007a.75.75 0 0 0 0-1.486z"/>`,
  'regular': `<path d="M17 5V4a2.5 2.5 0 0 1 5 0v1h.5A1.5 1.5 0 0 1 24 6.5v5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5v-5A1.497 1.497 0 0 1 16.5 5zm1.5-1v1h2V4a1 1 0 1 0-2 0m1.995 4.904a1 1 0 1 0 0 .195 1 1 0 0 0 0-.195M7.742 17.5h1.502a.75.75 0 0 1 .102 1.493L9.243 19H7.74a.75.75 0 0 1-.102-1.493zm5.006-11.497h1.302q-.048.241-.049.497v1.003h-1.252V20.5h7.497a.25.25 0 0 0 .25-.25V14h1.5v6.249a1.75 1.75 0 0 1-1.75 1.75h-8.997l-.001-.003H3.75A1.75 1.75 0 0 1 2 20.246V7.751c0-.967.784-1.75 1.75-1.75h8.998zm-1.5 1.498H3.75a.25.25 0 0 0-.25.25v12.495c0 .138.112.25.25.25h7.498zM14.74 17.5h1.5a.75.75 0 0 1 .101 1.493L16.24 19h-1.5a.75.75 0 0 1-.102-1.493z"/>`
} as const;

export default function DualScreenLockIcon({ 
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

  const gradientId = 'dualscreenlockicon_gradient';
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