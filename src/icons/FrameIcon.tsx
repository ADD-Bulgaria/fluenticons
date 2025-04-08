
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M5.25 2a.75.75 0 0 1 .75.75V4.5h12V2.75a.75.75 0 0 1 1.5 0V4.5h1.75a.75.75 0 0 1 0 1.5H19.5v12h1.75a.75.75 0 0 1 0 1.5H19.5v1.75a.75.75 0 0 1-1.5 0V19.5H6v1.75a.75.75 0 0 1-1.5 0V19.5H2.75a.75.75 0 0 1 0-1.5H4.5V6H2.75a.75.75 0 0 1 0-1.5H4.5V2.75A.75.75 0 0 1 5.25 2"/>`,
  'regular': `<path d="M6 2.75a.75.75 0 0 0-1.5 0V4.5H2.75a.75.75 0 0 0 0 1.5H4.5v12H2.75a.75.75 0 0 0 0 1.5H4.5v1.75a.75.75 0 0 0 1.5 0V19.5h12v1.75a.75.75 0 0 0 1.5 0V19.5h1.75a.75.75 0 0 0 0-1.5H19.5V6h1.75a.75.75 0 0 0 0-1.5H19.5V2.75a.75.75 0 0 0-1.5 0V4.5H6zM18 18H6V6h12z"/>`
} as const;

export default function FrameIcon({ 
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

  const gradientId = 'frameicon_gradient';
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