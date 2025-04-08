
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M8.944 9.894a1.5 1.5 0 0 1 1.112-2.787L41.61 19.702c2.078.83 2.104 3.76.042 4.627L12.393 36.622l7.728 3.513a1.5 1.5 0 0 1-1.241 2.73l-11-5a1.5 1.5 0 0 1-.764-1.942l5-12a1.5 1.5 0 0 1 2.769 1.154l-3.659 8.781 28.137-11.822z"/>`,
  'regular': `<path d="M9.526 9.407a1.25 1.25 0 0 1 .948-2.313l31.31 12.824c1.864.763 1.864 3.401 0 4.164L11.578 36.456l8.713 4.167a1.25 1.25 0 1 1-1.08 2.255l-11.5-5.5a1.25 1.25 0 0 1-.614-1.608l5-12a1.25 1.25 0 1 1 2.308.961l-3.951 9.483L40.273 22z"/>`
} as const;

export default function ArrowTurnRightLeftIcon({ 
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

  const gradientId = 'arrowturnrightlefticon_gradient';
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