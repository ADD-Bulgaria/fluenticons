
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M20.952 3.048a3.58 3.58 0 0 0-5.06 0l-.893.892L20.06 9l.892-.891a3.58 3.58 0 0 0 0-5.06M3.94 15l9.998-10 5.06 5.061-9.997 10a3.1 3.1 0 0 1-1.477.825l-4.6 1.094a.75.75 0 0 1-.904-.903l1.096-4.602c.133-.559.419-1.07.825-1.476M2.75 3h11.775l-1.5 1.5H2.75a.75.75 0 0 1 0-1.5m0 4h7.776l-1.5 1.5H2.75a.75.75 0 0 1 0-1.5m0 4h3.776l-1.5 1.5H2.75a.75.75 0 0 1 0-1.5"/>`,
  'regular': `<path d="M15.891 3.048a3.578 3.578 0 1 1 5.061 5.06L9.002 20.06a3.1 3.1 0 0 1-1.477.826L2.924 21.98a.75.75 0 0 1-.904-.903l1.096-4.602c.133-.559.419-1.07.825-1.476zm4 1.06a2.08 2.08 0 0 0-2.94 0l-.89.892L19 7.94l.891-.892a2.08 2.08 0 0 0 0-2.94M17.94 9 15 6.06l-9.998 10a1.6 1.6 0 0 0-.427.764l-.813 3.415 3.416-.813c.289-.069.553-.216.763-.426zM2.75 3h11.775l-1.5 1.5H2.75a.75.75 0 0 1 0-1.5m0 4h7.776l-1.5 1.5H2.75a.75.75 0 0 1 0-1.5m0 4h3.776l-1.5 1.5H2.75a.75.75 0 0 1 0-1.5"/>`
} as const;

export default function EditLineHorizontal3Icon({ 
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

  const gradientId = 'editlinehorizontal3icon_gradient';
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