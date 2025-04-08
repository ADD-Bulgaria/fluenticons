
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M3 6.25A3.25 3.25 0 0 1 6.25 3h11.5A3.25 3.25 0 0 1 21 6.25v8.655l-1.26-2.522c-.656-1.314-2.181-1.692-3.337-1.133H11.25a.75.75 0 1 0 0 1.5h3.832L13.958 15H11.25a.75.75 0 1 0 0 1.5h1.959l-1.94 3.88a2.5 2.5 0 0 0-.215.62H6.25A3.25 3.25 0 0 1 3 17.75zm4.75 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3.5-1.75a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5zM8.75 12a1 1 0 1 0-2 0 1 1 0 0 0 2 0m-1 4.75a1 1 0 1 0 0-2 1 1 0 0 0 0 2m8.411-3.92c.553-1.107 2.133-1.107 2.686 0l3.997 7.998A1.5 1.5 0 0 1 21.5 23h-7.994a1.5 1.5 0 0 1-1.343-2.172zm1.843 2.666a.5.5 0 0 0-1 0v3.001a.5.5 0 0 0 1 0zm-.5 5.503a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>`,
  'regular': `<path d="M7.75 9.25a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3.5-1.75a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5zm0 3.75a.75.75 0 1 0 0 1.5h3.832l.183-.367c.265-.53.672-.908 1.138-1.133zm0 3.75h2.708l-.75 1.5H11.25a.75.75 0 1 1 0-1.5m-5 4.5h5.46l-.44.88a2.5 2.5 0 0 0-.216.62H6.25A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3h11.5A3.25 3.25 0 0 1 21 6.25v8.655l-1.26-2.522a2.6 2.6 0 0 0-.24-.391V6.25a1.75 1.75 0 0 0-1.75-1.75H6.25A1.75 1.75 0 0 0 4.5 6.25v11.5c0 .966.784 1.75 1.75 1.75m2.5-7.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1 4.75a1 1 0 1 0 0-2 1 1 0 0 0 0 2m8.411-3.92c.553-1.107 2.133-1.107 2.686 0l3.997 7.998A1.5 1.5 0 0 1 21.5 23h-7.994a1.5 1.5 0 0 1-1.343-2.172zm1.843 2.666a.5.5 0 0 0-1 0v3.001a.5.5 0 0 0 1 0zm-.5 5.503a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>`
} as const;

export default function TextBulletListSquareWarningIcon({ 
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
        viewBox="0 0 24 24"
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

  const gradientId = 'textbulletlistsquarewarningicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
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