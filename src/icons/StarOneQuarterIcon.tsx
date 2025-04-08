
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="m11 7.355-.99 2.006-6.017.874A1.45 1.45 0 0 0 2.75 11.68c0 .365.138.735.44 1.03l4.354 4.244-1.028 5.993c-.108.63.193 1.18.66 1.474.41.257.946.316 1.444.054L11 23.223z"/>`,
  'regular': `<path d="M15.302 3.908c-.532-1.078-2.069-1.078-2.6 0L10.01 9.36l-6.017.875a1.45 1.45 0 0 0-1.243 1.444c0 .364.138.735.44 1.029l4.354 4.244-1.028 5.993c-.108.63.193 1.181.66 1.474.41.258.946.316 1.444.055l5.382-2.83 5.382 2.83c1.063.559 2.307-.344 2.103-1.529l-1.027-5.993 4.354-4.244c.86-.839.385-2.3-.804-2.473l-6.017-.875zm-4.3 17.618V10.494a1.5 1.5 0 0 0 .342-.446l2.658-5.385 2.657 5.385c.212.428.62.724 1.092.793l5.943.864-4.3 4.191a1.45 1.45 0 0 0-.417 1.284l1.015 5.919-5.316-2.795a1.45 1.45 0 0 0-1.35 0z"/>`
} as const;

export default function StarOneQuarterIcon({ 
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

  const gradientId = 'staronequartericon_gradient';
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