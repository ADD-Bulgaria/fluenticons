
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M5.843 4.56a8.707 8.707 0 0 1 12.514 12.106l-.2.207q-1.372 1.372-4.593 4.486a2.25 2.25 0 0 1-3.128 0l-3.85-3.749q-.426-.42-.743-.737a8.707 8.707 0 0 1 0-12.314m9.187 3.126-.084-.073a.75.75 0 0 0-.883-.007l-.094.08L12 9.656l-1.969-1.97-.084-.073a.75.75 0 0 0-.883-.007l-.094.08-.072.084a.75.75 0 0 0-.007.882l.08.094 1.969 1.97-1.97 1.97-.072.084a.75.75 0 0 0-.007.883l.08.093.084.073a.75.75 0 0 0 .882.007l.094-.08L12 11.777l1.97 1.97.084.072a.75.75 0 0 0 .882.007l.094-.08.073-.084a.75.75 0 0 0 .007-.882l-.08-.094-1.97-1.97 1.97-1.97.073-.084a.75.75 0 0 0 .007-.882zl-.084-.073z"/>`,
  'regular': `<path d="M5.843 4.56a8.707 8.707 0 0 1 12.514 12.106l-.2.207q-1.372 1.372-4.593 4.486a2.25 2.25 0 0 1-3.128 0l-3.85-3.749q-.426-.42-.743-.737a8.707 8.707 0 0 1 0-12.314m11.253 1.06A7.207 7.207 0 1 0 6.903 15.812L8.6 17.484q1.173 1.148 2.879 2.797a.75.75 0 0 0 1.042 0l2.975-2.89q.988-.966 1.6-1.579a7.207 7.207 0 0 0 0-10.192m-2.15 1.993.084.073a.75.75 0 0 1 .073.976l-.073.084-1.97 1.97 1.97 1.97a.75.75 0 0 1 .073.976l-.073.084a.75.75 0 0 1-.976.073l-.085-.073L12 11.777l-1.969 1.97a.75.75 0 0 1-.976.072l-.085-.073a.75.75 0 0 1-.072-.976l.072-.084 1.97-1.97-1.97-1.97a.75.75 0 0 1-.072-.976l.072-.084a.75.75 0 0 1 .977-.073l.084.073L12 9.656l1.97-1.97a.75.75 0 0 1 .976-.073"/>`
} as const;

export default function LocationDismissIcon({ 
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

  const gradientId = 'locationdismissicon_gradient';
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