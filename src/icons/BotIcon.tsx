
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M25.25 5.25a1.25 1.25 0 1 0-2.5 0V7h-7.5A4.25 4.25 0 0 0 11 11.25v8.5A4.25 4.25 0 0 0 15.25 24h17.5A4.25 4.25 0 0 0 37 19.75v-8.5A4.25 4.25 0 0 0 32.75 7h-7.5zM19 18a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m12.5-2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0M8 32.25A4.25 4.25 0 0 1 12.25 28h23.5A4.25 4.25 0 0 1 40 32.25v1.05c0 3.154-1.535 5.888-4.336 7.785C32.9 42.957 28.94 44 24 44s-8.9-1.043-11.664-2.915C9.535 39.188 8 36.454 8 33.3z"/>`,
  'regular': `<path d="M25.25 5.25a1.25 1.25 0 1 0-2.5 0V7h-7.5A4.25 4.25 0 0 0 11 11.25v8.5A4.25 4.25 0 0 0 15.25 24h17.5A4.25 4.25 0 0 0 37 19.75v-8.5A4.25 4.25 0 0 0 32.75 7h-7.5zm-11.75 6c0-.966.784-1.75 1.75-1.75h17.5c.967 0 1.75.784 1.75 1.75v8.5a1.75 1.75 0 0 1-1.75 1.75h-17.5a1.75 1.75 0 0 1-1.75-1.75zM19 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m12.5-2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m-21 16.75c0-.966.784-1.75 1.75-1.75h23.5c.967 0 1.75.784 1.75 1.75v1.05c0 2.246-1.056 4.237-3.238 5.715C32.042 40.518 28.627 41.5 24 41.5s-8.043-.982-10.262-2.485C11.556 37.537 10.5 35.546 10.5 33.3zM12.25 28A4.25 4.25 0 0 0 8 32.25v1.05c0 3.154 1.535 5.888 4.336 7.785C15.1 42.957 19.06 44 24 44s8.9-1.043 11.664-2.915C38.465 39.188 40 36.454 40 33.3v-1.05A4.25 4.25 0 0 0 35.75 28z"/>`
} as const;

export default function BotIcon({ 
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

  const gradientId = 'boticon_gradient';
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