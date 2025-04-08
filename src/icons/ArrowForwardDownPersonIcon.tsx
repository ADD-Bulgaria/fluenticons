
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M16.296 5.706a1 1 0 1 1 1.415-1.414l4.997 5.004a1 1 0 0 1 0 1.413l-4.997 4.998a1 1 0 1 1-1.415-1.414L19.59 11H13a8 8 0 0 1-7.996-7.75L5 3a1 1 0 0 1 2 0 6 6 0 0 0 5.775 5.996L13 9h6.586zM9 13.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m2 5.375C11 20.431 9.714 22 6.5 22S2 20.437 2 18.875v-.103C2 17.792 2.794 17 3.773 17h5.454c.98 0 1.773.793 1.773 1.772z"/>`,
  'regular': `<path d="m19.69 9.5-2.963-2.962a.75.75 0 0 1 .977-1.134l.084.073L22.03 9.72a.75.75 0 0 1 .073.976l-.073.084-4.242 4.243a.75.75 0 0 1-1.134-.977l.073-.084 2.963-2.961L14 11a7.75 7.75 0 0 1-7.746-7.504L6.25 3.25a.75.75 0 0 1 1.5 0 6.25 6.25 0 0 0 6.02 6.246L14 9.5zM9 13.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m2 5.375C11 20.432 9.714 22 6.5 22S2 20.438 2 18.875v-.103C2 17.793 2.794 17 3.773 17h5.454c.98 0 1.773.793 1.773 1.772z"/>`
} as const;

export default function ArrowForwardDownPersonIcon({ 
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

  const gradientId = 'arrowforwarddownpersonicon_gradient';
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