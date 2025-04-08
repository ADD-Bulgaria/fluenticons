
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M16 12a8 8 0 1 1 16 0v2h1.75A6.25 6.25 0 0 1 40 20.25v2.082A9.5 9.5 0 0 0 28 31.5a9.46 9.46 0 0 0 2 5.832V42H14.25A6.25 6.25 0 0 1 8 35.75v-15.5A6.25 6.25 0 0 1 14.25 14H16zm8-5.5a5.5 5.5 0 0 0-5.5 5.5v2h11v-2A5.5 5.5 0 0 0 24 6.5M24 31a3 3 0 1 0 0-6 3 3 0 0 0 0 6m21 .5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0m-13 7.747v5.79a1 1 0 0 0 1.588.808L37.5 43l3.912 2.845A1 1 0 0 0 43 45.036v-5.789A9.46 9.46 0 0 1 37.5 41a9.46 9.46 0 0 1-5.5-1.753"/>`,
  'regular': `<path d="M27 28a3 3 0 1 1-6 0 3 3 0 0 1 6 0M16 14v-2a8 8 0 1 1 16 0v2h1.75A6.25 6.25 0 0 1 40 20.25v2.082A9.5 9.5 0 0 0 37.5 22v-1.75a3.75 3.75 0 0 0-3.75-3.75h-19.5a3.75 3.75 0 0 0-3.75 3.75v15.5a3.75 3.75 0 0 0 3.75 3.75H30V42H14.25A6.25 6.25 0 0 1 8 35.75v-15.5A6.25 6.25 0 0 1 14.25 14zm2.5-2v2h11v-2a5.5 5.5 0 1 0-11 0M45 31.5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0m-13 7.747v5.79a1 1 0 0 0 1.588.808L37.5 43l3.912 2.845A1 1 0 0 0 43 45.036v-5.789A9.46 9.46 0 0 1 37.5 41a9.46 9.46 0 0 1-5.5-1.753"/>`
} as const;

export default function LockClosedRibbonIcon({ 
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

  const gradientId = 'lockclosedribbonicon_gradient';
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