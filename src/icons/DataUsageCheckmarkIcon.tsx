
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M4 10a6 6 0 0 1 6-6h24a6 6 0 0 1 6 6v12.996A13 13 0 0 0 35 22c-1.032 0-2.037.12-3 .348V13.25a1.25 1.25 0 1 0-2.5 0v9.967a13.05 13.05 0 0 0-6.25 6.214V23.25a1.25 1.25 0 1 0-2.5 0v7.5a1.25 1.25 0 0 0 1.61 1.197A13.08 13.08 0 0 0 22.996 40H10a6 6 0 0 1-6-6zm10.5 8.25a1.25 1.25 0 1 0-2.5 0v12.5a1.25 1.25 0 1 0 2.5 0zM46 35c0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11 11 4.925 11 11m-4.293-4.707a1 1 0 0 0-1.414 0L33 37.586l-3.293-3.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l8-8a1 1 0 0 0 0-1.414"/>`,
  'regular': `<path d="M10.25 4A6.25 6.25 0 0 0 4 10.25v23.5A6.25 6.25 0 0 0 10.25 40h12.746a13 13 0 0 1-.756-2.5H10.25a3.75 3.75 0 0 1-3.75-3.75v-23.5a3.75 3.75 0 0 1 3.75-3.75h23.5a3.75 3.75 0 0 1 3.75 3.75v11.99c.867.17 1.704.424 2.5.756V10.25A6.25 6.25 0 0 0 33.75 4zm12.11 27.947c.211-.877.511-1.719.89-2.516V23.25a1.25 1.25 0 1 0-2.5 0v7.5a1.25 1.25 0 0 0 1.61 1.197m7.14-8.73c.793-.37 1.63-.663 2.5-.87V13.25a1.25 1.25 0 1 0-2.5 0zm-15-4.967a1.25 1.25 0 1 0-2.5 0v12.5a1.25 1.25 0 1 0 2.5 0zM46 35c0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11 11 4.925 11 11m-4.293-4.707a1 1 0 0 0-1.414 0L33 37.586l-3.293-3.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l8-8a1 1 0 0 0 0-1.414"/>`
} as const;

export default function DataUsageCheckmarkIcon({ 
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

  const gradientId = 'datausagecheckmarkicon_gradient';
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