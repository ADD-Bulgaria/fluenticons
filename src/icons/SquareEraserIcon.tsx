
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="m8.733 13.637 4.9-4.9A2.48 2.48 0 0 1 17 8.589V6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h2.591a2.5 2.5 0 0 1 .142-3.363m7.736-4.198 2.095 2.095a1.5 1.5 0 0 1 0 2.122l-3.6 3.6-4.216-4.217 3.6-3.6a1.5 1.5 0 0 1 2.121 0m-2.212 8.523-4.216-4.217-.6.6a1.5 1.5 0 0 0 0 2.122l2.1 2.095a1.5 1.5 0 0 0 1.117.438h4.092a.5.5 0 0 0 0-1h-2.531z"/>`,
  'regular': `<path d="M8.081 16H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2.079c.368.09.71.265 1 .51V6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h2.591a2.5 2.5 0 0 1-.51-1m1.358.466a1.5 1.5 0 0 1 0-2.122l4.9-4.9a1.5 1.5 0 0 1 2.122 0l2.095 2.1a1.5 1.5 0 0 1 0 2.122L14.216 18h2.531a.5.5 0 0 1 0 1h-4.092a1.5 1.5 0 0 1-1.121-.438zm5.612-6.319-3.6 3.6 2.8 2.8 3.6-3.6a.5.5 0 0 0 0-.708l-2.095-2.095a.5.5 0 0 0-.705.003m-1.5 7.108-2.8-2.8-.6.6a.5.5 0 0 0 0 .708l2.095 2.095a.5.5 0 0 0 .708 0z"/>`
} as const;

export default function SquareEraserIcon({ 
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

  const gradientId = 'squareerasericon_gradient';
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