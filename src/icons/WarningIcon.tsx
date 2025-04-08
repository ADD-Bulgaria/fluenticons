
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M20.471 6.228c1.617-2.99 5.916-2.966 7.5.042l15.533 29.502c1.49 2.83-.562 6.23-3.76 6.23H8.255c-3.22 0-5.27-3.44-3.738-6.272z"/><path d="M20.471 6.228c1.617-2.99 5.916-2.966 7.5.042l15.533 29.502c1.49 2.83-.562 6.23-3.76 6.23H8.255c-3.22 0-5.27-3.44-3.738-6.272z"/><path d="M24 15c.69 0 1.25.56 1.25 1.25v11.5a1.25 1.25 0 1 1-2.5 0v-11.5c0-.69.56-1.25 1.25-1.25m0 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>`,
  'filled': `<path d="M20.471 6.228c1.617-2.99 5.916-2.966 7.5.042l15.533 29.502c1.49 2.83-.562 6.23-3.76 6.23H8.255c-3.22 0-5.27-3.44-3.738-6.272zM24 15c-.69 0-1.25.56-1.25 1.25v11.5a1.25 1.25 0 1 0 2.5 0v-11.5c0-.69-.56-1.25-1.25-1.25m0 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>`,
  'regular': `<path d="M25.758 7.435c-.652-1.239-2.422-1.249-3.088-.017L6.717 36.919a1.75 1.75 0 0 0 1.539 2.583h31.487a1.75 1.75 0 0 0 1.549-2.566zm-5.287-1.207c1.617-2.99 5.916-2.966 7.5.042l15.533 29.502c1.49 2.83-.562 6.23-3.76 6.23H8.255c-3.22 0-5.27-3.44-3.738-6.272zM24 15c.69 0 1.25.56 1.25 1.25v11.5a1.25 1.25 0 1 1-2.5 0v-11.5c0-.69.56-1.25 1.25-1.25m0 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>`
} as const;

export default function WarningIcon({ 
  variant = 'regular',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'color' | 'filled' | 'regular' }) {
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

  const gradientId = 'warningicon_gradient';
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