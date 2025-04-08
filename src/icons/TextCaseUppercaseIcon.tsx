
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M18 3h-3a1 1 0 0 0-1 1v15.25a1 1 0 0 0 1 1h3.875a4.875 4.875 0 0 0 2.44-9.097A4.75 4.75 0 0 0 18 3m0 7.5h-2V5h2a2.75 2.75 0 1 1 0 5.5m-2 7.75V12.5h2.875a2.875 2.875 0 0 1 0 5.75zM7.257 3a1 1 0 0 1 .934.66l5.5 15.25a1 1 0 0 1-1.881.68L10.515 16h-6.72l-1.359 3.603a1 1 0 0 1-1.871-.706l5.75-15.25A1 1 0 0 1 7.257 3M4.55 14h5.245L7.229 6.89z"/>`,
  'regular': `<path d="M7.707 3.5a.75.75 0 0 0-1.406-.02l-6 15.5a.75.75 0 1 0 1.399.54l1.556-4.02h7.118l1.42 4a.75.75 0 1 0 1.413-.5zM3.837 14 6.97 5.907 9.84 14zM14.75 3.25A.75.75 0 0 0 14 4v15.25c0 .414.336.75.75.75h4.125a4.625 4.625 0 0 0 2.006-8.793A4.5 4.5 0 0 0 18 3.25zM21 7.75a3 3 0 0 1-3 3h-2.5v-6H18a3 3 0 0 1 3 3M18.875 18.5H15.5v-6.25h3.375a3.125 3.125 0 1 1 0 6.25"/>`
} as const;

export default function TextCaseUppercaseIcon({ 
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

  const gradientId = 'textcaseuppercaseicon_gradient';
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