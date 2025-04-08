
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M27 30a1 1 0 0 0 1-1V16.25A3.25 3.25 0 0 0 24.75 13H22V5.25A3.25 3.25 0 0 0 18.75 2H7a3 3 0 0 0-3 3v24a1 1 0 0 0 1 1z"/><path d="M27 30a1 1 0 0 0 1-1V16.25A3.25 3.25 0 0 0 24.75 13H22V5.25A3.25 3.25 0 0 0 18.75 2H7a3 3 0 0 0-3 3v24a1 1 0 0 0 1 1z"/><path d="M27 30a1 1 0 0 0 1-1V16.25A3.25 3.25 0 0 0 24.75 13H22V5.25A3.25 3.25 0 0 0 18.75 2H7a3 3 0 0 0-3 3v24a1 1 0 0 0 1 1z"/><path d="M10.5 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m0 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m1.5 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m3.5-8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m1.5 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M21 25h5v6h-5z"/><path d="M22.448 17.888a1.625 1.625 0 0 1 2.105 0l4.875 4.144c.363.309.573.761.573 1.238v6.48c0 .69-.56 1.25-1.25 1.25h-3.25v-4.5a1 1 0 0 0-.996-1h-2.009a1 1 0 0 0-.996 1V31h-3.25c-.69 0-1.25-.56-1.25-1.25v-6.48c0-.477.209-.929.573-1.238z"/><path fill-rule="evenodd" d="M22.687 16.05a1.25 1.25 0 0 1 1.627 0l7 6a1.25 1.25 0 1 1-1.628 1.9L23.5 18.645l-6.186 5.303a1.25 1.25 0 0 1-1.627-1.898z" clip-rule="evenodd"/>`,
  'filled': `<path d="M3 5.5A2.5 2.5 0 0 1 5.5 3h6A2.5 2.5 0 0 1 14 5.5v4a.5.5 0 0 0 .5.5h1a2.5 2.5 0 0 1 2.5 2.5v.687l-4.084 3.455a4 4 0 0 0-1.416 3.054V24h-7A2.5 2.5 0 0 1 3 21.5zM7 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2m1 3a1 1 0 1 0-2 0 1 1 0 0 0 2 0m2-7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m1 3a1 1 0 1 0-2 0 1 1 0 0 0 2 0m-.5 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2m12.696-2.796a2.5 2.5 0 0 0-3.392 0l-5 4.616A2.5 2.5 0 0 0 14 19.657V26.5a2.5 2.5 0 0 0 2.5 2.5h1a2.5 2.5 0 0 0 2.5-2.5v-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v3a2.5 2.5 0 0 0 2.5 2.5h1a2.5 2.5 0 0 0 2.5-2.5v-6.843a2.5 2.5 0 0 0-.804-1.837zm-2.035 1.47a.5.5 0 0 1 .678 0l5 4.615a.5.5 0 0 1 .161.368V26.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-3a2.5 2.5 0 0 0-2.5-2.5h-2a2.5 2.5 0 0 0-2.5 2.5v3a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-6.843a.5.5 0 0 1 .16-.368z"/>`,
  'regular': `<path d="M5.5 5a.5.5 0 0 0-.5.5v16a.5.5 0 0 0 .5.5h7v2h-7A2.5 2.5 0 0 1 3 21.5v-16A2.5 2.5 0 0 1 5.5 3h6A2.5 2.5 0 0 1 14 5.5v4a.5.5 0 0 0 .5.5h1a2.5 2.5 0 0 1 2.5 2.5v.687l-2 1.692V12.5a.5.5 0 0 0-.5-.5h-1A2.5 2.5 0 0 1 12 9.5v-4a.5.5 0 0 0-.5-.5zm17.696 8.204a2.5 2.5 0 0 0-3.392 0l-5 4.616A2.5 2.5 0 0 0 14 19.657V26.5a2.5 2.5 0 0 0 2.5 2.5h1a2.5 2.5 0 0 0 2.5-2.5v-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v3a2.5 2.5 0 0 0 2.5 2.5h1a2.5 2.5 0 0 0 2.5-2.5v-6.843a2.5 2.5 0 0 0-.804-1.837zm-2.035 1.47a.5.5 0 0 1 .678 0l5 4.615a.5.5 0 0 1 .161.368V26.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-3a2.5 2.5 0 0 0-2.5-2.5h-2a2.5 2.5 0 0 0-2.5 2.5v3a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-6.843a.5.5 0 0 1 .16-.368zM8 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2m1 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0m2-7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m1 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-.5 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>`
} as const;

export default function BuildingHomeIcon({ 
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

  const gradientId = 'buildinghomeicon_gradient';
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