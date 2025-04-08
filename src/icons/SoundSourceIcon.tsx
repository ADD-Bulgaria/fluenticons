
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M13.327 15.747a1 1 0 0 1 1.323-.02l.09.087 7.74 8.513a1 1 0 0 1-.624 1.666L21.74 26H6.261a1 1 0 0 1-.819-1.575l.079-.098 7.74-8.513a1 1 0 0 1 .066-.067M14 2c7.18 0 13 5.82 13 13a12.95 12.95 0 0 1-3.218 8.562l-.091-.125-.102-.119-.809-.89A11.45 11.45 0 0 0 25.5 15c0-6.351-5.149-11.5-11.5-11.5S2.5 8.649 2.5 15c0 2.831 1.023 5.424 2.72 7.427l-.81.891a1.5 1.5 0 0 0-.183.256A12.96 12.96 0 0 1 1 15C1 7.82 6.82 2 14 2m0 4a9 9 0 0 1 7.08 14.557l-1.026-1.128a7.5 7.5 0 1 0-12.107 0L6.92 20.557A9 9 0 0 1 14 6m0 4a5 5 0 0 1 4.319 7.521l-1.08-1.19a3.5 3.5 0 1 0-6.476 0L9.68 17.52A5 5 0 0 1 14 10"/>`,
  'regular': `<path d="m14.65 15.726.09.088 7.74 8.513a1 1 0 0 1-.624 1.666L21.74 26H6.261a1 1 0 0 1-.819-1.575l.079-.098 7.74-8.513a1 1 0 0 1 1.39-.088M14 17.23 7.39 24.5h13.22zM14 2c7.18 0 13 5.82 13 13a12.95 12.95 0 0 1-3.218 8.562l-.091-.125-.102-.119-.809-.89A11.45 11.45 0 0 0 25.5 15c0-6.351-5.149-11.5-11.5-11.5S2.5 8.649 2.5 15c0 2.831 1.023 5.424 2.72 7.427l-.81.891a1.5 1.5 0 0 0-.183.256A12.96 12.96 0 0 1 1 15C1 7.82 6.82 2 14 2m0 4a9 9 0 0 1 7.08 14.557l-1.026-1.128a7.5 7.5 0 1 0-12.107 0L6.92 20.557A9 9 0 0 1 14 6m0 4a5 5 0 0 1 4.319 7.521l-1.08-1.19a3.5 3.5 0 1 0-6.476 0L9.68 17.52A5 5 0 0 1 14 10"/>`
} as const;

export default function SoundSourceIcon({ 
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
        viewBox="0 0 28 28"
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

  const gradientId = 'soundsourceicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 28"
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