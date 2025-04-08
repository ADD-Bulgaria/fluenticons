
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M18 28.568a1.248 1.248 0 0 1 1.632-1.191l7.868 2.522V18.098l-7.868 2.522A1.25 1.25 0 0 1 18 19.429V6h-5.75A6.25 6.25 0 0 0 6 12.25v23.5A6.25 6.25 0 0 0 12.25 42H18zM35.75 6H20.5v11.719l7.868-2.522A1.248 1.248 0 0 1 30 16.388v15.227a1.248 1.248 0 0 1-1.632 1.191L20.5 30.284v11.719h15.25a6.25 6.25 0 0 0 6.25-6.25V12.25A6.25 6.25 0 0 0 35.75 6"/>`,
  'regular': `<path d="M35.75 6h-23.5A6.25 6.25 0 0 0 6 12.25v23.5A6.25 6.25 0 0 0 12.25 42h23.5A6.25 6.25 0 0 0 42 35.75v-23.5A6.25 6.25 0 0 0 35.75 6M8.5 35.75v-23.5a3.75 3.75 0 0 1 3.75-3.75H18v10.932a1.248 1.248 0 0 0 1.632 1.191l7.868-2.522v11.801l-7.868-2.522a1.24 1.24 0 0 0-1.118.181c-.323.235-.514.61-.514 1.01v10.932h-5.75a3.75 3.75 0 0 1-3.75-3.75zm31 0a3.75 3.75 0 0 1-3.75 3.75H20.5v-9.218l7.868 2.522A1.248 1.248 0 0 0 30 31.613V16.385a1.248 1.248 0 0 0-1.632-1.191L20.5 17.716V8.498h15.25a3.75 3.75 0 0 1 3.75 3.75z"/>`
} as const;

export default function SquareDovetailJointIcon({ 
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

  const gradientId = 'squaredovetailjointicon_gradient';
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