
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M16.25 12.5h-4a.75.75 0 0 1-.75-.75v-6a.75.75 0 0 1 1.5 0V11h3.25a.75.75 0 0 1 0 1.5M13 1C7.478 1 3 5.478 3 11q0 .501.049.991a6.5 6.5 0 0 1 8.96 8.96q.49.05.991.049c5.522 0 10-4.478 10-10S18.522 1 13 1m-1 16.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-7.5 3A.5.5 0 0 0 5 20v-5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 .5.5m4 0A.5.5 0 0 0 9 20v-5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 .5.5"/>`,
  'regular': `<path d="M4.5 11a8.5 8.5 0 1 1 8.188 8.494 6.5 6.5 0 0 1-.68 1.457q.49.05.992.049c5.523 0 10-4.477 10-10S18.523 1 13 1 3 5.477 3 11q0 .501.048.991a6.5 6.5 0 0 1 1.458-.68A9 9 0 0 1 4.5 11m8.493-5.352a.75.75 0 0 0-1.493.102v6l.007.102a.75.75 0 0 0 .743.648h4l.102-.007A.75.75 0 0 0 16.25 11H13V5.75zM12 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-7.5 3A.5.5 0 0 0 5 20v-5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 .5.5m4 0A.5.5 0 0 0 9 20v-5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 .5.5"/>`
} as const;

export default function ClockPauseIcon({ 
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

  const gradientId = 'clockpauseicon_gradient';
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