
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M18.586 6.414a2 2 0 0 0 1.9.527 2 2 0 1 0-1.9-.527M14.268 20A2 2 0 0 0 18 19a2 2 0 0 0-.586-1.414 2 2 0 0 0-1.9-.527A2.004 2.004 0 0 0 14 19c0 .364.097.706.268 1M4 21a2 2 0 1 1 0-4 2 2 0 0 1 0 4M6.586 6.414a2 2 0 0 0 1.9.527A2.004 2.004 0 0 0 10 5a2 2 0 1 0-3.414 1.414m-2.77 9.592 2.445-8.56a3 3 0 0 0 1.924.548l-2.446 8.56a3 3 0 0 0-1.923-.548M17.17 6h-6.342a3 3 0 0 0 0-2h6.342a3 3 0 0 0 0 2m-4 14a3 3 0 0 1 0-2H6.829a3 3 0 0 1 0 2zm2.645-3.994 2.445-8.56a3 3 0 0 0 1.924.548l-2.446 8.56a3 3 0 0 0-1.923-.548"/>`,
  'regular': `<path d="M18.882 6.658a2 2 0 0 0 1.33.33 2 2 0 1 0-1.33-.33M14 19a2 2 0 1 0 4 0 2 2 0 0 0-4 0M4 21a2 2 0 1 1 0-4 2 2 0 0 1 0 4M6.882 6.658a2 2 0 0 0 1.33.33A2.002 2.002 0 0 0 9.855 4.25a2 2 0 1 0-2.973 2.408m-.401.93L4.077 16a3 3 0 0 1 1.442.412l2.404-8.414a3 3 0 0 1-1.442-.412M17.095 5.75h-6.19a3 3 0 0 0 0-1.5h6.19a3 3 0 0 0 0 1.5m-4 14a3 3 0 0 1 0-1.5h-6.19a3 3 0 0 1 0 1.5zm2.982-3.749 2.404-8.414c.425.25.917.399 1.442.412l-2.404 8.414A3 3 0 0 0 16.077 16"/>`
} as const;

export default function SelectObjectSkewIcon({ 
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

  const gradientId = 'selectobjectskewicon_gradient';
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