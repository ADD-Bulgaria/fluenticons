
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M7 6.75A3.75 3.75 0 0 1 10.75 3h11.5A3.75 3.75 0 0 1 26 6.75v9.5A3.75 3.75 0 0 1 22.25 20H17v-1.75a.75.75 0 0 0-1.5 0v3A3.75 3.75 0 0 1 11.75 25h-6A3.75 3.75 0 0 1 2 21.25v-5.5A3.75 3.75 0 0 1 5.75 12h3.5a.75.75 0 0 0 0-1.5H7zm4.5 3.999c0 .414.336.75.75.75a3.75 3.75 0 0 1 3.749 3.749.75.75 0 0 0 1.5 0 5.25 5.25 0 0 0-5.249-5.25.75.75 0 0 0-.75.75m.75-4.249a.75.75 0 0 0 0 1.5 7.25 7.25 0 0 1 7.255 7.248.75.75 0 0 0 1.5 0c0-4.836-3.92-8.748-8.755-8.748M14 14.75a1.25 1.25 0 1 0-2.5-.001 1.25 1.25 0 0 0 2.5 0"/>`,
  'regular': `<path d="M10.75 3A3.75 3.75 0 0 0 7 6.75V12H5.75A3.75 3.75 0 0 0 2 15.75v5.5A3.75 3.75 0 0 0 5.75 25h6a3.75 3.75 0 0 0 3.75-3.75V20h6.75A3.75 3.75 0 0 0 26 16.25v-9.5A3.75 3.75 0 0 0 22.25 3zM14 17.75v3.5a2.25 2.25 0 0 1-2.25 2.25h-6a2.25 2.25 0 0 1-2.25-2.25v-5.5a2.25 2.25 0 0 1 2.25-2.25h3.5a.75.75 0 0 0 0-1.5H8.5V6.75a2.25 2.25 0 0 1 2.25-2.25h11.5a2.25 2.25 0 0 1 2.25 2.25v9.5a2.25 2.25 0 0 1-2.25 2.25H15.5v-.75a.75.75 0 0 0-1.5 0m-1.75-7.751a.75.75 0 0 0 0 1.5 3.75 3.75 0 0 1 3.749 3.749.75.75 0 0 0 1.5 0 5.25 5.25 0 0 0-5.249-5.25M11.5 7.25a.75.75 0 0 1 .75-.75c4.834 0 8.755 3.912 8.755 8.748a.75.75 0 0 1-1.5 0A7.25 7.25 0 0 0 12.25 8a.75.75 0 0 1-.75-.75M12.75 16a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5"/>`
} as const;

export default function CastMultipleIcon({ 
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
        viewBox="0 0 28 28"
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

  const gradientId = 'castmultipleicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 28"
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