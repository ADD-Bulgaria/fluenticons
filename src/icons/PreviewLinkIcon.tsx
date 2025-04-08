
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6.024 7v2H17.98V7zm8.956 6.479v3h3v-3zM2 5.75A2.75 2.75 0 0 1 4.75 3h14.5A2.75 2.75 0 0 1 22 5.75v12.5A2.75 2.75 0 0 1 19.25 21H4.75A2.75 2.75 0 0 1 2 18.25zm2.524.5v3.5c0 .414.336.75.75.75H18.73a.75.75 0 0 0 .75-.75v-3.5a.75.75 0 0 0-.75-.75H5.274a.75.75 0 0 0-.75.75m8.956 6.479v4.5c0 .414.335.75.75.75h4.5a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0-.75.75M5.274 12.5a.75.75 0 0 0 0 1.5h5.976a.75.75 0 0 0 0-1.5zm-.75 4.25c0 .414.336.75.75.75h5.976a.75.75 0 0 0 0-1.5H5.274a.75.75 0 0 0-.75.75"/>`,
  'regular': `<path d="M4.524 6.25a.75.75 0 0 1 .75-.75H18.73a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-.75.75H5.274a.75.75 0 0 1-.75-.75zm1.5.75v2H17.98V7zm8.206 4.979a.75.75 0 0 0-.75.75v4.5c0 .414.335.75.75.75h4.5a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-.75-.75zm.75 4.5v-3h3v3zM4.524 13.25a.75.75 0 0 1 .75-.75h5.976a.75.75 0 0 1 0 1.5H5.274a.75.75 0 0 1-.75-.75m.75 2.75a.75.75 0 0 0 0 1.5h5.976a.75.75 0 0 0 0-1.5zM2 5.75A2.75 2.75 0 0 1 4.75 3h14.5A2.75 2.75 0 0 1 22 5.75v12.5A2.75 2.75 0 0 1 19.25 21H4.75A2.75 2.75 0 0 1 2 18.25zM4.75 4.5c-.69 0-1.25.56-1.25 1.25v12.5c0 .69.56 1.25 1.25 1.25h14.5c.69 0 1.25-.56 1.25-1.25V5.75c0-.69-.56-1.25-1.25-1.25z"/>`
} as const;

export default function PreviewLinkIcon({ 
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

  const gradientId = 'previewlinkicon_gradient';
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