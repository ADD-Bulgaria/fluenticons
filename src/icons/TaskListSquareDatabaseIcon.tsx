
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M3 6.25A3.25 3.25 0 0 1 6.25 3h11.5A3.25 3.25 0 0 1 21 6.25v5.192a9 9 0 0 0-1.345-.315A11 11 0 0 0 18 11c-1.502 0-2.912.302-3.983.838-.957.479-1.91 1.296-2.009 2.462L12 14.293V20.5q.001.26.055.5H6.25A3.25 3.25 0 0 1 3 17.75zm9.5 3c0 .414.336.75.75.75h3.5a.75.75 0 0 0 0-1.5h-3.5a.75.75 0 0 0-.75.75m-1.72-.47a.75.75 0 1 0-1.06-1.06L8.25 9.19l-.47-.47a.75.75 0 0 0-1.06 1.06l1 1a.75.75 0 0 0 1.06 0zm0 4.44a.75.75 0 0 0-1.06 0l-1.47 1.47-.47-.47a.75.75 0 0 0-1.06 1.06l1 1a.75.75 0 0 0 1.06 0l2-2a.75.75 0 0 0 0-1.06M21 12.5a7.7 7.7 0 0 0-1.5-.386A10 10 0 0 0 18 12c-2.761 0-5 1.12-5 2.5s2.239 2.5 5 2.5c.523 0 1.026-.04 1.5-.114A7.7 7.7 0 0 0 21 16.5c1.214-.456 2-1.182 2-2s-.786-1.544-2-2m0 5.058c-.466.15-.97.264-1.5.338A11 11 0 0 1 18 18c-1.502 0-2.912-.302-3.983-.838a5 5 0 0 1-1.017-.67V20.5c0 .356.148.694.416 1 .772.883 2.534 1.5 4.584 1.5 2.761 0 5-1.12 5-2.5v-4.008a5 5 0 0 1-1.017.67 7 7 0 0 1-.983.396"/>`,
  'regular': `<path d="M12.5 9.25a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75m-1.72-.47a.75.75 0 1 0-1.06-1.06L8.25 9.19l-.47-.47a.75.75 0 0 0-1.06 1.06l1 1a.75.75 0 0 0 1.06 0zm0 4.44a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 0 1-1.06 0l-1-1a.75.75 0 1 1 1.06-1.06l.47.47 1.47-1.47a.75.75 0 0 1 1.06 0M6.25 3A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h5.805a2.3 2.3 0 0 1-.055-.5v-1H6.25a1.75 1.75 0 0 1-1.75-1.75V6.25c0-.966.784-1.75 1.75-1.75h11.5c.966 0 1.75.784 1.75 1.75v4.853q.078.011.155.024c.472.074.924.18 1.345.314V6.25A3.25 3.25 0 0 0 17.75 3zM21 12.5a7.7 7.7 0 0 0-1.5-.386A10 10 0 0 0 18 12c-2.761 0-5 1.12-5 2.5s2.239 2.5 5 2.5c.523 0 1.026-.04 1.5-.114A7.7 7.7 0 0 0 21 16.5c1.214-.456 2-1.182 2-2s-.786-1.544-2-2m0 5.058c-.466.15-.97.264-1.5.338A11 11 0 0 1 18 18c-1.502 0-2.912-.302-3.983-.838a5 5 0 0 1-1.017-.67V20.5c0 .356.148.694.416 1 .772.883 2.534 1.5 4.584 1.5 2.761 0 5-1.12 5-2.5v-4.008a5 5 0 0 1-1.017.67 7 7 0 0 1-.983.396"/>`
} as const;

export default function TaskListSquareDatabaseIcon({ 
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

  const gradientId = 'tasklistsquaredatabaseicon_gradient';
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