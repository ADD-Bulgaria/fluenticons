
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M3 7.5A4.5 4.5 0 0 1 7.5 3h17A4.5 4.5 0 0 1 29 7.5v17a4.5 4.5 0 0 1-4.5 4.5h-17A4.5 4.5 0 0 1 3 24.5z"/><path d="M3 7.5A4.5 4.5 0 0 1 7.5 3h17A4.5 4.5 0 0 1 29 7.5v17a4.5 4.5 0 0 1-4.5 4.5h-17A4.5 4.5 0 0 1 3 24.5z"/><path fill-rule="evenodd" d="M14.704 9.021a1 1 0 0 1 .775 1.183L15.105 12h3.457l.459-2.204a1 1 0 0 1 1.958.408L20.605 12H22a1 1 0 1 1 0 2h-1.812l-.833 4H21a1 1 0 1 1 0 2h-2.062l-.459 2.204a1 1 0 0 1-1.958-.408L16.895 20h-3.457l-.459 2.204a1 1 0 0 1-1.958-.408L11.395 20H10a1 1 0 1 1 0-2h1.812l.833-4H11a1 1 0 1 1 0-2h2.062l.459-2.204a1 1 0 0 1 1.183-.775M14.688 14l-.833 4h3.457l.833-4z" clip-rule="evenodd"/>`,
  'filled': `<path d="m13.855 18 .833-4h3.457l-.833 4zM7.5 3A4.5 4.5 0 0 0 3 7.5v17A4.5 4.5 0 0 0 7.5 29h17a4.5 4.5 0 0 0 4.5-4.5v-17A4.5 4.5 0 0 0 24.5 3zm7.979 7.204L15.105 12h3.457l.459-2.204a1 1 0 0 1 1.958.408L20.605 12H22a1 1 0 1 1 0 2h-1.812l-.833 4H21a1 1 0 1 1 0 2h-2.062l-.459 2.204a1 1 0 0 1-1.958-.408L16.895 20h-3.457l-.459 2.204a1 1 0 0 1-1.958-.408L11.395 20H10a1 1 0 1 1 0-2h1.812l.833-4H11a1 1 0 1 1 0-2h2.062l.459-2.204a1 1 0 0 1 1.958.408"/>`,
  'regular': `<path d="M15.479 10.204a1 1 0 0 0-1.958-.408L13.061 12H11a1 1 0 1 0 0 2h1.645l-.833 4H10a1 1 0 1 0 0 2h1.395l-.374 1.796a1 1 0 0 0 1.958.408l.46-2.204h3.456l-.374 1.796a1 1 0 0 0 1.958.408l.46-2.204H21a1 1 0 1 0 0-2h-1.645l.833-4H22a1 1 0 1 0 0-2h-1.395l.374-1.796a1 1 0 0 0-1.958-.408L18.561 12h-3.456zM13.855 18l.833-4h3.457l-.833 4zM7.5 3A4.5 4.5 0 0 0 3 7.5v17A4.5 4.5 0 0 0 7.5 29h17a4.5 4.5 0 0 0 4.5-4.5v-17A4.5 4.5 0 0 0 24.5 3zM5 7.5A2.5 2.5 0 0 1 7.5 5h17A2.5 2.5 0 0 1 27 7.5v17a2.5 2.5 0 0 1-2.5 2.5h-17A2.5 2.5 0 0 1 5 24.5z"/>`
} as const;

export default function NumberSymbolSquareIcon({ 
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

  const gradientId = 'numbersymbolsquareicon_gradient';
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