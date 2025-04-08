
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M2.75 3a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5zm0 6a.75.75 0 0 0 0 1.5h7.14A5.5 5.5 0 0 1 11.336 9zm0 3h6.457A5.5 5.5 0 0 0 9 13.5H2.75a.75.75 0 0 1 0-1.5m0 3h6.457c.152.538.384 1.043.682 1.5H2.75a.75.75 0 0 1 0-1.5m0-9a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5zM19 13.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0M14.5 11a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5m0 5.125a.625.625 0 1 0 0-1.25.625.625 0 0 0 0 1.25"/>`,
  'regular': `<path d="M2.5 3a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1zm0 6a.5.5 0 0 0 0 1h7.757a5.5 5.5 0 0 1 1.08-1zm0 3h6.707a5.5 5.5 0 0 0-.185 1H2.5a.5.5 0 0 1 0-1m0 3h6.707q.149.524.393 1H2.5a.5.5 0 0 1 0-1m0-9a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1zM19 13.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0M14.5 11a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5m0 5.125a.625.625 0 1 0 0-1.25.625.625 0 0 0 0 1.25"/>`
} as const;

export default function LineHorizontal5ErrorIcon({ 
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
        viewBox="0 0 20 20"
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

  const gradientId = 'linehorizontal5erroricon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
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