
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M9 8h30v4.5H9z"/><path d="M9 12h30v4.5H9z"/><path d="M9 16h30v3.5H9z"/><path d="M9 19h30v4.5H9z"/><path d="M9 23h30v4.5H9z"/><path d="M9 27h30v4H9z"/><path d="M25.5 19 14 7.5H8v24h5z"/><path d="M21.5 19 10 7.5H8v24h1z"/><path d="M18.5 19 8.5 9v20z"/><path d="m15.5 19-7-7v14z"/><path d="M8.25 6C7.56 6 7 6.56 7 7.25v33.5a1.25 1.25 0 1 0 2.5 0V33h30.25c.69 0 1.25-.56 1.25-1.25V7.25C41 6.56 40.44 6 39.75 6zm4.981 24.5H9.5v-22h4.731l10.5 10.5zm3.536 0 10.616-10.616a1.25 1.25 0 0 0 0-1.768L17.767 8.5H38.5v22z"/>`
} as const;

export default function FlagPrideProgressIcon({ 
  variant = 'filled',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'filled' }) {
  const width = typeof size === 'number' ? `${size}px` : size;
  const height = typeof size === 'number' ? `${size}px` : size;
  
  if (!gradient) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        fill={color || 'currentColor'}
        className={className}
        style={{ width, height, flexShrink: 0, verticalAlign: 'middle', ...style }}
        aria-hidden={title ? undefined : true}
        focusable="false"
        role={title ? "img" : "presentation"}
        {...props}
      >
        {title && <title>{title}</title>}
        <g dangerouslySetInnerHTML={{ __html: svgContent[variant] || svgContent['filled'] || '' }} />
      </svg>
    );
  }

  const gradientId = 'flagprideprogressicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
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
      <g dangerouslySetInnerHTML={{ __html: svgContent[variant] || svgContent['filled'] || '' }} />
    </svg>
  );
}