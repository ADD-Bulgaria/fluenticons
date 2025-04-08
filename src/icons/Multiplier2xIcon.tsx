
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M13.34 20.242a1.5 1.5 0 0 0 1.65-1.312l.007-.042a2.7 2.7 0 0 1 .448-1.003c.355-.484 1.09-1.135 2.804-1.135 1.544 0 2.553.506 3.128 1.187.575.68.91 1.762.645 3.309-.15.873-.573 1.371-1.275 1.805-.596.369-1.259.621-2.08.934-.335.127-.694.264-1.087.422-1.24.502-2.683 1.193-3.79 2.487C12.645 28.23 12 30.036 12 32.5a1.5 1.5 0 0 0 1.5 1.5h10a1.5 1.5 0 0 0 0-3h-8.38c.18-1.013.54-1.678.948-2.155.62-.723 1.496-1.195 2.638-1.657.24-.097.507-.198.788-.305.909-.345 1.97-.748 2.831-1.28 1.263-.781 2.327-1.95 2.654-3.849.378-2.203-.036-4.246-1.31-5.754-1.274-1.506-3.212-2.25-5.42-2.25-2.66 0-4.3 1.1-5.225 2.364a5.7 5.7 0 0 0-.971 2.197 4 4 0 0 0-.04.24l-.002.022-.001.01v.004l-.001.002c0 .002-.046.432 0 .002a1.5 1.5 0 0 0 1.332 1.65m16.22 4.197a1.5 1.5 0 0 0-2.12 2.122L29.879 29l-2.44 2.44a1.5 1.5 0 0 0 2.122 2.12L32 31.122l2.439 2.44a1.5 1.5 0 0 0 2.12-2.122L34.122 29l2.44-2.44a1.5 1.5 0 0 0-2.121-2.12L32 26.878z"/>`,
  'regular': `<path d="M13.03 19.98a1.25 1.25 0 0 0 1.449-.998v-.003l.014-.056a3.3 3.3 0 0 1 .59-1.14c.473-.589 1.369-1.283 3.166-1.283 1.596 0 2.6.522 3.167 1.242.58.736.884 1.906.602 3.546-.165.964-.648 1.539-1.408 2.026-.62.398-1.316.681-2.147 1.019a53 53 0 0 0-1.065.442c-1.231.53-2.62 1.238-3.678 2.503-1.087 1.3-1.72 3.053-1.72 5.472A1.25 1.25 0 0 0 13.25 34h10a1.25 1.25 0 1 0 0-2.5h-8.672c.164-1.224.57-2.033 1.06-2.618.667-.798 1.6-1.316 2.75-1.811.255-.11.532-.223.821-.34.903-.366 1.921-.78 2.753-1.313 1.204-.774 2.21-1.898 2.52-3.706.363-2.11.042-4.065-1.102-5.517C22.224 14.728 20.405 14 18.25 14c-2.578 0-4.182 1.056-5.115 2.217a5.8 5.8 0 0 0-.885 1.535 5 5 0 0 0-.224.745l-.004.02-.001.007v.003l-.001.002c0 .002-.044.125 0 .002a1.25 1.25 0 0 0 1.01 1.45m1.45-1.001v-.007zm-.002.003.001-.003zm14.656 5.384a1.25 1.25 0 0 0-1.768 1.768L30.232 29l-2.866 2.866a1.25 1.25 0 0 0 1.768 1.768L32 30.768l2.866 2.866a1.25 1.25 0 0 0 1.768-1.768L33.768 29l2.866-2.866a1.25 1.25 0 0 0-1.768-1.768L32 27.232z"/>`
} as const;

export default function Multiplier2xIcon({ 
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

  const gradientId = 'multiplier2xicon_gradient';
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