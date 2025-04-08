
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M3.5 5.25A1.25 1.25 0 0 0 2.25 6.5v3a1.25 1.25 0 1 0 2.5 0 .75.75 0 0 1 1.5 0 2.75 2.75 0 0 1-5.5 0v-3a2.75 2.75 0 1 1 5.5 0 .75.75 0 0 1-1.5 0A1.25 1.25 0 0 0 3.5 5.25m6-1a.75.75 0 0 1 .75.75v.75h1.5V5a.75.75 0 0 1 1.5 0v.75h1a.75.75 0 0 1 0 1.5h-1v1.5h1a.75.75 0 0 1 0 1.5h-1V11a.75.75 0 0 1-1.5 0v-.75h-1.5V11a.75.75 0 0 1-1.5 0v-.75H8a.75.75 0 0 1 0-1.5h.75v-1.5H8a.75.75 0 0 1 0-1.5h.75V5a.75.75 0 0 1 .75-.75m.75 3v1.5h1.5v-1.5z"/>`,
  'regular': `<path d="M3.5 5A1.5 1.5 0 0 0 2 6.5v3a1.5 1.5 0 0 0 3 0 .5.5 0 0 1 1 0 2.5 2.5 0 0 1-5 0v-3a2.5 2.5 0 1 1 5 0 .5.5 0 0 1-1 0A1.5 1.5 0 0 0 3.5 5m6-.5a.5.5 0 0 1 .5.5v1h2V5a.5.5 0 0 1 1 0v1h1.25a.5.5 0 0 1 0 1H13v2h1.25a.5.5 0 0 1 0 1H13v1a.5.5 0 0 1-1 0v-1h-2v1a.5.5 0 0 1-1 0v-1H8a.5.5 0 0 1 0-1h1V7H8a.5.5 0 0 1 0-1h1V5a.5.5 0 0 1 .5-.5M10 7v2h2V7z"/>`
} as const;

export default function CodeCsIcon({ 
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
        viewBox="0 0 16 16"
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

  const gradientId = 'codecsicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
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