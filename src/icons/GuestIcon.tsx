
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'color': `<path fill-rule="evenodd" d="M35.75 4A4.25 4.25 0 0 1 40 8.25v31.5A4.25 4.25 0 0 1 35.75 44h-23.5A4.25 4.25 0 0 1 8 39.75V8.25A4.25 4.25 0 0 1 12.25 4zm-14.5 5a1.25 1.25 0 1 0 0 2.5h5.5a1.25 1.25 0 1 0 0-2.5z" clip-rule="evenodd"/><path fill-opacity=".7" fill-rule="evenodd" d="M35.75 4A4.25 4.25 0 0 1 40 8.25v31.5A4.25 4.25 0 0 1 35.75 44h-23.5A4.25 4.25 0 0 1 8 39.75V8.25A4.25 4.25 0 0 1 12.25 4zm-14.5 5a1.25 1.25 0 1 0 0 2.5h5.5a1.25 1.25 0 1 0 0-2.5z" clip-rule="evenodd"/><path fill-opacity=".9" d="M17.8 28a3.8 3.8 0 0 0-3.8 3.8c0 2.407 1.198 4.27 3.074 5.475C18.902 38.451 21.35 39 24 39s5.098-.55 6.926-1.725C32.802 36.07 34 34.207 34 31.8a3.8 3.8 0 0 0-3.8-3.8zm.7-7.5a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0"/>`,
  'filled': `<path d="M35.75 4A4.25 4.25 0 0 1 40 8.25v31.5A4.25 4.25 0 0 1 35.75 44h-23.5A4.25 4.25 0 0 1 8 39.75V8.25A4.25 4.25 0 0 1 12.25 4zM20 10.25c0 .69.56 1.25 1.25 1.25h5.5a1.25 1.25 0 1 0 0-2.5h-5.5c-.69 0-1.25.56-1.25 1.25M18.5 20.5a5.5 5.5 0 1 0 11 0 5.5 5.5 0 0 0-11 0m-.7 7.5a3.8 3.8 0 0 0-3.8 3.8c0 2.407 1.198 4.27 3.074 5.475C18.902 38.451 21.35 39 24 39s5.098-.55 6.926-1.725C32.802 36.07 34 34.207 34 31.8a3.8 3.8 0 0 0-3.8-3.8z"/>`,
  'regular': `<path d="M24 15a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11m-3 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m-7 11.3a3.8 3.8 0 0 1 3.8-3.8h12.4a3.8 3.8 0 0 1 3.8 3.8c0 2.407-1.198 4.27-3.074 5.475C29.098 38.451 26.65 39 24 39s-5.098-.55-6.926-1.725C15.198 36.07 14 34.207 14 31.8m3.8-1.3a1.3 1.3 0 0 0-1.3 1.3c0 1.457.677 2.57 1.926 3.372C19.723 36.006 21.65 36.5 24 36.5s4.277-.494 5.574-1.328c1.249-.802 1.926-1.915 1.926-3.372a1.3 1.3 0 0 0-1.3-1.3zM21.25 9a1.25 1.25 0 1 0 0 2.5h5.5a1.25 1.25 0 1 0 0-2.5zm14.5-5A4.25 4.25 0 0 1 40 8.25v31.5A4.25 4.25 0 0 1 35.75 44h-23.5A4.25 4.25 0 0 1 8 39.75V8.25A4.25 4.25 0 0 1 12.25 4zM10.5 8.25v31.5c0 .967.784 1.75 1.75 1.75h23.5a1.75 1.75 0 0 0 1.75-1.75V8.25a1.75 1.75 0 0 0-1.75-1.75h-23.5a1.75 1.75 0 0 0-1.75 1.75"/>`
} as const;

export default function GuestIcon({ 
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

  const gradientId = 'guesticon_gradient';
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