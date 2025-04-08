
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M15.952 4.079A4 4 0 0 1 18.684 3H25.5A3.5 3.5 0 0 1 29 6.5v6.757a4 4 0 0 1-1.172 2.829l-.467.467a5.002 5.002 0 0 0-9.282 1.553A4 4 0 0 0 15 22v6q.001.321.05.628a4.25 4.25 0 0 1-5.054-.719L3.67 21.583a4.25 4.25 0 0 1 .101-6.109zM22.5 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m-3 7.5H19a2.5 2.5 0 0 0-2.5 2.5v6a2.5 2.5 0 0 0 2.5 2.5h8a2.5 2.5 0 0 0 2.5-2.5v-6a2.5 2.5 0 0 0-2.5-2.5h-.5V19a3.5 3.5 0 1 0-7 0zm2-.5a1.5 1.5 0 0 1 3 0v.5h-3zm3.5 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/>`,
  'regular': `<path d="M17.318 5.54A2 2 0 0 1 18.684 5H25.5A1.5 1.5 0 0 1 27 6.5v6.757a2 2 0 0 1-.586 1.415l-.365.365c.533.41.98.926 1.312 1.516l.467-.467A4 4 0 0 0 29 13.257V6.5A3.5 3.5 0 0 0 25.5 3h-6.816a4 4 0 0 0-2.732 1.079L3.77 15.474a4.25 4.25 0 0 0-.101 6.11l6.326 6.325a4.25 4.25 0 0 0 5.054.72 4 4 0 0 1-.05-.629v-1.914l-.408.409a2.25 2.25 0 0 1-3.182 0l-6.326-6.326a2.25 2.25 0 0 1 .054-3.234zM22.5 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m-3 7.5H19a2.5 2.5 0 0 0-2.5 2.5v6a2.5 2.5 0 0 0 2.5 2.5h8a2.5 2.5 0 0 0 2.5-2.5v-6a2.5 2.5 0 0 0-2.5-2.5h-.5V19a3.5 3.5 0 1 0-7 0zm2-.5a1.5 1.5 0 1 1 3 0v.5h-3zm3.5 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/>`
} as const;

export default function TagLockIcon({ 
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

  const gradientId = 'taglockicon_gradient';
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