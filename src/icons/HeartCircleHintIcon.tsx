
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M21.102 4.209a20.2 20.2 0 0 1 5.796 0 1.25 1.25 0 1 1-.36 2.474 17.7 17.7 0 0 0-5.077 0 1.25 1.25 0 0 1-.36-2.474M5.625 20.044a1.25 1.25 0 0 1 1.058 1.417 17.7 17.7 0 0 0 0 5.078 1.25 1.25 0 0 1-2.474.36 20.2 20.2 0 0 1 0-5.797 1.25 1.25 0 0 1 1.416-1.058m36.75 0a1.25 1.25 0 0 1 1.416 1.058 20.2 20.2 0 0 1 0 5.796 1.25 1.25 0 1 1-2.474-.36 17.7 17.7 0 0 0 0-5.077 1.25 1.25 0 0 1 1.058-1.417m-22.33 22.33a1.25 1.25 0 0 1 1.416-1.057 17.7 17.7 0 0 0 5.078 0 1.25 1.25 0 0 1 .36 2.474 20.2 20.2 0 0 1-5.797 0 1.25 1.25 0 0 1-1.058-1.416m15.9-34.418a20.2 20.2 0 0 1 4.099 4.099 1.25 1.25 0 1 1-2.003 1.495 17.7 17.7 0 0 0-3.591-3.59 1.25 1.25 0 0 1 1.495-2.004m-22.14.254a1.25 1.25 0 0 1-.255 1.75 17.7 17.7 0 0 0-3.59 3.59 1.25 1.25 0 1 1-2.004-1.495 20.2 20.2 0 0 1 4.099-4.1 1.25 1.25 0 0 1 1.75.255M39.79 34.196a1.25 1.25 0 0 1 .254 1.75 20.2 20.2 0 0 1-4.099 4.098 1.25 1.25 0 1 1-1.495-2.004 17.7 17.7 0 0 0 3.59-3.59 1.25 1.25 0 0 1 1.75-.254m-31.58 0a1.25 1.25 0 0 1 1.75.254 17.7 17.7 0 0 0 3.59 3.59 1.25 1.25 0 0 1-1.495 2.004 20.2 20.2 0 0 1-4.099-4.099 1.25 1.25 0 0 1 .254-1.75m24.566-16.411a5.09 5.09 0 0 0-7.66-.095l-1.118 1.246-1.118-1.246a5.091 5.091 0 0 0-7.66 6.708l7.828 9.165a1.25 1.25 0 0 0 1.9 0l7.828-9.166a5.09 5.09 0 0 0 0-6.612"/>`,
  'regular': `<path d="M21.102 4.209a20.2 20.2 0 0 1 5.796 0 1.25 1.25 0 1 1-.36 2.474 17.7 17.7 0 0 0-5.077 0 1.25 1.25 0 0 1-.36-2.474M5.625 20.044a1.25 1.25 0 0 1 1.058 1.417 17.7 17.7 0 0 0 0 5.078 1.25 1.25 0 0 1-2.474.36 20.2 20.2 0 0 1 0-5.797 1.25 1.25 0 0 1 1.416-1.058m36.75 0a1.25 1.25 0 0 1 1.416 1.058 20.2 20.2 0 0 1 0 5.796 1.25 1.25 0 1 1-2.474-.36 17.7 17.7 0 0 0 0-5.077 1.25 1.25 0 0 1 1.058-1.417m-22.33 22.33a1.25 1.25 0 0 1 1.416-1.057 17.7 17.7 0 0 0 5.078 0 1.25 1.25 0 0 1 .36 2.474 20.2 20.2 0 0 1-5.797 0 1.25 1.25 0 0 1-1.058-1.416m15.9-34.418a20.2 20.2 0 0 1 4.099 4.099 1.25 1.25 0 1 1-2.003 1.495 17.7 17.7 0 0 0-3.591-3.59 1.25 1.25 0 0 1 1.495-2.004m-22.14.254a1.25 1.25 0 0 1-.255 1.75 17.7 17.7 0 0 0-3.59 3.59 1.25 1.25 0 1 1-2.004-1.495 20.2 20.2 0 0 1 4.099-4.1 1.25 1.25 0 0 1 1.75.255M39.79 34.196a1.25 1.25 0 0 1 .254 1.75 20.2 20.2 0 0 1-4.099 4.098 1.25 1.25 0 1 1-1.495-2.004 17.7 17.7 0 0 0 3.59-3.59 1.25 1.25 0 0 1 1.75-.254m-31.58 0a1.25 1.25 0 0 1 1.75.254 17.7 17.7 0 0 0 3.59 3.59 1.25 1.25 0 0 1-1.495 2.004 20.2 20.2 0 0 1-4.099-4.099 1.25 1.25 0 0 1 .254-1.75M26.976 19.36a2.591 2.591 0 0 1 3.899 3.414l-6.878 8.052-6.877-8.052a2.591 2.591 0 0 1 3.898-3.414l2.05 2.282a1.25 1.25 0 0 0 1.86 0zm5.8-1.575a5.09 5.09 0 0 0-7.66-.095l-1.119 1.246-1.118-1.246a5.091 5.091 0 0 0-7.66 6.707l7.828 9.166a1.25 1.25 0 0 0 1.9 0l7.829-9.166a5.09 5.09 0 0 0 0-6.612"/>`
} as const;

export default function HeartCircleHintIcon({ 
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

  const gradientId = 'heartcirclehinticon_gradient';
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