
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M7 18.5a1 1 0 0 0 1-1V9l-.007-.117A1 1 0 0 0 6 9v8.5l.007.117A1 1 0 0 0 7 18.5m6.001 2L13 9l-.007-.117A1 1 0 0 0 11 9l.001 11.5.007.117A1 1 0 0 0 13 20.5m3.999-2a1 1 0 0 0 1-1V9l-.007-.117A1 1 0 0 0 16 9v8.5l.007.117A1 1 0 0 0 17 18.5M14.79 4.387a1 1 0 0 1-1.497 1.32L12 4.414l-1.293 1.293-.094.083a1 1 0 0 1-1.32-1.497l2-2 .094-.083a1 1 0 0 1 1.32.083l2 2z"/>`,
  'regular': `<path d="M16.75 18.5a.75.75 0 0 1-.75-.75v-9a.75.75 0 0 1 1.5 0v9a.75.75 0 0 1-.75.75m-5 3a.75.75 0 0 1-.75-.75v-12a.75.75 0 0 1 1.5 0v12a.75.75 0 0 1-.75.75m-5-3a.75.75 0 0 1-.75-.75v-9a.75.75 0 0 1 1.5 0v9a.75.75 0 0 1-.75.75M9.147 4.804a.75.75 0 0 0 1.133.976l1.47-1.47 1.47 1.47.084.073a.75.75 0 0 0 .976-1.133l-2-2-.084-.073a.75.75 0 0 0-.976.073l-2 2z"/>`
} as const;

export default function TextIndentDecreaseRtlRotate270Icon({ 
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

  const gradientId = 'textindentdecreasertlrotate270icon_gradient';
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