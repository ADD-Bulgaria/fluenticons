
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M9 6.25A3.25 3.25 0 0 1 12.25 3h7.5A3.25 3.25 0 0 1 23 6.25V8.5h-2V6.25C21 5.56 20.44 5 19.75 5h-7.5C11.56 5 11 5.56 11 6.25V8.5H9zM5.25 28A3.25 3.25 0 0 1 2 24.75V15.5h28v9.25A3.25 3.25 0 0 1 26.75 28z"/><path d="M2 11.25A3.25 3.25 0 0 1 5.25 8h21.5A3.25 3.25 0 0 1 30 11.25V16H2z"/><path d="M22 13a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1m-12 0a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1"/>`,
  'filled': `<path d="M12.25 3A3.25 3.25 0 0 0 9 6.25V8H5.25A3.25 3.25 0 0 0 2 11.25V15h7v-1a1 1 0 1 1 2 0v1h10v-1a1 1 0 1 1 2 0v1h7v-3.75A3.25 3.25 0 0 0 26.75 8H23V6.25A3.25 3.25 0 0 0 19.75 3zM21 8H11V6.25c0-.69.56-1.25 1.25-1.25h7.5c.69 0 1.25.56 1.25 1.25zM2 24.75V17h7v1a1 1 0 1 0 2 0v-1h10v1a1 1 0 1 0 2 0v-1h7v7.75A3.25 3.25 0 0 1 26.75 28H5.25A3.25 3.25 0 0 1 2 24.75"/>`,
  'light': `<path d="M12.25 3A3.25 3.25 0 0 0 9 6.25V8H4.75A2.75 2.75 0 0 0 2 10.75v14.5A2.75 2.75 0 0 0 4.75 28h22.5A2.75 2.75 0 0 0 30 25.25v-14.5A2.75 2.75 0 0 0 27.25 8H23V6.25A3.25 3.25 0 0 0 19.75 3zm-7.5 6h22.5c.966 0 1.75.784 1.75 1.75V16h-6v-1.5a.5.5 0 0 0-1 0V16H10v-1.5a.5.5 0 0 0-1 0V16H3v-5.25C3 9.784 3.784 9 4.75 9M3 17h6v1.5a.5.5 0 0 0 1 0V17h12v1.5a.5.5 0 0 0 1 0V17h6v8.25A1.75 1.75 0 0 1 27.25 27H4.75A1.75 1.75 0 0 1 3 25.25zm7-9V6.25A2.25 2.25 0 0 1 12.25 4h7.5A2.25 2.25 0 0 1 22 6.25V8z"/>`,
  'regular': `<path d="M12.25 3A3.25 3.25 0 0 0 9 6.25V8H5.25A3.25 3.25 0 0 0 2 11.25v13.5A3.25 3.25 0 0 0 5.25 28h21.5A3.25 3.25 0 0 0 30 24.75v-13.5A3.25 3.25 0 0 0 26.75 8H23V6.25A3.25 3.25 0 0 0 19.75 3zM28 15h-5v-1a1 1 0 1 0-2 0v1H11v-1a1 1 0 1 0-2 0v1H4v-3.75c0-.69.56-1.25 1.25-1.25h21.5c.69 0 1.25.56 1.25 1.25zm-5 2h5v7.75c0 .69-.56 1.25-1.25 1.25H5.25C4.56 26 4 25.44 4 24.75V17h5v1a1 1 0 1 0 2 0v-1h10v1a1 1 0 1 0 2 0zm-2-9H11V6.25c0-.69.56-1.25 1.25-1.25h7.5c.69 0 1.25.56 1.25 1.25z"/>`
} as const;

export default function ToolboxIcon({ 
  variant = 'regular',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'color' | 'filled' | 'light' | 'regular' }) {
  const width = typeof size === 'number' ? `${size}px` : size;
  const height = typeof size === 'number' ? `${size}px` : size;
  
  if (!gradient) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
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

  const gradientId = 'toolboxicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
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