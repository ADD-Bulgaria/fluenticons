
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M3 6.25A3.25 3.25 0 0 1 6.25 3h19.5A3.25 3.25 0 0 1 29 6.25v4.5A3.25 3.25 0 0 1 25.75 14H9v6.5a2.5 2.5 0 0 0 2.5 2.5H16v-1.75A3.25 3.25 0 0 1 19.25 18h6.5A3.25 3.25 0 0 1 29 21.25v4.5A3.25 3.25 0 0 1 25.75 29h-6.5A3.25 3.25 0 0 1 16 25.75V25h-4.5A4.5 4.5 0 0 1 7 20.5V14h-.75A3.25 3.25 0 0 1 3 10.75z"/>`,
  'regular': `<path d="M3 6.25A3.25 3.25 0 0 1 6.25 3h19.5A3.25 3.25 0 0 1 29 6.25v4.5A3.25 3.25 0 0 1 25.75 14H9v6.5a2.5 2.5 0 0 0 2.5 2.5H16v-1.75A3.25 3.25 0 0 1 19.25 18h6.5A3.25 3.25 0 0 1 29 21.25v4.5A3.25 3.25 0 0 1 25.75 29h-6.5A3.25 3.25 0 0 1 16 25.75V25h-4.5A4.5 4.5 0 0 1 7 20.5V14h-.75A3.25 3.25 0 0 1 3 10.75zm15 19.5c0 .69.56 1.25 1.25 1.25h6.5c.69 0 1.25-.56 1.25-1.25v-4.5c0-.69-.56-1.25-1.25-1.25h-6.5c-.69 0-1.25.56-1.25 1.25zM25.75 12c.69 0 1.25-.56 1.25-1.25v-4.5C27 5.56 26.44 5 25.75 5H6.25C5.56 5 5 5.56 5 6.25v4.5c0 .69.56 1.25 1.25 1.25z"/>`
} as const;

export default function RowChildIcon({ 
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
        viewBox="0 0 32 32"
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

  const gradientId = 'rowchildicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
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