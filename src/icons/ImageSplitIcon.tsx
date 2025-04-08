
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12.5 2.75a.75.75 0 0 0-1.5 0v18.5a.75.75 0 0 0 1.5 0zM5.25 4.5A1.75 1.75 0 0 0 3.5 6.25v.5a.75.75 0 0 1-1.5 0v-.5A3.25 3.25 0 0 1 5.25 3h.5a.75.75 0 0 1 0 1.5zm0 15a1.75 1.75 0 0 1-1.75-1.75v-.5a.75.75 0 0 0-1.5 0v.5A3.25 3.25 0 0 0 5.25 21h.5a.75.75 0 0 0 0-1.5zM7.5 3.75A.75.75 0 0 1 8.25 3h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m.75 15.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zm-5.5-11a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0v-5.5a.75.75 0 0 1 .75-.75M13.5 21h5.25c.625 0 1.208-.176 1.703-.481l-6.928-6.801-.025-.021zm0-8.94c.34.076.666.233.948.47l.128.118 6.939 6.811A3.24 3.24 0 0 0 22 17.75V6.25A3.25 3.25 0 0 0 18.75 3H13.5zm6.25-3.31a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/>`,
  'regular': `<path d="M12.5 2.75a.75.75 0 0 0-1.5 0v18.5a.75.75 0 0 0 1.5 0zM5.25 4.5A1.75 1.75 0 0 0 3.5 6.25v.5a.75.75 0 0 1-1.5 0v-.5A3.25 3.25 0 0 1 5.25 3h.5a.75.75 0 0 1 0 1.5zm0 15a1.75 1.75 0 0 1-1.75-1.75v-.5a.75.75 0 0 0-1.5 0v.5A3.25 3.25 0 0 0 5.25 21h.5a.75.75 0 0 0 0-1.5zM13.5 21h5.25A3.25 3.25 0 0 0 22 17.75V6.25A3.25 3.25 0 0 0 18.75 3H13.5v1.5h5.25c.966 0 1.75.784 1.75 1.75v11.5q-.002.315-.104.595l-5.822-5.702-.128-.116a2.24 2.24 0 0 0-.946-.47v1.635l.025.023L19.33 19.4a1.8 1.8 0 0 1-.581.099H13.5zm5.004-12.248a2.252 2.252 0 1 0-4.504 0 2.252 2.252 0 0 0 4.504 0m-3.004 0a.752.752 0 1 1 1.504 0 .752.752 0 0 1-1.504 0M8.25 3a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zM7.5 20.25a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m-4-11a.75.75 0 0 0-1.5 0v5.5a.75.75 0 0 0 1.5 0z"/>`
} as const;

export default function ImageSplitIcon({ 
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

  const gradientId = 'imagespliticon_gradient';
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