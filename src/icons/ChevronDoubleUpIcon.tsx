
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M4.207 15.267a.75.75 0 0 1 .026-1.06l5.25-5.001a.75.75 0 0 1 1.034 0l5.25 5a.75.75 0 0 1-1.034 1.087L10 10.784l-4.733 4.51a.75.75 0 0 1-1.06-.027m0-4.998a.75.75 0 0 1 .026-1.06l5.25-5.002a.75.75 0 0 1 1.034 0l5.25 5.001a.75.75 0 0 1-1.034 1.086L10 5.786l-4.733 4.509a.75.75 0 0 1-1.06-.026"/>`,
  'regular': `<path d="M4.146 9.646a.5.5 0 0 0 .708.706L10 5.188l5.146 5.164a.5.5 0 1 0 .708-.706L10.39 4.162a.55.55 0 0 0-.78 0zm0 5.001a.5.5 0 0 0 .708.706L10 10.188l5.146 5.165a.5.5 0 1 0 .708-.706L10.39 9.163a.55.55 0 0 0-.78 0z"/>`
} as const;

export default function ChevronDoubleUpIcon({ 
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

  const gradientId = 'chevrondoubleupicon_gradient';
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