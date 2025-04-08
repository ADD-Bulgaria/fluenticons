
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M4 9a5 5 0 0 1 5-5h14.004a5 5 0 0 1 5 5v5.003L28 13.999a10 10 0 0 0-2.5-1.37V10h-19v13A2.5 2.5 0 0 0 9 25.5h3.63A10 10 0 0 0 14 28l.003.004H9a5 5 0 0 1-5-5zm12.003 3.998v.999a10 10 0 0 0-2 1.998v-1.997h-3.995V22H12q.002 1.028.2 2H9.009a1 1 0 0 1-1-1V12.998a1 1 0 0 1 1-1h5.994a1 1 0 0 1 1 1m.674 15.572.046-.156a4 4 0 0 0-2.895-5.02 8.5 8.5 0 0 1 .07-2.746 4 4 0 0 0 2.88-4.987 8.5 8.5 0 0 1 2.344-1.435 4 4 0 0 0 5.794-.003l.112-.118a8 8 0 0 1 2.295 1.326l-.046.155a4 4 0 0 0 2.895 5.02 8.5 8.5 0 0 1-.07 2.747 4 4 0 0 0-2.88 4.987 8.5 8.5 0 0 1-2.344 1.435 4 4 0 0 0-5.794.003l-.112.117a8 8 0 0 1-2.295-1.325m4.17-4.571c1.066.616 2.447.22 3.084-.884.638-1.103.29-2.498-.777-3.113-1.067-.616-2.448-.22-3.085.883-.638 1.104-.29 2.498.777 3.114"/>`,
  'regular': `<path d="M9 4a5 5 0 0 0-5 5v14.004a5 5 0 0 0 5 5h5.003a10 10 0 0 1-1.169-2H9a3 3 0 0 1-3-3V10h20.004v2.834a10 10 0 0 1 2 1.169V9a5 5 0 0 0-5-5zm16.829 4H6.168A3 3 0 0 1 9 6h14c1.306 0 2.418.835 2.83 2m-9.826 5.997v-1a1 1 0 0 0-1-1H9.009a1 1 0 0 0-1 1V23a1 1 0 0 0 1 1h3.19A10 10 0 0 1 12 22h-1.992v-8.002h3.995v1.997a10 10 0 0 1 2-1.998m.673 14.573.046-.156a4 4 0 0 0-2.895-5.02 8.5 8.5 0 0 1 .072-2.746 4 4 0 0 0 2.879-4.987 8.5 8.5 0 0 1 2.343-1.435 4 4 0 0 0 5.795-.003l.111-.118a8 8 0 0 1 2.296 1.326l-.046.155a4 4 0 0 0 2.895 5.02c.123.9.103 1.828-.071 2.747a4 4 0 0 0-2.88 4.987 8.5 8.5 0 0 1-2.343 1.435 4 4 0 0 0-5.795.003l-.111.117a8 8 0 0 1-2.296-1.325m4.17-4.571c1.067.616 2.448.22 3.085-.884.637-1.103.29-2.497-.778-3.113-1.066-.616-2.448-.22-3.085.883-.637 1.104-.289 2.498.778 3.114"/>`
} as const;

export default function ContentSettingsIcon({ 
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
        viewBox="0 0 32 32"
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

  const gradientId = 'contentsettingsicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
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