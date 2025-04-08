
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M2 8.5a6.5 6.5 0 0 0 4.943 6.312 8 8 0 0 1 1.716-4.806 2 2 0 0 0-1.68.694.75.75 0 0 1-1.14-.975 3.5 3.5 0 0 1 4.023-.95 8 8 0 0 1 4.95-1.832A6.5 6.5 0 0 0 2 8.5m5.5-2a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M22 15a7 7 0 1 1-14 0 7 7 0 0 1 14 0m-8.5-1.5a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4.471 3.218a.625.625 0 0 0-.88.07 2.75 2.75 0 0 1-4.178.003.625.625 0 1 0-.948.814 3.998 3.998 0 0 0 6.075-.006.625.625 0 0 0-.069-.88M17.5 14.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>`,
  'regular': `<path d="M8.5 2a6.5 6.5 0 0 1 6.312 4.943 8 8 0 0 0-1.506.171 5 5 0 1 0-6.191 6.191 8 8 0 0 0-.172 1.507A6.5 6.5 0 0 1 8.5 2m.16 8.006a8 8 0 0 1 1.202-1.23 3.5 3.5 0 0 0-4.022.95.75.75 0 1 0 1.14.974 2 2 0 0 1 1.68-.694M7.5 6.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m1 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2m5.458 2.042a.75.75 0 0 1 .082 1.058 4 4 0 0 1-6.075.005.75.75 0 0 1 1.138-.977 2.5 2.5 0 0 0 3.797-.003.75.75 0 0 1 1.058-.083M17.5 14.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M15 22a7 7 0 1 0 0-14 7 7 0 0 0 0 14m0-1.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11"/>`
} as const;

export default function EmojiMultipleIcon({ 
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

  const gradientId = 'emojimultipleicon_gradient';
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