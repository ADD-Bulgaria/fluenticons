
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M13.197 7.572 19.1 1.669a2.286 2.286 0 1 1 3.232 3.233l-5.902 5.902a2.7 2.7 0 0 1-1.248.707l-1.83.457a1.087 1.087 0 0 1-1.319-1.318l.458-1.83c.118-.473.362-.904.706-1.248m-.707-.707 4.496-4.496A2.24 2.24 0 0 0 15.75 2h-7.5A2.25 2.25 0 0 0 6 4.25v15.5A2.25 2.25 0 0 0 8.25 22h7.5A2.25 2.25 0 0 0 18 19.75v-9.102l-.863.863a3.7 3.7 0 0 1-1.712.97l-1.83.457c-1.53.383-2.914-1.002-2.532-2.53l.458-1.831c.162-.648.497-1.24.97-1.712M13.25 18a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1 0-1.5z"/>`,
  'regular': `<path d="M13.197 7.572 19.1 1.669a2.286 2.286 0 1 1 3.232 3.233l-5.902 5.902a2.7 2.7 0 0 1-1.248.707l-1.83.457a1.087 1.087 0 0 1-1.319-1.318l.458-1.83c.118-.473.362-.904.706-1.248M15.75 2c.456 0 .881.136 1.236.37l-1.137 1.136a1 1 0 0 0-.099-.006h-7.5a.75.75 0 0 0-.75.75v15.5c0 .414.336.75.75.75h7.5a.75.75 0 0 0 .75-.75v-7.73q.346-.217.637-.509l.863-.863v9.102A2.25 2.25 0 0 1 15.75 22h-7.5A2.25 2.25 0 0 1 6 19.75V4.25A2.25 2.25 0 0 1 8.25 2zm-2.501 15.5a.75.75 0 0 1 .002 1.5l-2.5.004a.75.75 0 0 1-.002-1.5z"/>`
} as const;

export default function PhoneEditIcon({ 
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

  const gradientId = 'phoneediticon_gradient';
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