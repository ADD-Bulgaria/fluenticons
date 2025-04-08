
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M5.007 5.007Q5.127 5 5.25 5h14.5A4.25 4.25 0 0 1 24 9.25v4.615a7.5 7.5 0 0 1 1.5 1.045V9.25a5.75 5.75 0 0 0-5.75-5.75h-12a3.25 3.25 0 0 0-2.743 1.507M23 9.25v4.177A7.5 7.5 0 0 0 13.15 22h-.11L8 25.75c-.22.17-.48.25-.74.25h-.01c-.19 0-.38-.04-.56-.13-.43-.21-.69-.64-.69-1.12V22h-.75C3.46 22 2 20.54 2 18.75v-9.5C2 7.46 3.46 6 5.25 6h14.5C21.54 6 23 7.46 23 9.25m4 11.25a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0m-2.646-2.854a.5.5 0 0 0-.708 0L19 22.293l-1.646-1.647a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0l5-5a.5.5 0 0 0 0-.708"/>`,
  'regular': `<path d="M5.007 5.007Q5.127 5 5.25 5h14.5A4.25 4.25 0 0 1 24 9.25v4.615a7.5 7.5 0 0 1 1.5 1.045V9.25a5.75 5.75 0 0 0-5.75-5.75h-12a3.25 3.25 0 0 0-2.743 1.507M23 9.25v4.177a7.5 7.5 0 0 0-1.5-.36V9.25c0-.96-.79-1.75-1.75-1.75H5.25c-.96 0-1.75.79-1.75 1.75v9.5c0 .96.79 1.75 1.75 1.75H7.5v3.75l5.04-3.75H13q.002.772.15 1.5h-.11L8 25.75c-.22.17-.48.25-.74.25h-.01c-.19 0-.38-.04-.56-.13-.43-.21-.69-.64-.69-1.12V22h-.75C3.46 22 2 20.54 2 18.75v-9.5C2 7.46 3.46 6 5.25 6h14.5C21.54 6 23 7.46 23 9.25m4 11.25a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0m-2.646-2.854a.5.5 0 0 0-.708 0L19 22.293l-1.646-1.647a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0l5-5a.5.5 0 0 0 0-.708"/>`
} as const;

export default function CommentMultipleCheckmarkIcon({ 
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

  const gradientId = 'commentmultiplecheckmarkicon_gradient';
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