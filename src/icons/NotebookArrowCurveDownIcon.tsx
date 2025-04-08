
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M1 5.5A4.5 4.5 0 0 1 5.502 1 4.5 4.5 0 1 1 1 5.5m6.399.896-.897.897V5.75A2.75 2.75 0 0 0 3.751 3h-.25a.5.5 0 1 0 0 1h.25c.967 0 1.75.784 1.75 1.75v1.543l-.896-.897a.5.5 0 0 0-.707.708L5.65 8.856a.5.5 0 0 0 .706-.002l1.75-1.75a.5.5 0 1 0-.707-.708M11 5.5a5.5 5.5 0 0 1-8.006 4.899V16a2 2 0 0 0 2 2h8.003A2 2 0 0 0 15 16V4a2 2 0 0 0-2-2H9.743a5.48 5.48 0 0 1 1.258 3.5M16 6h.5a.5.5 0 0 1 .5.5V8a.5.5 0 0 1-.5.5H16zm0 3.5h.5a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-.5.5H16zm0 3.5h.5a.5.5 0 0 1 .5.5V15a.5.5 0 0 1-.5.5H16z"/>`,
  'regular': `<path d="M1 5.5A4.5 4.5 0 0 1 5.502 1 4.5 4.5 0 1 1 1 5.5m6.399.896-.897.897V5.75A2.75 2.75 0 0 0 3.751 3h-.25a.5.5 0 1 0 0 1h.25c.967 0 1.75.784 1.75 1.75v1.543l-.896-.897a.5.5 0 0 0-.707.708L5.65 8.856a.5.5 0 0 0 .706-.002l1.75-1.75a.5.5 0 1 0-.707-.708M2.995 10.4q.476.244 1 .393V16a1 1 0 0 0 1 1h8.003a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-2.597a5.5 5.5 0 0 0-.658-1h3.255A2 2 0 0 1 15 4v12a2 2 0 0 1-2 2H4.996a2 2 0 0 1-2.001-2zM16 6h.5a.5.5 0 0 1 .5.5V8a.5.5 0 0 1-.5.5H16zm.5 3.5H16V12h.5a.5.5 0 0 0 .5-.5V10a.5.5 0 0 0-.5-.5M16 13h.5a.5.5 0 0 1 .5.5V15a.5.5 0 0 1-.5.5H16z"/>`
} as const;

export default function NotebookArrowCurveDownIcon({ 
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
        viewBox="0 0 20 20"
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

  const gradientId = 'notebookarrowcurvedownicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
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