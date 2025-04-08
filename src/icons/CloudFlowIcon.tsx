
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12 2a6 6 0 0 0-5.92 5.02A4.5 4.5 0 0 0 6.5 16h6.68l.133-.507a3 3 0 0 1 2.487-2.214 3.75 3.75 0 0 1 6.153-1.128q.047-.32.047-.651a4.5 4.5 0 0 0-4.08-4.48A6 6 0 0 0 12 2m7.25 11.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5m-3.034 2.25h.471a2.751 2.751 0 1 0-.142-1.5h-.33a2 2 0 0 0-1.934 1.495l-1.013 3.881a.5.5 0 0 1-.484.374h-.795a2.75 2.75 0 1 0-.289 1.5h1.084a2 2 0 0 0 1.935-1.495l1.013-3.881a.5.5 0 0 1 .484-.374M8 20.25a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0"/>`,
  'regular': `<path d="M7.505 7.785a4.5 4.5 0 0 1 8.99 0 .75.75 0 0 0 .75.715h.255a3 3 0 0 1 2.986 2.709 3.75 3.75 0 0 1 1.467.942q.047-.32.047-.651a4.5 4.5 0 0 0-4.08-4.48 6.001 6.001 0 0 0-11.84 0A4.5 4.5 0 0 0 6.5 16h6.68l.133-.507c.095-.365.255-.7.466-.993H6.5a3 3 0 1 1 0-6h.256c.4 0 .73-.315.749-.715M19.25 13.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5m-3.034 2.25h.471a2.751 2.751 0 1 0-.142-1.5h-.33a2 2 0 0 0-1.934 1.495l-1.013 3.881a.5.5 0 0 1-.484.374h-.795a2.75 2.75 0 1 0-.289 1.5h1.084a2 2 0 0 0 1.935-1.495l1.013-3.881a.5.5 0 0 1 .484-.374M8 20.25a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0"/>`
} as const;

export default function CloudFlowIcon({ 
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

  const gradientId = 'cloudflowicon_gradient';
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