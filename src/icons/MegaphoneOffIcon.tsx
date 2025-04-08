
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l5.396 5.397-3.57.952a2.75 2.75 0 0 0-2.042 2.658v3.426a2.75 2.75 0 0 0 2.041 2.658L7 19.159v.341a4.5 4.5 0 0 0 8.56 1.942l6.574 1.753 2.585 2.585a.75.75 0 0 0 1.061-1.06zM8.5 19.559l5.572 1.486A3 3 0 0 1 8.5 19.559m2.466-11.775L25.463 22.28A2.73 2.73 0 0 0 26 20.647V7.353a2.75 2.75 0 0 0-3.458-2.657z"/>`,
  'regular': `<path d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l5.396 5.397-3.57.952a2.75 2.75 0 0 0-2.042 2.658v3.426a2.75 2.75 0 0 0 2.042 2.658L7 19.159v.341a4.5 4.5 0 0 0 8.56 1.942l6.574 1.753 2.585 2.585a.75.75 0 0 0 1.061-1.06zm16.737 18.858L4.432 16.92a1.25 1.25 0 0 1-.928-1.207v-3.427c0-.567.381-1.062.928-1.208l4.41-1.176zm-5.945-.033A3 3 0 0 1 8.5 19.559zM10.966 7.784l1.225 1.225L22.93 6.146a1.25 1.25 0 0 1 1.57 1.207v13.294c0 .198-.045.383-.125.547l1.087 1.088A2.73 2.73 0 0 0 26 20.647V7.353a2.75 2.75 0 0 0-3.459-2.657z"/>`
} as const;

export default function MegaphoneOffIcon({ 
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

  const gradientId = 'megaphoneofficon_gradient';
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