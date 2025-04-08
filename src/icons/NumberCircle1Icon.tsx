
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20m2.5-29.75v18.5a1.25 1.25 0 1 1-2.5 0V19.672c-1.006 1.297-2.406 2.546-4.318 3.25a1.25 1.25 0 1 1-.864-2.345c1.98-.73 3.286-2.315 4.117-3.833.41-.75.687-1.454.861-1.968a10 10 0 0 0 .224-.755l.008-.034v-.004l.001-.001a1.25 1.25 0 0 1 2.471.268"/>`,
  'regular': `<path d="M6.5 24c0-9.665 7.835-17.5 17.5-17.5S41.5 14.335 41.5 24 33.665 41.5 24 41.5 6.5 33.665 6.5 24M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4m2.5 10.25a1.25 1.25 0 0 0-2.47-.268l-.001.001-.001.004-.008.034q-.011.049-.04.153a10 10 0 0 1-.184.602 12.5 12.5 0 0 1-.861 1.968c-.83 1.518-2.137 3.103-4.117 3.833a1.25 1.25 0 1 0 .864 2.346c1.912-.704 3.312-1.954 4.318-3.25V32.75a1.25 1.25 0 1 0 2.5 0z"/>`
} as const;

export default function NumberCircle1Icon({ 
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

  const gradientId = 'numbercircle1icon_gradient';
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