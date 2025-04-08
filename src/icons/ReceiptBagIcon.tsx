
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M4 5.25A2.25 2.25 0 0 1 6.25 3h9.5A2.25 2.25 0 0 1 18 5.25V14h4v3.75A3.25 3.25 0 0 1 18.75 21h-7.26q.01-.123.01-.25v-6c0-.698-.409-1.3-1-1.582V13q0-.255-.035-.5h3.285a.75.75 0 0 0 0-1.5H9.873A3.496 3.496 0 0 0 5.75 9.73 3.5 3.5 0 0 0 4 9.535zM18 19.5h.75a1.75 1.75 0 0 0 1.75-1.75V15.5H18zM7.5 7.75c0 .414.336.75.75.75h5.5a.75.75 0 0 0 0-1.5h-5.5a.75.75 0 0 0-.75.75m-6.5 7a.75.75 0 0 1 .75-.75H2v-1a2.5 2.5 0 0 1 3.75-2.165A2.5 2.5 0 0 1 9.5 13v1h.25a.75.75 0 0 1 .75.75v6A2.25 2.25 0 0 1 8.25 23h-5A2.25 2.25 0 0 1 1 20.75zM7 13v1h1v-1a1 1 0 0 0-1.2-.98c.129.3.2.632.2.98m-1.5 1v-1a1 1 0 0 0-2 0v1z"/>`,
  'regular': `<path d="M6.25 3A2.25 2.25 0 0 0 4 5.25v4.285a3.5 3.5 0 0 1 1.5.11V5.25a.75.75 0 0 1 .75-.75h9.5a.75.75 0 0 1 .75.75V19.5h-5v1.25q0 .127-.01.25h7.26A3.25 3.25 0 0 0 22 17.75V14h-4V5.25A2.25 2.25 0 0 0 15.75 3zm4.215 9.5h3.285a.75.75 0 0 0 0-1.5H9.873c.305.438.513.948.592 1.5m8.285 7H18v-4h2.5v2.25a1.75 1.75 0 0 1-1.75 1.75M7.5 7.75A.75.75 0 0 1 8.25 7h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75m-6.5 7a.75.75 0 0 1 .75-.75H2v-1a2.5 2.5 0 0 1 3.75-2.165A2.5 2.5 0 0 1 9.5 13v1h.25a.75.75 0 0 1 .75.75v6A2.25 2.25 0 0 1 8.25 23h-5A2.25 2.25 0 0 1 1 20.75zM7 13v1h1v-1a1 1 0 0 0-1.2-.98c.129.3.2.632.2.98m-1.5 1v-1a1 1 0 0 0-2 0v1z"/>`
} as const;

export default function ReceiptBagIcon({ 
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

  const gradientId = 'receiptbagicon_gradient';
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