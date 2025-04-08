
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M3 7.5A4.5 4.5 0 0 1 7.5 3h17A4.5 4.5 0 0 1 29 7.5v6.653c-.606-.28-1.281-.51-2-.689V11H5v13.5A2.5 2.5 0 0 0 7.5 27H14v1c0 .304.043.644.154 1H7.5A4.5 4.5 0 0 1 3 24.5zm25.5 12.356c-.55.298-1.228.551-2 .743-1.03.255-2.225.401-3.5.401-3.866 0-7-1.343-7-3s3.134-3 7-3c1.275 0 2.47.146 3.5.401.772.192 1.45.444 2 .743.94.51 1.5 1.155 1.5 1.856 0 .7-.56 1.345-1.5 1.856M16.936 29.5c-.595-.441-.936-.954-.936-1.5v-7.327c.436.33.936.603 1.46.827 1.494.64 3.454 1 5.54 1 1.234 0 2.424-.126 3.5-.361.726-.16 1.4-.368 2-.622l.04-.017a7 7 0 0 0 1.46-.827V28c0 1.657-3.134 3-7 3-2.591 0-4.853-.603-6.064-1.5"/>`,
  'regular': `<path d="M7.5 3A4.5 4.5 0 0 0 3 7.5v17A4.5 4.5 0 0 0 7.5 29h6.654A3.4 3.4 0 0 1 14 28v-1H7.5A2.5 2.5 0 0 1 5 24.5V11h22v2.464c.719.179 1.394.408 2 .689V7.5A4.5 4.5 0 0 0 24.5 3zM5 7.5A2.5 2.5 0 0 1 7.5 5h17A2.5 2.5 0 0 1 27 7.5V9H5zm23.5 12.356c-.55.298-1.228.551-2 .743-1.03.255-2.225.401-3.5.401-3.866 0-7-1.343-7-3s3.134-3 7-3c1.275 0 2.47.146 3.5.401.772.192 1.45.444 2 .743.94.51 1.5 1.155 1.5 1.856 0 .7-.56 1.345-1.5 1.856M16.936 29.5c-.595-.441-.936-.954-.936-1.5v-7.327c.436.33.936.603 1.46.827 1.494.64 3.454 1 5.54 1 1.234 0 2.424-.126 3.5-.361.726-.16 1.4-.368 2-.622l.04-.017a7 7 0 0 0 1.46-.827V28c0 1.657-3.134 3-7 3-2.591 0-4.853-.603-6.064-1.5"/>`
} as const;

export default function WindowDatabaseIcon({ 
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

  const gradientId = 'windowdatabaseicon_gradient';
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