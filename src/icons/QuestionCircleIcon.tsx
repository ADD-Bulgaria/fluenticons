
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M24 4c11.046 0 20 8.954 20 20s-8.954 20-20 20S4 35.046 4 24 12.954 4 24 4"/><path d="M24 4c11.046 0 20 8.954 20 20s-8.954 20-20 20S4 35.046 4 24 12.954 4 24 4"/><path d="M24.25 32a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m0-19c3.365 0 6.25 2.882 6.25 6.249.002 2.12-.769 3.47-2.678 5.528l-1.015 1.087c-1.023 1.139-1.428 1.861-1.466 2.715l-.003.162-.006.128-.018.124a1.25 1.25 0 0 1-2.476-.234c-.013-1.789.677-3.012 2.308-4.785l1.027-1.098c1.358-1.492 1.828-2.373 1.827-3.626 0-1.987-1.765-3.75-3.75-3.75-1.92 0-3.636 1.654-3.744 3.559l-.012.319A1.25 1.25 0 0 1 18 19.25c0-3.365 2.886-6.25 6.25-6.25"/><path d="M24.25 32a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m0-19c3.365 0 6.25 2.882 6.25 6.249.002 2.12-.769 3.47-2.678 5.528l-1.015 1.087c-1.023 1.139-1.428 1.861-1.466 2.715l-.003.162-.006.128-.018.124a1.25 1.25 0 0 1-2.476-.234c-.013-1.789.677-3.012 2.308-4.785l1.027-1.098c1.358-1.492 1.828-2.373 1.827-3.626 0-1.987-1.765-3.75-3.75-3.75-1.92 0-3.636 1.654-3.744 3.559l-.012.319A1.25 1.25 0 0 1 18 19.25c0-3.365 2.886-6.25 6.25-6.25"/>`,
  'filled': `<path d="M24 4c11.046 0 20 8.954 20 20s-8.954 20-20 20S4 35.046 4 24 12.954 4 24 4m.25 28a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0-19C20.886 13 18 15.885 18 19.25a1.25 1.25 0 0 0 2.475.252l.018-.124.013-.32c.108-1.904 1.825-3.558 3.744-3.558 1.985 0 3.75 1.763 3.75 3.75.001 1.187-.42 2.04-1.62 3.395l-.207.231-1.027 1.098c-1.631 1.773-2.32 2.996-2.308 4.785a1.25 1.25 0 0 0 2.446.354l.03-.12.018-.124.006-.128.003-.162c.036-.8.394-1.485 1.281-2.506l.185-.21 1.015-1.086c1.91-2.058 2.68-3.408 2.678-5.528 0-3.367-2.885-6.249-6.25-6.249"/>`,
  'regular': `<path d="M24 4c11.046 0 20 8.954 20 20s-8.954 20-20 20S4 35.046 4 24 12.954 4 24 4m0 2.5C14.335 6.5 6.5 14.335 6.5 24S14.335 41.5 24 41.5 41.5 33.665 41.5 24 33.665 6.5 24 6.5m.25 25.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m0-19c3.365 0 6.25 2.882 6.25 6.249.002 2.12-.769 3.47-2.678 5.528l-1.015 1.087c-1.023 1.139-1.428 1.861-1.466 2.715l-.003.162-.006.128-.018.124a1.25 1.25 0 0 1-2.476-.234c-.013-1.789.677-3.012 2.308-4.785l1.027-1.098c1.358-1.492 1.828-2.373 1.827-3.626 0-1.987-1.765-3.75-3.75-3.75-1.92 0-3.636 1.654-3.744 3.559l-.012.319A1.25 1.25 0 0 1 18 19.25c0-3.365 2.886-6.25 6.25-6.25"/>`
} as const;

export default function QuestionCircleIcon({ 
  variant = 'regular',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'color' | 'filled' | 'regular' }) {
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

  const gradientId = 'questioncircleicon_gradient';
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