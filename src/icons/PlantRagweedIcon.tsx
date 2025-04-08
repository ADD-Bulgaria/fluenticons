
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M14 2a4 4 0 0 0-3.947 4.653 3.001 3.001 0 0 0-1.037 5.097A3 3 0 0 0 11 17h2.25v5.69l-4.47-4.47a.75.75 0 0 0-1.06 1.06l5.53 5.53v1.44a.75.75 0 0 0 1.5 0v-1.44l5.53-5.53a.75.75 0 1 0-1.06-1.06l-4.47 4.47V17H17a3 3 0 0 0 1.984-5.25 3.001 3.001 0 0 0-1.038-5.097Q18 6.333 18 6a4 4 0 0 0-4-4"/>`,
  'regular': `<path d="M10 6a4 4 0 1 1 7.947.653 3.001 3.001 0 0 1 1.037 5.097A3 3 0 0 1 17 17h-2.25v5.69l4.47-4.47a.75.75 0 1 1 1.06 1.06l-5.53 5.53v1.44a.75.75 0 0 1-1.5 0v-1.44l-5.53-5.53a.75.75 0 1 1 1.06-1.06l4.47 4.47V17H11a3 3 0 0 1-1.984-5.25 3.001 3.001 0 0 1 1.037-5.097A4 4 0 0 1 10 6m1 5a.75.75 0 0 1 0 1.5 1.5 1.5 0 0 0 0 3h6a1.5 1.5 0 0 0 0-3 .75.75 0 0 1 0-1.5 1.5 1.5 0 0 0 0-3 .75.75 0 0 1-.691-1.039 2.5 2.5 0 1 0-4.617 0A.75.75 0 0 1 10.998 8 1.5 1.5 0 0 0 11 11"/>`
} as const;

export default function PlantRagweedIcon({ 
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

  const gradientId = 'plantragweedicon_gradient';
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