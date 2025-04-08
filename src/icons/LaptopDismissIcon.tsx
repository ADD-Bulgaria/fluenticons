
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M11 5.5a5.5 5.5 0 0 1-8 4.9v2.1A1.5 1.5 0 0 0 4.5 14h11a1.5 1.5 0 0 0 1.5-1.5v-6A1.5 1.5 0 0 0 15.5 5h-4.522q.021.247.022.5m-9 10a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5M5.5 10a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9m1.854-6.354a.5.5 0 0 1 0 .708L6.207 5.5l1.147 1.146a.5.5 0 1 1-.708.708L5.5 6.207 4.354 7.354a.5.5 0 1 1-.708-.708L4.793 5.5 3.646 4.354a.5.5 0 1 1 .708-.708L5.5 4.793l1.146-1.147a.5.5 0 0 1 .708 0"/>`,
  'regular': `<path d="M10.978 6H15a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-1.207a5.5 5.5 0 0 1-1-.393V12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4.022a5.6 5.6 0 0 1 0 1M2.5 15a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1zm3-5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9m1.854-6.354a.5.5 0 0 1 0 .708L6.207 5.5l1.147 1.146a.5.5 0 1 1-.708.708L5.5 6.207 4.354 7.354a.5.5 0 1 1-.708-.708L4.793 5.5 3.646 4.354a.5.5 0 1 1 .708-.708L5.5 4.793l1.146-1.147a.5.5 0 0 1 .708 0"/>`
} as const;

export default function LaptopDismissIcon({ 
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

  const gradientId = 'laptopdismissicon_gradient';
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