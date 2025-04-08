
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M16 15V6.5a1 1 0 0 1 1.993-.117L18 6.5V15a1 1 0 0 1-1.993.117zm-6.707 6.707a1 1 0 0 1-.083-1.32l.083-.094 2-2a1 1 0 0 1 1.32-.083l.094.083 2 2a1 1 0 0 1-1.32 1.497l-.094-.083L12 20.414l-1.293 1.293a1 1 0 0 1-1.414 0M11 15l-.001-11.5a1 1 0 0 1 1.993-.117L13 3.5V15a1 1 0 0 1-1.993.117zm-5 0V6.5a1 1 0 0 1 1.993-.117L8 6.5V15a1 1 0 0 1-1.993.117z"/>`,
  'regular': `<path d="M16 6.25a.75.75 0 0 1 1.5 0v9a.75.75 0 0 1-1.5 0zM9.22 21.28a.75.75 0 0 1-.073-.976l.073-.084 2-2a.75.75 0 0 1 .976-.073l.084.073 2 2a.75.75 0 0 1-.976 1.133l-.084-.073-1.47-1.47-1.47 1.47a.75.75 0 0 1-1.06 0M11 3.25a.75.75 0 0 1 1.5 0v12a.75.75 0 0 1-1.5 0zm-5 3a.75.75 0 0 1 1.5 0v9a.75.75 0 0 1-1.5 0z"/>`
} as const;

export default function TextIndentIncreaseRotate270Icon({ 
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

  const gradientId = 'textindentincreaserotate270icon_gradient';
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