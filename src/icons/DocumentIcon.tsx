
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M11 43h26a3 3 0 0 0 3-3V18l-10-4-4-10H11a3 3 0 0 0-3 3v33a3 3 0 0 0 3 3"/><path fill-opacity=".5" d="M11 43h26a3 3 0 0 0 3-3V18l-10-4-4-10H11a3 3 0 0 0-3 3v33a3 3 0 0 0 3 3"/><path d="M26 15V4l14 14H29a3 3 0 0 1-3-3"/>`,
  'filled': `<path d="M24 4H12.25A4.25 4.25 0 0 0 8 8.25v31.5A4.25 4.25 0 0 0 12.25 44h23.5A4.25 4.25 0 0 0 40 39.75V20H28.25A4.25 4.25 0 0 1 24 15.75zm15.626 13.5a4.3 4.3 0 0 0-.87-1.263L27.762 5.245a4.3 4.3 0 0 0-1.263-.871V15.75c0 .966.784 1.75 1.75 1.75z"/>`,
  'light': `<path d="M9 8.25A3.25 3.25 0 0 1 12.25 5H24v10.75A4.25 4.25 0 0 0 28.25 20H39v19.75A3.25 3.25 0 0 1 35.75 43h-23.5A3.25 3.25 0 0 1 9 39.75zm31 11.264v-.042a4.25 4.25 0 0 0-1.245-2.924L27.452 5.245A4.25 4.25 0 0 0 24.447 4H12.25A4.25 4.25 0 0 0 8 8.25v31.5A4.25 4.25 0 0 0 12.25 44h23.5A4.25 4.25 0 0 0 40 39.75zM25 5.047a3.25 3.25 0 0 1 1.745.905l11.303 11.303A3.25 3.25 0 0 1 38.953 19H28.25A3.25 3.25 0 0 1 25 15.75z"/>`,
  'regular': `<path d="M10.5 8.25c0-.966.784-1.75 1.75-1.75H24v9.25A4.25 4.25 0 0 0 28.25 20h9.25v19.75a1.75 1.75 0 0 1-1.75 1.75h-23.5a1.75 1.75 0 0 1-1.75-1.75zm25.982 9.25H28.25a1.75 1.75 0 0 1-1.75-1.75V7.518zM12.25 4A4.25 4.25 0 0 0 8 8.25v31.5A4.25 4.25 0 0 0 12.25 44h23.5A4.25 4.25 0 0 0 40 39.75V19.243a4.25 4.25 0 0 0-1.245-3.006L27.763 5.245A4.25 4.25 0 0 0 24.757 4z"/>`
} as const;

export default function DocumentIcon({ 
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

  const gradientId = 'documenticon_gradient';
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