
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M8.254 7c.967 0 1.75.783 1.75 1.75v9.5A1.75 1.75 0 0 1 8.254 20H3.75A1.75 1.75 0 0 1 2 18.25v-9.5C2 7.783 2.784 7 3.75 7zm-2.002 9.495h-.5l-.102.007a.75.75 0 0 0 0 1.486l.102.007h.5l.102-.007a.75.75 0 0 0 0-1.486zM19.75 4a2.25 2.25 0 0 1 2.245 2.096L22 6.25v8.5a2.25 2.25 0 0 1-2.096 2.245L19.75 17H11V8.5a2.5 2.5 0 0 0-2.335-2.495L8.499 6H6.013a2.25 2.25 0 0 1 2.072-1.994L8.25 4zm-4.5 9.5h-2.5a.75.75 0 0 0-.101 1.493l.101.007h2.5a.75.75 0 0 0 .102-1.493z"/>`,
  'regular': `<path d="M8.254 7c.967 0 1.75.783 1.75 1.75v9.5A1.75 1.75 0 0 1 8.254 20H3.75A1.75 1.75 0 0 1 2 18.25v-9.5C2 7.783 2.784 7 3.75 7zm0 1.5H3.75a.25.25 0 0 0-.25.25v9.5c0 .138.112.25.25.25h4.504a.25.25 0 0 0 .25-.25v-9.5a.25.25 0 0 0-.25-.25M6.252 16a.75.75 0 0 1 .102 1.493l-.102.007h-.5a.75.75 0 0 1-.102-1.493L5.752 16zM19.75 4a2.25 2.25 0 0 1 2.245 2.096L22 6.25v8.5a2.25 2.25 0 0 1-2.096 2.245L19.75 17H11v-1.5h8.75a.75.75 0 0 0 .744-.648l.006-.102v-8.5a.75.75 0 0 0-.648-.743L19.75 5.5H8.25a.75.75 0 0 0-.707.5h-1.53a2.25 2.25 0 0 1 2.072-1.994L8.25 4zm-4.5 9a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1 0-1.5z"/>`
} as const;

export default function PhoneTabletIcon({ 
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

  const gradientId = 'phonetableticon_gradient';
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