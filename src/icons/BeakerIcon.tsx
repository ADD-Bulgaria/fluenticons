
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12 5v8.438a4 4 0 0 1-.712 2.277L9.706 18h12.587l-1.582-2.285A4 4 0 0 1 20 13.438V5h1a1 1 0 1 0 0-2H11a1 1 0 1 0 0 2zm11.677 15H8.322l-2.744 3.963C4.104 26.092 5.628 29 8.218 29h15.564c2.589 0 4.113-2.908 2.639-5.037z"/>`,
  'regular': `<path d="M20 5v8.438a4 4 0 0 0 .71 2.277l5.71 8.248C27.896 26.092 26.372 29 23.783 29H8.218c-2.59 0-4.114-2.908-2.64-5.037l5.71-8.248A4 4 0 0 0 12 13.438V5h-1a1 1 0 1 1 0-2h10a1 1 0 1 1 0 2zm-6 8.438a6 6 0 0 1-1.067 3.415L12.139 18h7.721l-.794-1.147A6 6 0 0 1 18 13.438V5h-4zm-3.228 6.536-3.55 5.127A1.21 1.21 0 0 0 8.218 27h15.565a1.21 1.21 0 0 0 .994-1.899l-3.55-5.127A1 1 0 0 1 21 20H11q-.118 0-.228-.026"/>`
} as const;

export default function BeakerIcon({ 
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

  const gradientId = 'beakericon_gradient';
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