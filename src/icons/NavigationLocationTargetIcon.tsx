
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M2.75 5a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5zM2 10.75a.75.75 0 0 1 .75-.75h11.336a1.5 1.5 0 0 0-.068.268 4.5 4.5 0 0 0-1.852 1.232H2.75a.75.75 0 0 1-.75-.75M2.75 15h7.336a1.5 1.5 0 0 0 1.182.982q.093.266.218.518H2.75a.75.75 0 0 1 0-1.5m13.306.332a1 1 0 1 1-1.111-1.663 1 1 0 0 1 1.11 1.662M18.949 14h.551a.5.5 0 0 1 0 1h-.551A3.49 3.49 0 0 1 16 17.949v.551a.5.5 0 0 1-1 0v-.551A3.49 3.49 0 0 1 12.051 15H11.5a.5.5 0 0 1 0-1h.551A3.49 3.49 0 0 1 15 11.051V10.5a.5.5 0 0 1 1 0v.551A3.49 3.49 0 0 1 18.949 14m-3.204 2.988a2.5 2.5 0 1 0-.49-4.976 2.5 2.5 0 0 0 .49 4.976"/>`,
  'regular': `<path d="M2.5 5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1zm0 5a.5.5 0 0 0 0 1h10.195a4.5 4.5 0 0 1 1.323-.732 1.5 1.5 0 0 1 .068-.268zm7.86 5.475a1.5 1.5 0 0 1-.274-.475H2.5a.5.5 0 0 0 0 1h8.775l-.007-.018a1.5 1.5 0 0 1-.908-.507m5.14.025a1 1 0 1 0 0-2 1 1 0 0 0 0 2m4-1.5h-.551A3.49 3.49 0 0 0 16 11.051V10.5a.5.5 0 0 0-1 0v.551A3.49 3.49 0 0 0 12.051 14H11.5a.5.5 0 0 0 0 1h.551A3.49 3.49 0 0 0 15 17.949v.551a.5.5 0 0 0 1 0v-.551A3.49 3.49 0 0 0 18.949 15h.551a.5.5 0 0 0 0-1m-2.232 2.268a2.5 2.5 0 1 1-3.536-3.535 2.5 2.5 0 0 1 3.536 3.535"/>`
} as const;

export default function NavigationLocationTargetIcon({ 
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

  const gradientId = 'navigationlocationtargeticon_gradient';
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