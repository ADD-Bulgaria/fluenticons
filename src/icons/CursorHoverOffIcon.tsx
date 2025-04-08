
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="m36.108 37.876 5.758 5.758a1.25 1.25 0 0 0 1.768-1.768l-37.5-37.5a1.25 1.25 0 1 0-1.768 1.768l3.29 3.29A3.5 3.5 0 0 0 5.25 12.75v18.5a3.5 3.5 0 0 0 3.5 3.5H18v-13.5c0-.433.086-.852.245-1.238L20 21.769V42.75a1.25 1.25 0 0 0 2.285.7l4.961-7.333a.75.75 0 0 1 .808-.306zM14.553 9.25l25.425 25.424a3.5 3.5 0 0 0 2.772-3.424v-18.5a3.5 3.5 0 0 0-3.5-3.5z"/>`,
  'regular': `<path d="m36.108 37.876 5.758 5.758a1.25 1.25 0 0 0 1.768-1.768l-5.996-5.996-.004-.004-15.5-15.5-.004-.004L6.134 4.366a1.25 1.25 0 1 0-1.768 1.768l2.331 2.331A4.75 4.75 0 0 0 4 12.75v18.5A4.75 4.75 0 0 0 8.75 36H18v-2.5H8.75a2.25 2.25 0 0 1-2.25-2.25v-18.5a2.25 2.25 0 0 1 2.232-2.25L20 21.768V42.75a1.25 1.25 0 0 0 2.285.7l4.961-7.333a.75.75 0 0 1 .808-.306zm-3.47-3.471-3.963-1.016a3.25 3.25 0 0 0-3.5 1.327L22.5 38.671V24.268zM13.302 8l2.5 2.5H39.25a2.25 2.25 0 0 1 2.25 2.25v18.5a2.25 2.25 0 0 1-2.25 2.25h-.447l2.176 2.176A4.75 4.75 0 0 0 44 31.25v-18.5A4.75 4.75 0 0 0 39.25 8z"/>`
} as const;

export default function CursorHoverOffIcon({ 
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
        viewBox="0 0 48 48"
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

  const gradientId = 'cursorhoverofficon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
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