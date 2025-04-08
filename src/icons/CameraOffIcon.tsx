
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M2.22 2.22a.75.75 0 0 1 1.06 0l18.5 18.5a.75.75 0 0 1-1.06 1.06l-.946-.945A3.3 3.3 0 0 1 18.75 21H5.25A3.25 3.25 0 0 1 2 17.75v-9.5c0-1.403.89-2.599 2.135-3.054L2.22 3.28a.75.75 0 0 1 0-1.06m11.602 12.663a3 3 0 0 1-4.206-4.206L8.55 9.612a4.5 4.5 0 0 0 6.34 6.34zm2.615-1.628a4.5 4.5 0 0 0-5.192-5.192l-3.59-3.59.55-.897a2.25 2.25 0 0 1 1.917-1.073h3.803a2.25 2.25 0 0 1 1.94 1.11L16.679 5h2.071A3.25 3.25 0 0 1 22 8.25v9.5q-.001.488-.136.933z"/>`,
  'regular': `<path d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l1.915 1.916A3.25 3.25 0 0 0 2 8.25v9.5A3.25 3.25 0 0 0 5.25 21h13.5a3.2 3.2 0 0 0 1.024-.165l.945.945a.75.75 0 0 0 1.061-1.06zM18.44 19.5H5.25a1.75 1.75 0 0 1-1.75-1.75v-9.5c0-.966.784-1.75 1.75-1.75h.19l3.11 3.11a4.5 4.5 0 0 0 6.34 6.34zm-8.822-8.822 4.205 4.205a3 3 0 0 1-4.206-4.206m1.628-2.615 1.54 1.541a3 3 0 0 1 2.111 2.11l1.54 1.541a4.5 4.5 0 0 0-5.192-5.192m9.255.187v9.068l1.364 1.365q.135-.446.136-.933v-9.5A3.25 3.25 0 0 0 18.75 5h-2.07l-.815-1.387a2.25 2.25 0 0 0-1.94-1.11h-3.803a2.25 2.25 0 0 0-1.917 1.073l-.55.896 1.09 1.091.738-1.202.065-.09a.75.75 0 0 1 .574-.268h3.803a.75.75 0 0 1 .646.37l1.032 1.757a.75.75 0 0 0 .647.37h2.5c.966 0 1.75.784 1.75 1.75"/>`
} as const;

export default function CameraOffIcon({ 
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

  const gradientId = 'cameraofficon_gradient';
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