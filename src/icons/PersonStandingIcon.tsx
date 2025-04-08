
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M7.5 4.5a1.75 1.75 0 1 0 .001-3.499A1.75 1.75 0 0 0 7.5 4.5m3.5 2v3c0 .551-.448 1-1 1V14a1 1 0 0 1-2 0v-3a.5.5 0 0 0-1 0v3a1 1 0 0 1-2 0v-3.5c-.552 0-1-.449-1-1v-3c0-.916.623-1.682 1.464-1.918A2.74 2.74 0 0 0 7.5 5.5c.81 0 1.532-.359 2.036-.918A2 2 0 0 1 11 6.5"/>`,
  'regular': `<path d="M9.342 4.535c.255-.365.408-.807.408-1.285C9.75 2.009 8.74 1 7.5 1a2.253 2.253 0 0 0-2.25 2.25c0 .478.152.92.408 1.285A2 2 0 0 0 4 6.5v3c0 .551.448 1 1 1v3c0 .827.673 1.5 1.5 1.5h2c.827 0 1.5-.673 1.5-1.5v-3c.552 0 1-.449 1-1v-3c0-.986-.718-1.802-1.658-1.965M7.5 2c.689 0 1.25.561 1.25 1.25S8.189 4.5 7.5 4.5s-1.25-.561-1.25-1.25S6.811 2 7.5 2M10 9.5H9v4a.5.5 0 0 1-.5.5H8v-3a.5.5 0 0 0-1 0v3h-.5a.5.5 0 0 1-.5-.5v-4H5v-3c0-.551.448-1 1-1h3c.552 0 1 .449 1 1z"/>`
} as const;

export default function PersonStandingIcon({ 
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

  const gradientId = 'personstandingicon_gradient';
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