
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12.149 3.146a.5.5 0 0 0 0 .707L15.294 7H10c-2.932 0-5.593 1.64-6.936 4.043a.5.5 0 1 0 .873.488C5.106 9.439 7.436 8 10 8h5.293l-3.144 3.145a.5.5 0 1 0 .707.707l3.984-3.985a.5.5 0 0 0 .014-.721l-3.998-4a.5.5 0 0 0-.707 0M8 15a2 2 0 1 0 4 0 2 2 0 0 0-4 0"/>`,
  'regular': `<path d="M12.149 3.146a.5.5 0 0 0 0 .707L15.294 7H10c-2.932 0-5.593 1.64-6.936 4.043a.5.5 0 1 0 .873.488C5.106 9.439 7.436 8 10 8h5.293l-3.144 3.145a.5.5 0 1 0 .707.707l3.984-3.985a.5.5 0 0 0 .014-.721l-3.998-4a.5.5 0 0 0-.707 0M12 15a2 2 0 1 0-4 0 2 2 0 0 0 4 0m-2-1a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>`
} as const;

export default function ArrowStepOverIcon({ 
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

  const gradientId = 'arrowstepovericon_gradient';
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