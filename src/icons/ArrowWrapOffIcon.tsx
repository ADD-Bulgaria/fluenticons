
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M2.854 2.146a.5.5 0 1 0-.708.708l.98.98A.75.75 0 0 0 3.75 5h.543l3.5 3.499H6.25a3.25 3.25 0 1 0 0 6.5h8.043l.708.708a.748.748 0 0 0 .79.79l1.355 1.356a.5.5 0 0 0 .708-.708zM12.793 13.5H6.25a1.75 1.75 0 1 1 0-3.5h3.043zm.957-5h-3.129l1.5 1.5h1.629a3.25 3.25 0 0 0 0-6.5H5.621l1.5 1.5h6.629a1.75 1.75 0 1 1 0 3.5m3.591 6.72-2.328-2.328a.75.75 0 0 1 1.267-.672l1.5 1.5a.75.75 0 0 1 0 1.06z"/>`,
  'regular': `<path d="M2.854 2.146a.5.5 0 1 0-.708.708l1.179 1.178A.5.5 0 0 0 3.5 5h.793l4 4H6a3 3 0 1 0 0 6h8.293l1.353 1.353.001.001 1.5 1.5a.5.5 0 0 0 .707-.708zM13.293 14H6a2 2 0 1 1 0-4h3.293zM14 9h-2.879l1 1H14a3 3 0 1 0 0-6H6.121l1 1H14a2 2 0 1 1 0 4m3.414 6.293L16.121 14h.172l-.647-.646a.5.5 0 0 1 .708-.708l1.5 1.5a.5.5 0 0 1 0 .708z"/>`
} as const;

export default function ArrowWrapOffIcon({ 
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

  const gradientId = 'arrowwrapofficon_gradient';
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