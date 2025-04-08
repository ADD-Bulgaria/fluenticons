
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M8 15a4 4 0 1 1 8 0 4 4 0 0 1-8 0m4-7a7 7 0 1 0 0 14 7 7 0 0 0 0-14m12.5 0A1.5 1.5 0 0 0 23 9.5v29a1.5 1.5 0 0 0 3 0V25h12.5a1.5 1.5 0 0 0 0-3H26V11h14.5a1.5 1.5 0 0 0 0-3z"/>`,
  'regular': `<path d="M7.5 14.5a4 4 0 1 1 8 0 4 4 0 0 1-8 0m4-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13m12.75 0C23.56 8 23 8.56 23 9.25v29.5a1.25 1.25 0 1 0 2.5 0V25h13.25a1.25 1.25 0 1 0 0-2.5H25.5v-12h15.25a1.25 1.25 0 1 0 0-2.5z"/>`
} as const;

export default function TemperatureDegreeFahrenheitIcon({ 
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
        viewBox="0 0 48 48"
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

  const gradientId = 'temperaturedegreefahrenheiticon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
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