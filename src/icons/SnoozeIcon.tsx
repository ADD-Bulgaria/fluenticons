
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M9 12.504a1 1 0 0 1 .846 1.534l-.065.091L5.08 20H9a1 1 0 0 1 .993.883L10 21a1 1 0 0 1-.883.993L9 22H3a1 1 0 0 1-.846-1.534l.065-.09 4.699-5.872H3a1 1 0 0 1-.993-.883L2 13.504a1 1 0 0 1 .883-.993L3 12.504zM21 2a1 1 0 0 1 .84 1.542l-.066.091L14.109 13h6.89a1 1 0 0 1 .994.883L22 14a1 1 0 0 1-.884.993L21 15h-9a1 1 0 0 1-.84-1.542l.066-.091L18.889 4h-6.89a1 1 0 0 1-.992-.883L11 3a1 1 0 0 1 .883-.993L12 2z"/>`,
  'regular': `<path d="M8.244 13.004a.75.75 0 0 1 .662 1.104l-.057.09-4.622 6.301h4.017a.75.75 0 0 1 .743.649l.007.102a.75.75 0 0 1-.648.743L8.244 22H2.747a.75.75 0 0 1-.661-1.105l.057-.089 4.62-6.303H2.749a.75.75 0 0 1-.743-.648l-.007-.101a.75.75 0 0 1 .649-.743l.101-.007zM21.252 2a.75.75 0 0 1 .638 1.144l-.06.084-8.491 10.268h7.913a.75.75 0 0 1 .743.649l.007.101a.75.75 0 0 1-.648.744l-.102.006h-9.505a.75.75 0 0 1-.638-1.144l.06-.083L19.66 3.5l-7.912.001a.75.75 0 0 1-.743-.648l-.007-.102a.75.75 0 0 1 .649-.743l.1-.008z"/>`
} as const;

export default function SnoozeIcon({ 
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

  const gradientId = 'snoozeicon_gradient';
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