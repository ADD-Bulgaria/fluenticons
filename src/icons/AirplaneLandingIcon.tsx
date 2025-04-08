
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M10 5.039v.778l3.027 1.202h2.119l-1.25-2.808C13.002 2.202 10 2.841 10 5.039m2.72 2.935L8.5 6.297v-1.54c0-1.738-2.259-2.414-3.213-.961l-1.91 2.908a2.304 2.304 0 0 0 1.039 3.39l3.503 1.464-2.045 1.898c-1.627 1.511-.004 4.165 2.082 3.405l6.761-2.464 3.463 1.446A2.036 2.036 0 0 0 21 13.965v-1.23a4.715 4.715 0 0 0-4.715-4.716h-3.326a.6.6 0 0 1-.238-.045M3 20.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75"/>`,
  'regular': `<path d="M11.5 7.489v-2.45c0-.58.79-.747 1.026-.218l1.423 3.198h-.99a.6.6 0 0 1-.238-.045zm4.09.53-1.694-3.808C13.002 2.202 10 2.841 10 5.039v1.854l-1.5-.596v-1.54c0-1.738-2.259-2.414-3.213-.961l-1.91 2.908a2.304 2.304 0 0 0 1.039 3.39l3.503 1.464-2.045 1.898c-1.627 1.511-.004 4.165 2.082 3.405l6.761-2.464 3.463 1.446A2.036 2.036 0 0 0 21 13.965v-1.23a4.715 4.715 0 0 0-4.715-4.716zM7 6.951c0 .22.134.417.338.498l4.83 1.919c.25.1.52.151.79.151h3.327a3.215 3.215 0 0 1 3.215 3.216v1.23c0 .382-.39.642-.742.494l-3.643-1.521a1 1 0 0 0-.728-.017l-6.944 2.53c-.55.2-.977-.498-.548-.896l2.614-2.426a1 1 0 0 0-.295-1.656L4.994 8.71a.804.804 0 0 1-.362-1.183l1.91-2.908A.25.25 0 0 1 7 4.756zM3 20.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75"/>`
} as const;

export default function AirplaneLandingIcon({ 
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

  const gradientId = 'airplanelandingicon_gradient';
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