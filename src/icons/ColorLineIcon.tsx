
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M4.382 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-6.454l-1.316 1.314a3.25 3.25 0 0 1-1.362.813l-4.293 1.288a2 2 0 0 1-2.479-2.528zM18.648 2.944a3.22 3.22 0 0 1-.002 4.551l-7.123 7.111a2.25 2.25 0 0 1-.942.563l-4.294 1.289a1 1 0 0 1-1.239-1.265l1.362-4.228c.11-.34.298-.65.552-.902l7.132-7.122a3.22 3.22 0 0 1 4.554.003"/>`,
  'regular': `<path d="M4.38 14.003A2.5 2.5 0 0 0 2 16.5v3A2.5 2.5 0 0 0 4.5 22h15a2.5 2.5 0 0 0 2.5-2.5v-3a2.5 2.5 0 0 0-2.5-2.5h-5.954l-1.316 1.314a3 3 0 0 1-.203.186H19.5a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1v-3a1 1 0 0 1 .504-.869 2 2 0 0 1 .092-.744zM18.649 2.944a3.22 3.22 0 0 1-.002 4.551l-7.123 7.111a2.25 2.25 0 0 1-.942.563l-4.294 1.289a1 1 0 0 1-1.239-1.265l1.362-4.228c.11-.34.298-.65.552-.902l7.132-7.122a3.22 3.22 0 0 1 4.554.003m-3.494 1.059-7.133 7.121a.75.75 0 0 0-.184.301l-1.07 3.322 3.382-1.015a.75.75 0 0 0 .315-.187l7.121-7.11a1.718 1.718 0 1 0-2.43-2.432"/>`
} as const;

export default function ColorLineIcon({ 
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

  const gradientId = 'colorlineicon_gradient';
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