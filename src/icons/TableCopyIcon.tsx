
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M3 13.5A3.5 3.5 0 0 0 6.5 17h7.829c-.773.625-1.757 1-2.829 1h-5A4.5 4.5 0 0 1 2 13.5v-5c0-1.072.375-2.056 1-2.829zM15.5 16H14v-4h4v1.5a2.5 2.5 0 0 1-2.5 2.5M14 7v4h4V7zm-5 4h4V7H9zm4 1H9v4h4zM8 7v4H4V7zm0 5H4v1.5A2.5 2.5 0 0 0 6.5 16H8zm10-6h-4V2h1.5A2.5 2.5 0 0 1 18 4.5zm-5 0V2H9v4zM8 6V2H6.5A2.5 2.5 0 0 0 4 4.5V6z"/>`,
  'regular': `<path d="M3 13.5A3.5 3.5 0 0 0 6.5 17h7.829c-.773.625-1.757 1-2.829 1h-5A4.5 4.5 0 0 1 2 13.5v-5c0-1.072.375-2.056 1-2.829zm1.732 1.768A2.5 2.5 0 0 1 4 13.5v-9A2.5 2.5 0 0 1 6.5 2h9A2.5 2.5 0 0 1 18 4.5v9a2.5 2.5 0 0 1-2.5 2.5h-9a2.5 2.5 0 0 1-1.768-.732M17 6V4.5a1.5 1.5 0 0 0-1.356-1.493L15.5 3H14v3zm-4-3H9v3h4zM8 3H6.5a1.5 1.5 0 0 0-1.493 1.356L5 4.5V6h3zm1 4v4h4V7zm-4 4h3V7H5zm4 1v3h4v-3zm-2.5 3H8v-3H5v1.5a1.5 1.5 0 0 0 1.356 1.493zm7.5-3v3h1.5a1.5 1.5 0 0 0 1.493-1.356L17 13.5V12zm0-5v4h3V7z"/>`
} as const;

export default function TableCopyIcon({ 
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

  const gradientId = 'tablecopyicon_gradient';
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