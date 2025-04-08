
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6.008 5a3.25 3.25 0 0 1 3.24-3h8.002A4.75 4.75 0 0 1 22 6.75v8a3.25 3.25 0 0 1-3 3.24h-.002V9.25A4.25 4.25 0 0 0 14.748 5zM5.25 6A3.25 3.25 0 0 0 2 9.25v7.25h7.25a2.25 2.25 0 0 1 2.25 2.25V22h3.25A3.25 3.25 0 0 0 18 18.75v-9.5A3.25 3.25 0 0 0 14.75 6zM2 18.75V18h7.25a.75.75 0 0 1 .75.75V22H5.25A3.25 3.25 0 0 1 2 18.75"/>`,
  'regular': `<path d="M6.01 5h1.508A1.75 1.75 0 0 1 9.25 3.5h8a3.25 3.25 0 0 1 3.25 3.25v8a1.75 1.75 0 0 1-1.5 1.732v1.509a3.25 3.25 0 0 0 3-3.241v-8A4.75 4.75 0 0 0 17.25 2h-8a3.25 3.25 0 0 0-3.24 3M2 9.25A3.25 3.25 0 0 1 5.25 6h9.5A3.25 3.25 0 0 1 18 9.25v9.5A3.25 3.25 0 0 1 14.75 22h-9.5A3.25 3.25 0 0 1 2 18.75zM5.25 7.5A1.75 1.75 0 0 0 3.5 9.25v7.25h5.75a2.25 2.25 0 0 1 2.25 2.25v1.75h3.25a1.75 1.75 0 0 0 1.75-1.75v-9.5a1.75 1.75 0 0 0-1.75-1.75zm4.75 13v-1.75a.75.75 0 0 0-.75-.75H3.5v.75c0 .966.784 1.75 1.75 1.75z"/>`
} as const;

export default function TabDesktopMultipleBottomIcon({ 
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

  const gradientId = 'tabdesktopmultiplebottomicon_gradient';
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