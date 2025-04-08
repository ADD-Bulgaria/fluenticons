
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M17.845 8.117A9.468 9.468 0 0 0 3.34 6.773a10 10 0 0 0-1.105 1.338.75.75 0 1 0 1.233.855A8.4 8.4 0 0 1 4.4 7.834a7.968 7.968 0 0 1 12.21 1.135.75.75 0 1 0 1.235-.852M7.114 11.05a4.13 4.13 0 0 1 4.174-1.015c-.5.36-.936.802-1.29 1.306-.662.01-1.32.266-1.824.77a2.7 2.7 0 0 0-.547.814.75.75 0 1 1-1.374-.602c.209-.476.498-.91.86-1.273m7.476-2.389q.17.17.327.355a5.6 5.6 0 0 0-1.97.206 4.944 4.944 0 0 0-7.322 1.76.75.75 0 1 1-1.338-.677A6.443 6.443 0 0 1 14.59 8.66m-2.523 2.781a2 2 0 0 1-1.431 2.478l-.461.118a4.7 4.7 0 0 0 .01 1.016l.35.083a2 2 0 0 1 1.456 2.519l-.127.423q.387.305.835.518l.325-.344a2 2 0 0 1 2.91.001l.337.358q.44-.203.822-.498l-.157-.556a2 2 0 0 1 1.431-2.478l.46-.118a4.7 4.7 0 0 0-.01-1.017l-.348-.082a2 2 0 0 1-1.456-2.519l.126-.422a4.3 4.3 0 0 0-.835-.518l-.325.343a2 2 0 0 1-2.91-.001l-.337-.358a4.3 4.3 0 0 0-.821.497zM14.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>`,
  'regular': `<path d="M17.964 8.18A9.612 9.612 0 0 0 3.238 6.816a10 10 0 0 0-1.121 1.36.5.5 0 0 0 .821.57 9 9 0 0 1 1.007-1.223A8.612 8.612 0 0 1 17.141 8.75a.5.5 0 1 0 .823-.568M7.183 11.287a4.03 4.03 0 0 1 3.85-1.056q-.48.391-.862.878a3.03 3.03 0 0 0-2.281.885 3 3 0 0 0-.631.937.5.5 0 1 1-.916-.4 4 4 0 0 1 .84-1.244m7.412-2.497q.107.106.209.22a5.6 5.6 0 0 0-1.356.091 5.45 5.45 0 0 0-8.275 1.785.5.5 0 0 1-.892-.451A6.45 6.45 0 0 1 14.596 8.79m-2.528 2.653a2 2 0 0 1-1.431 2.478l-.461.118a4.7 4.7 0 0 0 .01 1.016l.35.083a2 2 0 0 1 1.456 2.519l-.127.423q.387.305.835.518l.325-.344a2 2 0 0 1 2.91.001l.337.358q.44-.203.822-.498l-.157-.556a2 2 0 0 1 1.431-2.478l.46-.118a4.7 4.7 0 0 0-.01-1.017l-.348-.082a2 2 0 0 1-1.456-2.519l.126-.422a4.3 4.3 0 0 0-.835-.518l-.325.343a2 2 0 0 1-2.91-.001l-.337-.358a4.3 4.3 0 0 0-.821.497zM14.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>`
} as const;

export default function WifiSettingsIcon({ 
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
        viewBox="0 0 20 20"
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

  const gradientId = 'wifisettingsicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
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