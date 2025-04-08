
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M19 4.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0M9.172 15.595a3.502 3.502 0 0 0 6.826-1.094 3.5 3.5 0 0 0-3.086-3.476 6.01 6.01 0 0 1-3.74 4.57M12 10a5 5 0 1 1-10 0 5 5 0 0 1 10 0M7.029 7.505a.5.5 0 0 0 .304.638c.71.251 1.274.814 1.525 1.524a.5.5 0 1 0 .942-.334A3.5 3.5 0 0 0 7.667 7.2a.5.5 0 0 0-.638.305"/>`,
  'regular': `<path d="M15.5 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M12 4.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0M3 10a4 4 0 1 1 8 0 4 4 0 0 1-8 0m4-5a5 5 0 1 0 0 10A5 5 0 0 0 7 5m5.499 12.999a3.5 3.5 0 0 1-3.325-2.405q.476-.185.91-.446a2.501 2.501 0 1 0 2.573-3.144 6 6 0 0 0 .256-.98 3.5 3.5 0 0 1-.414 6.975M7.667 7.2a.5.5 0 1 0-.334.943c.71.251 1.274.814 1.525 1.524a.5.5 0 1 0 .942-.334A3.5 3.5 0 0 0 7.667 7.2"/>`
} as const;

export default function BubbleMultipleIcon({ 
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

  const gradientId = 'bubblemultipleicon_gradient';
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