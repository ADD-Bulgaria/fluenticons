
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12.022 21H9.5v-5h1.674a6.52 6.52 0 0 0 .848 5M21 12.022V9.5h-5v1.674a6.52 6.52 0 0 1 5 .848m-6.5-.29V9.5h-5v5h2.232a6.53 6.53 0 0 1 2.768-2.768M21 6.25V8h-5V3h1.75A3.25 3.25 0 0 1 21 6.25M9.5 3h5v5h-5zM6.25 3H8v5H3V6.25A3.25 3.25 0 0 1 6.25 3M3 14.5v-5h5v5zm0 3.25V16h5v5H6.25A3.25 3.25 0 0 1 3 17.75m20-.25a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0m-5.573-3.495.084-.005.063.005.054.012.063.02.068.035.047.032 2.548 2.542.057.07a.5.5 0 0 1-.695.695l-.07-.057L18 15.706V21l-.008.09a.5.5 0 0 1-.402.402l-.09.008-.09-.008a.5.5 0 0 1-.402-.402L17 21l-.001-5.292-1.645 1.646-.07.057a.5.5 0 0 1-.568 0l-.07-.057-.057-.07a.5.5 0 0 1 0-.568l.057-.07 2.513-2.512.056-.045.074-.042.083-.03z"/>`,
  'regular': `<path d="M6.25 3A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h5.772a6.5 6.5 0 0 1-.709-1.5H10v-4h1.313a6.5 6.5 0 0 1 .709-1.5H10v-4h4v2.022a6.5 6.5 0 0 1 1.5-.709V10h4v1.313a6.5 6.5 0 0 1 1.5.709V6.25A3.25 3.25 0 0 0 17.75 3zM4.5 6.25c0-.966.784-1.75 1.75-1.75H8.5v4h-4zm0 7.75v-4h4v4zm15-5.5h-4v-4h2.25c.966 0 1.75.784 1.75 1.75zm-9.5-4h4v4h-4zM4.5 17.75V15.5h4v4H6.25a1.75 1.75 0 0 1-1.75-1.75M23 17.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0m-5.573-3.495.084-.005.063.005.054.012.063.02.068.035.047.032 2.548 2.542.057.07a.5.5 0 0 1-.695.695l-.07-.057L18 15.706V21l-.008.09a.5.5 0 0 1-.402.402l-.09.008-.09-.008a.5.5 0 0 1-.402-.402L17 21l-.001-5.292-1.645 1.646-.07.057a.5.5 0 0 1-.568 0l-.07-.057-.057-.07a.5.5 0 0 1 0-.568l.057-.07 2.513-2.512.056-.045.074-.042.083-.03z"/>`
} as const;

export default function TableArrowUpIcon({ 
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

  const gradientId = 'tablearrowupicon_gradient';
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