
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="m7.426 2.83-3.321 9.323a1.75 1.75 0 0 0 1.642 2.337l1.568.006-1.27 5.669c-.33 1.477 1.488 2.459 2.542 1.371l5.022-5.183-.182-.741a43 43 0 0 0-.366-1.38 3.75 3.75 0 1 1 .64-3.95c.423.062.869.215 1.285.513.558.398.935.964 1.157 1.603.1.258.212.618.322 1.007l3.183-3.285c.768-.793.206-2.12-.898-2.12h-3.959l1.452-4.355A1.25 1.25 0 0 0 15.057 2H8.604c-.53 0-1 .333-1.178.83m4.074 8.92a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0m1.313 1a2.751 2.751 0 1 1 .142-1.5h.295c.376 0 .786.095 1.155.358.365.261.633.647.8 1.134.188.482.446 1.459.648 2.264a90 90 0 0 1 .348 1.447l.021.09c.082.232.18.332.245.378.07.05.16.079.283.079h.761a2.75 2.75 0 1 1 .289 1.5h-1.05c-.376 0-.786-.095-1.155-.358-.37-.265-.64-.658-.806-1.155l-.02-.07-.008-.032-.02-.093a89 89 0 0 0-.344-1.423c-.212-.85-.45-1.731-.593-2.09l-.015-.042c-.085-.253-.189-.36-.256-.408a.47.47 0 0 0-.283-.079zm7.437 5.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5"/>`,
  'regular': `<path d="M7.426 2.83A1.25 1.25 0 0 1 8.604 2h6.453a1.25 1.25 0 0 1 1.186 1.645L14.791 8h3.96c1.103 0 1.665 1.327.897 2.12l-3.183 3.285a12 12 0 0 0-.322-1.007 4 4 0 0 0-.247-.562L18.16 9.5h-4.41a.75.75 0 0 1-.71-.987L14.71 3.5H8.78l-3.262 9.157a.25.25 0 0 0 .234.333l.96.004a3.76 3.76 0 0 0 1.99 2.173L7.51 20.492l5.666-5.848a52 52 0 0 1 .433 1.709l-5.022 5.183c-1.054 1.088-2.872.106-2.541-1.372l1.27-5.668-1.57-.006a1.75 1.75 0 0 1-1.641-2.337zm5.387 9.92a2.751 2.751 0 1 1 .142-1.5h.295c.376 0 .786.095 1.155.358.365.261.633.647.8 1.134.188.482.446 1.459.648 2.264a90 90 0 0 1 .348 1.447l.021.09c.082.232.18.332.245.378.07.05.16.079.283.079h.761a2.75 2.75 0 1 1 .289 1.5h-1.05c-.376 0-.786-.095-1.155-.358-.37-.265-.64-.658-.806-1.155l-.02-.07-.008-.032-.02-.093a89 89 0 0 0-.344-1.423c-.212-.85-.45-1.731-.593-2.09l-.015-.042c-.085-.253-.189-.36-.256-.408a.47.47 0 0 0-.283-.079zm-1.313-1a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0m8.75 6.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5"/>`
} as const;

export default function FlashFlowIcon({ 
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

  const gradientId = 'flashflowicon_gradient';
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