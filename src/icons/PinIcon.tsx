
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'color': `<path fill-rule="evenodd" d="m18.884 30.884-10.75 10.75a1.25 1.25 0 0 1-1.768-1.768l10.75-10.75z" clip-rule="evenodd"/><path d="M31.818 5.55 42.45 16.182c2.293 2.293 1.666 6.158-1.234 7.608l-10.545 5.272a1.25 1.25 0 0 0-.622.71l-2.684 7.77c-.663 1.92-3.108 2.483-4.544 1.046L9.412 25.18c-1.436-1.436-.873-3.88 1.047-4.543l7.77-2.685a1.25 1.25 0 0 0 .71-.622L24.21 6.784c1.45-2.9 5.314-3.527 7.607-1.234"/><path d="M31.818 5.55 42.45 16.182c2.293 2.293 1.666 6.158-1.234 7.608l-10.545 5.272a1.25 1.25 0 0 0-.622.71l-2.684 7.77c-.663 1.92-3.108 2.483-4.544 1.046L9.412 25.18c-1.436-1.436-.873-3.88 1.047-4.543l7.77-2.685a1.25 1.25 0 0 0 .71-.622L24.21 6.784c1.45-2.9 5.314-3.527 7.607-1.234"/><path fill-opacity=".8" d="M31.818 5.55 42.45 16.182c2.293 2.293 1.666 6.158-1.234 7.608l-10.545 5.272a1.25 1.25 0 0 0-.622.71l-2.684 7.77c-.663 1.92-3.108 2.483-4.544 1.046L9.412 25.18c-1.436-1.436-.873-3.88 1.047-4.543l7.77-2.685a1.25 1.25 0 0 0 .71-.622L24.21 6.784c1.45-2.9 5.314-3.527 7.607-1.234"/>`,
  'filled': `<path d="M31.818 5.55 42.45 16.183c2.293 2.292 1.665 6.157-1.234 7.607L30.67 29.062a1.25 1.25 0 0 0-.622.71l-2.684 7.77c-.664 1.92-3.108 2.483-4.544 1.047L17 32.769 7.768 42H6v-1.767L15.232 31l-5.82-5.82c-1.437-1.436-.874-3.88 1.046-4.544l7.77-2.684a1.25 1.25 0 0 0 .71-.623L24.21 6.785c1.45-2.9 5.315-3.527 7.608-1.235"/>`,
  'regular': `<path d="M42.45 16.183 31.818 5.55c-2.293-2.292-6.158-1.665-7.608 1.235l-5.272 10.544a1.25 1.25 0 0 1-.71.623l-7.77 2.684c-1.92.663-2.483 3.108-1.046 4.544l5.82 5.82L6 40.233V42h1.768L17 32.768l5.82 5.82c1.437 1.437 3.881.874 4.544-1.046l2.685-7.77a1.25 1.25 0 0 1 .622-.71l10.545-5.272c2.9-1.45 3.527-5.315 1.234-7.607m-12.4-8.865 10.632 10.633a2.25 2.25 0 0 1-.584 3.603l-10.545 5.272a3.75 3.75 0 0 0-1.867 2.13l-2.684 7.77a.25.25 0 0 1-.414.095L11.18 23.412a.25.25 0 0 1 .096-.413l7.77-2.684a3.75 3.75 0 0 0 2.13-1.868l5.271-10.544a2.25 2.25 0 0 1 3.604-.585"/>`
} as const;

export default function PinIcon({ 
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

  const gradientId = 'pinicon_gradient';
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