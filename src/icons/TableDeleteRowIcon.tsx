
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M3 4a1 1 0 0 1 1-1h5.5v6H6.75A3.75 3.75 0 0 1 3 5.25zm14 5h-6V3h6zm4.25 0H18.5V3H24a1 1 0 0 1 1 1v1.25A3.75 3.75 0 0 1 21.25 9M25 22.75A3.75 3.75 0 0 0 21.25 19H18.5v6H24a1 1 0 0 0 1-1zM17 19h-6v6h6zM6.75 19H9.5v6H4a1 1 0 0 1-1-1v-1.25A3.75 3.75 0 0 1 6.75 19m-4-5.75h7.727l.072.076.674.674-.674.674-.072.076H2.75a.75.75 0 0 1 0-1.5m14.45.076q.039-.037.073-.076h7.977a.75.75 0 0 1 0 1.5h-7.977l-.072-.076-.674-.674zm-4.67-1.856a.75.75 0 1 0-1.06 1.06L12.94 14l-1.47 1.47a.75.75 0 1 0 1.06 1.06L14 15.06l1.47 1.47a.75.75 0 1 0 1.06-1.06L15.06 14l1.47-1.47a.75.75 0 1 0-1.06-1.06L14 12.94z"/>`,
  'regular': `<path d="M2.75 13.25h7.727l.072.076.674.674-.674.674-.072.076H2.75a.75.75 0 0 1 0-1.5m14.45.076q.039-.037.073-.076h7.977a.75.75 0 0 1 0 1.5h-7.977l-.072-.076-.674-.674zm-4.67-1.856a.75.75 0 1 0-1.06 1.06L12.94 14l-1.47 1.47a.75.75 0 1 0 1.06 1.06L14 15.06l1.47 1.47a.75.75 0 1 0 1.06-1.06L15.06 14l1.47-1.47a.75.75 0 1 0-1.06-1.06L14 12.94zM25 3.75a.75.75 0 0 0-1.5 0v1.5a2.25 2.25 0 0 1-2.25 2.25H18.5V3.75a.75.75 0 0 0-1.5 0V7.5h-6V3.75a.75.75 0 0 0-1.5 0V7.5H6.75A2.25 2.25 0 0 1 4.5 5.25v-1.5a.75.75 0 0 0-1.5 0v1.5A3.75 3.75 0 0 0 6.75 9h14.5A3.75 3.75 0 0 0 25 5.25zm0 19A3.75 3.75 0 0 0 21.25 19H6.75A3.75 3.75 0 0 0 3 22.75v2.5a.75.75 0 0 0 1.5 0v-2.5a2.25 2.25 0 0 1 2.25-2.25H9.5v4.75a.75.75 0 0 0 1.5 0V20.5h6v4.75a.75.75 0 0 0 1.5 0V20.5h2.75a2.25 2.25 0 0 1 2.25 2.25v2.5a.75.75 0 0 0 1.5 0z"/>`
} as const;

export default function TableDeleteRowIcon({ 
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
        viewBox="0 0 28 28"
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

  const gradientId = 'tabledeleterowicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 28"
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