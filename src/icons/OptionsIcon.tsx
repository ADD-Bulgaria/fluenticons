
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M44 14.25c0 .69-.56 1.25-1.25 1.25H5.25a1.25 1.25 0 1 1 0-2.5h37.5c.69 0 1.25.56 1.25 1.25"/><path d="M44 14.25c0 .69-.56 1.25-1.25 1.25H5.25a1.25 1.25 0 1 1 0-2.5h37.5c.69 0 1.25.56 1.25 1.25"/><path d="M44 14.25c0 .69-.56 1.25-1.25 1.25H5.25a1.25 1.25 0 1 1 0-2.5h37.5c.69 0 1.25.56 1.25 1.25m0 19c0 .69-.56 1.25-1.25 1.25H5.25a1.25 1.25 0 1 1 0-2.5h37.5c.69 0 1.25.56 1.25 1.25"/><path d="M44 33.25c0 .69-.56 1.25-1.25 1.25H5.25a1.25 1.25 0 1 1 0-2.5h37.5c.69 0 1.25.56 1.25 1.25"/><path d="M44 33.25c0 .69-.56 1.25-1.25 1.25H5.25a1.25 1.25 0 1 1 0-2.5h37.5c.69 0 1.25.56 1.25 1.25"/><circle cx="17" cy="33.25" r="6.25"/><circle cx="31.25" cy="14.25" r="6.25"/>`,
  'filled': `<path d="M5.25 15.5h19.875a6.252 6.252 0 0 0 12.25 0h5.375a1.25 1.25 0 1 0 0-2.5h-5.375a6.252 6.252 0 0 0-12.25 0H5.25a1.25 1.25 0 1 0 0 2.5m0 19h5.625a6.252 6.252 0 0 0 12.25 0H42.75a1.25 1.25 0 1 0 0-2.5H23.125a6.252 6.252 0 0 0-12.25 0H5.25a1.25 1.25 0 1 0 0 2.5"/>`,
  'regular': `<path d="M5.25 15.5h19.875a6.252 6.252 0 0 0 12.25 0h5.375a1.25 1.25 0 1 0 0-2.5h-5.375a6.252 6.252 0 0 0-12.25 0H5.25a1.25 1.25 0 1 0 0 2.5m26-5a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5m-26 24h5.625a6.252 6.252 0 0 0 12.25 0H42.75a1.25 1.25 0 1 0 0-2.5H23.125a6.252 6.252 0 0 0-12.25 0H5.25a1.25 1.25 0 1 0 0 2.5m11.75-5a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5"/>`
} as const;

export default function OptionsIcon({ 
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
        viewBox="0 0 48 48"
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

  const gradientId = 'optionsicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
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