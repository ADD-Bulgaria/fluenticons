
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="m21.053 8.106.894 1.788L9.737 16l14.21 7.106-.894 1.788L5.264 16z"/><path d="m21.053 8.106.894 1.788L9.737 16l14.21 7.106-.894 1.788L5.264 16z"/><path d="m21.053 8.106.894 1.788L9.737 16l14.21 7.106-.894 1.788L5.264 16z"/><path d="m21.053 8.106.894 1.788L9.737 16l14.21 7.106-.894 1.788L5.264 16z"/><path d="M29 24.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0M12 16a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0m17-8.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0"/>`,
  'filled': `<path d="M20 7.5q.001.553.128 1.068l-9.15 4.575a4.5 4.5 0 1 0 0 5.713l9.15 4.576Q20 23.947 20 24.5a4.5 4.5 0 1 0 1.023-2.857l-9.15-4.575a4.5 4.5 0 0 0 0-2.136l9.15-4.575A4.5 4.5 0 1 0 20 7.5"/>`,
  'regular': `<path d="M22 7.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0M24.5 3a4.5 4.5 0 0 0-4.372 5.568l-9.15 4.575a4.5 4.5 0 1 0 0 5.713l9.15 4.576Q20 23.946 20 24.5a4.5 4.5 0 1 0 1.023-2.857l-9.15-4.575a4.5 4.5 0 0 0 0-2.136l9.15-4.575A4.5 4.5 0 1 0 24.5 3M5 16a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0m19.5 6a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5"/>`
} as const;

export default function ShareAndroidIcon({ 
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

  const gradientId = 'shareandroidicon_gradient';
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