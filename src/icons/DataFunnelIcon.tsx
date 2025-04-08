
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M19.248 7.504a2.752 2.752 0 0 0 0-5.504H4.75a2.752 2.752 0 1 0 0 5.504zm-2 7a2.752 2.752 0 1 0 0-5.504H6.75a2.752 2.752 0 0 0 0 5.504zM17 18.752A2.75 2.75 0 0 0 14.248 16H9.75a2.752 2.752 0 0 0 0 5.504h4.498A2.75 2.75 0 0 0 17 18.752"/>`,
  'regular': `<path d="M22.002 4.752a2.75 2.75 0 0 1-2.752 2.752H4.752a2.752 2.752 0 1 1 0-5.504H19.25a2.75 2.75 0 0 1 2.752 2.752m-2 7a2.75 2.75 0 0 1-2.752 2.752H6.752a2.752 2.752 0 1 1 0-5.504H17.25a2.75 2.75 0 0 1 2.752 2.752m-3 7a2.75 2.75 0 0 1-2.752 2.752H9.752a2.752 2.752 0 1 1 0-5.504h4.498a2.75 2.75 0 0 1 2.752 2.752m3.5-14c0-.692-.56-1.252-1.252-1.252H4.752a1.252 1.252 0 1 0 0 2.504H19.25c.692 0 1.252-.56 1.252-1.252m-2 7c0-.692-.56-1.252-1.252-1.252H6.752a1.252 1.252 0 0 0 0 2.504H17.25c.692 0 1.252-.56 1.252-1.252m-3 7c0-.691-.56-1.252-1.252-1.252H9.752a1.252 1.252 0 0 0 0 2.504h4.498c.691 0 1.252-.56 1.252-1.252"/>`
} as const;

export default function DataFunnelIcon({ 
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

  const gradientId = 'datafunnelicon_gradient';
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