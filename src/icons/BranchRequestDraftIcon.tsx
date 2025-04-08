
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M5.5 7.959a3 3 0 1 0-1 0v4.082a3 3 0 1 0 1 0zM18 15a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-1.75-6.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M15 5.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5"/>`,
  'regular': `<path d="M3 5a2 2 0 1 1 4 0 2 2 0 0 1-4 0m2.5 2.959a3 3 0 1 0-1 0v4.082a3 3 0 1 0 1 0zM5 13a2 2 0 1 1 0 4 2 2 0 0 1 0-4m10 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-3 2a3 3 0 1 1 6 0 3 3 0 0 1-6 0m4.25-6.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M15 5.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5"/>`
} as const;

export default function BranchRequestDraftIcon({ 
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
        viewBox="0 0 20 20"
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

  const gradientId = 'branchrequestdrafticon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
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