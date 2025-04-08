
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M4 2a2 2 0 0 0-2 2v3a.5.5 0 0 1-.5.5.5.5 0 0 0 0 1A.5.5 0 0 1 2 9v3a2 2 0 0 0 2 2 .5.5 0 0 0 0-1 1 1 0 0 1-1-1V9c0-.384-.144-.735-.382-1C2.856 7.735 3 7.384 3 7V4a1 1 0 0 1 1-1 .5.5 0 0 0 0-1m8 0a2 2 0 0 1 2 2v3a.5.5 0 0 0 .5.5.5.5 0 0 1 0 1 .5.5 0 0 0-.5.5v3a2 2 0 0 1-2 2 .5.5 0 0 1 0-1 1 1 0 0 0 1-1V9c0-.384.144-.735.382-1A1.5 1.5 0 0 1 13 7V4a1 1 0 0 0-1-1 .5.5 0 0 1 0-1M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8M6.146 6.854a.5.5 0 1 1 .708-.708L8 7.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 8l1.147 1.146a.5.5 0 0 1-.708.708L8 8.707 6.854 9.854a.5.5 0 0 1-.708-.708L7.293 8z"/>`,
  'regular': `<path d="M4.5 13.5a.5.5 0 0 1-.5.5 2 2 0 0 1-2-2V9a.5.5 0 0 0-.5-.5.5.5 0 0 1 0-1A.5.5 0 0 0 2 7V4a2 2 0 0 1 2-2 .5.5 0 0 1 0 1 1 1 0 0 0-1 1v3c0 .384-.144.735-.382 1 .238.265.382.616.382 1v3a1 1 0 0 0 1 1 .5.5 0 0 1 .5.5m10-6A.5.5 0 0 1 14 7V4a2 2 0 0 0-2-2 .5.5 0 0 0 0 1 1 1 0 0 1 1 1v3c0 .384.144.735.382 1A1.5 1.5 0 0 0 13 9v3a1 1 0 0 1-1 1 .5.5 0 0 0 0 1 2 2 0 0 0 2-2V9a.5.5 0 0 1 .5-.5.5.5 0 0 0 0-1M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-1 0c0-1.654-1.346-3-3-3S5 6.346 5 8s1.346 3 3 3 3-1.346 3-3M9.5 6.5a.5.5 0 0 0-.707 0L8 7.293 7.207 6.5a.5.5 0 0 0-.707.707L7.293 8l-.793.793a.5.5 0 0 0 .707.707L8 8.707l.793.793a.5.5 0 0 0 .707-.707L8.707 8l.793-.793a.5.5 0 0 0 0-.707"/>`
} as const;

export default function BracesDismissIcon({ 
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
        viewBox="0 0 16 16"
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

  const gradientId = 'bracesdismissicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
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