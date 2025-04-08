
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M34.625 6.125a7.5 7.5 0 0 1 7.5 7.5v9a1.5 1.5 0 0 1-3 0v-9a4.5 4.5 0 0 0-4.5-4.5h-21.25a4.5 4.5 0 0 0-4.5 4.5v21a4.5 4.5 0 0 0 4.5 4.5h9.25a1.5 1.5 0 0 1 0 3h-9.25a7.5 7.5 0 0 1-7.5-7.5v-21a7.5 7.5 0 0 1 7.5-7.5zM18 19.5a1.5 1.5 0 0 1 1.5-1.5h13a1.5 1.5 0 0 1 0 3h-9.379l14.44 14.44a1.5 1.5 0 0 1-2.122 2.12L21 23.122V32.5a1.5 1.5 0 0 1-3 0z"/>`,
  'regular': `<path d="M40.75 24c.69 0 1.25-.56 1.25-1.25v-9.5A7.25 7.25 0 0 0 34.75 6h-21.5A7.25 7.25 0 0 0 6 13.25v21.5A7.25 7.25 0 0 0 13.25 42h9.5a1.25 1.25 0 1 0 0-2.5h-9.5a4.75 4.75 0 0 1-4.75-4.75v-21.5a4.75 4.75 0 0 1 4.75-4.75h21.5a4.75 4.75 0 0 1 4.75 4.75v9.5c0 .69.56 1.25 1.25 1.25m-21.5-6c-.69 0-1.25.56-1.25 1.25v13.5a1.25 1.25 0 1 0 2.5 0V22.268l15.366 15.366a1.25 1.25 0 1 0 1.768-1.768L22.268 20.5H32.75a1.25 1.25 0 1 0 0-2.5z"/>`
} as const;

export default function OpenFolderIcon({ 
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

  const gradientId = 'openfoldericon_gradient';
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