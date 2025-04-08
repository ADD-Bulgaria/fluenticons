
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M20.25 3.75a1 1 0 1 1 0 2H3.75a1 1 0 0 1 0-2zm-9.5 3.5a1 1 0 1 1 0 2h-7a1 1 0 0 1 0-2zm1 8a1 1 0 0 0-1-1h-7a1 1 0 1 0 0 2h7a1 1 0 0 0 1-1m-1-4.5a1 1 0 1 1 0 2h-7a1 1 0 1 1 0-2zm10.5 8a1 1 0 0 0-1-1H3.75a1 1 0 1 0 0 2h16.5a1 1 0 0 0 1-1m-2-7.75a2.25 2.25 0 0 0-4.5 0v4.75a1 1 0 1 1-2 0V11a4.25 4.25 0 0 1 8.5 0v4.75a1 1 0 1 1-2 0z"/>`,
  'regular': `<path d="M20.25 4a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1 0-1.5zm-9.5 3.5a.75.75 0 0 1 0 1.5h-7a.75.75 0 1 1 0-1.5zm.75 7.75a.75.75 0 0 0-.75-.75h-7a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 .75-.75M10.75 11a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1 0-1.5zM21 18.75a.75.75 0 0 0-.75-.75H3.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 .75-.75M19.5 11a2.5 2.5 0 0 0-5 0v4.75a.75.75 0 0 1-1.5 0V11a4 4 0 0 1 8 0v4.75a.75.75 0 0 1-1.5 0z"/>`
} as const;

export default function TextPositionSquareRightIcon({ 
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

  const gradientId = 'textpositionsquarerighticon_gradient';
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