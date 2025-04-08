
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6 3a3 3 0 0 0-3 3v3h3.293l2.47-2.47a1.75 1.75 0 0 1 2.474 0L13.707 9H17V6a3 3 0 0 0-3-3zm11 7v4a3 3 0 0 1-2.361 2.932l-3.402-3.402a1.75 1.75 0 0 0-2.474 0L5.36 16.932A3 3 0 0 1 3 14v-4zM6.707 17h6.586l-2.763-2.763a.75.75 0 0 0-1.06 0zm1-8h4.586L10.53 7.237a.75.75 0 0 0-1.06 0zM15.5 5.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>`,
  'regular': `<path d="M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm7.707 13-2.47-2.47a1.75 1.75 0 0 0-2.474 0L6.293 16H6a2 2 0 0 1-2-2v-4h12v4a2 2 0 0 1-2 2zm-6 0 1.763-1.763a.75.75 0 0 1 1.06 0L12.293 16zM16 9h-2.793l-1.97-1.97a1.75 1.75 0 0 0-2.474 0L6.793 9H4V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2zM8.207 9 9.47 7.737a.75.75 0 0 1 1.06 0L11.793 9zM15 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1 7.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>`
} as const;

export default function ImageStackIcon({ 
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

  const gradientId = 'imagestackicon_gradient';
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