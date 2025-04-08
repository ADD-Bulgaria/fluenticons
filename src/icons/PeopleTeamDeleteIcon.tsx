
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M16 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8m-6-3.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m19 0a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0M9.377 13a3.98 3.98 0 0 0-.877 2.5V23c0 1.235.298 2.4.827 3.427A5 5 0 0 1 2 22v-6.5A2.5 2.5 0 0 1 4.5 13zM14 23c0-4.487 3.284-8.207 7.58-8.888A2.5 2.5 0 0 0 19.5 13h-7a2.5 2.5 0 0 0-2.5 2.5V23a6 6 0 0 0 6.286 5.993A8.97 8.97 0 0 1 14 23m8.623-10c.241.302.44.639.587 1.002a8.98 8.98 0 0 1 6.79 3.34V15.5a2.5 2.5 0 0 0-2.5-2.5zM23 15.5a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15m2.72 3.72L23 21.94l-2.72-2.72a.75.75 0 1 0-1.06 1.06L21.94 23l-2.72 2.72a.75.75 0 1 0 1.06 1.06L23 24.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L24.06 23l2.72-2.72a.75.75 0 1 0-1.06-1.06"/>`,
  'regular': `<path d="M16 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8m-2 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0m11.5-3a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7M24 7.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m-21 0a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0M6.5 6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M7 25c.61 0 1.177-.182 1.651-.495a7.5 7.5 0 0 0 .676 1.922A5 5 0 0 1 2 22v-6.5A2.5 2.5 0 0 1 4.5 13h4.877a4 4 0 0 0-.846 2H4.5a.5.5 0 0 0-.5.5V22a3 3 0 0 0 3 3m16.21-10.998a8.98 8.98 0 0 1 6.79 3.34V15.5a2.5 2.5 0 0 0-2.5-2.5h-4.877c.241.302.44.639.587 1.002M19.5 13c.867 0 1.63.441 2.08 1.111a9 9 0 0 0-2.707.889H12.5a.5.5 0 0 0-.5.5V23a4 4 0 0 0 2.855 3.834c.372.79.856 1.516 1.43 2.16Q16.144 29 16 29a6 6 0 0 1-6-6v-7.5a2.5 2.5 0 0 1 2.5-2.5zm3.5 2.5a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15m2.72 3.72L23 21.94l-2.72-2.72a.75.75 0 1 0-1.06 1.06L21.94 23l-2.72 2.72a.75.75 0 1 0 1.06 1.06L23 24.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L24.06 23l2.72-2.72a.75.75 0 1 0-1.06-1.06"/>`
} as const;

export default function PeopleTeamDeleteIcon({ 
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

  const gradientId = 'peopleteamdeleteicon_gradient';
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