
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M35 40.5a1.5 1.5 0 0 0 3 0v-18a7.5 7.5 0 0 0-7.5-7.5H13.121l6.44-6.44a1.5 1.5 0 0 0-2.122-2.12l-9 9a1.5 1.5 0 0 0 0 2.12l9 9a1.5 1.5 0 0 0 2.122-2.12L13.12 18H30.5a4.5 4.5 0 0 1 4.5 4.5z"/>`,
  'regular': `<path d="M35.5 40.75a1.25 1.25 0 1 0 2.5 0v-18.5A7.25 7.25 0 0 0 30.75 15H12.582l7.04-6.854a1.25 1.25 0 0 0-1.744-1.792l-9.5 9.25a1.25 1.25 0 0 0 0 1.792l9.5 9.25a1.25 1.25 0 0 0 1.744-1.792L12.069 17.5H30.75a4.75 4.75 0 0 1 4.75 4.75z"/>`
} as const;

export default function ArrowTurnUpLeftIcon({ 
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

  const gradientId = 'arrowturnuplefticon_gradient';
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