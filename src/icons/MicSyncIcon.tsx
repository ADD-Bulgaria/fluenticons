
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M4.5 10a.5.5 0 0 0-1 0 5.5 5.5 0 0 0 5 5.478V17.5a.5.5 0 0 0 1 0v-.706A5.5 5.5 0 0 1 9 14.5 4.5 4.5 0 0 1 4.5 10M12 5v4.6a5.5 5.5 0 0 0-2.79 3.393Q9.104 13 9 13a3 3 0 0 1-3-3V5a3 3 0 0 1 6 0m-2 9.5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0m6.5-3a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-.5.5H15a.5.5 0 0 1 0-1h.468a2 2 0 0 0-2.383.336.5.5 0 0 1-.706-.707A3 3 0 0 1 16 12.152V12a.5.5 0 0 1 .5-.5m-.876 5.532A3 3 0 0 1 13 16.848V17a.5.5 0 0 1-1 0v-1.5a.5.5 0 0 1 .5-.5H14a.5.5 0 0 1 0 1h-.468q.075.042.155.077a2 2 0 0 0 2.227-.413.5.5 0 0 1 .707.707c-.284.285-.624.51-.997.66"/>`,
  'regular': `<path d="M9 13q.105 0 .21-.007.165-.582.448-1.104A2 2 0 0 1 7 10V5.001a2 2 0 1 1 4 0v5q0 .138-.018.272.47-.392 1.018-.672V5a3 3 0 1 0-6 0v5a3 3 0 0 0 3 3m-4.5-3A4.5 4.5 0 0 0 9 14.5c0 .819.179 1.596.5 2.294v.706a.5.5 0 0 1-1 0v-2.022A5.5 5.5 0 0 1 3.5 10a.5.5 0 0 1 1 0m5.5 4.5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0m6.5-3a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-.5.5H15a.5.5 0 0 1 0-1h.468a2 2 0 0 0-2.383.336.5.5 0 0 1-.706-.707A3 3 0 0 1 16 12.152V12a.5.5 0 0 1 .5-.5m-.876 5.532A3 3 0 0 1 13 16.848V17a.5.5 0 0 1-1 0v-1.5a.5.5 0 0 1 .5-.5H14a.5.5 0 0 1 0 1h-.468q.075.042.155.077a2 2 0 0 0 2.227-.413.5.5 0 0 1 .707.707c-.284.285-.624.51-.997.66"/>`
} as const;

export default function MicSyncIcon({ 
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

  const gradientId = 'micsyncicon_gradient';
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