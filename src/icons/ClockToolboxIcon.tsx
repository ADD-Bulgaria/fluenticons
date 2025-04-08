
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6.5 14.5a3.5 3.5 0 0 0-3.357 2.507A14 14 0 0 1 3 15C3 7.268 9.268 1 17 1s14 6.268 14 14c0 7.567-6.004 13.732-13.508 13.991q.008-.12.008-.241V21.5a1.5 1.5 0 0 0-.06-.423A3.75 3.75 0 0 0 14 18.008V18a3.5 3.5 0 0 0-3.5-3.5zM15 8v8a1 1 0 0 0 1 1h5a1 1 0 1 0 0-2h-4V8a1 1 0 1 0-2 0M4.5 18v1.5H3.25A2.25 2.25 0 0 0 1 21.75V24h3.5v-.75a.75.75 0 0 1 1.5 0V24h5v-.75a.75.75 0 0 1 1.5 0V24H16v-2.25a2.25 2.25 0 0 0-2.25-2.25H12.5V18a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2m2-.5h4a.5.5 0 0 1 .5.5v1.5H6V18a.5.5 0 0 1 .5-.5m4.5 8v.75a.75.75 0 0 0 1.5 0v-.75H16v3.25A2.25 2.25 0 0 1 13.75 31H3.25A2.25 2.25 0 0 1 1 28.75V25.5h3.5v.75a.75.75 0 0 0 1.5 0v-.75z"/>`,
  'regular': `<path d="M15 8a1 1 0 1 1 2 0v7h4a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1zM3 15q.001 1.023.143 2.007A3.5 3.5 0 0 1 5 14.837C5.09 8.283 10.427 3 17 3c6.627 0 12 5.373 12 12 0 6.46-5.105 11.728-11.5 11.99v1.76q0 .122-.008.241C24.996 28.732 31 22.568 31 15c0-7.732-6.268-14-14-14S3 7.268 3 15m1.5 3v1.5H3.25A2.25 2.25 0 0 0 1 21.75V24h3.5v-.75a.75.75 0 0 1 1.5 0V24h5v-.75a.75.75 0 0 1 1.5 0V24H16v-2.25a2.25 2.25 0 0 0-2.25-2.25H12.5V18a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2m2-.5h4a.5.5 0 0 1 .5.5v1.5H6V18a.5.5 0 0 1 .5-.5m4.5 8v.75a.75.75 0 0 0 1.5 0v-.75H16v3.25A2.25 2.25 0 0 1 13.75 31H3.25A2.25 2.25 0 0 1 1 28.75V25.5h3.5v.75a.75.75 0 0 0 1.5 0v-.75z"/>`
} as const;

export default function ClockToolboxIcon({ 
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

  const gradientId = 'clocktoolboxicon_gradient';
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