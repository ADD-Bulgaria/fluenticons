
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M16.78 1.97a.75.75 0 1 0-1.06 1.06l1.72 1.72h-3.69A4.75 4.75 0 0 0 9 9.5v1a3.25 3.25 0 0 1-3.25 3.25h-3a.75.75 0 0 0 0 1.5h3a4.75 4.75 0 0 0 4.75-4.75v-1a3.25 3.25 0 0 1 3.25-3.25h3.69l-1.72 1.72a.75.75 0 0 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06zM13.25 3.5A5.75 5.75 0 0 0 7.5 9.25v1a2.25 2.25 0 0 1-2.25 2.25h-2.5a.75.75 0 0 1 0-1.5h2.5a.75.75 0 0 0 .75-.75v-1A7.25 7.25 0 0 1 13.25 2h.5a.75.75 0 0 1 0 1.5zm.914 4.001c-.244.485-.3 1.03-.17 1.544a.75.75 0 0 0-.494.705v1A7.25 7.25 0 0 1 6.25 18h-.5a.75.75 0 0 1 0-1.5h.5A5.75 5.75 0 0 0 12 10.75v-1a2.25 2.25 0 0 1 2.164-2.25"/>`,
  'regular': `<path d="M16.146 2.146a.5.5 0 0 1 .708 0l2.988 2.99a.5.5 0 0 1 0 .729l-2.988 2.989a.5.5 0 0 1-.708-.708L18.293 6H13.5C11.6 6 10 7.6 10 9.5v1C10 13 8 15 5.5 15h-3c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h3C7.4 14 9 12.4 9 10.5v-1C9 7 11 5 13.5 5h4.793l-2.147-2.146a.5.5 0 0 1 0-.708M2.5 12H5c1.1 0 2-.9 2-2V9c0-3.3 2.7-6 6-6h.5c.3 0 .5-.2.5-.5s-.2-.5-.5-.5H13C9.1 2 6 5.1 6 9v1c0 .6-.4 1-1 1H2.5c-.3 0-.5.2-.5.5s.2.5.5.5m12.6-4H14c-1.1 0-2 .9-2 2v1c0 3.3-2.7 6-6 6h-.5c-.3 0-.5.2-.5.5s.2.5.5.5H6c3.9 0 7-3.1 7-7v-1c0-.6.4-1 1-1h1.1c-.1-.3-.1-.7 0-1"/>`
} as const;

export default function StreamOutputIcon({ 
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

  const gradientId = 'streamoutputicon_gradient';
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