
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12.25 6A6.25 6.25 0 0 0 6 12.25v4.25h10.5V6zM19 6v10.5h10V6zm-2.5 13H6v10h10.5zM19 29V19h10v9.416A5 5 0 0 0 28 29zm18-7a6.98 6.98 0 0 1 5 2.101V19H31.5v5.67A6.99 6.99 0 0 1 37 22M26 33c0-.523.08-1.026.229-1.5H19V42h7zm-9.5-1.5H6v4.25A6.25 6.25 0 0 0 12.25 42h4.25zm25.5-15v-4.25A6.25 6.25 0 0 0 35.75 6H31.5v10.5zM32 30h-1a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V33a3 3 0 0 0-3-3h-1v-1a5 5 0 0 0-10 0zm2.5-1a2.5 2.5 0 0 1 5 0v1h-5zm5.5 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>`,
  'regular': `<path d="M35.75 6A6.25 6.25 0 0 1 42 12.25v11.851a7 7 0 0 0-2.5-1.641V19.5H31v5.892a7 7 0 0 0-.941 2.696A5.01 5.01 0 0 0 26.416 31H19.5v8.5H26V42H12.25A6.25 6.25 0 0 1 6 35.75v-23.5A6.25 6.25 0 0 1 12.25 6zM8.5 19.5v9H17v-9zm0 11.5v4.75a3.75 3.75 0 0 0 3.75 3.75H17V31zm31-14v-4.75a3.75 3.75 0 0 0-3.75-3.75H31V17zm-11-8.5h-9V17h9zM17 8.5h-4.75a3.75 3.75 0 0 0-3.75 3.75V17H17zm11.5 20v-9h-9v9zM32 30h-1a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V33a3 3 0 0 0-3-3h-1v-1a5 5 0 0 0-10 0zm2.5-1a2.5 2.5 0 0 1 5 0v1h-5zm5.5 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>`
} as const;

export default function TableLockIcon({ 
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

  const gradientId = 'tablelockicon_gradient';
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