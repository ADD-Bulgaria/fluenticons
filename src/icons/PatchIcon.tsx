
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="m9.798 3.237 1.495 1.495-6.561 6.56-1.495-1.494a3.25 3.25 0 0 1 0-4.596l1.965-1.965a3.25 3.25 0 0 1 4.596 0M14.2 20.762l-1.494-1.495 6.56-6.56 1.495 1.494a3.25 3.25 0 0 1 0 4.597l-1.964 1.964a3.25 3.25 0 0 1-4.596 0m-10.964-6.56a3.25 3.25 0 0 0 0 4.596l1.965 1.964a3.25 3.25 0 0 0 4.596 0L20.762 9.798a3.25 3.25 0 0 0 0-4.596l-1.964-1.965a3.25 3.25 0 0 0-4.596 0zM12.75 9a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M9 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5m3 0a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5m3.75-.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M12 15.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5"/>`,
  'regular': `<path d="M12 12.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M10.25 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m4.25.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m-1.75 1.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M12 10.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m-8.763 8.048a3.25 3.25 0 0 1 0-4.596L13.702 3.236a3.25 3.25 0 0 1 4.596 0l2.464 2.465a3.25 3.25 0 0 1 0 4.596L10.298 20.762a3.25 3.25 0 0 1-4.596 0zm1.061-3.536a1.75 1.75 0 0 0 0 2.475l2.464 2.465a1.75 1.75 0 0 0 2.475 0L10.94 18 6 13.06zM16.939 12l-4.94-4.94L7.06 12 12 16.94zm1.06-1.06 1.703-1.703a1.75 1.75 0 0 0 0-2.475l-2.465-2.464a1.75 1.75 0 0 0-2.475 0L13.06 6zm-7.767-5.647-.995-.995a1.75 1.75 0 0 0-2.475 0L4.298 6.762a1.75 1.75 0 0 0 0 2.475l.995.995-1.061 1.06-.995-.994a3.25 3.25 0 0 1 0-4.596l2.465-2.465a3.25 3.25 0 0 1 4.596 0l.995.995zm2.475 14.475.994.994a3.25 3.25 0 0 0 4.597 0l2.464-2.464a3.25 3.25 0 0 0 0-4.596l-.995-.995-1.06 1.06.994.995a1.75 1.75 0 0 1 0 2.475l-2.464 2.465a1.75 1.75 0 0 1-2.475 0l-.995-.995z"/>`
} as const;

export default function PatchIcon({ 
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

  const gradientId = 'patchicon_gradient';
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