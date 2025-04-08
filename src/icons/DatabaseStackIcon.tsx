
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M3 5.487V8c0 1.355 2.29 2.5 5 2.5s5-1.145 5-2.5V5.487C11.943 6.413 10.136 7 8 7s-3.943-.587-5-1.513M8 6c2.761 0 5-1.119 5-2.5S10.761 1 8 1 3 2.119 3 3.5 5.239 6 8 6M3 9.959V12.5C3 13.925 5.149 15 8 15s5-1.075 5-2.5V9.959c-1.066.936-2.889 1.541-5 1.541s-3.934-.606-5-1.541"/>`,
  'regular': `<path d="M8 1C5.149 1 3 2.075 3 3.5v9C3 13.925 5.149 15 8 15s5-1.075 5-2.5v-9C13 2.075 10.851 1 8 1m0 1c2.441 0 4 .888 4 1.5S10.441 5 8 5s-4-.888-4-1.5S5.558 2 8 2m0 12c-2.442 0-4-.889-4-1.5V9.537c.897.593 2.328.963 4 .963s3.103-.37 4-.963V12.5c0 .611-1.559 1.5-4 1.5m0-4.5c-2.442 0-4-.888-4-1.5V5.021A7.4 7.4 0 0 0 8 6a7.4 7.4 0 0 0 4-.979V8c0 .612-1.558 1.5-4 1.5"/>`
} as const;

export default function DatabaseStackIcon({ 
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
        viewBox="0 0 16 16"
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

  const gradientId = 'databasestackicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
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