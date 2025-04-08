
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M14.05 3.808a2.76 2.76 0 0 1 3.9 0l5.121 5.12q.732.736 1.281 1.57c2.563 3.881 2.136 9.156-1.28 12.573l-.08.079q-.281.275-.578.523A9.95 9.95 0 0 1 17 25.95V29a1 1 0 1 1-2 0v-3.05a9.96 9.96 0 0 1-6.071-2.88A9.97 9.97 0 0 1 6 15.966a9.96 9.96 0 0 1 2.93-7.037zm.95 20.13a8 8 0 0 0 2 0V15a1 1 0 1 0-2 0z"/>`,
  'regular': `<path d="M17.95 3.808a2.76 2.76 0 0 0-3.9 0l-5.121 5.12c-3.905 3.906-3.905 10.238 0 14.143A9.96 9.96 0 0 0 15 25.95V29a1 1 0 1 0 2 0v-3.05a9.96 9.96 0 0 0 6.071-2.88c3.905-3.904 3.905-10.236 0-14.141zM17 23.938V15a1 1 0 0 0-2 0v8.938a8 8 0 0 1-4.657-13.594l5.121-5.122a.76.76 0 0 1 1.072 0l5.12 5.121A8 8 0 0 1 17 23.938"/>`
} as const;

export default function LeafOneIcon({ 
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

  const gradientId = 'leafoneicon_gradient';
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