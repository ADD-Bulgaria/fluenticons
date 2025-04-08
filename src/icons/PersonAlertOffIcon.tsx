
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M14 16a7 7 0 1 0 0-14 7 7 0 0 0 0 14m-8.5 2A3.5 3.5 0 0 0 2 21.5v.5c0 2.393 1.523 4.417 3.685 5.793C7.859 29.177 10.802 30 14 30c2.11 0 4.11-.358 5.85-1h-2.699l-.048-.003c-1.845-.118-2.791-2.325-1.534-3.74l1.93-2.172V21q0-.227.015-.45l-1.282-1.282A2.5 2.5 0 0 1 15.55 18zm23.793 12.207L26.586 27.5H17.2a.75.75 0 0 1-.51-1.247L19 23.656V21q.001-.508.098-.988l-1.805-1.805a1 1 0 0 1 1.414-1.414l12 12a1 1 0 0 1-1.414 1.414M21.02 16.985l7.98 7.98V21a5 5 0 0 0-7.98-4.015M24 31c-1.192 0-2.168-.883-2.245-2h4.49c-.077 1.117-1.053 2-2.245 2"/>`,
  'regular': `<path d="M21 9A7 7 0 1 1 7 9a7 7 0 0 1 14 0m-2 0A5 5 0 1 0 9 9a5 5 0 0 0 10 0M5.5 18A3.5 3.5 0 0 0 2 21.5v.5c0 2.393 1.523 4.417 3.685 5.793C7.859 29.177 10.802 30 14 30c2.11 0 4.11-.358 5.85-1h-2.699l-.048-.003c-.78-.05-1.4-.473-1.76-1.052Q14.686 28 14 28c-2.877 0-5.434-.744-7.241-1.894C4.939 24.95 4 23.472 4 22v-.5A1.5 1.5 0 0 1 5.5 20h11.464l-.732-.732A2.5 2.5 0 0 1 15.55 18zm23.793 12.207L26.586 27.5H17.2a.75.75 0 0 1-.51-1.247L19 23.656V21q.001-.508.098-.988l-1.805-1.805a1 1 0 0 1 1.414-1.414l12 12a1 1 0 0 1-1.414 1.414M21.02 16.985l7.98 7.98V21a5 5 0 0 0-7.98-4.015M24 31c-1.192 0-2.168-.883-2.245-2h4.49c-.077 1.117-1.053 2-2.245 2"/>`
} as const;

export default function PersonAlertOffIcon({ 
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

  const gradientId = 'personalertofficon_gradient';
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