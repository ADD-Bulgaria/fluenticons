
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M13.348 2.685a.75.75 0 0 0-.696 0L4.199 7.117c-.387.203-.698.51-.906.876L13 13.15l9.707-5.157a2.24 2.24 0 0 0-.906-.876zM3 17.75V9.536l9.648 5.126a.75.75 0 0 0 .704 0L23 9.536v8.214A3.25 3.25 0 0 1 19.75 21H6.25A3.25 3.25 0 0 1 3 17.75M6.012 22a3.25 3.25 0 0 0 2.739 1.5h11.5c2.9 0 5.25-2.35 5.25-5.25v-7.5a3.25 3.25 0 0 0-1.5-2.74v10.24A3.75 3.75 0 0 1 20.25 22z"/>`,
  'regular': `<path d="M13.348 2.685a.75.75 0 0 0-.696 0L4.199 7.117A2.24 2.24 0 0 0 3 9.1v8.65A3.25 3.25 0 0 0 6.25 21h13.5A3.25 3.25 0 0 0 23 17.75V9.1a2.24 2.24 0 0 0-1.199-1.983zm-8.453 5.76L13 4.197l8.105 4.25a.74.74 0 0 1 .282.262L13 13.15 4.613 8.708a.74.74 0 0 1 .282-.262m8.456 6.217 8.149-4.316v7.404a1.75 1.75 0 0 1-1.75 1.75H6.25a1.75 1.75 0 0 1-1.75-1.75v-7.404l8.149 4.316a.75.75 0 0 0 .702 0M6.011 22a3.25 3.25 0 0 0 2.74 1.5h11.5c2.9 0 5.25-2.35 5.25-5.25v-7.5a3.25 3.25 0 0 0-1.5-2.74v10.24A3.75 3.75 0 0 1 20.25 22z"/>`
} as const;

export default function MailAllReadIcon({ 
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

  const gradientId = 'mailallreadicon_gradient';
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