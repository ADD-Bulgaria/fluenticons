
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l5.854 5.855A1.75 1.75 0 0 0 7 10.75V12h3.94l.996.997H3.75c-.709 0-1.022.893-.469 1.336L8 18.11v1.645a2.25 2.25 0 0 0 2.25 2.25h3.495a2.25 2.25 0 0 0 2.25-2.25V18.11l.586-.468 4.138 4.139a.75.75 0 0 0 1.061-1.061zm12.9 10.777 2.758 2.758 1.776-1.422c.553-.444.24-1.336-.469-1.336zM12.182 9l3 3h1.813v-1.25l-.006-.143A1.75 1.75 0 0 0 15.245 9zM12 8c-.344 0-.674-.057-.982-.164L9.164 5.982A3 3 0 1 1 12 8"/>`,
  'regular': `<path d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l5.854 5.855A1.75 1.75 0 0 0 7 10.75V12h1.5v-1.25l.007-.057a.25.25 0 0 1 .243-.193h.69l2.496 2.497H3.75c-.709 0-1.022.893-.469 1.336L8 18.11v1.645a2.25 2.25 0 0 0 2.25 2.25h3.495a2.25 2.25 0 0 0 2.25-2.25V18.11l.586-.468 4.138 4.139a.75.75 0 0 0 1.061-1.061zm12.234 14.355-.737.59a.75.75 0 0 0-.282.585v2.005a.75.75 0 0 1-.75.75H10.25a.75.75 0 0 1-.75-.75V17.75a.75.75 0 0 0-.281-.585l-3.333-2.668h7.55zM12 8c-.344 0-.674-.058-.982-.165L9.164 5.982A3 3 0 1 1 12 8m0-4.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m8.244 9.496H16.18l2.758 2.758 1.776-1.422c.553-.444.24-1.336-.469-1.336M13.682 10.5l-1.5-1.5h3.063a1.75 1.75 0 0 1 1.744 1.607l.006.143V12h-1.5v-1.25a.25.25 0 0 0-.193-.243l-.057-.007z"/>`
} as const;

export default function PresenterOffIcon({ 
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

  const gradientId = 'presenterofficon_gradient';
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