
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M13.5 11.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6m10.5-20a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6m10.5-30a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>`,
  'regular': `<path d="M16 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m0 10a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m0 10a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m10.5-20a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m0 10a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m0 10a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m0 10a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0M37 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m0 10a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m0 10a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>`
} as const;

export default function DialpadIcon({ 
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

  const gradientId = 'dialpadicon_gradient';
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