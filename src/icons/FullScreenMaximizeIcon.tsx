
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M3 6.5A3.5 3.5 0 0 1 6.5 3h4.25a1.25 1.25 0 1 1 0 2.5H6.5a1 1 0 0 0-1 1v4.25a1.25 1.25 0 1 1-2.5 0zm17-2.25c0-.69.56-1.25 1.25-1.25h4.25A3.5 3.5 0 0 1 29 6.5v4.25a1.25 1.25 0 1 1-2.5 0V6.5a1 1 0 0 0-1-1h-4.25c-.69 0-1.25-.56-1.25-1.25M4.25 20c.69 0 1.25.56 1.25 1.25v4.25a1 1 0 0 0 1 1h4.25a1.25 1.25 0 1 1 0 2.5H6.5A3.5 3.5 0 0 1 3 25.5v-4.25c0-.69.56-1.25 1.25-1.25m23.5 0c.69 0 1.25.56 1.25 1.25v4.25a3.5 3.5 0 0 1-3.5 3.5h-4.25a1.25 1.25 0 1 1 0-2.5h4.25a1 1 0 0 0 1-1v-4.25c0-.69.56-1.25 1.25-1.25"/>`,
  'regular': `<path d="M3 6.25A3.25 3.25 0 0 1 6.25 3h4.25a1 1 0 1 1 0 2H6.25C5.56 5 5 5.56 5 6.25v4.25a1 1 0 1 1-2 0zM20.5 4a1 1 0 0 1 1-1h4.25A3.25 3.25 0 0 1 29 6.25v4.25a1 1 0 1 1-2 0V6.25C27 5.56 26.44 5 25.75 5H21.5a1 1 0 0 1-1-1M4 20.5a1 1 0 0 1 1 1v4.25c0 .69.56 1.25 1.25 1.25h4.25a1 1 0 1 1 0 2H6.25A3.25 3.25 0 0 1 3 25.75V21.5a1 1 0 0 1 1-1m24 0a1 1 0 0 1 1 1v4.25A3.25 3.25 0 0 1 25.75 29H21.5a1 1 0 1 1 0-2h4.25c.69 0 1.25-.56 1.25-1.25V21.5a1 1 0 0 1 1-1"/>`
} as const;

export default function FullScreenMaximizeIcon({ 
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
        viewBox="0 0 32 32"
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

  const gradientId = 'fullscreenmaximizeicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
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