
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M21.218 8.023C20.01 6.778 18.242 6 16 6H9a1 1 0 1 0 0 2h7c1.758 0 2.99.597 3.782 1.415.804.83 1.218 1.948 1.218 3.085s-.414 2.256-1.218 3.085C18.99 16.403 17.758 17 16 17H8.414l3.293-3.293a1 1 0 1 0-1.414-1.414l-5 5a1 1 0 0 0 0 1.414l5 5a1 1 0 0 0 1.414-1.414L8.414 19H16c2.242 0 4.01-.778 5.218-2.023C22.414 15.744 23 14.113 23 12.5s-.586-3.244-1.782-4.477"/>`,
  'regular': `<path d="M8 6.75A.75.75 0 0 1 8.75 6h7c2.337 0 4.262.781 5.5 2.016C22.481 9.244 23 10.876 23 12.5s-.519 3.256-1.75 4.484C20.012 18.22 18.087 19 15.75 19H7.56l3.22 3.22a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06l4.5-4.5a.75.75 0 1 1 1.06 1.06L7.56 17.5h8.19c1.988 0 3.426-.656 4.35-1.578a4.82 4.82 0 0 0 1.4-3.422 4.82 4.82 0 0 0-1.4-3.422c-.924-.922-2.362-1.578-4.35-1.578h-7A.75.75 0 0 1 8 6.75"/>`
} as const;

export default function ArrowHookDownLeftIcon({ 
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

  const gradientId = 'arrowhookdownlefticon_gradient';
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