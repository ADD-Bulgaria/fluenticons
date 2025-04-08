
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M19.745 4a2.25 2.25 0 0 1 2.25 2.25v6.555a6.5 6.5 0 0 0-1.5-1.075V6.25a.75.75 0 0 0-.75-.75H4.25a.75.75 0 0 0-.75.75v11.505c0 .414.336.75.75.75l2.749-.001L7 15.75a1.75 1.75 0 0 1 1.606-1.744L8.75 14h3.272A6.47 6.47 0 0 0 11 17.5c0 .888.178 1.734.5 2.505H4.25A2.25 2.25 0 0 1 2 17.755V6.25A2.25 2.25 0 0 1 4.25 4zM12 7a3 3 0 1 1 0 6 3 3 0 0 1 0-6m11 10.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-4.945-3.08a.577.577 0 0 0-1.11 0l-.557 1.788h-1.803c-.566 0-.8.754-.343 1.1l1.458 1.105-.557 1.787c-.175.561.441 1.028.899.681l1.458-1.104 1.458 1.104c.458.347 1.074-.12.899-.68l-.557-1.788 1.458-1.104c.458-.347.223-1.101-.343-1.101h-1.803z"/>`,
  'regular': `<path d="M19.745 4a2.25 2.25 0 0 1 2.25 2.25v6.555a6.5 6.5 0 0 0-1.5-1.075V6.25a.75.75 0 0 0-.75-.75H4.25a.75.75 0 0 0-.75.75v11.505c0 .414.336.75.75.75l2.749-.001L7 15.75a1.75 1.75 0 0 1 1.606-1.744L8.75 14h3.272a6.5 6.5 0 0 0-.709 1.5H8.75a.25.25 0 0 0-.243.193l-.007.057-.001 2.754h2.578a6.5 6.5 0 0 0 .423 1.5H4.25A2.25 2.25 0 0 1 2 17.755V6.25A2.25 2.25 0 0 1 4.25 4zM12 7a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 9a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-4.945-3.08a.577.577 0 0 0-1.11 0l-.557 1.788h-1.803c-.566 0-.8.754-.343 1.1l1.458 1.105-.557 1.787c-.175.561.441 1.028.899.681l1.458-1.104 1.458 1.104c.458.347 1.074-.12.899-.68l-.557-1.788 1.458-1.104c.458-.347.223-1.101-.343-1.101h-1.803z"/>`
} as const;

export default function VideoPersonStarIcon({ 
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

  const gradientId = 'videopersonstaricon_gradient';
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