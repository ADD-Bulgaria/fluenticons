
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M2 3.25a1 1 0 0 1 2 0v2.729c1.068-1.08 2.378-1.971 3.954-2.459 2.43-.752 5.013-.69 7.395.196 2.363.88 4.603 2.664 5.778 4.807a1 1 0 0 1-1.754.961c-.912-1.662-2.74-3.156-4.722-3.893a9.44 9.44 0 0 0-6.106-.16C7.071 5.887 5.848 6.82 4.863 8H8.25a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1zm7.095 7.811A1 1 0 0 1 9.75 12v8a1 1 0 0 1-2 0v-5.507c-.346.283-.752.575-1.235.864a1 1 0 0 1-1.03-1.714c1.203-.722 1.766-1.402 2.281-2.025q.111-.135.222-.265a1 1 0 0 1 1.107-.292M17 13a1 1 0 1 0 0-2h-3.1a1 1 0 0 0-.991.868l-.4 3A1 1 0 0 0 13.5 16h2q.103 0 .21.015a1.5 1.5 0 1 1-1.559 2.14 1 1 0 0 0-1.798.875A3.5 3.5 0 1 0 15.5 14h-.857l.133-1z"/>`,
  'regular': `<path d="M2 3.25a.75.75 0 1 1 1.5 0v3.4c1.153-1.388 2.65-2.563 4.528-3.145a11.2 11.2 0 0 1 7.233.192c2.316.862 4.505 2.61 5.647 4.693a.75.75 0 0 1-1.316.72c-.944-1.722-2.825-3.252-4.854-4.007a9.7 9.7 0 0 0-6.266-.165C6.77 5.465 5.4 6.602 4.342 8H8.25a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 2 8.75zm7.5 8.5a.75.75 0 0 0-1.39-.391v.001l-.006.009a3 3 0 0 1-.141.21 8 8 0 0 1-.456.589c-.403.474-.967 1.034-1.643 1.439a.75.75 0 1 0 .772 1.286A7.7 7.7 0 0 0 8 13.833v6.417a.75.75 0 0 0 1.5 0zm7.7.75a.75.75 0 0 0 0-1.5h-3.548a.75.75 0 0 0-.743.65l-.4 3a.75.75 0 0 0 .743.85h2.169q.15-.002.307.02a2 2 0 1 1-2.06 2.89.75.75 0 1 0-1.334.684A3.5 3.5 0 1 0 15.407 14h-1.298l.2-1.5z"/>`
} as const;

export default function SkipBack15Icon({ 
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

  const gradientId = 'skipback15icon_gradient';
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