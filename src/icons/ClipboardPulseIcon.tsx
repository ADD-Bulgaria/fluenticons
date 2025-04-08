
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M10.25 2h3.5a2.25 2.25 0 0 1 2.236 2h1.764A2.25 2.25 0 0 1 20 6.25V13h-2.26l-.99-1.65a1.75 1.75 0 0 0-3.065.117l-.511 1.022-1.245-4.233a1.75 1.75 0 0 0-3.244-.289L6.168 13H4V6.25A2.25 2.25 0 0 1 6.25 4h1.764a2.25 2.25 0 0 1 2.236-2m3.5 1.5h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5m3 13H20v3.25A2.25 2.25 0 0 1 17.75 22H6.25A2.25 2.25 0 0 1 4 19.75V16.5h3.25a1.75 1.75 0 0 0 1.565-.967l1.011-2.022 1.245 4.233a1.75 1.75 0 0 0 3.244.289l1.085-2.17c.33.4.823.637 1.35.637m-5.78-7.962a.75.75 0 0 0-1.39-.123L6.785 14H2.75a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 .67-.415l2.148-4.295 1.963 6.672a.75.75 0 0 0 1.39.123l1.889-3.778.797 1.329a.75.75 0 0 0 .643.364h4.5a.75.75 0 0 0 0-1.5h-4.075l-1.282-2.136a.75.75 0 0 0-1.314.05l-1.647 3.296z"/>`,
  'regular': `<path d="M13.75 2a2.25 2.25 0 0 1 2.236 2h1.764A2.25 2.25 0 0 1 20 6.25V13h-1.5V6.25a.75.75 0 0 0-.75-.75h-2.129c-.404.603-1.091 1-1.871 1h-3.5c-.78 0-1.467-.397-1.871-1H6.25a.75.75 0 0 0-.75.75V13H4V6.25A2.25 2.25 0 0 1 6.25 4h1.764a2.25 2.25 0 0 1 2.236-2zm2.245 2.096L16 4.25q0-.078-.005-.154M13.75 3.5h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5m4.75 13H20v3.25A2.25 2.25 0 0 1 17.75 22H6.25A2.25 2.25 0 0 1 4 19.75V16.5h1.5v3.25c0 .414.336.75.75.75h11.5a.75.75 0 0 0 .75-.75zm-7.53-7.962a.75.75 0 0 0-1.39-.123L6.785 14H2.75a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 .67-.415l2.148-4.295 1.963 6.672a.75.75 0 0 0 1.39.123l1.889-3.778.797 1.329a.75.75 0 0 0 .643.364h4.5a.75.75 0 0 0 0-1.5h-4.075l-1.282-2.136a.75.75 0 0 0-1.314.05l-1.647 3.296z"/>`
} as const;

export default function ClipboardPulseIcon({ 
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

  const gradientId = 'clipboardpulseicon_gradient';
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