
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M15.794 1.29a1 1 0 0 1 1.414 0l1.503 1.503a1 1 0 0 1 0 1.414L17.208 5.71a1 1 0 0 1-1.414 0L14.29 4.207a1 1 0 0 1 0-1.414zM5.5 17H7v-4H3v1.5A2.5 2.5 0 0 0 5.5 17M7 8v4H3V8zm5 4H8V8h4zm-4 1h4v4H8zm5-5v4h4V8zm0 5h4v1.5a2.5 2.5 0 0 1-2.5 2.5H13zM3 7h4V3H5.5A2.5 2.5 0 0 0 3 5.5zm5 0V3h4v4z"/>`,
  'regular': `<path d="M17.208 1.29a1 1 0 0 0-1.414 0L14.29 2.793a1 1 0 0 0 0 1.414l1.503 1.503a1 1 0 0 0 1.414 0l1.503-1.503a1 1 0 0 0 0-1.414zm-2.21 2.21 1.503-1.503L18.004 3.5 16.5 5.003zm-2-.5H5.5A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5V7h-4.002zM5.356 15.993A1.5 1.5 0 0 1 4 14.5V13h3v3H5.5zM8 13h4v3H8zm7.993 1.644A1.5 1.5 0 0 1 14.5 16H13v-3h3v1.5zM8 8h4v4H8zm5 4V8h3v4zM8 4h4v3H8zM5.5 4H7v3H4V5.5l.007-.145A1.5 1.5 0 0 1 5.5 4M4 12V8h3v4z"/>`
} as const;

export default function PuzzleCubePieceIcon({ 
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
        viewBox="0 0 20 20"
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

  const gradientId = 'puzzlecubepieceicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
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