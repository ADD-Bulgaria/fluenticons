
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M21.25 19.5a.75.75 0 0 1 .102 1.493L21.25 21H2.75a.75.75 0 0 1-.102-1.493l.102-.007zM19.745 3a2.25 2.25 0 0 1 2.25 2.25v9.505a2.25 2.25 0 0 1-2.25 2.25h-6.521a1.25 1.25 0 0 1-2.448 0H4.25A2.25 2.25 0 0 1 2 14.755V5.25A2.25 2.25 0 0 1 4.25 3zm-2.495 9.5H6.75l-.102.007a.75.75 0 0 0 0 1.486L6.75 14h10.5l.102-.007a.75.75 0 0 0 0-1.486zM16.5 9a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-5.995 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m6 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2M6 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2m2.995 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m3 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>`,
  'regular': `<path d="M21.25 19.5a.75.75 0 0 1 .102 1.493L21.25 21H2.75a.75.75 0 0 1-.102-1.493l.102-.007zM19.745 3a2.25 2.25 0 0 1 2.25 2.25v9.505a2.25 2.25 0 0 1-2.25 2.25h-6.521a1.25 1.25 0 0 1-2.448 0H4.25A2.25 2.25 0 0 1 2 14.755V5.25A2.25 2.25 0 0 1 4.25 3zm0 1.5H4.25a.75.75 0 0 0-.75.75v9.505c0 .414.336.75.75.75h15.495a.75.75 0 0 0 .75-.75V5.25a.75.75 0 0 0-.75-.75m-2.495 8a.75.75 0 0 1 .102 1.493L17.25 14H6.75a.75.75 0 0 1-.102-1.493l.102-.007zM16.5 9a1 1 0 1 1 0 2 1 1 0 0 1 0-2m-5.995 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2m-3 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2m6 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2M6 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2m2.995 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2m3 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2m3 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2m3 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>`
} as const;

export default function KeyboardLayoutFloatIcon({ 
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

  const gradientId = 'keyboardlayoutfloaticon_gradient';
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