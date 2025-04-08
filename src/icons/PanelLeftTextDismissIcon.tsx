
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M10.25 7A6.25 6.25 0 0 0 4 13.25v21.5A6.25 6.25 0 0 0 10.25 41h13.214a13 13 0 0 1-.987-2.5H19v-29h18.75a3.75 3.75 0 0 1 3.75 3.75v10.49a13 13 0 0 1 2.5 1.88V13.25A6.25 6.25 0 0 0 37.75 7zM8.5 15c0-.69.56-1.25 1.25-1.25h3.5a1.25 1.25 0 1 1 0 2.5h-3.5c-.69 0-1.25-.56-1.25-1.25m0 9c0-.69.56-1.25 1.25-1.25h3.5a1.25 1.25 0 1 1 0 2.5h-3.5c-.69 0-1.25-.56-1.25-1.25m1.25 7.75h3.5a1.25 1.25 0 1 1 0 2.5h-3.5a1.25 1.25 0 1 1 0-2.5M46 35c0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11 11 4.925 11 11m-5.293-4.293a1 1 0 0 0-1.414-1.414L35 33.586l-4.293-4.293a1 1 0 0 0-1.414 1.414L33.586 35l-4.293 4.293a1 1 0 0 0 1.414 1.414L35 36.414l4.293 4.293a1 1 0 0 0 1.414-1.414L36.414 35z"/>`,
  'regular': `<path d="M8.5 15c0-.69.56-1.25 1.25-1.25h3.5a1.25 1.25 0 1 1 0 2.5h-3.5c-.69 0-1.25-.56-1.25-1.25m0 9c0-.69.56-1.25 1.25-1.25h3.5a1.25 1.25 0 1 1 0 2.5h-3.5c-.69 0-1.25-.56-1.25-1.25m1.25 7.75a1.25 1.25 0 1 0 0 2.5h3.5a1.25 1.25 0 1 0 0-2.5zM4 13.25A6.25 6.25 0 0 1 10.25 7h27.5A6.25 6.25 0 0 1 44 13.25v12.37a13 13 0 0 0-2.5-1.88V13.25a3.75 3.75 0 0 0-3.75-3.75H19v29h3.477c.243.874.576 1.71.987 2.5H10.25A6.25 6.25 0 0 1 4 34.75zm6.25-3.75a3.75 3.75 0 0 0-3.75 3.75v21.5a3.75 3.75 0 0 0 3.75 3.75h6.25v-29zM46 35c0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11 11 4.925 11 11m-5.293-4.293a1 1 0 0 0-1.414-1.414L35 33.586l-4.293-4.293a1 1 0 0 0-1.414 1.414L33.586 35l-4.293 4.293a1 1 0 0 0 1.414 1.414L35 36.414l4.293 4.293a1 1 0 0 0 1.414-1.414L36.414 35z"/>`
} as const;

export default function PanelLeftTextDismissIcon({ 
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

  const gradientId = 'panellefttextdismissicon_gradient';
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