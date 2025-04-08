
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M4.25 2A2.25 2.25 0 0 0 2 4.25v7.5A2.25 2.25 0 0 0 4.25 14h1.942l1.894 3.6a.75.75 0 0 0 1.328 0l1.894-3.6h1.942a2.25 2.25 0 0 0 2.25-2.25v-7.5A2.25 2.25 0 0 0 13.25 2zM5.5 6.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75c0 2.151-1.288 3.599-1.72 4.03a.75.75 0 1 1-1.06-1.06c.2-.201.612-.662.915-1.326A.75.75 0 0 1 5.5 7.25zm4 0a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75c0 2.151-1.288 3.599-1.72 4.03a.75.75 0 1 1-1.06-1.06c.2-.201.612-.662.915-1.326A.75.75 0 0 1 9.5 7.25zM2.75 16.5h3.628l.79 1.5H2.75a.75.75 0 0 1 0-1.5m18.5 1.5H10.333l.79-1.5H21.25a.75.75 0 0 1 0 1.5M2 21.25a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5h-12a.75.75 0 0 1-.75-.75"/>`,
  'regular': `<path d="M6.25 5.5a.75.75 0 0 0-.75.75v1a.75.75 0 0 0 1.135.644A4.7 4.7 0 0 1 5.72 9.22a.75.75 0 1 0 1.06 1.06c.432-.43 1.72-1.879 1.72-4.03a.75.75 0 0 0-.75-.75zm4 0a.75.75 0 0 0-.75.75v1a.75.75 0 0 0 1.135.644A4.7 4.7 0 0 1 9.72 9.22a.75.75 0 1 0 1.06 1.06c.432-.431 1.72-1.879 1.72-4.03a.75.75 0 0 0-.75-.75zM2 4.25A2.25 2.25 0 0 1 4.25 2h9a2.25 2.25 0 0 1 2.25 2.25v7.5A2.25 2.25 0 0 1 13.25 14h-1.942l-1.894 3.6a.75.75 0 0 1-1.328 0L6.192 14H4.25A2.25 2.25 0 0 1 2 11.75zm2.25-.75a.75.75 0 0 0-.75.75v7.5c0 .414.336.75.75.75h2.395a.75.75 0 0 1 .663.4l1.442 2.74 1.441-2.74a.75.75 0 0 1 .664-.4h2.395a.75.75 0 0 0 .75-.75v-7.5a.75.75 0 0 0-.75-.75zm2.128 13H2.75a.75.75 0 0 0 0 1.5h4.417zm3.955 1.5H21.25a.75.75 0 0 0 0-1.5H11.122zM2.75 20.5a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 0-1.5z"/>`
} as const;

export default function TooltipQuoteIcon({ 
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

  const gradientId = 'tooltipquoteicon_gradient';
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