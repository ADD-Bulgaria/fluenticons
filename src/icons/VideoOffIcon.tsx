
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="m30.929 32.697 10.937 10.937a1.25 1.25 0 0 0 1.768-1.768l-37.5-37.5a1.25 1.25 0 1 0-1.768 1.768l4.119 4.119A6.25 6.25 0 0 0 4 16.25v15.5A6.25 6.25 0 0 0 10.25 38h14.5a6.25 6.25 0 0 0 6.179-5.303m13.075.046c0 1.973-1.667 3.335-3.411 3.252L33 28.403V16.66l5.907-4.079c2.156-1.488 5.097.055 5.097 2.675zM31 16.25v10.153L14.597 10H24.75A6.25 6.25 0 0 1 31 16.25"/>`,
  'regular': `<path d="m31.747 33.515 10.12 10.119a1.25 1.25 0 0 0 1.767-1.768l-37.5-37.5a1.25 1.25 0 1 0-1.768 1.768l4.119 4.119A6.25 6.25 0 0 0 4 16.25v15.5A6.25 6.25 0 0 0 10.25 38h15.5a6.25 6.25 0 0 0 5.997-4.485M29.5 31.268v.482a3.75 3.75 0 0 1-3.75 3.75h-15.5a3.75 3.75 0 0 1-3.75-3.75v-15.5a3.75 3.75 0 0 1 3.75-3.75h.482zm14.503 1.475c0 1.973-1.666 3.335-3.41 3.252l-7.921-7.92 7.655 5.285a.75.75 0 0 0 1.176-.617V15.256a.75.75 0 0 0-1.176-.618L32 20.388v7.015l-2.5-2.5V16.25a3.75 3.75 0 0 0-3.75-3.75h-8.653l-2.5-2.5H25.75A6.25 6.25 0 0 1 32 16.25v1.1l6.907-4.769c2.156-1.488 5.096.055 5.096 2.675z"/>`
} as const;

export default function VideoOffIcon({ 
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

  const gradientId = 'videoofficon_gradient';
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