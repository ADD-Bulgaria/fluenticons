
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M26.373 5.846a3.75 3.75 0 0 0-4.745 0L8.378 16.67A3.75 3.75 0 0 0 7 19.574v19.674a3.75 3.75 0 0 0 3.75 3.75h26.5a3.75 3.75 0 0 0 3.75-3.75V19.574a3.75 3.75 0 0 0-1.377-2.904zM25.25 13.25v2.5a1.25 1.25 0 1 1-2.5 0v-2.5a1.25 1.25 0 1 1 2.5 0M24 22c.69 0 1.25.56 1.25 1.25v2.5a1.25 1.25 0 1 1-2.5 0v-2.5c0-.69.56-1.25 1.25-1.25m1.25 11.25v2.5a1.25 1.25 0 1 1-2.5 0v-2.5a1.25 1.25 0 1 1 2.5 0"/>`,
  'regular': `<path d="M23.21 7.782a1.25 1.25 0 0 1 1.58 0l13.25 10.824c.291.238.46.593.46.968v19.674c0 .69-.56 1.25-1.25 1.25h-26.5c-.69 0-1.25-.56-1.25-1.25V19.574c0-.375.169-.73.46-.968zm3.162-1.936a3.75 3.75 0 0 0-4.744 0L8.378 16.67A3.75 3.75 0 0 0 7 19.574v19.674a3.75 3.75 0 0 0 3.75 3.75h26.5a3.75 3.75 0 0 0 3.75-3.75V19.574a3.75 3.75 0 0 0-1.377-2.904zM25.25 13.25a1.25 1.25 0 0 0-2.5 0v2.5a1.25 1.25 0 1 0 2.5 0zm0 10a1.25 1.25 0 0 0-2.5 0v2.5a1.25 1.25 0 1 0 2.5 0zM24 32c.69 0 1.25.56 1.25 1.25v2.5a1.25 1.25 0 1 1-2.5 0v-2.5c0-.69.56-1.25 1.25-1.25"/>`
} as const;

export default function HomeSplitIcon({ 
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

  const gradientId = 'homespliticon_gradient';
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