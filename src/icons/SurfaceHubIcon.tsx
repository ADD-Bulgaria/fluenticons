
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M19.25 2a.75.75 0 0 1 .75.727l-.004.102-1 9.5a.75.75 0 0 1-.643.664L18.25 13h-.729l1.467 8.118.011.102a.75.75 0 0 1-1.462.264l-.025-.1L16.9 18h-2.797l-.607 3.384a.75.75 0 0 1-1.488-.164l.011-.101.56-3.119H8.103l-.607 3.384a.75.75 0 0 1-1.488-.164l.011-.101L7.478 13H4.75a.75.75 0 0 1-.75-.727l.004-.101 1-9.5a.75.75 0 0 1 .643-.665L5.75 2zm-5.772 11H9.002l-.629 3.5h4.476zm2.518 0h-.994l-.629 3.5h2.255z"/>`,
  'regular': `<path d="M19.25 2a.75.75 0 0 1 .75.727l-.004.102-1 9.5a.75.75 0 0 1-.643.664L18.25 13h-.729l1.467 8.118.011.102a.75.75 0 0 1-1.462.264l-.025-.1L16.9 18h-2.797l-.607 3.384a.75.75 0 0 1-1.488-.164l.011-.101.56-3.119H8.103l-.607 3.384a.75.75 0 0 1-1.488-.164l.011-.101L7.478 13H4.75a.75.75 0 0 1-.75-.727l.004-.101 1-9.5a.75.75 0 0 1 .643-.665L5.75 2zm-5.772 11H9.002l-.629 3.5h4.476zm2.518 0h-.994l-.629 3.5h2.255zm2.42-9.5H6.425l-.842 8h11.993z"/>`
} as const;

export default function SurfaceHubIcon({ 
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

  const gradientId = 'surfacehubicon_gradient';
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