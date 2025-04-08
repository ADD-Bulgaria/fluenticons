
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M13.431 3.154a3.5 3.5 0 0 1 5.347.474l.484.695-8.75 8.75-.531-.318a3.5 3.5 0 0 1-.674-5.476zm-1.151 10.98 3.277 1.966c.14.085.258.202.343.343l1.778 2.964 7.93-7.929-2.752-2.084a1 1 0 0 1-.217-.225L20.424 5.99zm7.016 7.969-.557-.928 8.478-8.478 1.28.97a3.5 3.5 0 0 1 .284 5.338l-4.085 3.846a3.5 3.5 0 0 1-5.4-.748m-6.948-5.596-8.657 8.5a2.346 2.346 0 1 0 3.303 3.334l8.57-8.57-1.25-2.085zM19 26a1 1 0 1 0 0 2h-2a1 1 0 1 0 0 2h11.333a1 1 0 1 0 0-2H26a1 1 0 1 0 0-2z"/>`,
  'regular': `<path d="M18.778 3.628a3.5 3.5 0 0 0-5.346-.474L9.307 7.28a3.5 3.5 0 0 0 .675 5.476l2.955 1.773-9.947 9.766a3.346 3.346 0 1 0 4.71 4.754l9.852-9.852 1.744 2.907a3.5 3.5 0 0 0 5.4.748l4.086-3.846a3.5 3.5 0 0 0-.285-5.338l-5.64-4.273a1 1 0 0 1-.217-.225zm-3.932.94a1.5 1.5 0 0 1 2.291.203l.69.989-5.857 5.856-.96-.576a1.5 1.5 0 0 1-.288-2.347zm-1.108 8.108 5.25-5.25 2.011 2.886a3 3 0 0 0 .65.676l2.531 1.918-5.044 5.043-1.52-2.535a3 3 0 0 0-1.03-1.029zm6.459 7.041 5.592-5.592 1.5 1.136a1.5 1.5 0 0 1 .122 2.288l-4.086 3.845a1.5 1.5 0 0 1-2.314-.32zm-3.706-2.289L6.286 27.634a1.346 1.346 0 1 1-1.895-1.913l10.318-10.13.848.51c.14.084.259.201.343.342zM19 26a1 1 0 1 0 0 2h-2a1 1 0 1 0 0 2h11.333a1 1 0 1 0 0-2H26a1 1 0 1 0 0-2z"/>`
} as const;

export default function GavelIcon({ 
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

  const gradientId = 'gavelicon_gradient';
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