
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M22.748 18v5H15.25a3.75 3.75 0 0 0-3.75 3.75V30H14v-3.25c0-.69.56-1.25 1.25-1.25h17.499c.69 0 1.25.56 1.25 1.25V30h2.5v-3.25a3.75 3.75 0 0 0-3.75-3.75h-7.5v-5z"/><path d="M22.748 18v5H15.25a3.75 3.75 0 0 0-3.75 3.75V30H14v-3.25c0-.69.56-1.25 1.25-1.25h17.499c.69 0 1.25.56 1.25 1.25V30h2.5v-3.25a3.75 3.75 0 0 0-3.75-3.75h-7.5v-5z"/><path d="M22.748 18v5H15.25a3.75 3.75 0 0 0-3.75 3.75V30H14v-3.25c0-.69.56-1.25 1.25-1.25h17.499c.69 0 1.25.56 1.25 1.25V30h2.5v-3.25a3.75 3.75 0 0 0-3.75-3.75h-7.5v-5z"/><path d="M22.748 18v5H15.25a3.75 3.75 0 0 0-3.75 3.75V30H14v-3.25c0-.69.56-1.25 1.25-1.25h17.499c.69 0 1.25.56 1.25 1.25V30h2.5v-3.25a3.75 3.75 0 0 0-3.75-3.75h-7.5v-5z"/><path d="M20.25 36.496a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0m22.495.004a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0M31.5 11.484a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0"/>`
} as const;

export default function OrgIcon({ 
  variant = 'color',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'color' }) {
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
        <g dangerouslySetInnerHTML={{ __html: svgContent[variant] || svgContent['color'] || '' }} />
      </svg>
    );
  }

  const gradientId = 'orgicon_gradient';
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
      <g dangerouslySetInnerHTML={{ __html: svgContent[variant] || svgContent['color'] || '' }} />
    </svg>
  );
}