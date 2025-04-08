
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6.25 2A2.25 2.25 0 0 0 4 4.25v6.5A2.25 2.25 0 0 0 6.25 13H9.5v7.5H7.75a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5H14.5V13h3.25A2.25 2.25 0 0 0 20 10.75v-6.5A2.25 2.25 0 0 0 17.75 2zM11 20.5V13h2v7.5z"/>`,
  'regular': `<path d="M4 4.25A2.25 2.25 0 0 1 6.25 2h11.5A2.25 2.25 0 0 1 20 4.25v6.5A2.25 2.25 0 0 1 17.75 13H14.5v7.5h1.75a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5H9.5V13H6.25A2.25 2.25 0 0 1 4 10.75zM11 13v7.5h2V13zM6.25 3.5a.75.75 0 0 0-.75.75v6.5c0 .414.336.75.75.75h11.5a.75.75 0 0 0 .75-.75v-6.5a.75.75 0 0 0-.75-.75z"/>`
} as const;

export default function KioskIcon({ 
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

  const gradientId = 'kioskicon_gradient';
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