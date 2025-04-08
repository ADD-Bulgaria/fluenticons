
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M21 8.5v3.521a6.501 6.501 0 0 0-9.385 8.243L11.39 21H6.25A3.25 3.25 0 0 1 3 17.75V8.5zM17.75 3A3.25 3.25 0 0 1 21 6.25V7H3v-.75A3.25 3.25 0 0 1 6.25 3zM21 13.256A5.48 5.48 0 0 0 17.501 12a5.5 5.5 0 0 0-4.812 8.169l-.666 2.186a.5.5 0 0 0 .624.625l2.187-.666A5.501 5.501 0 0 0 21 13.256M15.5 17a.5.5 0 1 1 0-1h4.002a.5.5 0 1 1 0 1zm2.001 2h-2a.5.5 0 1 1 0-1h2a.5.5 0 1 1 0 1"/>`,
  'regular': `<path d="M17.75 3A3.25 3.25 0 0 1 21 6.25v5.77a6.5 6.5 0 0 0-1.5-.707V8.5h-15v9.25c0 .966.784 1.75 1.75 1.75h5.063q.128.393.302.764L11.39 21H6.25A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3zm0 1.5H6.25A1.75 1.75 0 0 0 4.5 6.25V7h15v-.75a1.75 1.75 0 0 0-1.75-1.75m1.75 7.874a5.5 5.5 0 0 1 1.5.882 5.501 5.501 0 0 1-6.166 9.058l-2.187.666a.5.5 0 0 1-.624-.625l.666-2.186A5.5 5.5 0 0 1 17.475 12h.026c.705 0 1.38.133 1.999.374m.002 4.627a.5.5 0 1 0 0-1H15.5a.5.5 0 1 0 0 1zm-4.001 2h2a.5.5 0 1 0 0-1h-2a.5.5 0 1 0 0 1"/>`
} as const;

export default function CalendarChatIcon({ 
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

  const gradientId = 'calendarchaticon_gradient';
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