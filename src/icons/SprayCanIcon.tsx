
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M14 1.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0m-2 1a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0M10.5 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2 0a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m2-1a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1M14 5.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0m-3.012.936a.5.5 0 0 0-.134-.29L9 4.292V2.5a.5.5 0 0 0-.5-.5H6.501a.5.5 0 0 0-.5.5v1.793L4.147 6.146a.5.5 0 0 0-.134.29l-.004.017-.002.009A.1.1 0 0 0 4 6.5v6.75c0 .966.784 1.75 1.75 1.75h3.5A1.75 1.75 0 0 0 11 13.25V6.5q-.001-.017-.005-.031l-.002-.007zM7.001 3h1v1h-1zm-.293 2h1.586l1 1H5.708z"/>`,
  'regular': `<path d="M9.5 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M11 2.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0m0 2a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0m2-3a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0m0 2a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0m0 2a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0m-3.025.872q.009.031.013.064l.005.026Q10 6.48 10 6.5v6.75A1.75 1.75 0 0 1 8.25 15h-3.5A1.75 1.75 0 0 1 3 13.25V6.5q0-.02.007-.038.004-.012.006-.026a.5.5 0 0 1 .134-.29l1.854-1.853V2.5a.5.5 0 0 1 .5-.5H7.5a.5.5 0 0 1 .5.5v1.792l1.854 1.854a.5.5 0 0 1 .121.226M7.001 3h-1v1h1zm.293 2H5.708l-1 1h3.586zm.957 9a.75.75 0 0 0 .75-.75V7h-5v6.25c0 .414.336.75.75.75z"/>`
} as const;

export default function SprayCanIcon({ 
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
        viewBox="0 0 16 16"
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

  const gradientId = 'spraycanicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
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