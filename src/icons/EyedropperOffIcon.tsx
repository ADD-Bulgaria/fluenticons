
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="m8.94 10-4.78 4.78a2.25 2.25 0 0 0-.659 1.592v.687l-1.28 2.347c-.836 1.533.841 3.21 2.374 2.375l2.347-1.28h.688a2.25 2.25 0 0 0 1.59-.66l4.78-4.78 6.72 6.72a.75.75 0 0 0 1.06-1.06L3.28 2.22a.75.75 0 0 0-1.06 1.06zm4 4.001-4.78 4.78a.75.75 0 0 1-.53.22h-.88a.75.75 0 0 0-.359.09l-2.515 1.373a.23.23 0 0 1-.159.032.26.26 0 0 1-.138-.075.26.26 0 0 1-.075-.138.23.23 0 0 1 .033-.158L4.91 17.61a.75.75 0 0 0 .09-.36v-.878a.75.75 0 0 1 .22-.53l4.78-4.78zm5.548-.928a1.75 1.75 0 0 1-1.818.414l-6.156-6.156a1.75 1.75 0 0 1 .414-1.818l.585-.586a1.75 1.75 0 0 1 2.475 0l.013.013 1.97-1.97a3.578 3.578 0 0 1 5.06 5.06L19.061 10l.013.013a1.75 1.75 0 0 1 0 2.475z"/>`,
  'regular': `<path d="M8.94 10 2.22 3.28a.75.75 0 0 1 1.06-1.06l18.5 18.5a.75.75 0 0 1-1.06 1.06L14 15.063l-4.78 4.78a2.25 2.25 0 0 1-1.59.658h-.688l-2.347 1.28c-1.533.837-3.21-.841-2.374-2.374L3.5 17.06v-.687c0-.597.237-1.17.66-1.591zm4 4.001L10 11.061l-4.78 4.78a.75.75 0 0 0-.219.53v.88a.75.75 0 0 1-.091.358l-1.372 2.516a.23.23 0 0 0-.033.158.26.26 0 0 0 .075.138.26.26 0 0 0 .138.075.23.23 0 0 0 .159-.032l2.515-1.372a.75.75 0 0 1 .36-.092h.878a.75.75 0 0 0 .53-.22zm5.548-.928a1.75 1.75 0 0 1-1.818.414l-6.156-6.156a1.75 1.75 0 0 1 .414-1.818l.585-.586a1.75 1.75 0 0 1 2.475 0l.013.013 1.97-1.97a3.578 3.578 0 0 1 5.06 5.06L19.061 10l.013.013a1.75 1.75 0 0 1 0 2.475zm-1.457-9.042-2.5 2.5a.75.75 0 0 1-1.06 0l-.543-.543a.25.25 0 0 0-.354 0l-.586.586a.25.25 0 0 0 0 .353l5.086 5.086a.25.25 0 0 0 .354 0l.585-.586a.25.25 0 0 0 0-.354l-.542-.542a.75.75 0 0 1 0-1.061l2.5-2.5a2.078 2.078 0 1 0-2.94-2.94"/>`
} as const;

export default function EyedropperOffIcon({ 
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

  const gradientId = 'eyedropperofficon_gradient';
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