
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M9 4.5v6.238c0 .375-.094.744-.273 1.074L7.539 14h4.482a6.52 6.52 0 0 1 3.094-2.549 2.3 2.3 0 0 1-.116-.713V4.5h1A.75.75 0 0 0 16 3H8a.75.75 0 0 0 0 1.5zm-2.275 11h4.588a6.5 6.5 0 0 0-.314 2 6.47 6.47 0 0 0 1.022 3.5h-5.34a1.75 1.75 0 0 1-1.539-2.585zM23 17.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0m-7.977-2.476.07-.058.076-.043a.5.5 0 0 1 .492.043l.07.058 1.769 1.77 1.772-1.77.069-.058a.5.5 0 0 1 .569 0l.069.058.058.07a.5.5 0 0 1 0 .568l-.058.07-1.772 1.769 1.769 1.769.058.069a.5.5 0 0 1 0 .569l-.058.069-.07.058a.5.5 0 0 1-.568 0l-.07-.058-1.768-1.77-1.767 1.768-.07.057a.5.5 0 0 1-.568 0l-.07-.057-.057-.07a.5.5 0 0 1 0-.568l.058-.07 1.767-1.766-1.77-1.77-.057-.069a.5.5 0 0 1 0-.569z"/>`,
  'regular': `<path d="M8 4.5h1v6.238c0 .375-.094.744-.273 1.074l-3.585 6.603A1.75 1.75 0 0 0 6.68 21h5.341a6.5 6.5 0 0 1-.708-1.5H6.68a.25.25 0 0 1-.22-.37l1.971-3.63h2.882a6.5 6.5 0 0 1 .708-1.5H9.246l.8-1.473a3.75 3.75 0 0 0 .454-1.789V4.5h3v6.238c0 .492.096.977.282 1.43a6.5 6.5 0 0 1 1.333-.717 2.3 2.3 0 0 1-.116-.713V4.5h1A.75.75 0 0 0 16 3H8a.75.75 0 0 0 0 1.5m15 13a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0m-7.977-2.476.07-.058.076-.043a.5.5 0 0 1 .492.043l.07.058 1.769 1.77 1.772-1.77.069-.058a.5.5 0 0 1 .569 0l.069.058.058.07a.5.5 0 0 1 0 .568l-.058.07-1.772 1.769 1.769 1.769.058.069a.5.5 0 0 1 0 .569l-.058.069-.07.058a.5.5 0 0 1-.568 0l-.07-.058-1.768-1.77-1.767 1.768-.07.057a.5.5 0 0 1-.568 0l-.07-.057-.057-.07a.5.5 0 0 1 0-.568l.058-.07 1.767-1.766-1.77-1.77-.057-.069a.5.5 0 0 1 0-.569z"/>`
} as const;

export default function BeakerDismissIcon({ 
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

  const gradientId = 'beakerdismissicon_gradient';
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