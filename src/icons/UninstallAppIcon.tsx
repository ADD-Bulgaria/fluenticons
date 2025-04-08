
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="m16.613 8.79.094-.083L18.5 6.915l1.793 1.792a1 1 0 0 0 1.32.083l.094-.083a1 1 0 0 0 .083-1.32l-.083-.094L19.915 5.5l1.792-1.793a1 1 0 0 0 .083-1.32l-.083-.094a1 1 0 0 0-1.32-.083l-.094.083L18.5 4.085l-1.793-1.792a1 1 0 0 0-1.32-.083l-.094.083a1 1 0 0 0-.083 1.32l.083.094L17.085 5.5l-1.792 1.793a1 1 0 0 0-.083 1.32l.083.094a1 1 0 0 0 1.218.153zM18.5 21a2.5 2.5 0 0 0 2.5-2.5v-5a2.5 2.5 0 0 0-2.5-2.5H13V5.5A2.5 2.5 0 0 0 10.5 3h-5A2.5 2.5 0 0 0 3 5.5v13A2.5 2.5 0 0 0 5.5 21zM5 11V5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5V11zm6 8H5.5a.5.5 0 0 1-.5-.5V13h6zm7.5 0H13v-6h5.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5"/>`,
  'regular': `<path d="m21.695 8.854.084-.073a.75.75 0 0 0 .072-.977l-.072-.084-2.22-2.218 2.22-2.22a.75.75 0 0 0 .072-.976l-.072-.084a.75.75 0 0 0-.977-.073l-.084.073-2.22 2.22-2.218-2.22a.75.75 0 0 0-.976-.073l-.085.073a.75.75 0 0 0-.072.976l.072.084 2.219 2.22L15.22 7.72a.75.75 0 0 0-.073.977l.072.084a.75.75 0 0 0 .977.073l.084-.073 2.22-2.218 2.22 2.218a.75.75 0 0 0 .976.073M18.75 21A2.25 2.25 0 0 0 21 18.75V13.5a2.25 2.25 0 0 0-2.25-2.25h-6v-6A2.25 2.25 0 0 0 10.5 3H5.25A2.25 2.25 0 0 0 3 5.25v13.5A2.25 2.25 0 0 0 5.25 21zm-7.5-9.749H4.5v-6a.75.75 0 0 1 .75-.75h5.25a.75.75 0 0 1 .75.75zm7.5 8.25h-6v-6.75h6a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-.75.75m-7.5 0h-6a.75.75 0 0 1-.75-.75v-6h6.75z"/>`
} as const;

export default function UninstallAppIcon({ 
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

  const gradientId = 'uninstallappicon_gradient';
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