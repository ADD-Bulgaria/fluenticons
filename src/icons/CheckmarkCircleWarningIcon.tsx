
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12 2c5.523 0 10 4.477 10 10 0 1.042-.16 2.047-.455 2.992l-.804-1.609c-.921-1.844-3.553-1.844-4.474 0l-3.996 7.998a2.5 2.5 0 0 0-.216.619H12C6.477 22 2 17.523 2 12S6.477 2 12 2m3.22 6.97-4.47 4.47-1.97-1.97a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l5-5a.75.75 0 1 0-1.06-1.06m1.941 4.86c.553-1.107 2.133-1.107 2.686 0l3.997 7.998A1.5 1.5 0 0 1 22.5 24h-7.994a1.5 1.5 0 0 1-1.343-2.172zm1.843 2.666a.5.5 0 0 0-1 0v3.001a.5.5 0 0 0 1 0zm-.5 5.503a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>`,
  'regular': `<path d="M12 2c5.523 0 10 4.477 10 10 0 1.042-.16 2.047-.455 2.992l-.804-1.609a2.6 2.6 0 0 0-.29-.457 8.5 8.5 0 1 0-7.724 7.544l-.456.91a2.5 2.5 0 0 0-.216.62H12C6.477 22 2 17.523 2 12S6.477 2 12 2m-1.25 11.44 4.47-4.47a.75.75 0 0 1 1.133.976l-.073.084-5 5a.75.75 0 0 1-.976.073l-.084-.073-2.5-2.5a.75.75 0 0 1 .976-1.133l.084.073zm6.411.39c.553-1.107 2.133-1.107 2.686 0l3.997 7.998A1.5 1.5 0 0 1 22.5 24h-7.994a1.5 1.5 0 0 1-1.343-2.172zm1.843 2.666a.5.5 0 0 0-1 0v3.001a.5.5 0 0 0 1 0zm-.5 5.503a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>`
} as const;

export default function CheckmarkCircleWarningIcon({ 
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

  const gradientId = 'checkmarkcirclewarningicon_gradient';
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