
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M31.75 8a3.25 3.25 0 0 1 3.245 3.066l.005.184V14h1.75c2.9 0 5.25 2.35 5.25 5.25v13.5A3.25 3.25 0 0 1 38.75 36H35v1.75A3.25 3.25 0 0 1 31.75 41h-15.5A3.25 3.25 0 0 1 13 37.75V36H9.25A3.25 3.25 0 0 1 6 32.75v-13.5C6 16.35 8.35 14 11.25 14H13v-2.75a3.25 3.25 0 0 1 3.066-3.245L16.25 8zM15.5 37.75c0 .414.336.75.75.75h15.5a.75.75 0 0 0 .75-.75v-8.5a.75.75 0 0 0-.75-.75h-15.5a.75.75 0 0 0-.75.75zM31.75 10.5h-15.5a.75.75 0 0 0-.743.648l-.007.102V14h17v-2.75a.75.75 0 0 0-.648-.743z"/>`,
  'regular': `<path d="M16.25 8h15.5a3.25 3.25 0 0 1 3.245 3.066l.005.184v2.749l1.75.001c2.9 0 5.25 2.35 5.25 5.25v13.5A3.25 3.25 0 0 1 38.75 36L35 35.999v1.751A3.25 3.25 0 0 1 31.75 41h-15.5A3.25 3.25 0 0 1 13 37.75v-1.751L9.25 36A3.25 3.25 0 0 1 6 32.75v-13.5C6 16.35 8.35 14 11.25 14l1.75-.001V11.25a3.25 3.25 0 0 1 3.066-3.245zm15.5 20.5h-15.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h15.5a.75.75 0 0 0 .75-.75v-8.5a.75.75 0 0 0-.75-.75m5-12h-25.5a2.75 2.75 0 0 0-2.75 2.75v13.5c0 .414.336.75.75.75l3.75-.001V29.25A3.25 3.25 0 0 1 16.25 26h15.5A3.25 3.25 0 0 1 35 29.25v4.249l3.75.001a.75.75 0 0 0 .75-.75v-13.5a2.75 2.75 0 0 0-2.75-2.75m-5-6h-15.5a.75.75 0 0 0-.743.648l-.007.102v2.749h17V11.25a.75.75 0 0 0-.648-.743z"/>`
} as const;

export default function PrintIcon({ 
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

  const gradientId = 'printicon_gradient';
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