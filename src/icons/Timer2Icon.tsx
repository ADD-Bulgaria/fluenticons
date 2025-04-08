
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M20.394 12.156a8.5 8.5 0 1 0-5.394 9.3v-.206a4.24 4.24 0 0 1 1.528-3.264A1.75 1.75 0 0 1 15 16.25a4.25 4.25 0 0 1 5.394-4.094m-9.137-3.508a.75.75 0 0 1 1.486 0l.007.102v4.5l-.007.102a.75.75 0 0 1-1.486 0l-.007-.102v-4.5zm7.995-3.464-.082-.061a.75.75 0 0 0-.903 1.193l1.149 1 .081.061a.75.75 0 0 0 .904-1.193zM15 3.25a.75.75 0 0 0-.75-.75h-4.5l-.102.007A.75.75 0 0 0 9.75 4h4.5l.102-.007A.75.75 0 0 0 15 3.25M19.25 13A3.25 3.25 0 0 0 16 16.25a.75.75 0 0 0 1.5 0A1.75 1.75 0 1 1 19.25 18 3.25 3.25 0 0 0 16 21.25v1c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5H17.5v-.25c0-.966.784-1.75 1.75-1.75a3.25 3.25 0 0 0 0-6.5"/>`,
  'regular': `<path d="M20.394 12.156a8.5 8.5 0 1 0-5.394 9.3v-.206c0-.557.107-1.089.302-1.576a7 7 0 1 1 3.541-7.655 4.3 4.3 0 0 1 1.551.137m-7.65-3.508a.75.75 0 0 0-1.494.102v4.5l.007.102a.75.75 0 0 0 1.493-.102v-4.5zm6.486-3.474-.083-.06a.75.75 0 0 0-.877 1.212l1.159.965.082.06a.75.75 0 0 0 .877-1.213zM15 3.25a.75.75 0 0 0-.75-.75h-4.5l-.102.007A.75.75 0 0 0 9.75 4h4.5l.102-.007A.75.75 0 0 0 15 3.25M19.25 13A3.25 3.25 0 0 0 16 16.25a.75.75 0 0 0 1.5 0A1.75 1.75 0 1 1 19.25 18 3.25 3.25 0 0 0 16 21.25v1c0 .414.336.75.75.75h5a.75.75 0 0 0 0-1.5H17.5v-.25c0-.966.784-1.75 1.75-1.75a3.25 3.25 0 0 0 0-6.5"/>`
} as const;

export default function Timer2Icon({ 
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

  const gradientId = 'timer2icon_gradient';
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