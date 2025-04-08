
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M14.561 4.439A1.5 1.5 0 0 0 13.5 4H2V3a.997.997 0 0 0-1-1H.5a.5.5 0 1 0 0 1H1v10.5a.5.5 0 1 0 1 0V12h4v1.5a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5V12h.5a1.503 1.503 0 0 0 1.5-1.5v-5c0-.398-.158-.779-.439-1.061M4 9.5a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5v-3a.5.5 0 1 1 1 0zm2.5.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 1 1 1 0v3a.5.5 0 0 1-.5.5M9 13H7v-1h2zm.5-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 1 1 1 0v3a.5.5 0 0 1-.5.5m2.5 3h-2v-1h2zm1-3.5a.5.5 0 1 1-1 0v-3a.5.5 0 0 1 .5-.5.5.5 0 0 1 .5.5z"/>`,
  'regular': `<path d="M4 6.5v3a.5.5 0 1 1-1 0v-3a.5.5 0 1 1 1 0M6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 1 0 1 0v-3a.5.5 0 0 0-.5-.5m3 0a.5.5 0 0 0-.5.5v3a.5.5 0 1 0 1 0v-3a.5.5 0 0 0-.5-.5m3 0a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-.5-.5m2.5-.5v5a1.5 1.5 0 0 1-1.5 1.5H13v1.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5V12H2v1.5a.5.5 0 0 1-1 0V3H.5a.5.5 0 0 1 0-1H1a1 1 0 0 1 1 1v1h11.5A1.5 1.5 0 0 1 15 5.5M7 13h2v-1H7zm5-1h-2v1h2zm2-6.5a.5.5 0 0 0-.5-.5H2v6h11.5a.5.5 0 0 0 .5-.5z"/>`
} as const;

export default function NetworkAdapterIcon({ 
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

  const gradientId = 'networkadaptericon_gradient';
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