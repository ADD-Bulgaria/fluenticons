
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20m-3.999-26.496A1.25 1.25 0 0 1 18.003 16l.001-.002.002-.002.003-.004.01-.012a3 3 0 0 1 .113-.141c.073-.088.177-.206.31-.345a8.7 8.7 0 0 1 1.152-1.005C20.591 13.764 22.092 13 24 13a6.25 6.25 0 0 1 6.25 6.25c0 1.969-.816 3.362-1.959 4.43-.89.83-2.032 1.502-3.063 2.109q-.3.176-.584.345c-1.236.742-2.313 1.473-3.1 2.469-.577.731-1.028 1.647-1.208 2.897H29a1.25 1.25 0 1 1 0 2.5H19c-.69 0-1.25-.56-1.25-1.25 0-2.454.711-4.277 1.831-5.696 1.09-1.38 2.512-2.305 3.776-3.063q.348-.209.673-.4c1.03-.608 1.883-1.113 2.554-1.74.732-.682 1.165-1.445 1.165-2.6a3.75 3.75 0 0 0-3.75-3.751c-1.217 0-2.213.486-2.933 1.01a6.2 6.2 0 0 0-1.017.935l-.043.052zm0 0"/>`,
  'regular': `<path d="M6.5 24c0-9.665 7.835-17.5 17.5-17.5S41.5 14.335 41.5 24 33.665 41.5 24 41.5 6.5 33.665 6.5 24M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4m-3.999 13.503a1.25 1.25 0 0 1-1.998-1.502l.001-.002.002-.002a3 3 0 0 1 .126-.157c.073-.088.177-.206.31-.345a8.7 8.7 0 0 1 1.152-1.005C20.591 13.764 22.092 13 24 13a6.25 6.25 0 0 1 6.25 6.25c0 1.969-.816 3.362-1.959 4.43-.89.83-2.032 1.502-3.063 2.109q-.3.176-.584.345c-1.236.742-2.313 1.473-3.1 2.469-.577.731-1.028 1.647-1.208 2.897H29a1.25 1.25 0 1 1 0 2.5H19c-.69 0-1.25-.56-1.25-1.25 0-2.454.711-4.277 1.831-5.696 1.09-1.38 2.512-2.305 3.776-3.063q.348-.209.673-.4c1.03-.608 1.883-1.113 2.554-1.74.732-.682 1.165-1.445 1.165-2.6a3.75 3.75 0 0 0-3.75-3.751c-1.217 0-2.213.486-2.933 1.01a6.2 6.2 0 0 0-1.017.935l-.043.052zm0 .002v-.002Z"/>`
} as const;

export default function NumberCircle2Icon({ 
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

  const gradientId = 'numbercircle2icon_gradient';
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