
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M7 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0m14 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0M7 19a2 2 0 1 1-4 0 2 2 0 0 1 4 0M8 5c0 .35-.06.687-.17 1h4.67a.5.5 0 0 1 .5.5V9h-1.5A2.5 2.5 0 0 0 9 11.5V13H6.5a.5.5 0 0 1-.5-.5V7.83a3 3 0 0 1-2 0v4.67A2.5 2.5 0 0 0 6.5 15H9v2.5a2.5 2.5 0 0 0 2.498 2.5A6.5 6.5 0 0 1 11 17.5v-6a.5.5 0 0 1 .5-.5h6c.886 0 1.73.177 2.5.498A2.5 2.5 0 0 0 17.5 9H15V6.5A2.5 2.5 0 0 0 12.5 4H7.83c.11.313.17.65.17 1m15 12.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-7.146-2.354a.5.5 0 0 0-.708.708l1.647 1.646-1.647 1.646a.5.5 0 0 0 .708.708l1.646-1.647 1.646 1.647a.5.5 0 0 0 .708-.708L18.207 17.5l1.647-1.646a.5.5 0 0 0-.708-.708L17.5 16.793z"/>`,
  'regular': `<path d="M7 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0m14 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0M7 19a2 2 0 1 1-4 0 2 2 0 0 1 4 0M8 5q0 .255-.041.5H12.5a1 1 0 0 1 1 1V9h-2A2.5 2.5 0 0 0 9 11.5v2H6.5a1 1 0 0 1-1-1V7.959a3 3 0 0 1-1.5-.13V12.5A2.5 2.5 0 0 0 6.5 15H9v2.5a2.5 2.5 0 0 0 2.498 2.5 6.5 6.5 0 0 1-.436-1.6 1 1 0 0 1-.562-.9v-6a1 1 0 0 1 1-1h6a1 1 0 0 1 .9.562 6.5 6.5 0 0 1 1.6.436A2.5 2.5 0 0 0 17.5 9H15V6.5A2.5 2.5 0 0 0 12.5 4H7.83c.11.313.17.65.17 1m15 12.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-5.5-.707-1.646-1.647a.5.5 0 0 0-.708.708l1.647 1.646-1.647 1.646a.5.5 0 0 0 .708.708l1.646-1.647 1.646 1.647a.5.5 0 0 0 .708-.708L18.207 17.5l1.647-1.646a.5.5 0 0 0-.708-.708z"/>`
} as const;

export default function GroupDismissIcon({ 
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

  const gradientId = 'groupdismissicon_gradient';
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