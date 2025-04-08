
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M15 3a1 1 0 1 0-2 0v9a1 1 0 1 0 2 0zm-4.6 3.748a1 1 0 1 0-.8-1.832A11 11 0 0 0 3 15c0 6.075 4.925 11 11 11s11-4.925 11-11c0-4.512-2.717-8.388-6.6-10.084a1 1 0 0 0-.8 1.832A9 9 0 0 1 23 15a9 9 0 1 1-18 0 9 9 0 0 1 5.4-8.252"/>`,
  'regular': `<path d="M10.69 5.267a.75.75 0 0 1-.397.983A9.5 9.5 0 0 0 4.5 15a9.5 9.5 0 0 0 19 0 9.5 9.5 0 0 0-5.793-8.75.75.75 0 0 1 .586-1.38A11 11 0 0 1 25 15c0 6.075-4.925 11-11 11S3 21.075 3 15A11 11 0 0 1 9.707 4.87a.75.75 0 0 1 .983.397M14 2a.75.75 0 0 1 .75.75v9.5a.75.75 0 0 1-1.5 0v-9.5A.75.75 0 0 1 14 2"/>`
} as const;

export default function PowerIcon({ 
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

  const gradientId = 'powericon_gradient';
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