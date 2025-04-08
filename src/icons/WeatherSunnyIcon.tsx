
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M23.999 4.001c.69 0 1.25.56 1.25 1.25v2.5a1.25 1.25 0 0 1-2.5 0v-2.5c0-.69.56-1.25 1.25-1.25m10.023 20.046c0 5.509-4.466 9.975-9.975 9.975-5.51 0-9.976-4.466-9.976-9.975 0-5.51 4.466-9.976 9.976-9.976 5.509 0 9.975 4.466 9.975 9.976m8.728 1.203a1.25 1.25 0 0 0 0-2.5h-2.5a1.25 1.25 0 0 0 0 2.5zM23.999 39c.69 0 1.25.56 1.25 1.25v2.5a1.25 1.25 0 0 1-2.5 0v-2.5c0-.69.56-1.25 1.25-1.25M7.75 25.25a1.25 1.25 0 1 0 0-2.5h-2.5a1.25 1.25 0 0 0 0 2.5zM9.366 9.366a1.25 1.25 0 0 1 1.768 0l2.5 2.5a1.25 1.25 0 1 1-1.768 1.768l-2.5-2.5a1.25 1.25 0 0 1 0-1.768m1.768 29.269a1.25 1.25 0 1 1-1.768-1.768l2.5-2.5a1.25 1.25 0 1 1 1.768 1.768zm27.5-29.269a1.25 1.25 0 0 0-1.767 0l-2.5 2.5a1.25 1.25 0 0 0 1.768 1.768l2.5-2.5a1.25 1.25 0 0 0 0-1.768m-1.767 29.269a1.25 1.25 0 1 0 1.768-1.768l-2.5-2.5a1.25 1.25 0 1 0-1.768 1.768z"/>`,
  'regular': `<path d="M23.999 4.001c.69 0 1.25.56 1.25 1.25v2.5a1.25 1.25 0 0 1-2.5 0v-2.5c0-.69.56-1.25 1.25-1.25m.048 30.02c5.509 0 9.975-4.465 9.975-9.974s-4.466-9.976-9.975-9.976c-5.51 0-9.976 4.466-9.976 9.976 0 5.509 4.466 9.975 9.976 9.975m0-2.5a7.475 7.475 0 1 1 0-14.95 7.475 7.475 0 0 1 0 14.95m18.703-6.27a1.25 1.25 0 0 0 0-2.5h-2.5a1.25 1.25 0 0 0 0 2.5zM23.999 39c.69 0 1.25.56 1.25 1.25v2.5a1.25 1.25 0 0 1-2.5 0v-2.5c0-.69.56-1.25 1.25-1.25M7.75 25.25a1.25 1.25 0 1 0 0-2.5h-2.5a1.25 1.25 0 0 0 0 2.5zM9.366 9.365a1.25 1.25 0 0 1 1.768 0l2.5 2.5a1.25 1.25 0 1 1-1.768 1.768l-2.5-2.5a1.25 1.25 0 0 1 0-1.768m1.768 29.269a1.25 1.25 0 1 1-1.768-1.768l2.5-2.5a1.25 1.25 0 1 1 1.768 1.768zm27.5-29.269a1.25 1.25 0 0 0-1.767 0l-2.5 2.5a1.25 1.25 0 0 0 1.768 1.768l2.5-2.5a1.25 1.25 0 0 0 0-1.768m-1.767 29.269a1.25 1.25 0 1 0 1.768-1.768l-2.5-2.5a1.25 1.25 0 1 0-1.768 1.768z"/>`
} as const;

export default function WeatherSunnyIcon({ 
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

  const gradientId = 'weathersunnyicon_gradient';
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