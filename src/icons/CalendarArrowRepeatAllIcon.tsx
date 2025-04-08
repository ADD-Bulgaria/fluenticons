
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12.25 6A6.25 6.25 0 0 0 6 12.25V14h36v-1.75A6.25 6.25 0 0 0 35.75 6zM6 35.75V16.5h36v11.865a3.25 3.25 0 0 0-3.021.012 3.24 3.24 0 0 0-.93-1.925l-3.5-3.5a3.25 3.25 0 0 0-5.54 2.548H28.5a9.5 9.5 0 0 0-7.598 15.203A3.25 3.25 0 0 0 23.43 42H12.25A6.25 6.25 0 0 1 6 35.75m27.134-11.384a1.25 1.25 0 0 0-1.768 1.768l1.366 1.366H28.5a7.5 7.5 0 0 0-6 12.002 1.25 1.25 0 0 0 2-1.502 5 5 0 0 1 4-8h4.232l-1.366 1.366a1.25 1.25 0 0 0 1.768 1.768l3.5-3.5a1.25 1.25 0 0 0 0-1.768zm8.365 6.133A1.25 1.25 0 0 0 39.501 32a5 5 0 0 1-4 8h-4.233l1.366-1.366a1.25 1.25 0 0 0-1.768-1.768l-3.5 3.5a1.25 1.25 0 0 0 0 1.768l3.5 3.5a1.25 1.25 0 0 0 1.768-1.768L31.268 42.5H35.5a7.5 7.5 0 0 0 6-12.001"/>`,
  'regular': `<path d="M12.25 6A6.25 6.25 0 0 0 6 12.25v23.5A6.25 6.25 0 0 0 12.25 42h11.18a3.25 3.25 0 0 1-2.528-1.297 9.5 9.5 0 0 1-.77-1.203H12.25a3.75 3.75 0 0 1-3.75-3.75V16.5h31v11.656a3.26 3.26 0 0 1 2.5.21V12.25A6.25 6.25 0 0 0 35.75 6zM8.5 12.25a3.75 3.75 0 0 1 3.75-3.75h23.5a3.75 3.75 0 0 1 3.75 3.75V14h-31zm24.634 12.116a1.25 1.25 0 0 0-1.768 1.768l1.366 1.366H28.5a7.5 7.5 0 0 0-6 12.002 1.25 1.25 0 0 0 2-1.502 5 5 0 0 1 4-8h4.232l-1.366 1.366a1.25 1.25 0 0 0 1.768 1.768l3.5-3.5a1.25 1.25 0 0 0 0-1.768zm8.365 6.133A1.25 1.25 0 0 0 39.501 32a5 5 0 0 1-4 8h-4.233l1.366-1.366a1.25 1.25 0 0 0-1.768-1.768l-3.5 3.5a1.25 1.25 0 0 0 0 1.768l3.5 3.5a1.25 1.25 0 0 0 1.768-1.768L31.268 42.5H35.5a7.5 7.5 0 0 0 6-12.001"/>`
} as const;

export default function CalendarArrowRepeatAllIcon({ 
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
        <g dangerouslySetInnerHTML={{ __html: svgContent[variant] || svgContent['regular'] || '' }} />
      </svg>
    );
  }

  const gradientId = 'calendararrowrepeatallicon_gradient';
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
      <g dangerouslySetInnerHTML={{ __html: svgContent[variant] || svgContent['regular'] || '' }} />
    </svg>
  );
}