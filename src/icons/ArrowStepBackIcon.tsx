
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M7.851 3.146a.5.5 0 0 1 0 .707L4.706 7H10c2.932 0 5.593 1.64 6.936 4.043a.5.5 0 1 1-.872.488C14.894 9.439 12.564 8 10 8H4.707l3.144 3.145a.5.5 0 0 1-.707.707L3.161 7.867a.5.5 0 0 1-.014-.721l3.997-4a.5.5 0 0 1 .707 0M12 15a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/>`,
  'regular': `<path d="M7.851 3.146a.5.5 0 0 1 0 .707L4.706 7H10c2.932 0 5.593 1.64 6.936 4.043a.5.5 0 1 1-.872.488C14.894 9.439 12.564 8 10 8H4.707l3.144 3.145a.5.5 0 0 1-.707.707L3.161 7.867a.5.5 0 0 1-.014-.721l3.997-4a.5.5 0 0 1 .707 0M8 15a2 2 0 1 1 4 0 2 2 0 0 1-4 0m2-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>`
} as const;

export default function ArrowStepBackIcon({ 
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

  const gradientId = 'arrowstepbackicon_gradient';
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