
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M20 21a1 1 0 0 1-.883.993L19 22h-6.5a3.5 3.5 0 0 1-3.495-3.308L9 18.5V5.415L5.707 8.707a1 1 0 0 1-1.32.083l-.094-.083a1 1 0 0 1-.083-1.32l.083-.094 5-5a1 1 0 0 1 .112-.097l.11-.071.114-.054.105-.035.118-.025.058-.007L10 2l.075.003.126.017.111.03.111.044.098.052.092.064.094.083 5 5a1 1 0 0 1-1.32 1.497l-.094-.083L11 5.415V18.5a1.5 1.5 0 0 0 1.355 1.493L12.5 20H19a1 1 0 0 1 1 1"/>`,
  'regular': `<path d="M20 21.25a.75.75 0 0 1-.75.75h-6.5A3.75 3.75 0 0 1 9 18.25V4.587l-3.72 3.72a.75.75 0 0 1-.976.072l-.084-.072a.75.75 0 0 1-.073-.977l.073-.084 5-5a.75.75 0 0 1 .976-.073l.084.073 5 5a.75.75 0 0 1-.976 1.133l-.084-.072-3.72-3.72v13.665a2.25 2.25 0 0 0 2.096 2.244l.154.006h6.5a.75.75 0 0 1 .75.75"/>`
} as const;

export default function ArrowEnterUpIcon({ 
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

  const gradientId = 'arrowenterupicon_gradient';
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