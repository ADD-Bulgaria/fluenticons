
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M25.125 18.056v4.166l-8.095 7.75q-.51.027-1.03.028c-3.198 0-6.14-.823-8.315-2.207C5.523 26.417 4 24.393 4 22v-.5A3.5 3.5 0 0 1 7.5 18h17q.32.001.625.056"/><path d="M25.125 18.056v4.166l-8.095 7.75q-.51.027-1.03.028c-3.198 0-6.14-.823-8.315-2.207C5.523 26.417 4 24.393 4 22v-.5A3.5 3.5 0 0 1 7.5 18h17q.32.001.625.056"/><path fill-opacity=".75" d="M25.125 18.056v4.166l-8.095 7.75q-.51.027-1.03.028c-3.198 0-6.14-.823-8.315-2.207C5.523 26.417 4 24.393 4 22v-.5A3.5 3.5 0 0 1 7.5 18h17q.32.001.625.056"/><path fill-opacity=".75" d="M25.125 18.056v4.166l-8.095 7.75q-.51.027-1.03.028c-3.198 0-6.14-.823-8.315-2.207C5.523 26.417 4 24.393 4 22v-.5A3.5 3.5 0 0 1 7.5 18h17q.32.001.625.056"/><path d="M16 16a7 7 0 1 0 0-14 7 7 0 0 0 0 14"/><path fill-rule="evenodd" d="M25 25.9a5 5 0 1 0-3.703-3.197l-5.15 5.15a.5.5 0 0 0-.147.354V30.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 1 .5-.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 1 .5-.5h1a.5.5 0 0 0 .5-.5zm3.121-5.607a1 1 0 1 1-1.414-1.414 1 1 0 0 1 1.414 1.414" clip-rule="evenodd"/>`,
  'filled': `<path d="M16 16a7 7 0 1 0 0-14 7 7 0 0 0 0 14m-8.5 2A3.5 3.5 0 0 0 4 21.5v.5c0 2.393 1.523 4.417 3.685 5.793 1.83 1.165 4.203 1.932 6.815 2.146v-1.732a2 2 0 0 1 .586-1.414l4.536-4.536a6.5 6.5 0 0 1 .61-4.257zm22.036 6.535A5 5 0 0 1 25 25.9v.601a.5.5 0 0 1-.5.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l5.151-5.151a5 5 0 1 1 8.238 1.832m-2.829-4.242a1 1 0 1 0 1.414-1.414 1 1 0 0 0-1.414 1.414"/>`,
  'regular': `<path d="M23 9A7 7 0 1 1 9 9a7 7 0 0 1 14 0m-2 0a5 5 0 1 0-10 0 5 5 0 0 0 10 0M7.5 18A3.5 3.5 0 0 0 4 21.5v.5c0 2.393 1.523 4.417 3.685 5.793 1.83 1.165 4.203 1.932 6.815 2.146v-1.732q0-.138.019-.274c-2.27-.206-4.27-.878-5.76-1.827C6.939 24.95 6 23.472 6 22v-.5A1.5 1.5 0 0 1 7.5 20h12.077a6.5 6.5 0 0 1 .655-2zm22.036 6.535A5 5 0 0 1 25 25.9v.601a.5.5 0 0 1-.5.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l5.151-5.151a5 5 0 1 1 8.238 1.832m-2.829-4.242a1 1 0 1 0 1.414-1.414 1 1 0 0 0-1.414 1.414"/>`
} as const;

export default function PersonKeyIcon({ 
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
        viewBox="0 0 32 32"
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

  const gradientId = 'personkeyicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
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