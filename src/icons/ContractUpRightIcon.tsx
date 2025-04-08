
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6 12.25A6.25 6.25 0 0 1 12.25 6h23.5A6.25 6.25 0 0 1 42 12.25v23.5A6.25 6.25 0 0 1 35.75 42h-7.5a1.25 1.25 0 1 1 0-2.5h7.5a3.75 3.75 0 0 0 3.75-3.75V24H29.25A5.25 5.25 0 0 1 24 18.75V8.5H12.25a3.75 3.75 0 0 0-3.75 3.75v7.5a1.25 1.25 0 1 1-2.5 0zM7.25 29.5a1.25 1.25 0 1 1 0-2.5h12.5c.69 0 1.25.56 1.25 1.25v12.5a1.25 1.25 0 1 1-2.5 0v-9.482L8.134 41.634a1.25 1.25 0 0 1-1.768-1.768L16.732 29.5z"/>`,
  'regular': `<path d="M12.25 6A6.25 6.25 0 0 0 6 12.25v7.5a1.25 1.25 0 1 0 2.5 0v-7.5a3.75 3.75 0 0 1 3.75-3.75H24v10.25c0 2.9 2.35 5.25 5.25 5.25H39.5v11.75a3.75 3.75 0 0 1-3.75 3.75h-7.5a1.25 1.25 0 1 0 0 2.5h7.5A6.25 6.25 0 0 0 42 35.75v-23.5A6.25 6.25 0 0 0 35.75 6zM26.5 18.75V8.5h9.25a3.75 3.75 0 0 1 3.75 3.75v9.25H29.25a2.75 2.75 0 0 1-2.75-2.75M6 28.25c0 .69.56 1.25 1.25 1.25h9.482L6.366 39.866a1.25 1.25 0 0 0 1.768 1.768L18.5 31.268v9.482a1.25 1.25 0 1 0 2.5 0v-12.5c0-.69-.56-1.25-1.25-1.25H7.25C6.56 27 6 27.56 6 28.25"/>`
} as const;

export default function ContractUpRightIcon({ 
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

  const gradientId = 'contractuprighticon_gradient';
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