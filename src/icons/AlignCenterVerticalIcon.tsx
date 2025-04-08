
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M23.75 44c-.69 0-1.25-.56-1.25-1.25V40h-6.25A4.25 4.25 0 0 1 12 35.75v-5.5A4.25 4.25 0 0 1 16.25 26h6.25v-4H12.25A4.25 4.25 0 0 1 8 17.75v-5.5A4.25 4.25 0 0 1 12.25 8H22.5V5.25a1.25 1.25 0 1 1 2.5 0V8h10.75A4.25 4.25 0 0 1 40 12.25v5.5A4.25 4.25 0 0 1 35.75 22H25v4h6.75A4.25 4.25 0 0 1 36 30.25v5.5A4.25 4.25 0 0 1 31.75 40H25v2.75c0 .69-.56 1.25-1.25 1.25"/>`,
  'regular': `<path d="M23.75 44c-.69 0-1.25-.56-1.25-1.25V40h-6.25A4.25 4.25 0 0 1 12 35.75v-5.5A4.25 4.25 0 0 1 16.25 26h6.25v-4H12.25A4.25 4.25 0 0 1 8 17.75v-5.5A4.25 4.25 0 0 1 12.25 8H22.5V5.25a1.25 1.25 0 1 1 2.5 0V8h10.75A4.25 4.25 0 0 1 40 12.25v5.5A4.25 4.25 0 0 1 35.75 22H25v4h6.75A4.25 4.25 0 0 1 36 30.25v5.5A4.25 4.25 0 0 1 31.75 40H25v2.75c0 .69-.56 1.25-1.25 1.25m8-6.5a1.75 1.75 0 0 0 1.75-1.75v-5.5a1.75 1.75 0 0 0-1.75-1.75h-15.5a1.75 1.75 0 0 0-1.75 1.75v5.5c0 .967.784 1.75 1.75 1.75zm5.75-19.75v-5.5a1.75 1.75 0 0 0-1.75-1.75h-23.5a1.75 1.75 0 0 0-1.75 1.75v5.5c0 .966.784 1.75 1.75 1.75h23.5a1.75 1.75 0 0 0 1.75-1.75"/>`
} as const;

export default function AlignCenterVerticalIcon({ 
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

  const gradientId = 'aligncenterverticalicon_gradient';
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