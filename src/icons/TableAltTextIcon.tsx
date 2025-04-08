
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M28.5 14.5H22V12h7v2.53q-.245-.03-.5-.03M20 12v2.5h-1.5a4 4 0 0 0-4 4V20H12v-8zm-8 10h2.5v5.5a4 4 0 0 0 .29 1.5H12zm10-12h7V7.5A4.5 4.5 0 0 0 24.5 3H22zm-2-7v7h-8V3zM10 20v-8H3v8zm0-10V3H7.5A4.5 4.5 0 0 0 3 7.5V10zm0 19v-7H3v2.5A4.5 4.5 0 0 0 7.5 29zm8.5-13a2.5 2.5 0 0 0-2.5 2.5v9a2.5 2.5 0 0 0 2.5 2.5h10a2.5 2.5 0 0 0 2.5-2.5v-9a2.5 2.5 0 0 0-2.5-2.5zm.75 5.5a.75.75 0 0 1 0-1.5h8.5a.75.75 0 0 1 0 1.5zm-.75 3.75a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1-.75-.75"/>`,
  'light': `<path d="M3 7.5A4.5 4.5 0 0 1 7.5 3h17A4.5 4.5 0 0 1 29 7.5v7.03q-.245-.03-.5-.03H28V12h-7v2.5h-1V12h-8v8h2.5v1H12v7h2.53q.069.526.26 1H7.5A4.5 4.5 0 0 1 3 24.5zM4 21v3.5A3.5 3.5 0 0 0 7.5 28H11v-7zm7-1v-8H4v8zM7.5 4A3.5 3.5 0 0 0 4 7.5V11h7V4zM20 4h-8v7h8zm4.5 0H21v7h7V7.5A3.5 3.5 0 0 0 24.5 4m-6 12a2.5 2.5 0 0 0-2.5 2.5v9a2.5 2.5 0 0 0 2.5 2.5h10a2.5 2.5 0 0 0 2.5-2.5v-9a2.5 2.5 0 0 0-2.5-2.5zm.75 5.5a.75.75 0 0 1 0-1.5h8.5a.75.75 0 0 1 0 1.5zm-.75 3.75a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1-.75-.75"/>`,
  'regular': `<path d="M3 7.5A4.5 4.5 0 0 1 7.5 3h17A4.5 4.5 0 0 1 29 7.5v7.03q-.245-.03-.5-.03H27V13h-6v1.5h-2V13h-6v6h1.5v2H13v6h1.5v.5a4 4 0 0 0 .29 1.5H7.5A4.5 4.5 0 0 1 3 24.5zM7.5 5A2.5 2.5 0 0 0 5 7.5V11h6V5zM5 13v6h6v-6zm16-2h6V7.5A2.5 2.5 0 0 0 24.5 5H21zm-2-6h-6v6h6zM5 21v3.5A2.5 2.5 0 0 0 7.5 27H11v-6zm13.5-5a2.5 2.5 0 0 0-2.5 2.5v9a2.5 2.5 0 0 0 2.5 2.5h10a2.5 2.5 0 0 0 2.5-2.5v-9a2.5 2.5 0 0 0-2.5-2.5zm.75 5.5a.75.75 0 0 1 0-1.5h8.5a.75.75 0 0 1 0 1.5zm-.75 3.75a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1-.75-.75"/>`
} as const;

export default function TableAltTextIcon({ 
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

  const gradientId = 'tablealttexticon_gradient';
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