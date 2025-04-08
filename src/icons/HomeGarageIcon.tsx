
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M13.456 2.534a2.25 2.25 0 0 0-2.912 0l-6.75 5.728A2.25 2.25 0 0 0 3 9.977v9.273c0 .966.784 1.75 1.75 1.75H6.5v-6.25c0-.966.784-1.75 1.75-1.75h7.5c.966 0 1.75.784 1.75 1.75V21h1.75A1.75 1.75 0 0 0 21 19.25V9.977c0-.66-.29-1.288-.794-1.715zM16 21H8v-2.5h8zm0-4H8v-2.25a.25.25 0 0 1 .25-.25h7.5a.25.25 0 0 1 .25.25z"/>`,
  'regular': `<path d="m11.515 3.678-6.75 5.727a.75.75 0 0 0-.265.572v9.273c0 .138.112.25.25.25H7v-5.25c0-.966.784-1.75 1.75-1.75h6.5c.966 0 1.75.784 1.75 1.75v5.25h2.25a.25.25 0 0 0 .25-.25V9.977a.75.75 0 0 0-.265-.572l-6.75-5.727a.75.75 0 0 0-.97 0M8.5 17.5v2h7v-2zm7-1.5v-1.75a.25.25 0 0 0-.25-.25h-6.5a.25.25 0 0 0-.25.25V16zM4.75 21A1.75 1.75 0 0 1 3 19.25V9.977c0-.66.29-1.288.794-1.715l6.75-5.728a2.25 2.25 0 0 1 2.912 0l6.75 5.728A2.25 2.25 0 0 1 21 9.977v9.273A1.75 1.75 0 0 1 19.25 21z"/>`
} as const;

export default function HomeGarageIcon({ 
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

  const gradientId = 'homegarageicon_gradient';
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