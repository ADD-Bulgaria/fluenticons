
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M11.5 21.001v-1.93l-.196-.203c-1.739-1.8-1.739-4.704 0-6.504q.096-.1.195-.19V9.499H3v8.253l.005.184a3.25 3.25 0 0 0 3.245 3.066zM21.501 5.748v5.73a4.4 4.4 0 0 0-4.501.306 4.4 4.4 0 0 0-4-.523V2.499h5.251a3.25 3.25 0 0 1 3.245 3.066zM11.5 17.481a3.73 3.73 0 0 1 0-3.73c.143-.246.318-.48.523-.692a3.5 3.5 0 0 1 .976-.713 3.4 3.4 0 0 1 3.965.713l.036.038.036-.038q.104-.106.212-.202a3.4 3.4 0 0 1 4.252-.211q.252.18.477.413c1.364 1.412 1.364 3.702 0 5.114l-4.442 4.598a.74.74 0 0 1-1.07 0l-4.442-4.598a3.6 3.6 0 0 1-.523-.692M11.499 8l.001-5.5H6.25A3.25 3.25 0 0 0 3 5.747v2.251z"/>`,
  'regular': `<path d="M21.496 5.564a3.25 3.25 0 0 0-3.245-3.066h-12A3.25 3.25 0 0 0 3 5.748v12.004l.005.184a3.25 3.25 0 0 0 3.245 3.066h7.116L11.915 19.5H11.5v.001H6.25a1.75 1.75 0 0 1-1.743-1.589l-.007-.16V9.499l7-.001v2.675a4.5 4.5 0 0 1 1.5-.912V3.997l5.251.001a1.75 1.75 0 0 1 1.743 1.59l.007.16v5.28a4.4 4.4 0 0 1 1.5.45v-5.73zM6.251 3.998l5.249-.001v4.001l-7 .001V5.75a1.75 1.75 0 0 1 1.607-1.745zm15.726 9.06c1.364 1.413 1.364 3.703 0 5.115l-4.442 4.598a.74.74 0 0 1-1.07 0l-4.442-4.598a3.6 3.6 0 0 1-.523-.691 3.73 3.73 0 0 1 0-3.732 3.6 3.6 0 0 1 .523-.691 3.41 3.41 0 0 1 4.94 0l.037.038.036-.038A3.42 3.42 0 0 1 20 12.036a3.4 3.4 0 0 1 1.501.61q.252.181.476.413"/>`
} as const;

export default function BoardHeartIcon({ 
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

  const gradientId = 'boardhearticon_gradient';
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