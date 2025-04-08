
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'color': `<circle cx="14" cy="10" r="8"/><circle cx="14" cy="10" r="8" fill-opacity=".8"/><path d="M9.468 3.407 14.5 8.439l.761-.761a4.23 4.23 0 0 1-.76-2.428c0-1.196.493-2.277 1.289-3.05.596.137 1.168.34 1.706.602a2.75 2.75 0 0 0-1.147 3.789l2.753-2.754q.58.481 1.06 1.061L17.41 7.651a2.75 2.75 0 0 0 3.789-1.147A8 8 0 0 1 21.8 8.21a4.24 4.24 0 0 1-3.05 1.29 4.23 4.23 0 0 1-2.428-.762l-.761.762 5.032 5.032q-.43.624-.966 1.155L14.5 10.56l-3.97 3.97-1.06-1.062 3.97-3.97-5.127-5.126a8 8 0 0 1 1.155-.966" opacity=".6"/><path d="M4.25 9A2.25 2.25 0 0 0 2 11.25v2A8.75 8.75 0 0 0 10.75 22h2A2.25 2.25 0 0 0 15 19.75v-2A8.75 8.75 0 0 0 6.25 9z"/><path fill-opacity=".9" d="M4.25 9A2.25 2.25 0 0 0 2 11.25v2A8.75 8.75 0 0 0 10.75 22h2A2.25 2.25 0 0 0 15 19.75v-2A8.75 8.75 0 0 0 6.25 9z"/><path d="M7.78 13.72a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 1 0 1.06-1.06z"/>`,
  'filled': `<path d="M20.162 4.898c.406.49.755 1.029 1.036 1.606a2.75 2.75 0 0 1-3.789 1.148zm-1.06-1.06L16.348 6.59a2.75 2.75 0 0 1 1.147-3.789 8 8 0 0 1 1.607 1.036M22 10c0-.615-.07-1.214-.201-1.79a4.24 4.24 0 0 1-3.05 1.29 4.23 4.23 0 0 1-2.427-.761l-.761.761 5.032 5.032A7.96 7.96 0 0 0 22 10m-7.5-4.75c0-1.196.494-2.277 1.29-3.05a8.03 8.03 0 0 0-6.323 1.207L14.5 8.439l.761-.761A4.23 4.23 0 0 1 14.5 5.25m0 5.31 5.126 5.127A8 8 0 0 1 16 17.748a9.7 9.7 0 0 0-2.346-6.342zm-1.906-.214A9.7 9.7 0 0 0 6.252 8a8 8 0 0 1 2.06-3.626L13.44 9.5zM4.25 9A2.25 2.25 0 0 0 2 11.25v2A8.75 8.75 0 0 0 10.75 22h2A2.25 2.25 0 0 0 15 19.75v-2A8.75 8.75 0 0 0 6.25 9zm2.47 4.72a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06"/>`,
  'regular': `<path d="M18.035 15.096a6.5 6.5 0 0 1-2.154 1.128q.118.745.119 1.524a8.003 8.003 0 0 0-.12-15.526A8.003 8.003 0 0 0 6.252 8q.778 0 1.523.119a6.5 6.5 0 0 1 1.128-2.154zm1.06-1.06L15.062 10l.761-.761a4.23 4.23 0 0 0 2.428.76 4.23 4.23 0 0 0 2.22-.624q.03.308.03.625a6.47 6.47 0 0 1-1.404 4.035M16.225 3.89c.66.24 1.27.585 1.811 1.014l-2.187 2.187A2.74 2.74 0 0 1 15.5 5.75c0-.717.274-1.37.724-1.86M14.76 8.178l-.76.761-4.035-4.035a6.47 6.47 0 0 1 4.66-1.374A4.23 4.23 0 0 0 14 5.75c0 .903.281 1.74.761 2.428m5.349-.402a2.74 2.74 0 0 1-1.86.724c-.487 0-.944-.127-1.34-.349l2.186-2.186a6.5 6.5 0 0 1 1.014 1.81M4.25 10.5a.75.75 0 0 0-.75.75v2a7.25 7.25 0 0 0 7.25 7.25h2a.75.75 0 0 0 .75-.75v-2a7.25 7.25 0 0 0-7.25-7.25zM2 11.25A2.25 2.25 0 0 1 4.25 9h2A8.75 8.75 0 0 1 15 17.75v2A2.25 2.25 0 0 1 12.75 22h-2A8.75 8.75 0 0 1 2 13.25zm5.78 2.47a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 1 0 1.06-1.06z"/>`
} as const;

export default function SportIcon({ 
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

  const gradientId = 'sporticon_gradient';
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