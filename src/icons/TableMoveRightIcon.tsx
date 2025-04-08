
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'light': `<path d="M29 3.5a.5.5 0 0 0-1 0v25a.5.5 0 0 0 1 0zm-3.146 12.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708l2.147-2.146H17.5a.5.5 0 0 1 0-1h6.793l-2.147-2.146a.5.5 0 0 1 .708-.708zM21 3.5a.5.5 0 0 0-.5-.5h-13A4.5 4.5 0 0 0 3 7.5v17A4.5 4.5 0 0 0 7.5 29h13a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5H12v-8h8.5a.5.5 0 0 0 .5-.5zM12 11V4h8v7zm-1-7v7H4V7.5A3.5 3.5 0 0 1 7.5 4zM4 21h7v7H7.5A3.5 3.5 0 0 1 4 24.5zm8 7v-7h8v7zM4 12h7v8H4z"/>`
} as const;

export default function TableMoveRightIcon({ 
  variant = 'light',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'light' }) {
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
        <g dangerouslySetInnerHTML={{ __html: svgContent[variant] || svgContent['light'] || '' }} />
      </svg>
    );
  }

  const gradientId = 'tablemoverighticon_gradient';
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
      <g dangerouslySetInnerHTML={{ __html: svgContent[variant] || svgContent['light'] || '' }} />
    </svg>
  );
}