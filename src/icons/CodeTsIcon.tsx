
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M9.25 6.51c0 .413.447.648 1.514 1.048 1.052.394 2.486.931 2.486 2.452v.002a2.5 2.5 0 0 1-.224 1.018 2.5 2.5 0 0 1-1.515 1.364c-.33.11-.687.15-1.035.115a2 2 0 0 1-.214.012 2.5 2.5 0 0 1-1.673-.65 2.52 2.52 0 0 1-.838-1.859c0-.202.078-.39.22-.532a.77.77 0 0 1 1.061 0c.142.141.22.33.22.53 0 .952 1.041 1 1.25 1s1.25-.048 1.25-1c0-.413-.447-.648-1.514-1.048-1.052-.394-2.486-.93-2.486-2.452q.005-.537.224-1.02c.144-.32.351-.605.614-.84a2.5 2.5 0 0 1 .901-.523 2.6 2.6 0 0 1 1.035-.116 2.4 2.4 0 0 1 .987.116 2.54 2.54 0 0 1 1.738 2.381c0 .202-.078.39-.22.532a.77.77 0 0 1-1.061 0 .74.74 0 0 1-.22-.53c0-.952-1.041-1-1.25-1s-1.25.048-1.25 1m-7-2.5h4.5a.749.749 0 0 1 .53 1.28.74.74 0 0 1-.53.22h-1.5v6.25a.749.749 0 0 1-1.28.53.74.74 0 0 1-.22-.53V5.51h-1.5a.749.749 0 0 1-.53-1.28.74.74 0 0 1 .53-.22"/>`,
  'regular': `<path d="M13 9.75A2.28 2.28 0 0 1 10.5 12 2.28 2.28 0 0 1 8 9.75a.5.5 0 0 1 1 0c0 .924.808 1.25 1.5 1.25s1.5-.326 1.5-1.25c0-.608-.633-.89-1.676-1.281S8 7.6 8 6.25A2.28 2.28 0 0 1 10.5 4 2.28 2.28 0 0 1 13 6.25a.5.5 0 0 1-1 0C12 5.328 11.192 5 10.5 5S9 5.328 9 6.25c0 .609.633.89 1.676 1.282C11.719 7.923 13 8.4 13 9.75M6.75 4h-4.5a.5.5 0 1 0 0 1H4v6.5a.5.5 0 1 0 1 0V5h1.75a.5.5 0 1 0 0-1"/>`
} as const;

export default function CodeTsIcon({ 
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
        viewBox="0 0 16 16"
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

  const gradientId = 'codetsicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
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