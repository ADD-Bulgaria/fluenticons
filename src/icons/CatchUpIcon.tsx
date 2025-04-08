
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M11.372 7.269c-.666-1.701-3.076-1.692-3.73.013l-1.207 3.149a.5.5 0 0 1-.466.32H4.562a2 2 0 1 0 .292 2H5.97a2.5 2.5 0 0 0 2.334-1.605L9.51 7.998l3.22 8.227c.638 1.628 2.91 1.712 3.666.136l1.597-3.326a.5.5 0 0 1 .45-.283h.703a2 2 0 1 0 .292-2h-.994a2.5 2.5 0 0 0-2.254 1.418l-1.597 3.326z"/>`,
  'regular': `<path d="M9.278 8.157a.25.25 0 0 1 .462-.001l3.236 7.766c.574 1.377 2.497 1.451 3.175.123l1.6-3.136a.75.75 0 0 1 .668-.41h.644a2 2 0 1 0 .205-1.5h-.85a2.25 2.25 0 0 0-2.004 1.228l-1.6 3.136a.25.25 0 0 1-.453-.018L11.124 7.58c-.6-1.441-2.644-1.434-3.235.011l-1.202 2.943a.75.75 0 0 1-.695.467h-1.26a2 2 0 1 0 .205 1.5h1.055a2.25 2.25 0 0 0 2.083-1.4z"/>`
} as const;

export default function CatchUpIcon({ 
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

  const gradientId = 'catchupicon_gradient';
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