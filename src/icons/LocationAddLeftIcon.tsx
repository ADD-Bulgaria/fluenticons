
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M14.95 13.955a7.005 7.005 0 0 0 0-9.904 7 7 0 0 0-9.9 0 7.005 7.005 0 0 0 0 9.904l1.521 1.499 2.043 1.985.133.118c.775.628 1.91.588 2.64-.118l2.435-2.37zM9.854 6.354 8.207 8H13a.5.5 0 0 1 0 1H8.207l1.647 1.646a.5.5 0 0 1-.708.708l-2.5-2.5a.5.5 0 0 1 0-.708l2.5-2.5a.5.5 0 1 1 .708.708"/>`,
  'regular': `<path d="M14.95 4.051a7.005 7.005 0 0 1 0 9.904l-1.128 1.114-2.436 2.37a1.993 1.993 0 0 1-2.64.118l-.132-.118-2.043-1.985-1.52-1.499a7.005 7.005 0 0 1 0-9.904 7 7 0 0 1 9.899 0m-.705.705a6 6 0 0 0-8.49 0 6.01 6.01 0 0 0-.176 8.31l.176.184.571.567 2.981 2.905.093.08a1 1 0 0 0 1.2 0l.093-.08 2.23-2.168 1.322-1.304.176-.183a6.01 6.01 0 0 0-.176-8.31M9.854 6.354a.5.5 0 0 0-.708-.708l-2.5 2.5a.5.5 0 0 0 0 .708l2.5 2.5a.5.5 0 0 0 .708-.708L8.207 9H13a.5.5 0 0 0 0-1H8.207z"/>`
} as const;

export default function LocationAddLeftIcon({ 
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

  const gradientId = 'locationaddlefticon_gradient';
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