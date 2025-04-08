
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6 10.25A4.25 4.25 0 0 1 10.25 6h11.5A4.25 4.25 0 0 1 26 10.25v7.5A4.25 4.25 0 0 1 21.75 22h-11.5A4.25 4.25 0 0 1 6 17.75zM34.25 6A4.25 4.25 0 0 0 30 10.25v7.5A4.25 4.25 0 0 0 34.25 22h3.5A4.25 4.25 0 0 0 42 17.75v-7.5A4.25 4.25 0 0 0 37.75 6zm-24 20A4.25 4.25 0 0 0 6 30.25v7.5A4.25 4.25 0 0 0 10.25 42h3.5A4.25 4.25 0 0 0 18 37.75v-7.5A4.25 4.25 0 0 0 13.75 26zm16 0A4.25 4.25 0 0 0 22 30.25v7.5A4.25 4.25 0 0 0 26.25 42h11.5A4.25 4.25 0 0 0 42 37.75v-7.5A4.25 4.25 0 0 0 37.75 26z"/>`,
  'regular': `<path d="M6 10.25A4.25 4.25 0 0 1 10.25 6h11.5A4.25 4.25 0 0 1 26 10.25v7.5A4.25 4.25 0 0 1 21.75 22h-11.5A4.25 4.25 0 0 1 6 17.75zm4.25-1.75a1.75 1.75 0 0 0-1.75 1.75v7.5c0 .966.784 1.75 1.75 1.75h11.5a1.75 1.75 0 0 0 1.75-1.75v-7.5a1.75 1.75 0 0 0-1.75-1.75zM30 10.25A4.25 4.25 0 0 1 34.25 6h3.5A4.25 4.25 0 0 1 42 10.25v7.5A4.25 4.25 0 0 1 37.75 22h-3.5A4.25 4.25 0 0 1 30 17.75zm4.25-1.75a1.75 1.75 0 0 0-1.75 1.75v7.5c0 .966.783 1.75 1.75 1.75h3.5a1.75 1.75 0 0 0 1.75-1.75v-7.5a1.75 1.75 0 0 0-1.75-1.75zm-24 17.5A4.25 4.25 0 0 0 6 30.25v7.5A4.25 4.25 0 0 0 10.25 42h3.5A4.25 4.25 0 0 0 18 37.75v-7.5A4.25 4.25 0 0 0 13.75 26zM8.5 30.25c0-.966.784-1.75 1.75-1.75h3.5c.966 0 1.75.784 1.75 1.75v7.5a1.75 1.75 0 0 1-1.75 1.75h-3.5a1.75 1.75 0 0 1-1.75-1.75zm13.5 0A4.25 4.25 0 0 1 26.25 26h11.5A4.25 4.25 0 0 1 42 30.25v7.5A4.25 4.25 0 0 1 37.75 42h-11.5A4.25 4.25 0 0 1 22 37.75zm4.25-1.75a1.75 1.75 0 0 0-1.75 1.75v7.5c0 .967.784 1.75 1.75 1.75h11.5a1.75 1.75 0 0 0 1.75-1.75v-7.5a1.75 1.75 0 0 0-1.75-1.75z"/>`
} as const;

export default function GlanceHorizontalIcon({ 
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

  const gradientId = 'glancehorizontalicon_gradient';
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