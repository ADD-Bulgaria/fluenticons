
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M7 2a1 1 0 0 1 .94.658l2.882 7.926-1.11 2.798L9.209 12H4.792l-.852 2.342a1 1 0 0 1-1.88-.684l4.001-11A1 1 0 0 1 7.001 2m-1.48 8h2.962L7 5.926zm9.848-3.472a1 1 0 0 0-1.86 0L8.151 20.022h-.15a1 1 0 1 0 0 2H11a1 1 0 0 0 0-2h-.697L11.106 18h6.653l.8 2.023H18a1 1 0 0 0 0 2h3.009a1 1 0 0 0 0-2h-.298zM16.967 16H11.9l2.537-6.39z"/>`,
  'regular': `<path d="M7 2a.75.75 0 0 1 .704.49l2.952 7.985.012.032.223.602-.829 2.086-.626-1.694H4.564l-1.112 3.01a.75.75 0 0 1-1.407-.521l1.288-3.483.012-.033L6.297 2.49A.75.75 0 0 1 7.001 2m-1.88 8h3.762L7 4.914zm8.687-3.527a.75.75 0 0 1 1.394 0l5.555 14.031h.494a.75.75 0 1 1 0 1.5H18.75a.75.75 0 1 1 0-1.5h.392l-1.19-3.004h-6.91L9.85 20.504h.399a.75.75 0 1 1 0 1.5H7.75a.75.75 0 1 1 0-1.5h.486zM17.359 16l-2.856-7.215L11.639 16z"/>`
} as const;

export default function TextFontIcon({ 
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

  const gradientId = 'textfonticon_gradient';
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