
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M7 3.5v6.238c0 .375-.094.744-.273 1.074L5.54 13h8.922l-1.188-2.188A2.25 2.25 0 0 1 13 9.738V3.5h1A.75.75 0 0 0 14 2H6a.75.75 0 0 0 0 1.5zm8.275 11H4.725l-1.582 2.915A1.75 1.75 0 0 0 4.68 20h6.734l.106-.423c.162-.648.497-1.24.97-1.712l2.988-2.989zm3.825-1.83-5.903 5.902a2.7 2.7 0 0 0-.706 1.247l-.458 1.831a1.087 1.087 0 0 0 1.319 1.318l1.83-.457a2.7 2.7 0 0 0 1.248-.707l5.902-5.902A2.286 2.286 0 0 0 19.1 12.67"/>`,
  'regular': `<path d="M6 3.5h1v6.238c0 .375-.094.744-.273 1.074l-3.584 6.603A1.75 1.75 0 0 0 4.68 20h6.734l.106-.423c.096-.383.252-.746.461-1.077h-7.3a.25.25 0 0 1-.22-.37l1.97-3.63h7.137l.805 1.482 1.106-1.106-2.206-4.064A2.25 2.25 0 0 1 13 9.738V3.5h1A.75.75 0 0 0 14 2H6a.75.75 0 0 0 0 1.5m2.5 6.238V3.5h3v6.238c0 .625.156 1.24.454 1.79l.8 1.472H7.246l.8-1.473A3.75 3.75 0 0 0 8.5 9.738m10.6 2.932-5.903 5.902a2.7 2.7 0 0 0-.706 1.247l-.458 1.831a1.087 1.087 0 0 0 1.319 1.318l1.83-.457a2.7 2.7 0 0 0 1.248-.707l5.902-5.902A2.286 2.286 0 0 0 19.1 12.67"/>`
} as const;

export default function BeakerEditIcon({ 
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

  const gradientId = 'beakerediticon_gradient';
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