
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M5.55 5.164A3.25 3.25 0 0 0 3.08 9.04l.268 1.21h16.534l-1.043-4.704a3.25 3.25 0 0 0-3.876-2.47zm-.383 13.29L4.124 13.75h16.534l.268 1.21a3.25 3.25 0 0 1-2.47 3.876l-9.413 2.087a3.25 3.25 0 0 1-3.876-2.47M1 12a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5A.75.75 0 0 1 1 12m6 0a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5A.75.75 0 0 1 7 12m6.75-.75a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5zM19 12a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5A.75.75 0 0 1 19 12"/>`,
  'regular': `<path d="M3.078 9.04a3.25 3.25 0 0 1 2.47-3.876l9.413-2.087a3.25 3.25 0 0 1 3.876 2.47l1.043 4.703h-1.537l-.97-4.38a1.75 1.75 0 0 0-2.088-1.329L5.872 6.628a1.75 1.75 0 0 0-1.33 2.087l.34 1.535H3.346zm16.041 4.71h1.537l.268 1.21a3.25 3.25 0 0 1-2.47 3.876l-9.413 2.087a3.25 3.25 0 0 1-3.876-2.47L4.122 13.75h1.536l.971 4.379a1.75 1.75 0 0 0 2.087 1.33l9.414-2.087a1.75 1.75 0 0 0 1.33-2.088zM1 12a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5A.75.75 0 0 1 1 12m6 0a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5A.75.75 0 0 1 7 12m6.75-.75a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5zM19 12a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5A.75.75 0 0 1 19 12"/>`
} as const;

export default function AlignStraightenIcon({ 
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

  const gradientId = 'alignstraightenicon_gradient';
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