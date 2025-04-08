
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M4 9.25A3.25 3.25 0 0 1 7.25 6h17.5A3.25 3.25 0 0 1 28 9.25v4.3a3.5 3.5 0 0 0-2.5-1.05h-4A3.5 3.5 0 0 0 18 16v.008a3.75 3.75 0 0 0-3.44 3.069 1.5 1.5 0 0 0-.06.423V22H7.25A3.25 3.25 0 0 1 4 18.75zM3 26h11.5v-2H3a1 1 0 1 0 0 2m16.5-10v1.5h-1.25a2.25 2.25 0 0 0-2.236 2H16v7.25A2.25 2.25 0 0 0 18.25 29h10.5A2.25 2.25 0 0 0 31 26.75V19.5h-.014a2.25 2.25 0 0 0-2.236-2H27.5V16a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2m2-.5h4a.5.5 0 0 1 .5.5v1.5h-5V16a.5.5 0 0 1 .5-.5"/>`,
  'regular': `<path d="M7.25 6A3.25 3.25 0 0 0 4 9.25v9.5A3.25 3.25 0 0 0 7.25 22h7.25v-2H7.25C6.56 20 6 19.44 6 18.75v-9.5C6 8.56 6.56 8 7.25 8h17.5c.69 0 1.25.56 1.25 1.25v3.285a3.5 3.5 0 0 1 2 1.015v-4.3A3.25 3.25 0 0 0 24.75 6zM3 24h11.5v2H3a1 1 0 1 1 0-2m16.5-8v1.5h-1.25a2.25 2.25 0 0 0-2.236 2H16v7.25A2.25 2.25 0 0 0 18.25 29h10.5A2.25 2.25 0 0 0 31 26.75V19.5h-.014a2.25 2.25 0 0 0-2.236-2H27.5V16a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2m2-.5h4a.5.5 0 0 1 .5.5v1.5h-5V16a.5.5 0 0 1 .5-.5"/>`
} as const;

export default function LaptopBriefcaseIcon({ 
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
        viewBox="0 0 32 32"
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

  const gradientId = 'laptopbriefcaseicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
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