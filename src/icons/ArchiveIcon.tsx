
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6.25 8.75a2.5 2.5 0 0 1 2.5-2.5h30.5a2.5 2.5 0 0 1 2.5 2.5v4a2.5 2.5 0 0 1-2.5 2.5H8.75a2.5 2.5 0 0 1-2.5-2.5zm2 9h31.5V34.5a7.25 7.25 0 0 1-7.25 7.25h-17a7.25 7.25 0 0 1-7.25-7.25zm12.25 4.5a1.25 1.25 0 1 0 0 2.5h7a1.25 1.25 0 1 0 0-2.5z"/>`,
  'regular': `<path d="M20.5 22.25a1.25 1.25 0 1 0 0 2.5h7a1.25 1.25 0 1 0 0-2.5zM6.25 10A3.75 3.75 0 0 1 10 6.25h28A3.75 3.75 0 0 1 41.75 10v4a3.75 3.75 0 0 1-2 3.317V34.5a7.25 7.25 0 0 1-7.25 7.25h-17a7.25 7.25 0 0 1-7.25-7.25V17.318a3.75 3.75 0 0 1-2-3.318zm4.5 7.75V34.5a4.75 4.75 0 0 0 4.75 4.75h17a4.75 4.75 0 0 0 4.75-4.75V17.75zm-.75-9c-.69 0-1.25.56-1.25 1.25v4c0 .69.56 1.25 1.25 1.25h28c.69 0 1.25-.56 1.25-1.25v-4c0-.69-.56-1.25-1.25-1.25z"/>`
} as const;

export default function ArchiveIcon({ 
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

  const gradientId = 'archiveicon_gradient';
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