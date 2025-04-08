
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6.782 19.977C7.99 21.222 9.758 22 12 22h7a1 1 0 1 0 0-2h-7c-1.758 0-2.99-.597-3.782-1.415C7.414 17.755 7 16.637 7 15.5s.414-2.256 1.218-3.085C9.01 11.597 10.242 11 12 11h7.586l-3.293 3.293a1 1 0 1 0 1.414 1.414l5-5a1 1 0 0 0 0-1.414l-5-5a1 1 0 1 0-1.414 1.414L19.586 9H12c-2.242 0-4.01.778-5.218 2.023C5.586 12.256 5 13.887 5 15.5s.586 3.244 1.782 4.477"/>`,
  'regular': `<path d="M6.84 19.984C8.078 21.22 9.913 22 12.25 22h7a.75.75 0 0 0 0-1.5h-7c-1.989 0-3.426-.656-4.35-1.578A4.82 4.82 0 0 1 6.5 15.5c0-1.251.469-2.494 1.4-3.422.924-.922 2.361-1.578 4.35-1.578h8.19l-3.22 3.22a.75.75 0 1 0 1.06 1.06l4.5-4.5a.75.75 0 0 0 0-1.06l-4.5-4.5a.75.75 0 1 0-1.06 1.06L20.44 9h-8.19c-2.337 0-4.172.781-5.41 2.016A6.3 6.3 0 0 0 5 15.5c0 1.624.609 3.256 1.84 4.484"/>`
} as const;

export default function ArrowHookUpRightIcon({ 
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

  const gradientId = 'arrowhookuprighticon_gradient';
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