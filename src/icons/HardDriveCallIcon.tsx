
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M9.89 5a3.25 3.25 0 0 0-2.906 1.797l-3.817 7.632A5.2 5.2 0 0 1 5.25 14h19.708a3.47 3.47 0 0 1 3.203-.914l-3.145-6.29A3.25 3.25 0 0 0 22.11 5zM5.25 16h18.634l-.25.721a3.03 3.03 0 0 0 .683 3.094l.976 1.008a3.46 3.46 0 0 1-1.176 2.087l-1.324-.347a2.98 2.98 0 0 0-3.03.96l-.936 1.109c-.348.412-.584.88-.712 1.368H5.25A3.25 3.25 0 0 1 2 22.75v-3.5A3.25 3.25 0 0 1 5.25 16m19.8 1.213.479-1.378a1.97 1.97 0 0 1 2.693-1.152l.515.238c.84.387 1.544 1.081 1.68 2.003.672 4.515-2.881 10.76-7.07 12.427-.855.34-1.8.07-2.55-.475l-.46-.334a2.03 2.03 0 0 1-.364-2.942l.937-1.11c.368-.436.95-.62 1.503-.476l2.021.53q2.292-1.498 2.424-4.26l-1.463-1.512a1.53 1.53 0 0 1-.345-1.56"/>`,
  'regular': `<path d="M6.984 6.797A3.25 3.25 0 0 1 9.89 5h12.218a3.25 3.25 0 0 1 2.907 1.797l3.145 6.289a3.45 3.45 0 0 0-2.137.197l-2.797-5.592A1.25 1.25 0 0 0 22.11 7H9.891a1.25 1.25 0 0 0-1.118.691l-3.656 7.312Q5.183 15 5.25 15h19.001q-.077.165-.14.343l-.477 1.378a3 3 0 0 0-.083.279H5.25C4.56 17 4 17.56 4 18.25v4.5c0 .69.56 1.25 1.25 1.25h14.11l-.533.632c-.348.412-.584.88-.712 1.368H5.25A3.25 3.25 0 0 1 2 22.75v-4.983c0-.66.154-1.31.449-1.9zM25.05 17.213l.479-1.378a1.97 1.97 0 0 1 2.693-1.152l.515.238c.84.387 1.544 1.081 1.68 2.003.672 4.515-2.881 10.76-7.07 12.427-.855.34-1.8.07-2.55-.475l-.46-.334a2.03 2.03 0 0 1-.364-2.942l.937-1.11c.368-.436.95-.62 1.503-.476l2.021.53q2.292-1.498 2.424-4.26l-1.463-1.512a1.53 1.53 0 0 1-.345-1.56"/>`
} as const;

export default function HardDriveCallIcon({ 
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

  const gradientId = 'harddrivecallicon_gradient';
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