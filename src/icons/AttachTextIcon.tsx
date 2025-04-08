
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M7 3a5 5 0 0 1 4.995 4.783L12 8v11a3 3 0 0 1-5.995.176L6 19V9a1 1 0 0 1 1.993-.117L8 9v10a1 1 0 0 0 1.993.117L10 19V8a3 3 0 0 0-5.995-.176L4 8v9a1 1 0 0 1-1.993.117L2 17V8a5 5 0 0 1 5-5m8 14h2a1 1 0 0 1 .117 1.993L17 19h-2a1 1 0 0 1-.117-1.993zh2zm0-4h5.5a1 1 0 0 1 .117 1.993L20.5 15H15a1 1 0 0 1-.117-1.993zh5.5zm0-4h5.5a1 1 0 0 1 .117 1.993L20.5 11H15a1 1 0 0 1-.117-1.993zh5.5zm0-4h5.5a1 1 0 0 1 .117 1.993L20.5 7H15a1 1 0 0 1-.117-1.993zh5.5z"/>`,
  'regular': `<path d="M7.25 3.5a4.25 4.25 0 0 1 4.245 4.044l.005.206V18.5a2.5 2.5 0 0 1-4.995.164L6.5 18.5V9a.75.75 0 0 1 1.493-.102L8 9v9.5a1 1 0 0 0 1.993.117L10 18.5V7.75a2.75 2.75 0 0 0-5.495-.168L4.5 7.75V17a.75.75 0 0 1-1.493.102L3 17V7.75A4.25 4.25 0 0 1 7.25 3.5m9 12.5a.75.75 0 0 1 .102 1.493l-.102.007h-2.5a.75.75 0 0 1-.102-1.493L13.75 16zm4-3a.75.75 0 0 1 .102 1.493l-.102.007h-6.5a.75.75 0 0 1-.102-1.493L13.75 13zm0-3a.75.75 0 0 1 .102 1.493l-.102.007h-6.5a.75.75 0 0 1-.102-1.493L13.75 10zm0-3a.75.75 0 0 1 .102 1.493l-.102.007h-6.5a.75.75 0 0 1-.102-1.493L13.75 7z"/>`
} as const;

export default function AttachTextIcon({ 
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

  const gradientId = 'attachtexticon_gradient';
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