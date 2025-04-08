
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M18.4 18H7.5A3.5 3.5 0 0 0 4 21.5v.5c0 2.393 1.523 4.417 3.685 5.793C9.859 29.177 12.802 30 16 30c1.133 0 2.235-.103 3.28-.298A7.49 7.49 0 0 1 16 23.5a7.48 7.48 0 0 1 2.4-5.5"/><path d="M18.4 18H7.5A3.5 3.5 0 0 0 4 21.5v.5c0 2.393 1.523 4.417 3.685 5.793C9.859 29.177 12.802 30 16 30c1.133 0 2.235-.103 3.28-.298A7.49 7.49 0 0 1 16 23.5a7.48 7.48 0 0 1 2.4-5.5"/><path fill-opacity=".5" d="M18.4 18H7.5A3.5 3.5 0 0 0 4 21.5v.5c0 2.393 1.523 4.417 3.685 5.793C9.859 29.177 12.802 30 16 30c1.133 0 2.235-.103 3.28-.298A7.49 7.49 0 0 1 16 23.5a7.48 7.48 0 0 1 2.4-5.5"/><path d="M16 16a7 7 0 1 0 0-14 7 7 0 0 0 0 14m.424 9.99c.263.748.64 1.442 1.113 2.06l10.512-10.513a7.5 7.5 0 0 0-2.058-1.113zM23.586 16H23.5a7.5 7.5 0 0 0-7.5 7.586zm5.877 2.951L18.951 29.463c.618.472 1.31.85 2.058 1.114l9.568-9.568a7.5 7.5 0 0 0-1.114-2.058M31 23.415 23.415 31h.085a7.5 7.5 0 0 0 7.5-7.585"/>`,
  'filled': `<path d="M23 9A7 7 0 1 1 9 9a7 7 0 0 1 14 0M4 21.5A3.5 3.5 0 0 1 7.5 18h8.876a8.96 8.96 0 0 0-1.876 5.5 8.97 8.97 0 0 0 2.732 6.459q-.608.04-1.232.041c-3.198 0-6.14-.823-8.315-2.207C5.523 26.417 4 24.393 4 22zm13.537 6.55a7.5 7.5 0 0 1-1.113-2.06l9.567-9.566c.747.263 1.44.64 2.058 1.113zM23.5 16h.085L16 23.587V23.5a7.5 7.5 0 0 1 7.5-7.5m-4.549 13.463 10.512-10.512c.472.618.85 1.31 1.113 2.058l-9.567 9.567a7.5 7.5 0 0 1-2.058-1.113M23.415 31 31 23.415v.085a7.5 7.5 0 0 1-7.585 7.5"/>`,
  'regular': `<path d="M16 16a7 7 0 1 0 0-14 7 7 0 0 0 0 14m0-12a5 5 0 1 1 0 10 5 5 0 0 1 0-10M4 21.5A3.5 3.5 0 0 1 7.5 18h8.876a9 9 0 0 0-1.17 2H7.5A1.5 1.5 0 0 0 6 21.5v.5c0 1.473.94 2.949 2.759 4.106 1.744 1.11 4.188 1.842 6.944 1.891a9 9 0 0 0 1.53 1.962q-.61.04-1.233.041c-3.198 0-6.14-.823-8.315-2.207C5.523 26.417 4 24.393 4 22zm13.537 6.55a7.5 7.5 0 0 1-1.113-2.06l9.567-9.566c.747.263 1.44.64 2.058 1.113zM23.5 16h.085L16 23.587V23.5a7.5 7.5 0 0 1 7.5-7.5m-4.549 13.463 10.512-10.512c.472.618.85 1.31 1.113 2.058l-9.567 9.567a7.5 7.5 0 0 1-2.058-1.113M23.415 31 31 23.415v.085a7.5 7.5 0 0 1-7.585 7.5"/>`
} as const;

export default function PersonTentativeIcon({ 
  variant = 'regular',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'color' | 'filled' | 'regular' }) {
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

  const gradientId = 'persontentativeicon_gradient';
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