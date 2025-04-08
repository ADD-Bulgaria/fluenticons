
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6.146 2.44 7 3.292l-1.56 1.56A.5.5 0 0 1 5.085 5H1v-.5A2.5 2.5 0 0 1 3.5 2h1.586a1.5 1.5 0 0 1 1.06.44M1 9.5V6h4.086a1.5 1.5 0 0 0 1.06-.44L8.207 3.5H10.5A2.5 2.5 0 0 1 13 6v3.5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 1 9.5M14 6v3.5a3.5 3.5 0 0 1-3.5 3.5h-7c.456.607 1.182 1 2 1h5A4.5 4.5 0 0 0 15 9.5V8c0-.818-.393-1.544-1-2"/>`,
  'regular': `<path d="M3.5 3A1.5 1.5 0 0 0 2 4.5V5h3.086a.5.5 0 0 0 .353-.146L6.293 4l-.854-.854A.5.5 0 0 0 5.086 3zM1 4.441q0-.024.002-.047A2.5 2.5 0 0 1 3.5 2h1.586a1.5 1.5 0 0 1 1.06.44L7.207 3.5H10.5A2.5 2.5 0 0 1 13 6v3.5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 1 9.5zm6.207.059-1.06 1.06A1.5 1.5 0 0 1 5.085 6H2v3.5A1.5 1.5 0 0 0 3.5 11h7A1.5 1.5 0 0 0 12 9.5V6a1.5 1.5 0 0 0-1.5-1.5zM14 6c.607.456 1 1.182 1 2v1.5a4.5 4.5 0 0 1-4.5 4.5h-5a2.5 2.5 0 0 1-2-1h7A3.5 3.5 0 0 0 14 9.5z"/>`
} as const;

export default function FolderMultipleIcon({ 
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
        viewBox="0 0 16 16"
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

  const gradientId = 'foldermultipleicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
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