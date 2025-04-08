
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M10 19.313V29a1 1 0 0 0 1.515.858L16 27.166l4.485 2.692A1 1 0 0 0 22 29v-9.687A11.45 11.45 0 0 1 16 21c-2.199 0-4.253-.617-6-1.687"/><path d="M22 20a9.96 9.96 0 0 1-6 2 9.96 9.96 0 0 1-6.36-2.283A9.98 9.98 0 0 1 6 12C6 6.477 10.477 2 16 2s10 4.477 10 10a9.99 9.99 0 0 1-4 8"/><path d="m16.336 7.21 1.34 2.72 3.003.434c.307.044.43.422.207.64l-2.171 2.115.513 2.99a.375.375 0 0 1-.544.394L16 15.09l-2.684 1.413a.375.375 0 0 1-.544-.395l.516-2.99-2.174-2.115a.375.375 0 0 1 .207-.639l3.003-.434 1.34-2.72a.375.375 0 0 1 .672 0"/>`,
  'filled': `<path d="M10 29v-7.187a11.45 11.45 0 0 0 6 1.687c2.199 0 4.253-.617 6-1.687V29a1 1 0 0 1-1.515.858L16 27.166l-4.485 2.692A1 1 0 0 1 10 29m6-7a9.96 9.96 0 0 0 6-2 9.99 9.99 0 0 0 4-8c0-5.523-4.477-10-10-10S6 6.477 6 12a9.98 9.98 0 0 0 4 8 9.96 9.96 0 0 0 6 2m1.676-12.07 3.003.434c.307.044.43.422.207.64l-2.171 2.115.513 2.99a.375.375 0 0 1-.544.394L16 15.09l-2.684 1.413a.375.375 0 0 1-.544-.395l.516-2.99-2.174-2.115a.375.375 0 0 1 .207-.639l3.003-.434 1.34-2.72a.375.375 0 0 1 .672 0z"/>`,
  'regular': `<path d="m17.676 9.93-1.34-2.72a.375.375 0 0 0-.672 0l-1.34 2.72-3.003.434a.375.375 0 0 0-.207.64l2.174 2.115-.516 2.99a.375.375 0 0 0 .544.394L16 15.09l2.684 1.413a.375.375 0 0 0 .544-.394l-.513-2.99 2.171-2.116a.375.375 0 0 0-.207-.639zM6 12C6 6.477 10.477 2 16 2s10 4.477 10 10a9.99 9.99 0 0 1-4 8v9a1 1 0 0 1-1.515.858L16 27.166l-4.485 2.692A1 1 0 0 1 10 29v-9a9.99 9.99 0 0 1-4-8m10-8a8 8 0 1 0 0 16 8 8 0 0 0 0-16m4 23.234v-6.066A10 10 0 0 1 16 22a10 10 0 0 1-4-.832v6.066l3.486-2.092a1 1 0 0 1 1.029 0z"/>`
} as const;

export default function RibbonStarIcon({ 
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

  const gradientId = 'ribbonstaricon_gradient';
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