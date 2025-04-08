
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M23.5 4h-1.67A3 3 0 0 0 19 2h-6a3 3 0 0 0-2.83 2H8.5A3.5 3.5 0 0 0 5 7.5v19A3.5 3.5 0 0 0 8.5 30h5.612a14 14 0 0 1-.758-.619 2.5 2.5 0 0 1 .521-4.114c1.064-.535 1.386-.978 1.614-1.346.125-.203.182-.311.258-.455.07-.132.155-.293.324-.587a7.4 7.4 0 0 1 1.185-1.577 6 6 0 0 1 5.476-1.63l3.22-3.22c.31-.31.667-.544 1.048-.703V7.5A3.5 3.5 0 0 0 23.5 4M13 4h6a1 1 0 1 1 0 2h-6a1 1 0 1 1 0-2m16.487 13.513a1.75 1.75 0 0 1 0 2.474l-3.831 3.832a4.5 4.5 0 0 1-.975 4.908 6.72 6.72 0 0 1-4.171 1.898c-1.862.146-3.994-.47-6.169-2.372a1 1 0 0 1 .209-1.646c1.318-.664 1.846-1.3 2.215-1.897.133-.216.224-.385.326-.576.079-.146.164-.305.28-.505.232-.404.519-.84.946-1.266a4.5 4.5 0 0 1 4.846-1l3.85-3.85a1.75 1.75 0 0 1 2.474 0M16.771 27.595c1.37.89 2.589 1.114 3.582 1.036a4.72 4.72 0 0 0 2.913-1.318 2.5 2.5 0 1 0-3.535-3.536c-.257.257-.443.53-.628.85-.054.094-.122.219-.197.357-.135.248-.294.54-.44.777a6.3 6.3 0 0 1-1.695 1.834"/>`,
  'regular': `<path d="M21.83 4A3 3 0 0 0 19 2h-6a3 3 0 0 0-2.83 2H8.5A3.5 3.5 0 0 0 5 7.5v19A3.5 3.5 0 0 0 8.5 30h5.612a14 14 0 0 1-.758-.619A2.5 2.5 0 0 1 12.55 28H8.5A1.5 1.5 0 0 1 7 26.5v-19A1.5 1.5 0 0 1 8.5 6h1.67A3 3 0 0 0 13 8h6a3 3 0 0 0 2.83-2h1.67A1.5 1.5 0 0 1 25 7.5v9.904l.952-.952c.31-.31.667-.544 1.048-.703V7.5A3.5 3.5 0 0 0 23.5 4zM12 5a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1m17.487 12.513a1.75 1.75 0 0 1 0 2.474l-3.831 3.832a4.5 4.5 0 0 1-.975 4.908 6.72 6.72 0 0 1-4.171 1.898c-1.862.146-3.994-.47-6.169-2.372a1 1 0 0 1 .209-1.646c1.318-.664 1.846-1.3 2.215-1.897.133-.216.224-.385.326-.576.079-.146.164-.305.28-.505.232-.404.519-.84.946-1.266a4.5 4.5 0 0 1 4.846-1l3.85-3.85a1.75 1.75 0 0 1 2.474 0M16.771 27.595c1.37.89 2.589 1.114 3.582 1.036a4.72 4.72 0 0 0 2.913-1.318 2.5 2.5 0 1 0-3.535-3.536c-.257.257-.443.53-.628.85-.054.094-.122.219-.197.357-.135.248-.294.54-.44.777a6.3 6.3 0 0 1-1.695 1.834"/>`
} as const;

export default function ClipboardBrushIcon({ 
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
        <g dangerouslySetInnerHTML={{ __html: svgContent[variant] || svgContent['regular'] || '' }} />
      </svg>
    );
  }

  const gradientId = 'clipboardbrushicon_gradient';
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
      <g dangerouslySetInnerHTML={{ __html: svgContent[variant] || svgContent['regular'] || '' }} />
    </svg>
  );
}