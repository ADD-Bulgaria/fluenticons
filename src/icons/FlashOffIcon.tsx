
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="m14.436 15.497 6.283 6.284a.75.75 0 0 0 1.061-1.061L3.28 2.22a.75.75 0 1 0-1.06 1.06L5.939 7l-1.836 5.153a1.75 1.75 0 0 0 1.642 2.337l1.568.006-1.269 5.669c-.33 1.477 1.487 2.459 2.541 1.371zm5.21-5.377-3.122 3.222-9.47-9.47.37-1.041A1.25 1.25 0 0 1 8.602 2h6.453a1.25 1.25 0 0 1 1.186 1.645L14.79 8h3.958c1.104 0 1.666 1.327.898 2.12"/>`,
  'regular': `<path d="m5.939 7-3.72-3.72A.75.75 0 1 1 3.28 2.22l18.5 18.5a.75.75 0 0 1-1.06 1.06l-6.284-6.283-5.851 6.039c-1.054 1.088-2.872.106-2.541-1.372l1.27-5.668-1.57-.006a1.75 1.75 0 0 1-1.641-2.337zm7.436 7.436L7.113 8.174l-1.597 4.483a.25.25 0 0 0 .234.333l2.502.01a.75.75 0 0 1 .729.914l-1.473 6.578zM18.158 9.5l-2.695 2.781 1.06 1.061 3.123-3.222c.768-.793.206-2.12-.898-2.12H14.79l1.452-4.355A1.25 1.25 0 0 0 15.055 2H8.602c-.529 0-1 .333-1.178.83l-.37 1.042 1.173 1.174.55-1.546h5.931l-1.67 5.013a.75.75 0 0 0 .71.987z"/>`
} as const;

export default function FlashOffIcon({ 
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

  const gradientId = 'flashofficon_gradient';
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