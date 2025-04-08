
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M14 5.5a1.5 1.5 0 0 0-3 0V11H5.5a1.5 1.5 0 0 0 0 3H11v16.25A6.75 6.75 0 0 0 17.75 37H34v5.5a1.5 1.5 0 0 0 3 0V37h5.5a1.5 1.5 0 0 0 0-3H17.75A3.75 3.75 0 0 1 14 30.25zm20 12.25V32h3V17.75A6.75 6.75 0 0 0 30.25 11H16v3h14.25A3.75 3.75 0 0 1 34 17.75"/>`,
  'regular': `<path d="M14 5.25a1.25 1.25 0 1 0-2.5 0v6.25H5.25a1.25 1.25 0 1 0 0 2.5h6.25v16.25a6.25 6.25 0 0 0 6.25 6.25H34v6.25a1.25 1.25 0 1 0 2.5 0V36.5h6.25a1.25 1.25 0 1 0 0-2.5h-25A3.75 3.75 0 0 1 14 30.25zm20 12.5V32h2.5V17.75a6.25 6.25 0 0 0-6.25-6.25H16V14h14.25A3.75 3.75 0 0 1 34 17.75"/>`
} as const;

export default function CropIcon({ 
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

  const gradientId = 'cropicon_gradient';
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