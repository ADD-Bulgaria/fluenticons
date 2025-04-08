
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M34.807 4.583a1.25 1.25 0 0 1-.39 1.724L9.57 22h9.93v-2.75A2.25 2.25 0 0 1 21.75 17h7.75v-2.75A2.25 2.25 0 0 1 31.75 12h8A2.25 2.25 0 0 1 42 14.25v7.764a2.25 2.25 0 0 1 2 2.236v13.5A6.25 6.25 0 0 1 37.75 44h-27.5A6.25 6.25 0 0 1 4 37.75v-14.5c0-.429.22-.828.583-1.057l28.5-18a1.25 1.25 0 0 1 1.724.39M39.5 22v-7.5H32V22zm-10 0v-2.5H22V22z"/>`,
  'regular': `<path d="M34.807 4.583a1.25 1.25 0 0 1-.39 1.724L9.57 22h9.93v-2.75A2.25 2.25 0 0 1 21.75 17h7.75v-2.75A2.25 2.25 0 0 1 31.75 12h8A2.25 2.25 0 0 1 42 14.25v7.764a2.25 2.25 0 0 1 2 2.236v13.5A6.25 6.25 0 0 1 37.75 44h-27.5A6.25 6.25 0 0 1 4 37.75v-14.5c0-.429.22-.828.583-1.057l28.5-18a1.25 1.25 0 0 1 1.724.39M39.5 22v-7.5H32V22zm-10 0v-2.5H22V22zm-23 2.5v13.25a3.75 3.75 0 0 0 3.75 3.75h27.5a3.75 3.75 0 0 0 3.75-3.75V24.5z"/>`
} as const;

export default function BinFullIcon({ 
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

  const gradientId = 'binfullicon_gradient';
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