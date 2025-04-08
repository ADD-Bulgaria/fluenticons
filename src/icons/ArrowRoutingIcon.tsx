
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M17.53 3.22a.75.75 0 1 0-1.06 1.06l2.97 2.97H14.5a3.25 3.25 0 0 0-3.25 3.25v3a1.75 1.75 0 0 1-1.33 1.7A4.001 4.001 0 0 0 2 16a4 4 0 0 0 7.935.721A3.25 3.25 0 0 0 12.75 13.5v-3c0-.966.784-1.75 1.75-1.75h4.94l-2.97 2.97a.75.75 0 1 0 1.06 1.06l4.25-4.25a.75.75 0 0 0 0-1.06z"/>`,
  'regular': `<path d="M17.53 3.22a.75.75 0 1 0-1.06 1.06l2.97 2.97H14.5a3.25 3.25 0 0 0-3.25 3.25v3a1.75 1.75 0 0 1-1.33 1.7A4.001 4.001 0 0 0 2 16a4 4 0 0 0 7.935.721A3.25 3.25 0 0 0 12.75 13.5v-3c0-.966.784-1.75 1.75-1.75h4.94l-2.97 2.97a.75.75 0 1 0 1.06 1.06l4.25-4.25a.75.75 0 0 0 0-1.06zM3.5 16a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0"/>`
} as const;

export default function ArrowRoutingIcon({ 
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

  const gradientId = 'arrowroutingicon_gradient';
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