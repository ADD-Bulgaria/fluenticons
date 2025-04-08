
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20m-2-20c0-.69.56-1.25 1.25-1.25h1.247c2.3 0 4.003-1.71 4.003-3.625S26.797 15.5 24.497 15.5c-1.32 0-2.39.49-3.153 1.005a6.4 6.4 0 0 0-.865.7c-.09.087-.18.177-.26.273a1.25 1.25 0 0 1-1.941-1.576V15.9h.001l.002-.003.003-.004.01-.012.011-.014.017-.019.092-.105c.077-.085.186-.2.325-.335a9 9 0 0 1 1.206-.976C20.987 13.729 22.539 13 24.497 13 28 13 31 15.656 31 19.125c0 2.024-1.021 3.77-2.567 4.875C29.979 25.105 31 26.851 31 28.875 31 32.344 28 35 24.497 35c-1.958 0-3.51-.729-4.552-1.433a9 9 0 0 1-1.206-.976 7 7 0 0 1-.445-.473l-.01-.012-.003-.004-.002-.002v-.001h-.001a1.25 1.25 0 0 1 1.94-1.577l.006.007.044.05c.044.048.114.123.21.217.194.187.487.443.866.7.762.514 1.834 1.004 3.153 1.004 2.3 0 4.003-1.71 4.003-3.625s-1.703-3.625-4.003-3.625H23.25c-.69 0-1.25-.56-1.25-1.25m-3.706-8.118.011-.014.017-.019"/>`,
  'regular': `<path d="M24 6.5C14.335 6.5 6.5 14.335 6.5 24S14.335 41.5 24 41.5 41.5 33.665 41.5 24 33.665 6.5 24 6.5M4 24C4 12.954 12.954 4 24 4s20 8.954 20 20-8.954 20-20 20S4 35.046 4 24m19.25-1.25a1.25 1.25 0 1 0 0 2.5h1.247c2.3 0 4.003 1.71 4.003 3.625S26.797 32.5 24.497 32.5c-1.32 0-2.39-.49-3.153-1.005a6.4 6.4 0 0 1-.865-.7 5 5 0 0 1-.255-.266l-.006-.007a1.25 1.25 0 0 0-1.94 1.576v.001h.001l.002.003.003.004.01.012.028.033.092.105c.077.085.186.2.325.335.278.27.683.623 1.206.976 1.042.704 2.594 1.433 4.552 1.433C28 35 31 32.344 31 28.875c0-2.024-1.021-3.77-2.567-4.875C29.979 22.895 31 21.149 31 19.125 31 15.656 28 13 24.497 13c-1.958 0-3.51.729-4.552 1.433a9 9 0 0 0-1.206.976 7 7 0 0 0-.417.44l-.017.02-.011.013-.01.012-.003.004-.002.002v.001h-.001a1.25 1.25 0 0 0 1.94 1.577q.124-.143.26-.274a6.4 6.4 0 0 1 .866-.7c.762-.514 1.834-1.004 3.153-1.004 2.3 0 4.003 1.71 4.003 3.625s-1.703 3.625-4.003 3.625zm-4.956-6.868.011-.014.017-.019"/>`
} as const;

export default function NumberCircle3Icon({ 
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

  const gradientId = 'numbercircle3icon_gradient';
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