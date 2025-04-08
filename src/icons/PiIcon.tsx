
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M2 7a3 3 0 0 1 3-3h15.25a1 1 0 1 1 0 2H17v10.703a1.5 1.5 0 0 0 2.005 1.412l.159-.057a1 1 0 1 1 .672 1.884l-.159.057c-2.28.814-4.677-.876-4.677-3.296V6H9.979a68 68 0 0 1-.36 4.21c-.316 2.683-.89 6.142-1.924 9.118a1 1 0 1 1-1.89-.656c.965-2.774 1.518-6.065 1.827-8.695A66 66 0 0 0 7.976 6H5a1 1 0 0 0-1 1v.5a1 1 0 0 1-2 0z"/>`,
  'regular': `<path d="M2.5 6.75A2.75 2.75 0 0 1 5.25 4h15a.75.75 0 0 1 0 1.5H17v11.453a1.75 1.75 0 0 0 2.339 1.648l.159-.057a.75.75 0 0 1 .504 1.412l-.159.057c-2.116.756-4.343-.813-4.343-3.06V5.5H9.494a69 69 0 0 1-.247 4.534c-.252 2.862-.758 6.499-1.789 9.462a.75.75 0 0 1-1.416-.492c.969-2.786 1.462-6.275 1.71-9.1A68 68 0 0 0 7.995 5.5H5.25C4.56 5.5 4 6.06 4 6.75v.5a.75.75 0 0 1-1.5 0z"/>`
} as const;

export default function PiIcon({ 
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

  const gradientId = 'piicon_gradient';
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