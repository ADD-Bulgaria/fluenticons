
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6.5 2.25a1 1 0 0 0-2 0v.25A2.5 2.5 0 0 0 7 5h10a2.5 2.5 0 0 0 2.5-2.5v-.25a1 1 0 1 0-2 0v.25a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5zm5.5 4a1 1 0 0 1 1 1v7.086l2.793-2.793a1 1 0 0 1 1.414 1.414l-4.5 4.5a1 1 0 0 1-1.414 0l-4.5-4.5a1 1 0 1 1 1.414-1.414L11 14.336V7.25a1 1 0 0 1 1-1M4.5 21.5A2.5 2.5 0 0 1 7 19h10a2.5 2.5 0 0 1 2.5 2.5v.25a1 1 0 1 1-2 0v-.25a.5.5 0 0 0-.5-.5H7a.5.5 0 0 0-.5.5v.25a1 1 0 1 1-2 0z"/>`,
  'regular': `<path d="M6 1.75a.75.75 0 0 0-1.5 0v.5A2.25 2.25 0 0 0 6.75 4.5h10A2.25 2.25 0 0 0 19 2.25v-.5a.75.75 0 0 0-1.5 0v.5a.75.75 0 0 1-.75.75h-10A.75.75 0 0 1 6 2.25zM11.75 6a.75.75 0 0 1 .75.75v8.69l3.72-3.72a.75.75 0 1 1 1.06 1.06l-5 5a.75.75 0 0 1-1.06 0l-5-5a.75.75 0 1 1 1.06-1.06L11 15.44V6.75a.75.75 0 0 1 .75-.75M4.5 21.75a2.25 2.25 0 0 1 2.25-2.25h10A2.25 2.25 0 0 1 19 21.75v.5a.75.75 0 0 1-1.5 0v-.5a.75.75 0 0 0-.75-.75h-10a.75.75 0 0 0-.75.75v.5a.75.75 0 0 1-1.5 0z"/>`
} as const;

export default function ArrowBetweenDownIcon({ 
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

  const gradientId = 'arrowbetweendownicon_gradient';
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