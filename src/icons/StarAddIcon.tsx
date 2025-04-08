
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'light': `<path d="M20.402 11.35a1 1 0 0 1-.753-.549L16.45 4.28a.5.5 0 0 0-.898 0l-3.198 6.52a1 1 0 0 1-.753.55l-7.172 1.048a.5.5 0 0 0-.277.852l5.195 5.096a1 1 0 0 1 .286.882l-1.225 7.183a.5.5 0 0 0 .727.526l4.59-2.428q.116.502.284.981l-4.407 2.331c-1.1.582-2.389-.351-2.18-1.578l1.225-7.183-5.196-5.096c-.885-.87-.394-2.376.834-2.556l7.17-1.048 3.2-6.522c.549-1.119 2.144-1.119 2.693 0l3.199 6.522 7.17 1.048c1.228.18 1.72 1.687.834 2.556l-1.063 1.043a9 9 0 0 0-.894-.525l1.257-1.232a.5.5 0 0 0-.278-.852zM22.5 30a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15m1-12.25v3.75h3.75a.75.75 0 0 1 0 1.5H23.5v3.75a.75.75 0 0 1-1.5 0V23h-3.75a.75.75 0 0 1 0-1.5H22v-3.75a.75.75 0 0 1 1.5 0"/>`
} as const;

export default function StarAddIcon({ 
  variant = 'light',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'light' }) {
  const width = typeof size === 'number' ? `${size}px` : size;
  const height = typeof size === 'number' ? `${size}px` : size;
  
  if (!gradient) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill={color || 'currentColor'}
        className={className}
        style={{ width, height, flexShrink: 0, verticalAlign: 'middle', ...style }}
        aria-hidden={title ? undefined : true}
        focusable="false"
        role={title ? "img" : "presentation"}
        {...props}
      >
        {title && <title>{title}</title>}
        <g dangerouslySetInnerHTML={{ __html: svgContent[variant] || svgContent['light'] || '' }} />
      </svg>
    );
  }

  const gradientId = 'staraddicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
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
      <g dangerouslySetInnerHTML={{ __html: svgContent[variant] || svgContent['light'] || '' }} />
    </svg>
  );
}