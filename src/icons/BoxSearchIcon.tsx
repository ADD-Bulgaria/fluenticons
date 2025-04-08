
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M13.409 2.512a3.75 3.75 0 0 0-2.818 0l-2.19.888 9.592 3.73 3.374-1.303a1.8 1.8 0 0 0-.46-.275zM22 7.19l-9.25 3.574v10.923q.336-.068.659-.199l7.498-3.04A1.75 1.75 0 0 0 22 16.826zm-10.75 3.574v10.01L9.425 18.95A5.5 5.5 0 0 0 2 11.6V7.19zM2.633 5.827 12 9.446l3.917-1.514-9.543-3.71-3.281 1.33q-.256.104-.46.275M4.5 21a4.5 4.5 0 0 0 2.607-.832L9.72 22.78a.75.75 0 1 0 1.06-1.06l-2.612-2.613A4.5 4.5 0 1 0 4.5 21m0-1.5a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>`,
  'regular': `<path d="M13.409 2.512a3.75 3.75 0 0 0-2.818 0l-7.498 3.04A1.75 1.75 0 0 0 2 7.174V11.6c.466-.238.97-.412 1.5-.51V7.75l7.75 3.014v10.012l.237.238c.217.216.365.475.444.75a3.75 3.75 0 0 0 1.478-.275l7.498-3.04A1.75 1.75 0 0 0 22 16.826V7.175a1.75 1.75 0 0 0-1.093-1.622zm-2.254 1.39a2.25 2.25 0 0 1 1.69 0l6.592 2.672-2.67 1.031-7.526-2.927zM7.215 5.5l7.476 2.908-2.69 1.038-7.41-2.882zm13.129 11.56-7.499 3.04-.095.035v-9.37l7.75-2.992v9.054a.25.25 0 0 1-.156.232M4.5 21a4.5 4.5 0 0 0 2.607-.832L9.72 22.78a.75.75 0 1 0 1.06-1.06l-2.612-2.613A4.5 4.5 0 1 0 4.5 21m0-1.5a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>`
} as const;

export default function BoxSearchIcon({ 
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

  const gradientId = 'boxsearchicon_gradient';
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