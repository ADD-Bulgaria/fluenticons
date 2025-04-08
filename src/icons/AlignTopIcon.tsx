
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M5.25 6.5a1.25 1.25 0 1 0 0 2.5h37.5a1.25 1.25 0 1 0 0-2.5zM26 15.75a4.25 4.25 0 0 1 4.25-4.25h5.5A4.25 4.25 0 0 1 40 15.75v15A4.25 4.25 0 0 1 35.75 35h-5.5A4.25 4.25 0 0 1 26 30.75zM12.25 11.5h5.5A4.25 4.25 0 0 1 22 15.75V38a4.25 4.25 0 0 1-4.25 4.25h-5.5A4.25 4.25 0 0 1 8 38V15.75a4.25 4.25 0 0 1 4.25-4.25"/>`,
  'regular': `<path d="M5.25 6.5a1.25 1.25 0 1 0 0 2.5h37.5a1.25 1.25 0 1 0 0-2.5zM26 15.75a4.25 4.25 0 0 1 4.25-4.25h5.5A4.25 4.25 0 0 1 40 15.75v15A4.25 4.25 0 0 1 35.75 35h-5.5A4.25 4.25 0 0 1 26 30.75zM30.25 14a1.75 1.75 0 0 0-1.75 1.75v15c0 .966.784 1.75 1.75 1.75h5.5a1.75 1.75 0 0 0 1.75-1.75v-15A1.75 1.75 0 0 0 35.75 14zm-18-2.5h5.5A4.25 4.25 0 0 1 22 15.75V38a4.25 4.25 0 0 1-4.25 4.25h-5.5A4.25 4.25 0 0 1 8 38V15.75a4.25 4.25 0 0 1 4.25-4.25m5.5 2.5h-5.5a1.75 1.75 0 0 0-1.75 1.75V38c0 .967.784 1.75 1.75 1.75h5.5A1.75 1.75 0 0 0 19.5 38V15.75A1.75 1.75 0 0 0 17.75 14"/>`
} as const;

export default function AlignTopIcon({ 
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

  const gradientId = 'aligntopicon_gradient';
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