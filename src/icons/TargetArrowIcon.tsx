
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M21.78 6.78a.75.75 0 0 0-.53-1.28H18.5V2.75a.75.75 0 0 0-1.28-.53l-2.5 2.5a.75.75 0 0 0-.22.53v2.836l-1.982 1.982A2.003 2.003 0 0 0 10 12a2 2 0 1 0 3.932-.518L15.914 9.5h2.836a.75.75 0 0 0 .53-.22zM12 2a10 10 0 0 1 3.424.601l-1.412 1.412q-.094.094-.171.2a8 8 0 1 0 5.947 5.947q.105-.078.2-.172l1.41-1.412A10 10 0 0 1 22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m0 4q.779.002 1.5.19v1.482l-.414.414-.049.05A4.005 4.005 0 0 0 8 12a4 4 0 1 0 7.864-1.037l.05-.049.414-.414h1.483A6 6 0 1 1 12 6"/>`,
  'regular': `<path d="M11.998 1.998c1.204 0 2.358.213 3.427.602L14.23 3.794a8.502 8.502 0 1 0 5.974 5.976l1.194-1.194A10 10 0 0 1 22 12c0 5.524-4.478 10.002-10.002 10.002S1.996 17.524 1.996 12 6.474 1.998 11.998 1.998m0 4.002a6 6 0 0 1 1.502.19v1.567a4.5 4.5 0 1 0 2.742 2.743h1.567A6 6 0 1 1 12 6m2 6a2 2 0 1 1-1.217-1.841l1.72-1.72L14.5 5.25a.75.75 0 0 1 .22-.53l2.5-2.5a.75.75 0 0 1 1.28.53V5.5h2.75a.75.75 0 0 1 .53 1.28l-2.5 2.5a.75.75 0 0 1-.53.22h-3.19l-1.72 1.72c.102.24.158.503.158.78m4.441-4 1-1h-1.69a.75.75 0 0 1-.75-.75V4.56l-.999 1v2.381l.059.06z"/>`
} as const;

export default function TargetArrowIcon({ 
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
        viewBox="0 0 24 24"
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

  const gradientId = 'targetarrowicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
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