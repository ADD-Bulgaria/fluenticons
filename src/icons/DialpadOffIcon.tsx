
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l4.497 4.497a1.5 1.5 0 1 0 1.76 1.76l3.239 3.24a1.5 1.5 0 1 0 1.757 1.757l7.246 7.246a.75.75 0 0 0 1.061-1.06zm15.216 12.03c0 .303-.09.585-.244.82l-2.076-2.076a1.5 1.5 0 0 1 2.32 1.256m-4.996-5c0 .304-.09.586-.245.823l-2.078-2.078A1.5 1.5 0 0 1 13.5 9.25m-4.996-5c0 .305-.09.588-.247.825L6.179 2.997A1.5 1.5 0 0 1 8.504 4.25M12 17.75a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m-4.996-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m9.992-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 2.75a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m4.996 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"/>`,
  'regular': `<path d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l4.5 4.502a1.25 1.25 0 1 0 1.5 1.5l3.5 3.5a1.25 1.25 0 1 0 1.498 1.498l7.5 7.5a.75.75 0 0 0 1.061-1.06zM18.246 14c0 .298-.104.571-.278.786l-1.758-1.758a1.25 1.25 0 0 1 2.036.972M13.25 9c0 .299-.105.573-.28.788L11.212 8.03A1.25 1.25 0 0 1 13.25 9M8.254 4c0 .3-.106.575-.282.79L6.214 3.032A1.25 1.25 0 0 1 8.254 4M12 17.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5m-4.996-5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5m9.992-5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 2.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5m4.996 0a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5"/>`
} as const;

export default function DialpadOffIcon({ 
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

  const gradientId = 'dialpadofficon_gradient';
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