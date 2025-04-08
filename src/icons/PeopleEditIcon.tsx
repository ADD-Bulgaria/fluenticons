
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M16 9.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0M27 11a4 4 0 1 1-8 0 4 4 0 0 1 8 0M2 20a3 3 0 0 1 3-3h11a3 3 0 0 1 3 3v.15s0 1.179-.769 2.478l-2.006 2.023C14.97 25.433 13.147 26 10.5 26 2 26 2 20.15 2 20.15zm27.644 1.424-8.61 8.543a2.8 2.8 0 0 1-1.269.721l-3.02.778a1 1 0 0 1-1.216-1.22l.79-3.05a2.66 2.66 0 0 1 .686-1.206l8.567-8.64a2.88 2.88 0 0 1 4.144.057 2.88 2.88 0 0 1-.072 4.017"/>`,
  'light': `<path d="M10.5 5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9M5 9.5a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0M23 8a3 3 0 1 0 0 6 3 3 0 0 0 0-6m-4 3a4 4 0 1 1 8 0 4 4 0 0 1-8 0M2 20a3 3 0 0 1 3-3h11a3 3 0 0 1 3 3c0 .739-.183 1.652-.684 2.542l-2.132 2.15C14.873 25.483 13.032 26 10.5 26c-3.34 0-5.476-.9-6.781-2.137C2.417 22.63 2 21.116 2 20m3-2a2 2 0 0 0-2 2c0 .884.333 2.12 1.406 3.137C5.476 24.151 7.34 25 10.5 25s5.024-.85 6.094-1.863C17.667 22.12 18 20.884 18 20a2 2 0 0 0-2-2zm24.644 3.424-8.61 8.543a2.8 2.8 0 0 1-1.269.721l-3.02.778a1 1 0 0 1-1.216-1.22l.79-3.05a2.66 2.66 0 0 1 .686-1.206l8.567-8.64a2.88 2.88 0 0 1 4.144.057 2.88 2.88 0 0 1-.072 4.017"/>`,
  'regular': `<path d="M10.5 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7M5 9.5a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0M23 9a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-4 2a4 4 0 1 1 8 0 4 4 0 0 1-8 0M5 17a3 3 0 0 0-3 3v.226l.003.067q.004.081.018.212c.019.173.056.408.128.686a5.55 5.55 0 0 0 1 2.017C4.319 24.71 6.52 26 10.5 26c2.593 0 4.431-.547 5.72-1.344l2.054-2.071a5.5 5.5 0 0 0 .577-1.394 5 5 0 0 0 .146-.898l.003-.067V20a3 3 0 0 0-3-3zm-1 3.19V20a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v.19q0 .026-.009.094c-.01.09-.031.23-.076.404-.09.348-.273.818-.641 1.291C15.569 22.883 14.02 24 10.5 24s-5.07-1.117-5.774-2.02a3.6 3.6 0 0 1-.64-1.292A3 3 0 0 1 4 20.19m25.644 1.234-8.61 8.543a2.8 2.8 0 0 1-1.269.721l-3.02.778a1 1 0 0 1-1.216-1.22l.79-3.05a2.66 2.66 0 0 1 .686-1.206l8.567-8.64a2.88 2.88 0 0 1 4.144.057 2.88 2.88 0 0 1-.072 4.017"/>`
} as const;

export default function PeopleEditIcon({ 
  variant = 'regular',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'filled' | 'light' | 'regular' }) {
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

  const gradientId = 'peopleediticon_gradient';
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