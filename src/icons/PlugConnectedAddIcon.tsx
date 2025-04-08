
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M17.78 3.28a.75.75 0 0 0-1.06-1.06l-2.446 2.445a4.04 4.04 0 0 0-5.128.481l-.3.3a1.49 1.49 0 0 0 0 2.108l2.465 2.464a5.51 5.51 0 0 1 4.552-.848 4.04 4.04 0 0 0-.528-3.444zM7.554 8.846l2.464 2.465a5.51 5.51 0 0 0-.848 4.552 4.04 4.04 0 0 1-3.444-.528L3.28 17.78a.75.75 0 0 1-1.06-1.06l2.446-2.446a4.04 4.04 0 0 1 .48-5.128l.3-.3a1.49 1.49 0 0 1 2.108 0M17 18.242a4.5 4.5 0 1 1-5-7.484 4.5 4.5 0 0 1 5 7.484m-2.146-6.096A.5.5 0 0 0 14 12.5V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5a.5.5 0 0 0-.146-.354"/>`,
  'regular': `<path d="M17.964 2.309a.5.5 0 0 0-.82-.159l-2.7 2.7a4.036 4.036 0 0 0-5.332.332l-.611.611a1.05 1.05 0 0 0 0 1.485l2.774 2.767q.415-.301.884-.523l-2.64-2.64a.49.49 0 0 1 0-.693l.3-.3a3.03 3.03 0 0 1 4.287-.006l.006.011.006.006a3.04 3.04 0 0 1 .72 3.11q.518.033 1.007.156a4.03 4.03 0 0 0-.69-3.612l2.7-2.7a.5.5 0 0 0 .109-.545M7.279 8.5l2.77 2.77a5.5 5.5 0 0 0-.525.885L6.888 9.518a.49.49 0 0 0-.692 0l-.3.3a3.036 3.036 0 0 0-.006 4.287l.006.006.005.006a3.03 3.03 0 0 0 3.11.727q.031.512.153.996a4.03 4.03 0 0 1-3.606-.69l-2.7 2.7a.5.5 0 1 1-.711-.704l2.7-2.7a4.03 4.03 0 0 1 .332-5.332l.3-.3.315-.314a1.05 1.05 0 0 1 1.485 0M17 18.242a4.5 4.5 0 1 1-5-7.483 4.5 4.5 0 0 1 5 7.483m-2.146-6.095A.5.5 0 0 0 14 12.5V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5a.5.5 0 0 0-.146-.354"/>`
} as const;

export default function PlugConnectedAddIcon({ 
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

  const gradientId = 'plugconnectedaddicon_gradient';
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