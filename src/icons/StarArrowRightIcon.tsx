
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'light': `<path d="M20.402 11.35a1 1 0 0 1-.753-.549L16.45 4.28a.5.5 0 0 0-.898 0l-3.198 6.52a1 1 0 0 1-.753.55l-7.172 1.048a.5.5 0 0 0-.277.852l1.255 1.231a9 9 0 0 0-.893.525L3.45 13.965c-.885-.87-.394-2.376.834-2.556l7.17-1.048 3.2-6.522c.549-1.119 2.144-1.119 2.693 0l3.199 6.522 7.17 1.048c1.228.18 1.72 1.687.834 2.556l-5.195 5.096 1.224 7.183c.21 1.227-1.08 2.16-2.18 1.578L17.99 25.49a9 9 0 0 0 .284-.981l4.593 2.43a.5.5 0 0 0 .726-.527L22.37 19.23a1 1 0 0 1 .285-.882l5.196-5.096a.5.5 0 0 0-.278-.852zM17 22.5a7.5 7.5 0 1 0-15 0 7.5 7.5 0 0 0 15 0m-12.25-1h7.69l-2.72-2.72a.75.75 0 1 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06L12.44 23H4.75a.75.75 0 0 1 0-1.5"/>`
} as const;

export default function StarArrowRightIcon({ 
  variant = 'light',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'light' }) {
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
        <g dangerouslySetInnerHTML={{ __html: svgContent[variant] || svgContent['light'] || '' }} />
      </svg>
    );
  }

  const gradientId = 'stararrowrighticon_gradient';
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
      <g dangerouslySetInnerHTML={{ __html: svgContent[variant] || svgContent['light'] || '' }} />
    </svg>
  );
}