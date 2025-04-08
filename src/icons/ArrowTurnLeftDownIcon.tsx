
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M40.5 13a1.5 1.5 0 0 0 0-3h-18a7.5 7.5 0 0 0-7.5 7.5v17.379l-6.44-6.44a1.5 1.5 0 0 0-2.12 2.122l9 9a1.5 1.5 0 0 0 2.12 0l9-9a1.5 1.5 0 0 0-2.12-2.122L18 34.88V17.5a4.5 4.5 0 0 1 4.5-4.5z"/>`,
  'regular': `<path d="M40.75 12.5a1.25 1.25 0 1 0 0-2.5h-18.5A7.25 7.25 0 0 0 15 17.25v18.168l-6.854-7.04a1.25 1.25 0 0 0-1.792 1.744l9.25 9.5a1.25 1.25 0 0 0 1.792 0l9.25-9.5a1.25 1.25 0 0 0-1.792-1.744L17.5 35.931V17.25a4.75 4.75 0 0 1 4.75-4.75z"/>`
} as const;

export default function ArrowTurnLeftDownIcon({ 
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
        viewBox="0 0 48 48"
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

  const gradientId = 'arrowturnleftdownicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
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