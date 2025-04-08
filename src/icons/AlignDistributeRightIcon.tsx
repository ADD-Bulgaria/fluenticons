
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M15 1.5a.5.5 0 0 0-1 0v13a.5.5 0 0 0 1 0zm-7 0a.5.5 0 0 0-1 0v13a.5.5 0 0 0 1 0zM3.5 13A1.5 1.5 0 0 1 2 11.5v-7A1.5 1.5 0 0 1 3.5 3h1A1.5 1.5 0 0 1 6 4.5v7A1.5 1.5 0 0 1 4.5 13zM9 9.5a1.5 1.5 0 0 0 1.5 1.5h1A1.5 1.5 0 0 0 13 9.5v-3A1.5 1.5 0 0 0 11.5 5h-1A1.5 1.5 0 0 0 9 6.5z"/>`,
  'regular': `<path d="M15 1.5a.5.5 0 0 0-1 0v13a.5.5 0 0 0 1 0zm-7 0a.5.5 0 0 0-1 0v13a.5.5 0 0 0 1 0zM3.5 13A1.5 1.5 0 0 1 2 11.5v-7A1.5 1.5 0 0 1 3.5 3h1A1.5 1.5 0 0 1 6 4.5v7A1.5 1.5 0 0 1 4.5 13zM3 11.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5zm6-2a1.5 1.5 0 0 0 1.5 1.5h1A1.5 1.5 0 0 0 13 9.5v-3A1.5 1.5 0 0 0 11.5 5h-1A1.5 1.5 0 0 0 9 6.5zm1.5.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5z"/>`
} as const;

export default function AlignDistributeRightIcon({ 
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
        viewBox="0 0 16 16"
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

  const gradientId = 'aligndistributerighticon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
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