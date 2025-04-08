
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M16.497 11.501a7.501 7.501 0 1 1 8.751 7.397V23h7.5a3.75 3.75 0 0 1 3.75 3.75v2.35a7.503 7.503 0 0 1-1.25 14.9 7.501 7.501 0 0 1-1.252-14.898V26.75c0-.69-.56-1.25-1.25-1.25H15.25c-.69 0-1.25.56-1.25 1.25v2.35a7.501 7.501 0 1 1-2.5 0v-2.35A3.75 3.75 0 0 1 15.25 23h7.5v-4.102a7.5 7.5 0 0 1-6.252-7.397"/>`,
  'regular': `<path d="M23.998 4a7.501 7.501 0 0 0-1.25 14.898V23H15.25a3.75 3.75 0 0 0-3.75 3.75v2.352a7.501 7.501 0 1 0 2.5 0V26.75c0-.69.56-1.25 1.25-1.25h17.499c.69 0 1.25.56 1.25 1.25v2.352a7.501 7.501 0 1 0 2.5 0V26.75a3.75 3.75 0 0 0-3.75-3.75h-7.5v-4.102A7.501 7.501 0 0 0 23.998 4m-5 7.501a5.001 5.001 0 1 1 10.001 0 5.001 5.001 0 0 1-10.002 0M7.75 36.5a5.001 5.001 0 1 1 10.002 0 5.001 5.001 0 0 1-10.002 0m27.5-5.001a5.001 5.001 0 1 1 0 10.002 5.001 5.001 0 0 1 0-10.002"/>`
} as const;

export default function OrganizationIcon({ 
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

  const gradientId = 'organizationicon_gradient';
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