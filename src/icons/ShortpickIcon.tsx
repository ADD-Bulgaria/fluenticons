
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M8.964 3.5H8.5v2h.464a.75.75 0 0 1 0 1.5H8.25C7.56 7 7 6.44 7 5.75v-2.5C7 2.56 7.56 2 8.25 2h.714a.75.75 0 0 1 0 1.5M11.5 2a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zm3.536 0a.75.75 0 0 0 0 1.5h.464v2h-.464a.75.75 0 0 0 0 1.5h.714C16.44 7 17 6.44 17 5.75v-2.5C17 2.56 16.44 2 15.75 2zM11.5 5.5a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zM4.75 8a.75.75 0 0 1 .75.75v10c0 .966.784 1.75 1.75 1.75h9.5a1.75 1.75 0 0 0 1.75-1.75v-10a.75.75 0 0 1 1.5 0v10A3.25 3.25 0 0 1 16.75 22h-9.5A3.25 3.25 0 0 1 4 18.75v-10A.75.75 0 0 1 4.75 8m3.5 6C7.56 14 7 14.56 7 15.25v2.5c0 .69.56 1.25 1.25 1.25h7.5c.69 0 1.25-.56 1.25-1.25v-2.5c0-.69-.56-1.25-1.25-1.25zm.25-4.5h.464a.75.75 0 0 0 0-1.5H8.25C7.56 8 7 8.56 7 9.25v2.5c0 .69.56 1.25 1.25 1.25h.714a.75.75 0 0 0 0-1.5H8.5zm2.25-.75A.75.75 0 0 1 11.5 8h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m3.536 0a.75.75 0 0 1 .75-.75h.714c.69 0 1.25.56 1.25 1.25v2.5c0 .69-.56 1.25-1.25 1.25h-.714a.75.75 0 0 1 0-1.5h.464v-2h-.464a.75.75 0 0 1-.75-.75m-3.536 3.5a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75"/>`,
  'regular': `<path d="M8.964 3.5H8.5v2h.464a.75.75 0 0 1 0 1.5H8.25C7.56 7 7 6.44 7 5.75v-2.5C7 2.56 7.56 2 8.25 2h.714a.75.75 0 0 1 0 1.5M11.5 2a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zm3.536 0a.75.75 0 0 0 0 1.5h.464v2h-.464a.75.75 0 0 0 0 1.5h.714C16.44 7 17 6.44 17 5.75v-2.5C17 2.56 16.44 2 15.75 2zM11.5 5.5a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zm-6 3.25a.75.75 0 0 0-1.5 0v10A3.25 3.25 0 0 0 7.25 22h9.5A3.25 3.25 0 0 0 20 18.75v-10a.75.75 0 0 0-1.5 0v10a1.75 1.75 0 0 1-1.75 1.75h-9.5a1.75 1.75 0 0 1-1.75-1.75zM8.25 14C7.56 14 7 14.56 7 15.25v2.5c0 .69.56 1.25 1.25 1.25h7.5c.69 0 1.25-.56 1.25-1.25v-2.5c0-.69-.56-1.25-1.25-1.25zm.25 3.5v-2h7v2zm0-8h.464a.75.75 0 0 0 0-1.5H8.25C7.56 8 7 8.56 7 9.25v2.5c0 .69.56 1.25 1.25 1.25h.714a.75.75 0 0 0 0-1.5H8.5zm2.25-.75A.75.75 0 0 1 11.5 8h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m3.536 0a.75.75 0 0 1 .75-.75h.714c.69 0 1.25.56 1.25 1.25v2.5c0 .69-.56 1.25-1.25 1.25h-.714a.75.75 0 0 1 0-1.5h.464v-2h-.464a.75.75 0 0 1-.75-.75m-3.536 3.5a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75"/>`
} as const;

export default function ShortpickIcon({ 
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

  const gradientId = 'shortpickicon_gradient';
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