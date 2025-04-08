
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M5 4.5A2.5 2.5 0 0 1 7.5 2H9v2.5A1.5 1.5 0 0 0 10.5 6H18v6.5a2.5 2.5 0 0 1-2.5 2.5h-8A2.5 2.5 0 0 1 5 12.5zm5 0V2h5.5A2.5 2.5 0 0 1 18 4.5V5h-7.5a.5.5 0 0 1-.5-.5M12.5 18a2.5 2.5 0 0 0 2.45-2H7.5A3.5 3.5 0 0 1 4 12.5V5.05A2.5 2.5 0 0 0 2 7.5V14a4 4 0 0 0 4 4z"/>`,
  'regular': `<path d="M7.5 2A2.5 2.5 0 0 0 5 4.5v8A2.5 2.5 0 0 0 7.5 15h8a2.5 2.5 0 0 0 2.5-2.5v-8A2.5 2.5 0 0 0 15.5 2zM17 4.5V5h-6.5a.5.5 0 0 1-.5-.5V3h5.5A1.5 1.5 0 0 1 17 4.5m-8 0A1.5 1.5 0 0 0 10.5 6H17v6.5a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 6 12.5v-8A1.5 1.5 0 0 1 7.5 3H9zM12.5 18a2.5 2.5 0 0 0 2.45-2h-1.035a1.5 1.5 0 0 1-1.415 1H6a3 3 0 0 1-3-3V7.5a1.5 1.5 0 0 1 1-1.415V5.05A2.5 2.5 0 0 0 2 7.5V14a4 4 0 0 0 4 4z"/>`
} as const;

export default function TabDesktopCopyIcon({ 
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

  const gradientId = 'tabdesktopcopyicon_gradient';
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