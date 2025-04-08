
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M16.5 23a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11m-1.146-8.354a.5.5 0 0 1 0 .708l-.647.646h2.043A3.25 3.25 0 0 1 20 19.25v.25a.5.5 0 0 1-1 0v-.25A2.25 2.25 0 0 0 16.75 17h-2.043l.647.646a.5.5 0 0 1-.708.708l-1.5-1.5a.5.5 0 0 1 0-.708l1.5-1.5a.5.5 0 0 1 .708 0m.537-11.598a3.578 3.578 0 1 1 5.061 5.06L20.06 9 15 3.94zM13.94 5l-10 9.999a3.1 3.1 0 0 0-.825 1.477L2.02 21.077a.75.75 0 0 0 .904.903l4.601-1.095a3.1 3.1 0 0 0 1.477-.826l1.151-1.15a6.5 6.5 0 0 1 7.754-7.756L19 10.06z"/>`,
  'regular': `<path d="M15.891 3.048 3.941 15a3.1 3.1 0 0 0-.825 1.476L2.02 21.078a.75.75 0 0 0 .904.903l4.601-1.096a3.1 3.1 0 0 0 1.477-.825l1.151-1.151a6.5 6.5 0 0 1-.127-1.995L7.941 19c-.21.21-.474.358-.763.427l-3.416.814.813-3.416c.069-.29.217-.554.427-.764L15 6.06 17.94 9l-2.026 2.026a6.6 6.6 0 0 1 1.994.127l3.044-3.044a3.578 3.578 0 0 0-5.06-5.06m4 1.06a2.08 2.08 0 0 1 0 2.94l-.892.89L16.06 5l.892-.891a2.08 2.08 0 0 1 2.94 0M22 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-6.646-2.146a.5.5 0 0 0-.708-.708l-1.5 1.5a.5.5 0 0 0 0 .708l1.5 1.5a.5.5 0 0 0 .708-.708L14.707 17h2.043A2.25 2.25 0 0 1 19 19.25v.25a.5.5 0 0 0 1 0v-.25A3.25 3.25 0 0 0 16.75 16h-2.043z"/>`
} as const;

export default function EditArrowBackIcon({ 
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

  const gradientId = 'editarrowbackicon_gradient';
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