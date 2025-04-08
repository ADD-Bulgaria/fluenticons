
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M23.83 18A3 3 0 0 0 21 16H7a3 3 0 0 0-3 3v.715C4 23.433 8.21 26 14 26c3.062 0 5.682-.757 7.471-2H14v-1h8.634c.427-.461.763-.964.995-1.5H14v-1h9.93a4.5 4.5 0 0 0 .07-.785V19H14v-1zM20 8q0-.381-.046-.75H14v-1h5.74a6 6 0 0 0-.696-1.5H14v-1h4.235a6 6 0 1 0 0 8.5H14v-1h5.044c.298-.46.534-.964.697-1.5H14v-1h5.954Q20 8.381 20 8"/>`,
  'regular': `<path d="M21 16c1.306 0 2.418.835 2.83 2H14v-.5H7a1.5 1.5 0 0 0-1.493 1.355L5.5 19v.715c0 2.674 3.389 4.785 8.5 4.785V24h7.471c-1.79 1.243-4.41 2-7.471 2-5.79 0-10-2.567-10-6.285V19a3 3 0 0 1 3-3zm3 3v.715q0 .4-.07.785H14V19zm-.371 2.5H14V23h8.634c.427-.461.763-.964.995-1.5M19.954 7.25a6 6 0 0 1 0 1.5H14v-1.5zm-.213-1a6 6 0 0 0-.697-1.5H14v1.5zM14 2c1.653 0 3.15.669 4.235 1.75H14V3.5a4.5 4.5 0 1 0 0 9v-.25h4.235A6 6 0 1 1 14 2m5.044 9.25H14v-1.5h5.74a6 6 0 0 1-.696 1.5"/>`
} as const;

export default function InprivateAccountIcon({ 
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
        viewBox="0 0 28 28"
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

  const gradientId = 'inprivateaccounticon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 28"
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