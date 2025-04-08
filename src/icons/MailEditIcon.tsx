
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6.5 4a4.5 4.5 0 0 0-4.496 4.303l1.476.82L16 15.864l12.52-6.741 1.476-.82A4.5 4.5 0 0 0 25.5 4zM2 21.5V10.588l.514.286 13.012 7.007a1 1 0 0 0 .948 0l13-7 .526-.293v4.332a4.38 4.38 0 0 0-4.988.873l-8.567 8.64c-.44.444-.773.98-.976 1.567H6.5A4.5 4.5 0 0 1 2 21.5m28.144-.576-8.61 8.543a2.8 2.8 0 0 1-1.269.721l-3.02.778a1 1 0 0 1-1.216-1.22l.79-3.05a2.66 2.66 0 0 1 .686-1.206l8.567-8.64a2.88 2.88 0 0 1 4.144.057 2.88 2.88 0 0 1-.072 4.017"/>`,
  'light': `<path d="M25.5 4h-19A4.5 4.5 0 0 0 2 8.5v13A4.5 4.5 0 0 0 6.5 26h8.969c.123-.355.293-.692.506-1H6.5A3.5 3.5 0 0 1 3 21.5V10.35l12.757 7.087a.5.5 0 0 0 .486 0L29 10.35v4.236q.516.105 1 .334V8.5A4.5 4.5 0 0 0 25.5 4M29 8.5v.706l-13 7.222L3 9.206V8.5A3.5 3.5 0 0 1 6.5 5h19A3.5 3.5 0 0 1 29 8.5m1.144 12.424-8.61 8.543a2.8 2.8 0 0 1-1.269.721l-3.02.778a1 1 0 0 1-1.216-1.22l.79-3.05a2.66 2.66 0 0 1 .686-1.206l8.567-8.64a2.88 2.88 0 0 1 4.144.057 2.88 2.88 0 0 1-.072 4.017"/>`,
  'regular': `<path d="M2 8.5A4.5 4.5 0 0 1 6.5 4h19A4.5 4.5 0 0 1 30 8.5v6.42a4.4 4.4 0 0 0-2-.42v-2.826l-11.526 6.207a1 1 0 0 1-.948 0L4 11.674V21.5A2.5 2.5 0 0 0 6.5 24h10.375l-.43.433c-.44.444-.773.98-.976 1.567H6.5A4.5 4.5 0 0 1 2 21.5zm14 7.364 12-6.461V8.5A2.5 2.5 0 0 0 25.5 6h-19A2.5 2.5 0 0 0 4 8.5v.903zm14.144 5.06-8.61 8.543a2.8 2.8 0 0 1-1.269.721l-3.02.778a1 1 0 0 1-1.216-1.22l.79-3.05a2.66 2.66 0 0 1 .686-1.206l8.567-8.64a2.88 2.88 0 0 1 4.144.057 2.88 2.88 0 0 1-.072 4.017"/>`
} as const;

export default function MailEditIcon({ 
  variant = 'regular',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'filled' | 'light' | 'regular' }) {
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

  const gradientId = 'mailediticon_gradient';
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