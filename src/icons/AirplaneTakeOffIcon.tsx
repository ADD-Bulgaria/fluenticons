
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="m10.523 4.41 1.87 1.515c-.19.205-.357.398-.498.567-.124.15-.238.198-.294.21l-3.463.722-.382-.682C7.068 5.514 7.956 4 9.363 4c.422 0 .832.145 1.16.41m6.17.093c2.237-.173 3.909 1.243 4.854 2.326.489.56.587 1.268.378 1.883a2.14 2.14 0 0 1-1.342 1.32l-5.371 1.852-3.236 4.315a2.004 2.004 0 0 1-3.456-1.966L9.028 13l-3.301.635A2.294 2.294 0 0 1 3 11.382v-3.69a1.691 1.691 0 0 1 3.176-.81l.966 1.77 4.663-.97c.314-.066.617-.26.86-.551.37-.447.929-1.055 1.598-1.571.66-.508 1.5-.986 2.43-1.057M3.75 19.5a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5z"/>`,
  'regular': `<path d="m8.316 8.408-.772-1.127C6.59 5.89 7.587 4 9.274 4c.48 0 .945.165 1.318.467l2.581 2.09a9.5 9.5 0 0 1 1.09-.997c.66-.508 1.5-.986 2.43-1.057 2.237-.173 3.909 1.243 4.854 2.326.489.56.587 1.268.378 1.883a2.14 2.14 0 0 1-1.342 1.32l-5.371 1.852-3.162 4.217a2.249 2.249 0 0 1-4.006-1.781l.251-1.284-2.53.547A2.283 2.283 0 0 1 3 11.35V7.69a1.691 1.691 0 0 1 3.176-.81l.966 1.772zm.465-1.974 1.126 1.643 1.898-.396q.136-.029.266-.087L9.65 5.633a.597.597 0 0 0-.868.8m8.027-.436c-.507.04-1.068.317-1.629.75a9 9 0 0 0-1.36 1.34c-.42.507-1.006.915-1.708 1.062l-5.208 1.085a.75.75 0 0 1-.811-.375L4.859 7.6a.191.191 0 0 0-.359.092v3.659c0 .499.46.87.949.765l3.643-.786a.75.75 0 0 1 .894.877l-.47 2.4a.749.749 0 0 0 1.334.594l3.3-4.4a.75.75 0 0 1 .355-.26l5.589-1.927a.64.64 0 0 0 .41-.385.4.4 0 0 0-.087-.413c-.853-.977-2.099-1.934-3.61-1.818M3.75 19.5a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5z"/>`
} as const;

export default function AirplaneTakeOffIcon({ 
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

  const gradientId = 'airplanetakeofficon_gradient';
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