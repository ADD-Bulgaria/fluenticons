
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M5.5 4.25v1.28A11.96 11.96 0 0 1 14 2c6.627 0 12 5.373 12 12s-5.373 12-12 12a11.95 11.95 0 0 1-5.637-1.404l-4.77 1.357a1.25 1.25 0 0 1-1.544-1.544l1.356-4.77A11.95 11.95 0 0 1 2 14q.001-1.023.166-2h.004c.254-1.314.609-2.182 1.334-1.973.694.2.509.84.317 1.5a7 7 0 0 0-.137.524H3.68Q3.5 12.999 3.5 14c0 1.884.496 3.65 1.363 5.178a.75.75 0 0 1 .07.575l-1.318 4.634 4.634-1.318a.75.75 0 0 1 .576.07A10.45 10.45 0 0 0 14 24.5c5.799 0 10.5-4.701 10.5-10.5S19.799 3.5 14 3.5a10.48 10.48 0 0 0-8.247 4H8.75a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 4 8.25v-4a.75.75 0 0 1 1.5 0M8.75 6.5h-.582A9.46 9.46 0 0 1 14 4.5a9.5 9.5 0 0 1 0 19 9.45 9.45 0 0 1-4.681-1.231 1.75 1.75 0 0 0-1.343-.162l-2.908.827.826-2.907a1.75 1.75 0 0 0-.161-1.343A9.45 9.45 0 0 1 4.5 14q.002-.87.15-1.694l.013-.053c.026-.126.066-.264.119-.448l.016-.056c.083-.282.223-.759.195-1.206A1.7 1.7 0 0 0 4.872 10H8.75a1.75 1.75 0 1 0 0-3.5M14 9.75a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4a.75.75 0 0 0 0-1.5H14z"/>`,
  'regular': `<path d="M5.5 5.53V4.25a.75.75 0 0 0-1.5 0v4c0 .414.336.75.75.75h4a.75.75 0 0 0 0-1.5H5.753c1.923-2.436 4.903-4 8.247-4 5.799 0 10.5 4.701 10.5 10.5S19.799 24.5 14 24.5c-1.883 0-3.648-.495-5.175-1.362a.75.75 0 0 0-.576-.069l-4.634 1.318 1.317-4.634a.75.75 0 0 0-.069-.575A10.45 10.45 0 0 1 3.5 14q.001-1 .18-1.95h.004c.035-.17.086-.348.137-.524.192-.66.377-1.299-.317-1.499-.725-.209-1.08.659-1.334 1.973h-.004Q2 12.977 2 14c0 2.037.508 3.958 1.405 5.64L2.05 24.408a1.25 1.25 0 0 0 1.544 1.545l4.77-1.357A11.95 11.95 0 0 0 14 26c6.627 0 12-5.373 12-12S20.627 2 14 2c-3.321 0-6.327 1.35-8.5 3.53M13.25 9a.75.75 0 0 1 .75.75V15h3.25a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75v-6a.75.75 0 0 1 .75-.75"/>`
} as const;

export default function ChatHistoryIcon({ 
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

  const gradientId = 'chathistoryicon_gradient';
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