
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M8.06 10.452c.041.14.096.324.143.448l.001-.001a.76.76 0 0 1 .301.601.75.75 0 0 1-.75.75c-.73 0-.939-.701-1.14-1.379C6.201 9.496 5.82 8.75 5.001 8.75h-.75v2.75c0 .2-.078.388-.22.53a.77.77 0 0 1-1.061 0 .74.74 0 0 1-.22-.53v-7a.75.75 0 0 1 .75-.75h2.25c.669.001 1.297.26 1.768.732a2.485 2.485 0 0 1 .344 3.097c-.198.312-.46.575-.77.771.454.631.778 1.335.966 2.098zM6.455 6.957c.187-.186.294-.443.294-.707a1.006 1.006 0 0 0-1.001-.999H4.25v2h1.5c.263-.001.52-.107.706-.294m7.195.918c.229.202.421.445.563.716h.001c.187.356.286.758.286 1.16a2.5 2.5 0 0 1-.732 1.768 2.5 2.5 0 0 1-1.768.732h-2.5a.75.75 0 0 1-.75-.75v-7a.75.75 0 0 1 .75-.75h2.25c.669.001 1.297.26 1.768.732.471.473.732 1.1.732 1.768a2.5 2.5 0 0 1-.6 1.624M10.25 5.251v2h1.5a1.006 1.006 0 0 0 1-1 1.003 1.003 0 0 0-1.001-1zm2.456 5.206c.187-.186.294-.443.294-.707a1.006 1.006 0 0 0-1.001-.999H10.25v2h1.749c.264-.001.521-.107.707-.294"/>`,
  'regular': `<path d="M13.279 7.9a2.244 2.244 0 0 0 .061-3.24A2.25 2.25 0 0 0 11.75 4H9.5a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5H12a2.252 2.252 0 0 0 1.992-3.294 2.25 2.25 0 0 0-.713-.806M13 6.25a1.25 1.25 0 0 1-1.25 1.25H10V5h1.75A1.25 1.25 0 0 1 13 6.25M12 11h-2V8.5h2a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 12 11m-4 .065a7 7 0 0 1-.185-.558A5.8 5.8 0 0 0 6.72 8.271 2.25 2.25 0 0 0 8 6.25 2.25 2.25 0 0 0 5.75 4H3.5a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 1 0v-3h1c1.07 0 1.488 1.087 1.854 2.3.2.672.365 1.2.9 1.2A.5.5 0 0 0 8 11.065M4 5h1.75A1.25 1.25 0 0 1 7 6.25 1.25 1.25 0 0 1 5.75 7.5H4z"/>`
} as const;

export default function CodeRbIcon({ 
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
        viewBox="0 0 16 16"
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

  const gradientId = 'coderbicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
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