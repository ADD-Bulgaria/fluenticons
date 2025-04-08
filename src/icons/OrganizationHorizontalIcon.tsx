
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M5.748 16.002A3.752 3.752 0 1 1 9.426 11.5h2.072V8.25A2.25 2.25 0 0 1 13.748 6h.825a3.753 3.753 0 1 1 0 1.5h-.825a.75.75 0 0 0-.75.75v8c0 .414.336.75.75.75h.825a3.753 3.753 0 1 1 0 1.5h-.825a2.25 2.25 0 0 1-2.25-2.25V13H9.426a3.754 3.754 0 0 1-3.678 3.002"/>`,
  'regular': `<path d="M1.996 12.25a3.752 3.752 0 0 0 7.43.75h2.072v3.25a2.25 2.25 0 0 0 2.25 2.25h.826a3.754 3.754 0 0 0 7.429-.752 3.752 3.752 0 0 0-7.43-.748h-.825a.75.75 0 0 1-.75-.75v-8a.75.75 0 0 1 .75-.75h.826a3.754 3.754 0 0 0 7.429-.752A3.752 3.752 0 0 0 14.573 6h-.825a2.25 2.25 0 0 0-2.25 2.25v3.25H9.426a3.754 3.754 0 0 0-7.43.75m3.752 2.252a2.252 2.252 0 1 1 0-4.504 2.252 2.252 0 0 1 0 4.504M18.251 20a2.252 2.252 0 1 1 0-4.504 2.252 2.252 0 0 1 0 4.504M15.998 6.748a2.252 2.252 0 1 1 4.505 0 2.252 2.252 0 0 1-4.505 0"/>`
} as const;

export default function OrganizationHorizontalIcon({ 
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

  const gradientId = 'organizationhorizontalicon_gradient';
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