
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M15.952 4.079A4 4 0 0 1 18.684 3H25.5A3.5 3.5 0 0 1 29 6.5v6.757a4 4 0 0 1-.888 2.513 9 9 0 0 0-12.336 12.352 4.25 4.25 0 0 1-5.781-.213l-6.326-6.326a4.25 4.25 0 0 1 .101-6.109zM22.5 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M16 23.5a7.5 7.5 0 1 1 15 0 7.5 7.5 0 0 1-15 0m6.477 4.432a1.023 1.023 0 1 0 2.046 0 1.023 1.023 0 0 0-2.046 0m-1.704-6.477a.682.682 0 1 0 1.363 0 1.364 1.364 0 1 1 2.728 0c0 .505-.113.79-.5 1.224l-.158.17-.36.367c-.739.775-1.028 1.333-1.028 2.33a.682.682 0 1 0 1.364 0c0-.506.112-.79.499-1.224l.158-.17.36-.369c.74-.774 1.028-1.332 1.028-2.329a2.727 2.727 0 0 0-5.454 0"/>`,
  'regular': `<path d="M22.5 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m-3.816-9a4 4 0 0 0-2.732 1.079L3.77 15.474a4.25 4.25 0 0 0-.101 6.11l6.326 6.325a4.25 4.25 0 0 0 5.78.213 9 9 0 0 1-.87-1.942l-.314.315a2.25 2.25 0 0 1-3.182 0l-6.326-6.326a2.25 2.25 0 0 1 .054-3.234l12.18-11.396A2 2 0 0 1 18.685 5H25.5A1.5 1.5 0 0 1 27 6.5v6.757a2 2 0 0 1-.586 1.415l-.234.234a9 9 0 0 1 1.932.864A4 4 0 0 0 29 13.257V6.5A3.5 3.5 0 0 0 25.5 3zM16 23.5a7.5 7.5 0 1 0 15 0 7.5 7.5 0 0 0-15 0m6.477 4.432a1.023 1.023 0 1 1 2.046 0 1.023 1.023 0 0 1-2.046 0m-1.704-6.477a2.727 2.727 0 0 1 5.454 0c0 .996-.288 1.554-1.028 2.329l-.36.367-.158.17c-.387.434-.5.72-.5 1.224a.682.682 0 1 1-1.363 0c0-.996.289-1.554 1.028-2.329l.36-.367.159-.17c.386-.434.499-.72.499-1.224a1.364 1.364 0 1 0-2.728 0 .682.682 0 0 1-1.363 0"/>`
} as const;

export default function TagQuestionMarkIcon({ 
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
        viewBox="0 0 32 32"
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

  const gradientId = 'tagquestionmarkicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
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