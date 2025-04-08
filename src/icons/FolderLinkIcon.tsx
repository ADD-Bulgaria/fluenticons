
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M4 12.25A6.25 6.25 0 0 1 10.25 6h6.465a3.75 3.75 0 0 1 2.651 1.098l3.384 3.384-5.152 5.152a1.25 1.25 0 0 1-.883.366H4zm0 6.25v16.25A6.25 6.25 0 0 0 10.25 41h11.622A8.4 8.4 0 0 1 21 37.25c0-4.556 3.582-8.25 8-8.25h10c1.892 0 3.63.677 5 1.81V17.25A6.25 6.25 0 0 0 37.75 11H25.768l-6.402 6.402a3.75 3.75 0 0 1-2.651 1.098zm19 18.75A6.25 6.25 0 0 1 29.25 31h1.5a1.25 1.25 0 1 1 0 2.5h-1.5a3.75 3.75 0 1 0 0 7.5h1.5a1.25 1.25 0 1 1 0 2.5h-1.5A6.25 6.25 0 0 1 23 37.25m22 0A6.25 6.25 0 0 0 38.75 31h-1.5a1.25 1.25 0 1 0 0 2.5h1.5a3.75 3.75 0 1 1 0 7.5h-1.5a1.25 1.25 0 1 0 0 2.5h1.5A6.25 6.25 0 0 0 45 37.25m-17 0c0-.69.56-1.25 1.25-1.25h9.5a1.25 1.25 0 1 1 0 2.5h-9.5c-.69 0-1.25-.56-1.25-1.25"/>`,
  'regular': `<path d="M6.5 12.25V16h10.215c.331 0 .649-.132.883-.366l3.384-3.384-3.384-3.384a1.25 1.25 0 0 0-.883-.366H10.25a3.75 3.75 0 0 0-3.75 3.75m-2.5 0A6.25 6.25 0 0 1 10.25 6h6.465a3.75 3.75 0 0 1 2.651 1.098L23.268 11H37.75A6.25 6.25 0 0 1 44 17.25v13.56a7.9 7.9 0 0 0-2.5-1.4V17.25a3.75 3.75 0 0 0-3.75-3.75H23.268l-3.902 3.902a3.75 3.75 0 0 1-2.651 1.098H6.5v16.25a3.75 3.75 0 0 0 3.75 3.75h10.841c.131.888.4 1.729.781 2.5H10.25A6.25 6.25 0 0 1 4 34.75zm19 25A6.25 6.25 0 0 1 29.25 31h1.5a1.25 1.25 0 1 1 0 2.5h-1.5a3.75 3.75 0 1 0 0 7.5h1.5a1.25 1.25 0 1 1 0 2.5h-1.5A6.25 6.25 0 0 1 23 37.25m22 0A6.25 6.25 0 0 0 38.75 31h-1.5a1.25 1.25 0 1 0 0 2.5h1.5a3.75 3.75 0 1 1 0 7.5h-1.5a1.25 1.25 0 1 0 0 2.5h1.5A6.25 6.25 0 0 0 45 37.25m-17 0c0-.69.56-1.25 1.25-1.25h9.5a1.25 1.25 0 1 1 0 2.5h-9.5c-.69 0-1.25-.56-1.25-1.25"/>`
} as const;

export default function FolderLinkIcon({ 
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

  const gradientId = 'folderlinkicon_gradient';
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