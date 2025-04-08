
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12.75 2a3.25 3.25 0 0 0-2.242.898L3.696 9.395a2.25 2.25 0 0 0-.034 3.223l6.256 6.227a2.25 2.25 0 0 0 3.166.009l6.945-6.835c.621-.61.97-1.445.97-2.316V4.75A2.75 2.75 0 0 0 18.25 2zm3.5 5.75a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5m3.006 6.433 1.475-1.451q.067-.067.132-.136a2.75 2.75 0 0 1-.691 2.813l-5.334 5.229a4.75 4.75 0 0 1-6.666-.016l-4.356-4.31a2.75 2.75 0 0 1-.681-2.808l1.629 1.62q.048.064.107.121l2.411 2.386 1.931 1.922a3.25 3.25 0 0 0 4.575.014l5.334-5.229q.075-.073.134-.155"/>`,
  'regular': `<path d="M17.5 6.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0m-6.992-3.602A3.25 3.25 0 0 1 12.75 2h5.499A2.75 2.75 0 0 1 21 4.75v4.953a3.25 3.25 0 0 1-.97 2.316l-6.946 6.835a2.25 2.25 0 0 1-3.166-.01l-6.256-6.226a2.25 2.25 0 0 1 .034-3.223zm2.243.602c-.45 0-.883.173-1.208.484L4.73 10.48a.75.75 0 0 0-.011 1.075l6.257 6.226a.75.75 0 0 0 1.055.003l6.945-6.834a1.75 1.75 0 0 0 .523-1.247V4.75c0-.69-.56-1.25-1.25-1.25zm7.98 9.232-1.475 1.451q-.06.082-.134.155l-5.334 5.229a3.25 3.25 0 0 1-4.575-.013L7.282 17.63l-2.411-2.386a1 1 0 0 1-.107-.12l-1.63-1.621a2.75 2.75 0 0 0 .682 2.807l4.356 4.311a4.75 4.75 0 0 0 6.666.016l5.334-5.229a2.75 2.75 0 0 0 .69-2.813 4 4 0 0 1-.131.136"/>`
} as const;

export default function TagMultipleIcon({ 
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

  const gradientId = 'tagmultipleicon_gradient';
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