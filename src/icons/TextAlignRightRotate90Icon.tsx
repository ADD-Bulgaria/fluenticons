
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M18 5a1 1 0 0 1 1 1v15a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1M6 9a1 1 0 0 1 1 1v11a1 1 0 1 1-2 0V10a1 1 0 0 1 1-1m7-6a1 1 0 1 0-2 0v18a1 1 0 1 0 2 0z"/>`,
  'regular': `<path d="M18.25 5a.75.75 0 0 1 .75.75v15.5a.75.75 0 0 1-1.5 0V5.75a.75.75 0 0 1 .75-.75m-13 5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-1.5 0v-10.5a.75.75 0 0 1 .75-.75m7.25-7.25a.75.75 0 0 0-1.5 0v18.5a.75.75 0 0 0 1.5 0z"/>`
} as const;

export default function TextAlignRightRotate90Icon({ 
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

  const gradientId = 'textalignrightrotate90icon_gradient';
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