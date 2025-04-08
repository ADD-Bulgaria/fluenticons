
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M15.598 7.987a4 4 0 0 1 5.33-2.977l.471.176a1 1 0 1 0 .702-1.872l-.47-.177c-3.473-1.302-7.284.826-7.996 4.466L12.775 12H7.75a1 1 0 1 0 0 2h4.633l-.98 5.013a4 4 0 0 1-5.33 2.977l-.472-.176a1 1 0 1 0-.702 1.872l.471.177c3.473 1.302 7.283-.826 7.995-4.466L14.421 14h4.829a1 1 0 1 0 0-2h-4.437z"/>`,
  'regular': `<path d="M15.352 7.939a4.25 4.25 0 0 1 5.664-3.164l.47.177a.75.75 0 1 0 .527-1.404l-.47-.177c-3.328-1.248-6.98.792-7.663 4.28L13.03 12H7.75a.75.75 0 1 0 0 1.5h4.986l-1.088 5.561a4.25 4.25 0 0 1-5.663 3.163l-.472-.176a.75.75 0 0 0-.526 1.404l.471.177c3.328 1.248 6.98-.792 7.662-4.28l1.144-5.85h4.986a.75.75 0 0 0 0-1.5h-4.692z"/>`
} as const;

export default function FStopIcon({ 
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

  const gradientId = 'fstopicon_gradient';
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