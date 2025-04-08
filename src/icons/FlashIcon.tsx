
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12 2a2 2 0 0 0-1.897 1.368l-4 12A2 2 0 0 0 8 18h2.415l-2.288 8.825c-.67 2.587 2.64 4.28 4.345 2.222L25.54 13.276A2 2 0 0 0 24 10h-3.114l1.987-5.298A2 2 0 0 0 21 2z"/>`,
  'light': `<path d="M10.106 3.368A2 2 0 0 1 12.003 2h8.993a2 2 0 0 1 1.857 2.743L20.75 10h3.512c1.48 0 2.291 1.722 1.35 2.864L12.17 29.144a2.355 2.355 0 0 1-4.095-2.097L10.45 18H8.003a2 2 0 0 1-1.897-2.633zM12.003 3a1 1 0 0 0-.949.684l-4 12A1 1 0 0 0 8.003 17h3.096a.5.5 0 0 1 .483.627L9.043 27.3a1.355 1.355 0 0 0 2.357 1.207l13.44-16.28A.75.75 0 0 0 24.263 11h-4.25a.5.5 0 0 1-.464-.686l2.377-5.943A1 1 0 0 0 20.996 3z"/>`,
  'regular': `<path d="M10.103 3.368A2 2 0 0 1 12 2h9a2 2 0 0 1 1.873 2.702L20.886 10H24a2 2 0 0 1 1.54 3.276L12.473 29.047c-1.706 2.058-5.016.365-4.346-2.222L10.415 18H8a2 2 0 0 1-1.897-2.633zM12 4 8 16h3.708a1 1 0 0 1 .968 1.251l-2.613 10.076c-.134.517.528.856.87.444L24 12h-4.557a1 1 0 0 1-.936-1.351L21 4z"/>`
} as const;

export default function FlashIcon({ 
  variant = 'regular',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'filled' | 'light' | 'regular' }) {
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

  const gradientId = 'flashicon_gradient';
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