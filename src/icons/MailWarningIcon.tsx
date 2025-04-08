
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="m16.161 1.83-3.997 7.998A1.5 1.5 0 0 0 13.507 12h7.994a1.5 1.5 0 0 0 1.343-2.172L18.847 1.83c-.553-1.107-2.133-1.107-2.686 0m1.843 2.666v3.001a.5.5 0 0 1-1 0V4.496a.5.5 0 0 1 1 0m-.5 5.503a.5.5 0 1 1 0-1.001.5.5 0 0 1 0 1M21.5 13h-7.884l-1.268.664a.75.75 0 0 1-.696 0L2 8.608v8.142l.005.184A3.25 3.25 0 0 0 5.25 20h13.5l.184-.005A3.25 3.25 0 0 0 22 16.75v-3.799q-.241.048-.5.049M5.25 4h8.71l-2.69 5.38a2.48 2.48 0 0 0 .125 2.456L2.016 6.924a3.25 3.25 0 0 1 3.048-2.919z"/>`,
  'regular': `<path d="m16.161 1.83-3.997 7.998A1.5 1.5 0 0 0 13.507 12h7.994a1.5 1.5 0 0 0 1.343-2.172L18.847 1.83c-.553-1.107-2.133-1.107-2.686 0m1.843 2.666v3.001a.5.5 0 0 1-1 0V4.496a.5.5 0 0 1 1 0m-.5 5.503a.5.5 0 1 1 0-1.001.5.5 0 0 1 0 1M5.25 4h8.71l-.75 1.5H5.25a1.75 1.75 0 0 0-1.744 1.606L3.5 7.25v.429l7.893 4.154A2.48 2.48 0 0 0 13.508 13h.102l-1.26.664a.75.75 0 0 1-.603.042l-.096-.042L3.5 9.374v7.376a1.75 1.75 0 0 0 1.606 1.744l.144.006h13.5a1.75 1.75 0 0 0 1.744-1.607l.006-.143V13h1q.259 0 .5-.049v3.799a3.25 3.25 0 0 1-3.066 3.245L18.75 20H5.25a3.25 3.25 0 0 1-3.245-3.066L2 16.75v-9.5a3.25 3.25 0 0 1 3.066-3.245z"/>`
} as const;

export default function MailWarningIcon({ 
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

  const gradientId = 'mailwarningicon_gradient';
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