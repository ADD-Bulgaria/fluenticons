
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M22.5 6a1.5 1.5 0 0 0 0 3h14.379l-6.44 6.44a1.5 1.5 0 0 0 2.122 2.12L39 11.122V25.5a1.5 1.5 0 0 0 3 0v-18A1.5 1.5 0 0 0 40.5 6zm-5.94 27.56a1.5 1.5 0 0 0-2.12-2.12l-8 8a1.5 1.5 0 0 0 2.12 2.12zm12-14.12a1.5 1.5 0 0 1 0 2.12l-8 8a1.5 1.5 0 0 1-2.12-2.12l8-8a1.5 1.5 0 0 1 2.12 0"/>`,
  'regular': `<path d="M22.25 6a1.25 1.25 0 1 0 0 2.5h15.482l-7.366 7.366a1.25 1.25 0 0 0 1.768 1.768l7.366-7.366V25.75a1.25 1.25 0 1 0 2.5 0V7.25C42 6.56 41.44 6 40.75 6zm-5.616 27.134a1.25 1.25 0 0 0-1.768-1.768l-8.5 8.5a1.25 1.25 0 0 0 1.768 1.768zm12-13.768a1.25 1.25 0 0 1 0 1.768l-8.5 8.5a1.25 1.25 0 0 1-1.768-1.768l8.5-8.5a1.25 1.25 0 0 1 1.768 0"/>`
} as const;

export default function ArrowUpRightDashesIcon({ 
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

  const gradientId = 'arrowuprightdashesicon_gradient';
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