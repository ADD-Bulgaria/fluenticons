
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M12.25 28A4.25 4.25 0 0 0 8 32.249V33c0 3.756 1.942 6.567 4.92 8.38C15.85 43.163 19.786 44 24 44s8.15-.837 11.08-2.62C38.058 39.567 40 36.756 40 33v-.751A4.25 4.25 0 0 0 35.75 28z"/><path d="M12.25 28A4.25 4.25 0 0 0 8 32.249V33c0 3.756 1.942 6.567 4.92 8.38C15.85 43.163 19.786 44 24 44s8.15-.837 11.08-2.62C38.058 39.567 40 36.756 40 33v-.751A4.25 4.25 0 0 0 35.75 28z"/><path fill-opacity=".75" d="M12.25 28A4.25 4.25 0 0 0 8 32.249V33c0 3.756 1.942 6.567 4.92 8.38C15.85 43.163 19.786 44 24 44s8.15-.837 11.08-2.62C38.058 39.567 40 36.756 40 33v-.751A4.25 4.25 0 0 0 35.75 28z"/><path d="M24 4c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10S29.523 4 24 4m19.494 42H26.498c-1.858 0-3.067-1.96-2.234-3.625l8.498-16.993c.921-1.843 3.547-1.843 4.468 0l8.498 16.993C46.561 44.04 45.352 46 43.494 46"/><path d="M36.004 31a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0zm-1 11.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5"/>`,
  'filled': `<path d="M24 4c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10S29.523 4 24 4M12.25 28A4.25 4.25 0 0 0 8 32.249V33c0 3.755 1.942 6.567 4.92 8.38 2.465 1.501 5.645 2.331 9.102 2.557a4.47 4.47 0 0 1 .46-2.46L29.222 28zm31.244 18H26.498c-1.858 0-3.067-1.96-2.234-3.625l8.498-16.993c.921-1.843 3.547-1.843 4.468 0l8.498 16.993C46.561 44.04 45.352 46 43.494 46M36 31a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0zm-1 11.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5"/>`,
  'regular': `<path d="M24 4c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10S29.523 4 24 4m-7.5 10a7.5 7.5 0 1 1 15 0 7.5 7.5 0 0 1-15 0m-4.25 14A4.25 4.25 0 0 0 8 32.249V33c0 3.755 1.942 6.567 4.92 8.38 2.465 1.501 5.645 2.331 9.102 2.557a4.47 4.47 0 0 1 .46-2.46l.008-.017c-3.3-.177-6.174-.94-8.27-2.215-2.36-1.437-3.72-3.5-3.72-6.245v-.751a1.75 1.75 0 0 1 1.75-1.749h15.722l1.25-2.5zm31.244 18H26.498c-1.858 0-3.067-1.96-2.234-3.625l8.498-16.993c.921-1.843 3.547-1.843 4.468 0l8.498 16.993C46.561 44.04 45.352 46 43.494 46M36 31a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0zm-1 11.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5"/>`
} as const;

export default function PersonWarningIcon({ 
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

  const gradientId = 'personwarningicon_gradient';
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