
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M21 7.5v10.25A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75V7.5l9-1z"/><path d="M21 7.5v10.25A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75V7.5l9-1z"/><path fill-opacity=".3" d="M21 7.5v10.25A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75V7.5l9-1z"/><path d="M17.75 3A3.25 3.25 0 0 1 21 6.25V8H3V6.25A3.25 3.25 0 0 1 6.25 3zm-.25 9a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11"/><path d="M15.024 15.024a.5.5 0 0 0 0 .708l1.77 1.77-1.767 1.766a.5.5 0 1 0 .707.707l1.766-1.767 1.77 1.77a.5.5 0 0 0 .707-.708l-1.769-1.769 1.771-1.77a.5.5 0 0 0-.707-.707l-1.77 1.77-1.771-1.77a.5.5 0 0 0-.707 0"/>`,
  'filled': `<path d="M17.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11m-2.476 3.024a.5.5 0 0 0 0 .707l1.769 1.77-1.767 1.766a.5.5 0 1 0 .707.708l1.767-1.767 1.77 1.769a.5.5 0 1 0 .707-.707l-1.769-1.77 1.771-1.77a.5.5 0 0 0-.707-.707l-1.771 1.77-1.77-1.77a.5.5 0 0 0-.707 0M21 8.5l.001 3.523a6.5 6.5 0 0 0-8.979 8.979L6.25 21A3.25 3.25 0 0 1 3 17.75V8.5zM17.75 3A3.25 3.25 0 0 1 21 6.25V7H3v-.75A3.25 3.25 0 0 1 6.25 3z"/>`,
  'regular': `<path d="M17.5 12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11m-2.476 3.024a.5.5 0 0 0 0 .707l1.769 1.77-1.767 1.766a.5.5 0 1 0 .707.708l1.767-1.767 1.77 1.769a.5.5 0 1 0 .707-.707l-1.769-1.77 1.771-1.77a.5.5 0 0 0-.707-.707l-1.771 1.77-1.77-1.77a.5.5 0 0 0-.707 0M17.75 3A3.25 3.25 0 0 1 21 6.25l.001 5.773a6.5 6.5 0 0 0-1.5-.71L19.5 8.5h-15v9.25c0 .966.784 1.75 1.75 1.75h5.064c.172.534.412 1.038.709 1.501L6.25 21A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3zm0 1.5H6.25A1.75 1.75 0 0 0 4.5 6.25V7h15v-.75a1.75 1.75 0 0 0-1.75-1.75"/>`
} as const;

export default function CalendarCancelIcon({ 
  variant = 'regular',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'color' | 'filled' | 'regular' }) {
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

  const gradientId = 'calendarcancelicon_gradient';
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