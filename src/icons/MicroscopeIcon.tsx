
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M11 3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1h2a1 1 0 0 1 1 1v2.01c6.12.262 11 5.306 11 11.49 0 3.947-1.988 7.429-5.017 9.5H28a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2h13.5a9.5 9.5 0 0 0 9.5-9.5c0-5.079-3.986-9.227-9-9.487V17a1 1 0 0 1-1 1h-1v1a3 3 0 1 1-6 0v-1H9a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h2zm1 15v1a1 1 0 1 0 2 0v-1zm-5 7a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1"/>`,
  'regular': `<path d="M12 2a1 1 0 0 0-1 1v1H9a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h1v1a3 3 0 1 0 6 0v-1h1a1 1 0 0 0 1-1V9.013A9.5 9.5 0 0 1 17.5 28H4a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2h-4.017A11.49 11.49 0 0 0 29 18.5c0-6.184-4.88-11.228-11-11.49V5a1 1 0 0 0-1-1h-2V3a1 1 0 0 0-1-1zm2 16v1a1 1 0 1 1-2 0v-1zm2-2h-6V6h6zm-8 8a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2z"/>`
} as const;

export default function MicroscopeIcon({ 
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

  const gradientId = 'microscopeicon_gradient';
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