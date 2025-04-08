
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M3 6.25A3.25 3.25 0 0 1 6.25 3h9.5A3.25 3.25 0 0 1 19 6.25v9.5A3.25 3.25 0 0 1 15.75 19h-9.5A3.25 3.25 0 0 1 3 15.75zm12.28 2.78a.75.75 0 0 0-1.06-1.06L10 12.19l-1.97-1.97a.75.75 0 1 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0zM6.5 20a3.25 3.25 0 0 0 2.741 1.5h7.005a5.254 5.254 0 0 0 5.254-5.254V9.241A3.25 3.25 0 0 0 19.999 6.5v9.746A3.753 3.753 0 0 1 16.246 20z"/>`,
  'regular': `<path d="M15.28 9.03a.75.75 0 0 0-1.06-1.06L10 12.19l-1.97-1.97a.75.75 0 1 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0zM3 6.25A3.25 3.25 0 0 1 6.25 3h9.5A3.25 3.25 0 0 1 19 6.25v9.5A3.25 3.25 0 0 1 15.75 19h-9.5A3.25 3.25 0 0 1 3 15.75zM6.25 4.5A1.75 1.75 0 0 0 4.5 6.25v9.5c0 .966.784 1.75 1.75 1.75h9.5a1.75 1.75 0 0 0 1.75-1.75v-9.5a1.75 1.75 0 0 0-1.75-1.75zm2.991 17A3.25 3.25 0 0 1 6.5 19.999h9.746A3.753 3.753 0 0 0 20 16.246V6.5a3.25 3.25 0 0 1 1.5 2.741v7.005a5.254 5.254 0 0 1-5.254 5.254z"/>`
} as const;

export default function SelectAllOnIcon({ 
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

  const gradientId = 'selectallonicon_gradient';
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