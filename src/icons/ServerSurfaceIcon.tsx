
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M5.5 13h4c.827 0 1.5-.673 1.5-1.5v-9A1.503 1.503 0 0 0 9.5 1h-4A1.503 1.503 0 0 0 4 2.5v9c0 .827.673 1.5 1.5 1.5m.646-8.854A.5.5 0 0 1 6.5 4h2a.5.5 0 1 1 0 1h-2a.5.5 0 0 1-.5-.5c0-.133.053-.26.146-.354m0 4A.5.5 0 0 1 6.5 8h2a.5.5 0 1 1 0 1h-2a.5.5 0 0 1-.5-.5c0-.133.053-.26.146-.354m0 2A.5.5 0 0 1 6.5 10h2a.5.5 0 1 1 0 1h-2a.5.5 0 0 1-.354-.854m7.822 4.178-1.5-4A.51.51 0 0 0 12 10v1.5c0 1.378-1.121 2.5-2.5 2.5h-4A2.503 2.503 0 0 1 3 11.5V10a.5.5 0 0 0-.468.324l-1.5 4q-.043.116-.028.237a.5.5 0 0 0 .496.438h12a.5.5 0 0 0 .41-.215.5.5 0 0 0 .058-.46"/>`,
  'regular': `<path d="m13.968 14.324-1.5-4A.5.5 0 0 0 12 10h-1V2.5A1.5 1.5 0 0 0 9.5 1h-4A1.5 1.5 0 0 0 4 2.5V10H3a.5.5 0 0 0-.468.324l-1.5 4A.5.5 0 0 0 1.5 15h12a.5.5 0 0 0 .468-.676M5 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5zM2.222 14l1.125-3H4v.5A1.5 1.5 0 0 0 5.5 13h4a1.5 1.5 0 0 0 1.5-1.5V11h.653l1.125 3zM6 4.5a.5.5 0 0 1 .5-.5h2a.5.5 0 1 1 0 1h-2a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h2a.5.5 0 1 1 0 1h-2a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"/>`
} as const;

export default function ServerSurfaceIcon({ 
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

  const gradientId = 'serversurfaceicon_gradient';
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