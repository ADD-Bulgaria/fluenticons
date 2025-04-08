
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l3.993 3.994a8.5 8.5 0 1 0 12.013 12.013l2.493 2.494a.75.75 0 0 0 1.061-1.061zm9.336 11.457a.75.75 0 0 1-1.36-.325l-.006-.102v-.94zm.134-4.927v.818l7.128 7.129A8.5 8.5 0 0 0 8.803 5.622l2.634 2.633a.75.75 0 0 1 1.306.393zm6.42-3.627.082.061 1.149 1a.75.75 0 0 1-.904 1.193l-.081-.061-1.149-1a.75.75 0 0 1 .903-1.193M14.25 2.5a.75.75 0 0 1 .102 1.493L14.25 4h-4.5a.75.75 0 0 1-.102-1.493L9.75 2.5z"/>`,
  'regular': `<path d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l3.993 3.994a8.5 8.5 0 1 0 12.013 12.013l2.493 2.494a.75.75 0 0 0 1.061-1.061zm13.884 16.005a7 7 0 1 1-9.89-9.89l3.976 3.976v.939l.007.102a.75.75 0 0 0 1.36.325zm-5.727-9.97 1.313 1.313V8.75l-.007-.102a.75.75 0 0 0-1.306-.393M19 13.5a7 7 0 0 1-.296 2.022l1.174 1.175A8.5 8.5 0 0 0 8.803 5.622l1.175 1.174A7 7 0 0 1 19 13.5m.147-8.386.083.06 1.158.964a.75.75 0 0 1-.877 1.212l-.082-.06-1.159-.964a.75.75 0 0 1 .877-1.212M14.25 2.5a.75.75 0 0 1 .102 1.493L14.25 4h-4.5a.75.75 0 0 1-.102-1.493L9.75 2.5z"/>`
} as const;

export default function TimerOffIcon({ 
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

  const gradientId = 'timerofficon_gradient';
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