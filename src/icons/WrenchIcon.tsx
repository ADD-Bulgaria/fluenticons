
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M16.5 2a5.5 5.5 0 0 0-5.348 6.789L2.841 17.1a2.871 2.871 0 1 0 4.06 4.06l8.313-8.311q.621.15 1.286.151a5.5 5.5 0 0 0 5.218-7.245.75.75 0 0 0-1.242-.292l-2.444 2.444a.75.75 0 0 1-1.06 0l-.879-.878a.75.75 0 0 1 0-1.06l2.445-2.445a.75.75 0 0 0-.293-1.241A5.5 5.5 0 0 0 16.5 2"/>`,
  'filled': `<path d="M16.5 2a5.5 5.5 0 0 0-5.348 6.789L2.841 17.1a2.871 2.871 0 1 0 4.06 4.06l8.313-8.311q.621.15 1.286.151a5.5 5.5 0 0 0 5.218-7.245.75.75 0 0 0-1.242-.292l-2.444 2.444a.75.75 0 0 1-1.06 0l-.879-.878a.75.75 0 0 1 0-1.06l2.445-2.445a.75.75 0 0 0-.293-1.241A5.5 5.5 0 0 0 16.5 2"/>`,
  'regular': `<path d="M11 7.5a5.5 5.5 0 0 1 7.664-5.058.75.75 0 0 1 .235 1.22L16.311 6.25l1.44 1.44 2.587-2.59a.75.75 0 0 1 1.22.236 5.5 5.5 0 0 1-6.344 7.512L6.902 21.16A2.871 2.871 0 1 1 2.84 17.1l8.311-8.312A5.5 5.5 0 0 1 11 7.5m5.5-4a4 4 0 0 0-3.794 5.27.75.75 0 0 1-.181.768L3.902 18.16A1.371 1.371 0 0 0 5.84 20.1l8.624-8.625a.75.75 0 0 1 .768-.18 4 4 0 0 0 5.246-4.213l-1.845 1.844a1.25 1.25 0 0 1-1.767 0l-1.793-1.793a1.25 1.25 0 0 1 0-1.768l1.844-1.844A4 4 0 0 0 16.5 3.5"/>`
} as const;

export default function WrenchIcon({ 
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

  const gradientId = 'wrenchicon_gradient';
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