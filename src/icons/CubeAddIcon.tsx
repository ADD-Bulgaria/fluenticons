
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M8.7 2.48a3.5 3.5 0 0 1 2.6 0l5.757 2.304c.57.227.943.779.943 1.392v4.08A5.48 5.48 0 0 0 14.5 9a5.48 5.48 0 0 0-4 1.725v-1.9l4.203-1.868a.5.5 0 1 0-.406-.914L10 7.952l-4.297-1.91a.5.5 0 1 0-.406.914L9.5 8.824v3.381A5.5 5.5 0 0 0 9 14.5c0 1.224.4 2.355 1.076 3.268a3.5 3.5 0 0 1-1.376-.25l-5.757-2.302A1.5 1.5 0 0 1 2 13.822V6.176a1.5 1.5 0 0 1 .943-1.392zM17 18.24a4.5 4.5 0 1 1-5-7.483 4.5 4.5 0 0 1 5 7.484m-2.146-6.094A.5.5 0 0 0 14 12.5V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5a.5.5 0 0 0-.146-.354"/>`,
  'regular': `<path d="M9.072 16.59q.191.075.39.12.25.565.614 1.057a3.5 3.5 0 0 1-1.376-.25l-5.757-2.302A1.5 1.5 0 0 1 2 13.822V6.176a1.5 1.5 0 0 1 .943-1.392L8.7 2.48a3.5 3.5 0 0 1 2.6 0l5.757 2.303c.57.227.943.779.943 1.392v4.08a5.5 5.5 0 0 0-1-.657V6.176a.5.5 0 0 0-.314-.464L10.929 3.41a2.5 2.5 0 0 0-1.857 0L3.314 5.712A.5.5 0 0 0 3 6.176v7.646a.5.5 0 0 0 .314.465zM5.703 6.042a.5.5 0 1 0-.406.914L9.5 8.824v3.381a5.5 5.5 0 0 1 1-1.48v-1.9l4.203-1.869a.5.5 0 1 0-.406-.914L10 7.952zM17 18.241a4.5 4.5 0 1 1-5-7.484 4.5 4.5 0 0 1 5 7.484m-2.146-6.095a.5.5 0 0 0-.854.353v1.5h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0v-1.5h1.5a.5.5 0 0 0 0-1H15v-1.5a.5.5 0 0 0-.146-.354"/>`
} as const;

export default function CubeAddIcon({ 
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

  const gradientId = 'cubeaddicon_gradient';
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