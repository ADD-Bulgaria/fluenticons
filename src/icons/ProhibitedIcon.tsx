
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M34.914 10.965c-6.68-5.605-16.653-5.267-22.935 1.014-6.281 6.282-6.62 16.256-1.014 22.935zm2.121 2.121-23.949 23.95c6.68 5.605 16.653 5.266 22.935-1.015 6.281-6.282 6.62-16.256 1.014-22.935M9.858 9.858c7.81-7.81 20.474-7.81 28.284 0s7.81 20.474 0 28.284-20.474 7.81-28.284 0-7.81-20.474 0-28.284"/>`,
  'regular': `<path d="M35.46 10.773c-6.876-5.969-17.297-5.684-23.834.853s-6.822 16.959-.853 23.833zm1.767 1.768L12.541 37.227c6.875 5.969 17.296 5.684 23.833-.853s6.822-16.958.853-23.833M9.857 9.858c7.811-7.81 20.475-7.81 28.285 0s7.81 20.474 0 28.284-20.474 7.81-28.284 0-7.81-20.474 0-28.284"/>`
} as const;

export default function ProhibitedIcon({ 
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

  const gradientId = 'prohibitedicon_gradient';
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