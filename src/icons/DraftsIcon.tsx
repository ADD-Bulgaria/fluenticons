
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M2 4a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1"/><path fill-opacity=".7" d="M2 4a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1"/><path d="M2 8a1 1 0 0 1 1-1h11a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1"/><path fill-opacity=".7" d="M2 8a1 1 0 0 1 1-1h11a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1"/><path d="M2 12a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1"/><path fill-opacity=".7" d="M2 12a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1"/><path d="m3.587 15.353 11.059-11.06 5.06 5.061-11.058 11.06-3.944-1.116z"/><path d="M3.941 15a3.1 3.1 0 0 0-.825 1.476L2.02 21.078a.75.75 0 0 0 .904.903l4.601-1.096a3.1 3.1 0 0 0 1.477-.825s-1.824-.41-3.238-1.823C4.35 16.822 3.941 15 3.941 15M20.952 3.048a3.58 3.58 0 0 0-5.061 0l-2.306 2.306 5.06 5.06 2.307-2.305a3.58 3.58 0 0 0 0-5.06"/><path d="m12.78 6.16 2.12-2.12s.41 1.823 1.824 3.237S19.96 9.1 19.96 9.1l-2.12 2.122s-1.824-.41-3.238-1.823c-1.415-1.415-1.823-3.237-1.823-3.237"/>`,
  'filled': `<path d="m13.94 5 5.061 5.06L9.063 20a2.25 2.25 0 0 1-1 .58l-5.115 1.395a.75.75 0 0 1-.92-.921l1.394-5.116a2.25 2.25 0 0 1 .58-.999zm-7.414 6-1.5 1.5H2.75a.75.75 0 0 1 0-1.5zm14.352-8.174.153.144.145.153a3.58 3.58 0 0 1-.145 4.908l-.97.969L15 3.94l.97-.97a3.58 3.58 0 0 1 4.908-.144M10.526 7l-1.5 1.5H2.75a.75.75 0 1 1 0-1.5zm4-4-1.5 1.5H2.75a.75.75 0 1 1 0-1.5z"/>`,
  'regular': `<path d="m20.878 2.826.153.144.145.153a3.58 3.58 0 0 1-.145 4.908L9.063 19.999a2.25 2.25 0 0 1-1 .58l-5.115 1.395a.75.75 0 0 1-.92-.921l1.394-5.116a2.25 2.25 0 0 1 .58-.999L15.97 2.97a3.58 3.58 0 0 1 4.908-.144M15.001 6.06l-9.938 9.938a.75.75 0 0 0-.193.333l-1.05 3.85 3.85-1.05a.75.75 0 0 0 .332-.194L17.94 9zM6.526 11l-1.5 1.5H2.75a.75.75 0 0 1 0-1.5zm4-4-1.5 1.5H2.75a.75.75 0 1 1 0-1.5zm6.505-2.97-.97.97L19 7.94l.97-.97a2.078 2.078 0 1 0-2.939-2.94M14.526 3l-1.5 1.5H2.75a.75.75 0 1 1 0-1.5z"/>`
} as const;

export default function DraftsIcon({ 
  variant = 'regular',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'color' | 'filled' | 'regular' }) {
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

  const gradientId = 'draftsicon_gradient';
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