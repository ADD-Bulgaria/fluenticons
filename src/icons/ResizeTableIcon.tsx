
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M5.25 2h5a.75.75 0 0 1 0 1.5h-5A1.75 1.75 0 0 0 3.5 5.25v2.963A3.75 3.75 0 0 0 2 9.2V5.25A3.25 3.25 0 0 1 5.25 2m10.537 18.5a3.75 3.75 0 0 1-.988 1.5h3.951A3.25 3.25 0 0 0 22 18.75v-5a.75.75 0 0 0-1.5 0v5a1.75 1.75 0 0 1-1.75 1.75zM21.25 11a.75.75 0 0 0 .75-.75v-5A3.25 3.25 0 0 0 18.75 2h-5a.75.75 0 0 0 0 1.5h5c.966 0 1.75.784 1.75 1.75v5c0 .414.336.75.75.75M7 9h3v3.5H7zm0 5h3v3.5H7zm4.5 0v3.5H15V14zM7 19h3v3H7zm4.5 0v3h.75A2.75 2.75 0 0 0 15 19.25V19zm0-10v3.5H15v-.75A2.75 2.75 0 0 0 12.25 9zm-6 0h-.75A2.75 2.75 0 0 0 2 11.75v.75h3.5zm0 5H2v3.5h3.5zm0 5H2v.25A2.75 2.75 0 0 0 4.75 22h.75z"/>`,
  'regular': `<path d="M5.25 2h5a.75.75 0 0 1 0 1.5h-5A1.75 1.75 0 0 0 3.5 5.25v3.126A4.3 4.3 0 0 0 2 9.51V5.25A3.25 3.25 0 0 1 5.25 2m10.374 18.5A4.3 4.3 0 0 1 14.49 22h4.261A3.25 3.25 0 0 0 22 18.75v-5a.75.75 0 0 0-1.5 0v5a1.75 1.75 0 0 1-1.75 1.75zM21.25 11a.75.75 0 0 0 .75-.75v-5A3.25 3.25 0 0 0 18.75 2h-5a.75.75 0 0 0 0 1.5h5c.966 0 1.75.784 1.75 1.75v5c0 .414.336.75.75.75m-16-2A3.25 3.25 0 0 0 2 12.25v6.5A3.25 3.25 0 0 0 5.25 22h6.5A3.25 3.25 0 0 0 15 18.75v-6.5A3.25 3.25 0 0 0 11.75 9zM3.5 12.25c0-.966.784-1.75 1.75-1.75H6V13H3.5zM6 14.5V17H3.5v-2.5zM7.5 17v-2.5h2V17zm3.5 0v-2.5h2.5V17zm-3.5 1.5h2v2h-2zm3.5 0h2.5v.25a1.75 1.75 0 0 1-1.75 1.75H11zm0-8h.75c.966 0 1.75.784 1.75 1.75V13H11zM9.5 13h-2v-2.5h2zM6 18.5v2h-.75a1.75 1.75 0 0 1-1.75-1.75v-.25z"/>`
} as const;

export default function ResizeTableIcon({ 
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

  const gradientId = 'resizetableicon_gradient';
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