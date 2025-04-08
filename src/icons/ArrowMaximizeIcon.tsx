
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M40.5 24a1.5 1.5 0 0 1-1.5-1.5V11.121L11.121 39H22.5a1.5 1.5 0 0 1 0 3h-15A1.5 1.5 0 0 1 6 40.5v-15a1.5 1.5 0 0 1 3 0v11.379L36.879 9H25.5a1.5 1.5 0 0 1 0-3h15A1.5 1.5 0 0 1 42 7.5v15a1.5 1.5 0 0 1-1.5 1.5"/>`,
  'regular': `<path d="M40.75 24c-.69 0-1.25-.56-1.25-1.25V10.268L10.268 39.5H22.75a1.25 1.25 0 1 1 0 2.5H7.25C6.56 42 6 41.44 6 40.75v-15.5a1.25 1.25 0 1 1 2.5 0v12.482L37.732 8.5H25.25a1.25 1.25 0 1 1 0-2.5h15.5c.69 0 1.25.56 1.25 1.25v15.5c0 .69-.56 1.25-1.25 1.25"/>`
} as const;

export default function ArrowMaximizeIcon({ 
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

  const gradientId = 'arrowmaximizeicon_gradient';
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