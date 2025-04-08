
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M19.49 5.57a5.97 5.97 0 0 1 1.26 3.68c0 .84-.173 1.64-.485 2.366A6.5 6.5 0 0 0 17.5 11a6.47 6.47 0 0 0-3.785 1.215l-3.86-3.86c-.522-.522-.738-1.303-.388-1.952A6 6 0 0 1 18.43 4.51l2.29-2.29a.75.75 0 1 1 1.061 1.06zM11 17.5a6.47 6.47 0 0 1 1.215-3.785l-3.86-3.86c-.522-.522-1.303-.738-1.952-.388A6 6 0 0 0 4.51 18.43l-2.29 2.29a.75.75 0 1 0 1.06 1.061l2.29-2.29a5.97 5.97 0 0 0 3.68 1.26c.84 0 1.64-.173 2.366-.485A6.5 6.5 0 0 1 11 17.5m1.837-1.028a2 2 0 0 0 1.441-2.497l-.198-.686a5.3 5.3 0 0 1 1.483-.912l.499.524a2 2 0 0 0 2.899 0l.493-.518a5.3 5.3 0 0 1 1.484.922l-.186.63a2 2 0 0 0 1.45 2.511l.539.13a5.7 5.7 0 0 1 .006 1.808l-.584.144a2 2 0 0 0-1.44 2.496l.197.686a5.3 5.3 0 0 1-1.483.913l-.498-.525a2 2 0 0 0-2.9 0l-.493.518a5.3 5.3 0 0 1-1.484-.921l.187-.631a2 2 0 0 0-1.45-2.51l-.54-.13a5.7 5.7 0 0 1-.006-1.808zM16.05 17.5c0 .828.65 1.5 1.45 1.5s1.45-.672 1.45-1.5c0-.829-.65-1.5-1.45-1.5s-1.45.671-1.45 1.5"/>`,
  'regular': `<path d="M19.49 5.57a5.97 5.97 0 0 1 1.26 3.68c0 .84-.173 1.64-.485 2.366a6.5 6.5 0 0 0-1.429-.479 4.5 4.5 0 0 0-7.67-4.61c-.265.349-.185.833.126 1.143l3.793 3.794a6.5 6.5 0 0 0-1.37.751l-3.86-3.86c-.522-.522-.738-1.303-.388-1.952A6 6 0 0 1 18.43 4.51l2.29-2.29a.75.75 0 1 1 1.061 1.06zM8.354 9.855l3.861 3.861a6.5 6.5 0 0 0-.751 1.37L7.67 11.292c-.31-.31-.794-.391-1.143-.125a4.5 4.5 0 0 0 4.61 7.67q.16.752.479 1.428a6 6 0 0 1-2.366.485 5.97 5.97 0 0 1-3.68-1.26l-2.29 2.29a.75.75 0 0 1-1.06-1.06l2.29-2.29a6 6 0 0 1 1.892-8.962c.65-.351 1.43-.135 1.952.386m4.483 6.618a2 2 0 0 0 1.441-2.497l-.198-.686a5.3 5.3 0 0 1 1.483-.912l.499.524a2 2 0 0 0 2.899 0l.493-.518a5.3 5.3 0 0 1 1.484.922l-.186.63a2 2 0 0 0 1.45 2.511l.539.13a5.7 5.7 0 0 1 .006 1.808l-.584.144a2 2 0 0 0-1.44 2.496l.197.686a5.3 5.3 0 0 1-1.483.913l-.498-.525a2 2 0 0 0-2.9 0l-.493.518a5.3 5.3 0 0 1-1.484-.921l.187-.631a2 2 0 0 0-1.45-2.51l-.54-.13a5.7 5.7 0 0 1-.006-1.808zM16.05 17.5c0 .828.65 1.5 1.45 1.5s1.45-.672 1.45-1.5c0-.829-.65-1.5-1.45-1.5s-1.45.671-1.45 1.5"/>`
} as const;

export default function PlugConnectedSettingsIcon({ 
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

  const gradientId = 'plugconnectedsettingsicon_gradient';
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