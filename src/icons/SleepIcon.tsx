
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M13.378 3.026A9.004 9.004 0 1 1 5.475 17.13a.675.675 0 0 1 .329-1.019c3.391-1.214 5.208-2.62 6.262-4.633 1.11-2.118 1.396-4.438.62-7.619a.675.675 0 0 1 .692-.834m-2.384.627L11 3.75V9a2 2 0 1 1-1.499-1.937l-.001-2.3L6 5.829V10a2 2 0 1 1-1.499-1.937L4.5 5.273a.75.75 0 0 1 .43-.679l.102-.039 5-1.521a.75.75 0 0 1 .962.619"/>`,
  'regular': `<path d="M13.378 3.026A9.004 9.004 0 1 1 5.475 17.13a.675.675 0 0 1 .329-1.019c3.391-1.214 5.208-2.62 6.262-4.633 1.11-2.118 1.396-4.438.62-7.619a.675.675 0 0 1 .692-.834m1.011 1.637.065.39c.417 2.705.065 4.976-1.06 7.122-1.141 2.18-3 3.704-6.015 4.94a7.504 7.504 0 1 0 7.677-12.283l-.332-.092zm-3.395-1.01L11 3.75V9a2 2 0 1 1-1.499-1.937l-.001-2.3L6 5.829V10a2 2 0 1 1-1.499-1.937L4.5 5.273a.75.75 0 0 1 .43-.679l.102-.039 5-1.521a.75.75 0 0 1 .943.525z"/>`
} as const;

export default function SleepIcon({ 
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

  const gradientId = 'sleepicon_gradient';
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