
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M8 7h7.5A1.5 1.5 0 0 0 17 5.5v-1A1.5 1.5 0 0 0 15.5 3H8zM7 3H4.5A1.5 1.5 0 0 0 3 4.5v1A1.5 1.5 0 0 0 4.5 7H7zm3 9h5.5a1.5 1.5 0 0 0 1.5-1.5v-1A1.5 1.5 0 0 0 15.5 8H10zM9 8H6.5A1.5 1.5 0 0 0 5 9.5v1A1.5 1.5 0 0 0 6.5 12H9zm6.5 9H12v-4h3.5a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5m-7-4H11v4H8.5A1.5 1.5 0 0 1 7 15.5v-1A1.5 1.5 0 0 1 8.5 13"/>`,
  'regular': `<path d="M5 3a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h.268A2 2 0 0 0 5 9v2a2 2 0 0 0 2 2h.268A2 2 0 0 0 7 14v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1c0-.597-.262-1.133-.677-1.5.415-.367.677-.903.677-1.5V9c0-.597-.262-1.134-.677-1.5.415-.366.677-.903.677-1.5V5a2 2 0 0 0-2-2zm10 9h-5V8h5a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1M9 8v4H7a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1zm-1 6a1 1 0 0 1 1-1h2v3H9a1 1 0 0 1-1-1zm4 2v-3h3a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1zM8 7V4h7a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1zM7 7H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h2z"/>`
} as const;

export default function ListBarTreeOffsetIcon({ 
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

  const gradientId = 'listbartreeoffseticon_gradient';
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