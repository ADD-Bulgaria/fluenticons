
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M11.5 2a1 1 0 1 0 0 2h.086L8.543 7.043a1 1 0 0 0 1.414 1.414L13 5.414V5.5a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1zM3.428 7.596a1 1 0 0 0-1.332 1.332l4.5 9.5a1 1 0 1 0 1.808-.856l-1.145-2.417 2.396-2.396 2.417 1.145a1 1 0 1 0 .856-1.808zm4.308 4.254L6.35 13.236l-1.248-2.634zM18.5 9a1 1 0 1 0 0 2h.086l-9.293 9.293a1 1 0 0 0 1.414 1.414L20 12.414v.086a1 1 0 1 0 2 0V10a1 1 0 0 0-1-1z"/>`,
  'regular': `<path d="M10.5 2.75c0 .414.336.75.75.75h1.19L8.22 7.72a.75.75 0 0 0 1.06 1.06l4.22-4.22v1.19a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75M3.071 8.072a.75.75 0 0 0-.999 1l4.5 9.498a.75.75 0 0 0 1.356-.642l-1.22-2.575 2.645-2.645 2.576 1.22a.75.75 0 0 0 .642-1.356zm4.843 3.954-1.888 1.887-1.699-3.586zM18.25 9a.75.75 0 0 0 0 1.5h1.19L9.22 20.72a.75.75 0 1 0 1.06 1.06L20.5 11.56v1.19a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-.75-.75z"/>`
} as const;

export default function TextDirectionRotate315RightIcon({ 
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

  const gradientId = 'textdirectionrotate315righticon_gradient';
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