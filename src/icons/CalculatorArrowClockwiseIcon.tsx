
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M4 5.25A3.25 3.25 0 0 1 7.25 2h9.5A3.25 3.25 0 0 1 20 5.25v5.025a2 2 0 0 0-.232.294A7 7 0 0 0 12.101 22H7.25A3.25 3.25 0 0 1 4 18.751zM9 5a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm.5 8.25a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0M8.25 18.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5m13-3.5a.75.75 0 0 0 .75-.75V11.5a.75.75 0 0 0-1.5 0v.626A6 6 0 1 0 23 17a.75.75 0 0 0-1.5 0 4.5 4.5 0 1 1-1.688-3.513l.008.006.01.007H18.5a.75.75 0 0 0 0 1.5z"/>`,
  'regular': `<path d="M7 7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2zm2-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5V7a.5.5 0 0 0-.5-.5zm-.75 8a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5m1.25 2.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M7.25 22h4.851a7 7 0 0 1-1.165-1.5H7.25a1.75 1.75 0 0 1-1.75-1.75V5.25c0-.966.784-1.75 1.75-1.75h9.5c.966 0 1.75.784 1.75 1.75v4.911q.661.146 1.268.408a2 2 0 0 1 .232-.294V5.25A3.25 3.25 0 0 0 16.75 2h-9.5A3.25 3.25 0 0 0 4 5.25v13.5A3.25 3.25 0 0 0 7.25 22m14-7a.75.75 0 0 0 .75-.75V11.5a.75.75 0 0 0-1.5 0v.626A6 6 0 1 0 23 17a.75.75 0 0 0-1.5 0 4.5 4.5 0 1 1-1.688-3.513l.008.006.01.007H18.5a.75.75 0 0 0 0 1.5z"/>`
} as const;

export default function CalculatorArrowClockwiseIcon({ 
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

  const gradientId = 'calculatorarrowclockwiseicon_gradient';
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