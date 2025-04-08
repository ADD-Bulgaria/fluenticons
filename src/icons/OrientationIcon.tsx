
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6.75 4a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5zM3.5 8.75a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0zM2 12.9c0-1.05.85-1.9 1.9-1.9h10.2c1.05 0 1.9.85 1.9 1.9v5.2a1.9 1.9 0 0 1-1.9 1.9H3.9A1.9 1.9 0 0 1 2 18.1zM12.25 11a.75.75 0 0 1-.75-.75v-1.5a.75.75 0 0 1 1.5 0v1.5a.75.75 0 0 1-.75.75m-8.5-5.5a.25.25 0 0 0-.25.25v.5a.75.75 0 0 1-1.5 0v-.5C2 4.784 2.784 4 3.75 4h.5a.75.75 0 0 1 0 1.5zm7.75.25a.25.25 0 0 0-.25-.25h-.5a.75.75 0 0 1 0-1.5h.5c.966 0 1.75.784 1.75 1.75v.5a.75.75 0 0 1-1.5 0zM17 16.076c0 .484.419.87.888.747a5.502 5.502 0 0 0-.373-10.73l.304-.355a.75.75 0 1 0-1.138-.976l-1.5 1.75a.75.75 0 0 0 0 .976l1.5 1.75a.75.75 0 1 0 1.138-.976l-.597-.697a4.001 4.001 0 0 1 .372 7.783c-.333.095-.594.381-.594.728"/>`,
  'regular': `<path d="M6.75 4a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5zM3.5 8.75a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0zM3.9 11A1.9 1.9 0 0 0 2 12.9v5.2c0 1.05.85 1.9 1.9 1.9h10.2a1.9 1.9 0 0 0 1.9-1.9v-5.2a1.9 1.9 0 0 0-1.9-1.9h-1.85a.75.75 0 0 0 .75-.75v-1.5a.75.75 0 0 0-1.5 0v1.5c0 .414.336.75.75.75zm-.4 1.9c0-.22.18-.4.4-.4h10.2c.22 0 .4.18.4.4v5.2a.4.4 0 0 1-.4.4H3.9a.4.4 0 0 1-.4-.4zm.25-7.4a.25.25 0 0 0-.25.25v.5a.75.75 0 0 1-1.5 0v-.5C2 4.784 2.784 4 3.75 4h.5a.75.75 0 0 1 0 1.5zm7.75.25a.25.25 0 0 0-.25-.25h-.5a.75.75 0 0 1 0-1.5h.5c.966 0 1.75.784 1.75 1.75v.5a.75.75 0 0 1-1.5 0zM17 16.076c0 .484.419.87.888.747a5.502 5.502 0 0 0-.373-10.73l.304-.355a.75.75 0 1 0-1.138-.976l-1.5 1.75a.75.75 0 0 0 0 .976l1.5 1.75a.75.75 0 1 0 1.138-.976l-.597-.697a4.001 4.001 0 0 1 .372 7.783c-.333.095-.594.381-.594.728"/>`
} as const;

export default function OrientationIcon({ 
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

  const gradientId = 'orientationicon_gradient';
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