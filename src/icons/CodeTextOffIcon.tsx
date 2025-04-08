
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M13.25 7h-3a.75.75 0 0 1 0-1.5h3a.75.75 0 0 1 0 1.5m-3.5-3h4.5a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0 0 1.5m-1 7.5h-7a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5m-2-7.5a.75.75 0 0 0 0-1.5H4.622l1.5 1.5zm8.104 10.145-13-12.999a.5.5 0 0 0-.708.707l.646.646H1.75a.75.75 0 0 0 0 1.5h1.542l1.5 1.5H4.75a.75.75 0 0 0 0 1.5h1.542l1.5 1.5H3.75a.75.75 0 0 0 0 1.5h5.542l4.854 4.854a.5.5 0 0 0 .708 0 .5.5 0 0 0 0-.708"/>`,
  'regular': `<path d="m6.122 4-1-1H7a.5.5 0 0 1 0 1zM9.5 4h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0 0 1m.5 2a.5.5 0 0 0 0 1h3.5a.5.5 0 0 0 0-1zm-1 6H1.5a.5.5 0 0 0 0 1H9a.5.5 0 0 0 0-1m5.854 2.145-13-12.999a.5.5 0 0 0-.708.707L2.292 3H1.5a.5.5 0 0 0 0 1h1.792l2 2H4.5a.5.5 0 0 0 0 1h1.792l2 2H3.5a.5.5 0 0 0 0 1h5.792l4.854 4.854a.5.5 0 0 0 .708 0 .5.5 0 0 0 0-.708"/>`
} as const;

export default function CodeTextOffIcon({ 
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

  const gradientId = 'codetextofficon_gradient';
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