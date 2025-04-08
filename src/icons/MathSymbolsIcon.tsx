
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12.5 4A1.5 1.5 0 0 1 14 5.5V11h5.5a1.5 1.5 0 0 1 0 3H14v5.5a1.5 1.5 0 0 1-3 0V14H5.5a1.5 1.5 0 0 1 0-3H11V5.5A1.5 1.5 0 0 1 12.5 4m15.998 7a1.5 1.5 0 0 0 0 3h14a1.5 1.5 0 1 0 0-3zm-1.496 24.5a1.5 1.5 0 0 1 1.5-1.5h14a1.5 1.5 0 0 1 0 3h-14a1.5 1.5 0 0 1-1.5-1.5M35.5 32a2 2 0 1 0 0-4 2 2 0 0 0 0 4m2 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0M4.19 27.19a1.5 1.5 0 0 1 2.12 0l6.19 6.189 6.19-6.19a1.5 1.5 0 0 1 2.12 2.122L14.622 35.5l6.19 6.19a1.5 1.5 0 0 1-2.122 2.12l-6.19-6.188-6.19 6.19a1.5 1.5 0 0 1-2.12-2.122l6.189-6.189-6.19-6.19a1.5 1.5 0 0 1 0-2.12"/>`,
  'regular': `<path d="M12.75 4c.69 0 1.25.56 1.25 1.25v6.25h5.75a1.25 1.25 0 1 1 0 2.5H14v5.75a1.25 1.25 0 1 1-2.5 0V14H5.25a1.25 1.25 0 1 1 0-2.5h6.25V5.25c0-.69.56-1.25 1.25-1.25m15.5 7.5a1.25 1.25 0 1 0 0 2.5h14.5a1.25 1.25 0 1 0 0-2.5zM27 35.25c0-.69.56-1.25 1.25-1.25h14.5a1.25 1.25 0 1 1 0 2.5h-14.5c-.69 0-1.25-.56-1.25-1.25M35.5 32a2 2 0 1 0 0-4 2 2 0 0 0 0 4m2 8.75a2 2 0 1 1-4 0 2 2 0 0 1 4 0M4.366 29.134a1.25 1.25 0 0 1 1.768-1.768l6.366 6.366 6.366-6.366a1.25 1.25 0 0 1 1.768 1.768L14.268 35.5l6.366 6.366a1.25 1.25 0 0 1-1.768 1.768L12.5 37.268l-6.366 6.366a1.25 1.25 0 0 1-1.768-1.768l6.366-6.366z"/>`
} as const;

export default function MathSymbolsIcon({ 
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

  const gradientId = 'mathsymbolsicon_gradient';
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