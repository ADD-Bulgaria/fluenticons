
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l4.257 4.258A8.46 8.46 0 0 0 5.5 11.5l-.001 4.111-1.416 3.644-.042.125A1.28 1.28 0 0 0 5.275 21h14.664l4.78 4.78a.75.75 0 0 0 1.061-1.061zm5.06 2.938 15.372 15.373c.181-.22.29-.503.29-.81l-.01-.158a1.3 1.3 0 0 0-.077-.306l-1.414-3.644v-4.112h-.004v-.255A8.501 8.501 0 0 0 8.34 5.158m9.126 16.844a3.502 3.502 0 0 1-6.932 0z"/>`,
  'regular': `<path d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l4.257 4.258A8.46 8.46 0 0 0 5.5 11.5l-.001 4.611-1.416 3.644-.042.124a1.28 1.28 0 0 0 1.235 1.62l5.223-.001.006.194a3.502 3.502 0 0 0 6.997-.192h2.938l4.28 4.28a.75.75 0 0 0 1.061-1.061zm15.658 17.779H5.596l1.352-3.474.028-.088a.8.8 0 0 0 .023-.184v-4.752l.004-.24a7 7 0 0 1 .596-2.601zm-2.942 1.651a2.002 2.002 0 0 1-3.998-.149L16 21.5zM8.34 5.158l1.063 1.063a7.001 7.001 0 0 1 11.599 5.28v4.752l.005.093a.8.8 0 0 0 .045.179l.853 2.199 1.996 1.995c.065-.153.1-.322.1-.499l-.01-.158a1.3 1.3 0 0 0-.076-.305l-1.414-3.644v-4.612l-.004-.255A8.501 8.501 0 0 0 8.34 5.158"/>`
} as const;

export default function AlertOffIcon({ 
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
        viewBox="0 0 28 28"
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

  const gradientId = 'alertofficon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 28"
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