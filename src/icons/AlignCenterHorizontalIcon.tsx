
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M44 24.25c0 .69-.56 1.25-1.25 1.25H40v6.25A4.25 4.25 0 0 1 35.75 36h-5.5A4.25 4.25 0 0 1 26 31.75V25.5h-4v10.25A4.25 4.25 0 0 1 17.75 40h-5.5A4.25 4.25 0 0 1 8 35.75V25.5H5.25a1.25 1.25 0 1 1 0-2.5H8V12.25A4.25 4.25 0 0 1 12.25 8h5.5A4.25 4.25 0 0 1 22 12.25V23h4v-6.75A4.25 4.25 0 0 1 30.25 12h5.5A4.25 4.25 0 0 1 40 16.25V23h2.75c.69 0 1.25.56 1.25 1.25"/>`,
  'regular': `<path d="M44 24.25c0 .69-.56 1.25-1.25 1.25H40v6.25A4.25 4.25 0 0 1 35.75 36h-5.5A4.25 4.25 0 0 1 26 31.75V25.5h-4v10.25A4.25 4.25 0 0 1 17.75 40h-5.5A4.25 4.25 0 0 1 8 35.75V25.5H5.25a1.25 1.25 0 1 1 0-2.5H8V12.25A4.25 4.25 0 0 1 12.25 8h5.5A4.25 4.25 0 0 1 22 12.25V23h4v-6.75A4.25 4.25 0 0 1 30.25 12h5.5A4.25 4.25 0 0 1 40 16.25V23h2.75c.69 0 1.25.56 1.25 1.25m-6.5-8a1.75 1.75 0 0 0-1.75-1.75h-5.5a1.75 1.75 0 0 0-1.75 1.75v15.5c0 .967.784 1.75 1.75 1.75h5.5a1.75 1.75 0 0 0 1.75-1.75zM17.75 10.5h-5.5a1.75 1.75 0 0 0-1.75 1.75v23.5c0 .967.784 1.75 1.75 1.75h5.5a1.75 1.75 0 0 0 1.75-1.75v-23.5a1.75 1.75 0 0 0-1.75-1.75"/>`
} as const;

export default function AlignCenterHorizontalIcon({ 
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

  const gradientId = 'aligncenterhorizontalicon_gradient';
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