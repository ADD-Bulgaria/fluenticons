
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M38.06 8.94a1.5 1.5 0 0 0-2.12 2.12L38.878 14H38.5c-8.49 0-13.192 4.634-17.468 8.848l-.085.084C16.621 27.195 12.703 31 5.5 31a1.5 1.5 0 0 0 0 3c8.49 0 13.192-4.634 17.468-8.848l.085-.084C27.379 20.805 31.297 17 38.5 17h.379l-2.94 2.94a1.5 1.5 0 0 0 2.122 2.12l5.5-5.5a1.5 1.5 0 0 0 0-2.12zM5.5 14c6.932 0 11.339 3.09 15.05 6.517l-.831.817-.176.173q-.579.571-1.139 1.115C14.946 19.452 11.281 17 5.5 17a1.5 1.5 0 0 1 0-3m33 20c-6.933 0-11.339-3.09-15.05-6.517l.831-.817.176-.173q.579-.571 1.139-1.115C29.054 28.549 32.719 31 38.5 31h.379l-2.94-2.94a1.5 1.5 0 0 1 2.122-2.12l5.5 5.5a1.5 1.5 0 0 1 0 2.12l-5.5 5.5a1.5 1.5 0 0 1-2.122-2.12L38.88 34z"/>`,
  'regular': `<path d="M38.134 8.866a1.25 1.25 0 0 0-1.768 1.768L39.732 14h-.982c-8.388 0-13.151 4.696-17.546 9.03l-.082.08C16.665 27.505 12.56 31.5 5.25 31.5a1.25 1.25 0 1 0 0 2.5c8.388 0 13.151-4.696 17.546-9.03l.082-.08c4.457-4.395 8.562-8.39 15.872-8.39h.982l-3.366 3.366a1.25 1.25 0 0 0 1.768 1.768l5.5-5.5a1.25 1.25 0 0 0 0-1.768zM5.25 14c6.993 0 11.466 3.264 15.307 6.86q-.33.323-.65.64l-.189.186-.947.93C15.113 19.207 11.267 16.5 5.25 16.5a1.25 1.25 0 1 1 0-2.5m33.5 20c-6.992 0-11.466-3.264-15.307-6.86l.652-.641.187-.185.947-.93c3.659 3.409 7.504 6.116 13.521 6.116h.982l-3.366-3.366a1.25 1.25 0 0 1 1.768-1.768l5.5 5.5a1.25 1.25 0 0 1 0 1.768l-5.5 5.5a1.25 1.25 0 0 1-1.768-1.768L39.732 34z"/>`
} as const;

export default function ArrowShuffleIcon({ 
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

  const gradientId = 'arrowshuffleicon_gradient';
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