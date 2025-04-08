
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M13 7h4V5.5A2.5 2.5 0 0 0 14.5 3H13zm-6 5V8H3v4zm5-3.5V8H8v4h3v-1.5c0-.818.393-1.544 1-2M11 13H8v4h3zm-4 0H3v1.5A2.5 2.5 0 0 0 5.5 17H7zm5-6V3H8v4zM7 3v4H3V5.5A2.5 2.5 0 0 1 5.5 3zm5 7.5A1.5 1.5 0 0 1 13.5 9h4a1.5 1.5 0 0 1 1.5 1.5v7a1.5 1.5 0 0 1-1.5 1.5h-4a1.5 1.5 0 0 1-1.5-1.5zm2.5 2.5h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1m3.5.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 .5-.5M14.5 15h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1m3.5.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 .5-.5M14.5 17h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1m3.5.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 .5-.5M13.5 10a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"/>`,
  'regular': `<path d="M17 5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17H11v-1H8v-3h3v-1H8V8h4v.5c.29-.219.63-.375 1-.45V8h4zm-13 9V13h3v3H5.5l-.144-.007A1.5 1.5 0 0 1 4 14.5M12 7H8V4h4zm1-3h1.5l.145.007A1.5 1.5 0 0 1 16 5.5V7h-3zM4 7V5.5l.007-.144A1.5 1.5 0 0 1 5.5 4H7v3zm3 1v4H4V8zm5 2.5A1.5 1.5 0 0 1 13.5 9h4a1.5 1.5 0 0 1 1.5 1.5v7a1.5 1.5 0 0 1-1.5 1.5h-4a1.5 1.5 0 0 1-1.5-1.5zm2.5 2.5h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1m3.5.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 .5-.5M14.5 15h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1m3.5.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 .5-.5M14.5 17h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1m3.5.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 .5-.5M13.5 10a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"/>`
} as const;

export default function TableCalculatorIcon({ 
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

  const gradientId = 'tablecalculatoricon_gradient';
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