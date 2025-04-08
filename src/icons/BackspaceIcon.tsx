
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M18.75 4a3.25 3.25 0 0 1 3.245 3.066L22 7.25v9.5a3.25 3.25 0 0 1-3.066 3.245L18.75 20h-8.501a3.25 3.25 0 0 1-2.085-.756l-.155-.139-4.995-4.75a3.25 3.25 0 0 1-.116-4.594l.116-.116 4.995-4.75a3.25 3.25 0 0 1 2.032-.888L10.25 4zm-7.304 4.397a.75.75 0 0 0-1.049 1.05l.073.083L12.94 12l-2.47 2.47-.073.084a.75.75 0 0 0 1.05 1.049l.083-.073L14 13.061l2.47 2.47.084.072a.75.75 0 0 0 1.049-1.05l-.073-.083L15.061 12l2.47-2.47.072-.084a.75.75 0 0 0-1.05-1.049l-.083.073L14 10.939l-2.47-2.47z"/>`,
  'regular': `<path d="M18.75 4a3.25 3.25 0 0 1 3.245 3.066L22 7.25v9.5a3.25 3.25 0 0 1-3.066 3.245L18.75 20h-8.501a3.25 3.25 0 0 1-2.085-.756l-.155-.139-4.995-4.75a3.25 3.25 0 0 1-.116-4.594l.116-.116 4.995-4.75a3.25 3.25 0 0 1 2.032-.888L10.25 4zm0 1.5h-8.501a1.75 1.75 0 0 0-1.08.372l-.126.11-4.996 4.75-.062.062a1.75 1.75 0 0 0-.054 2.352l.116.122 4.996 4.75c.285.27.65.437 1.039.474l.167.008h8.501a1.75 1.75 0 0 0 1.744-1.607l.006-.143v-9.5a1.75 1.75 0 0 0-1.607-1.744zm-7.304 2.897.084.073L14 10.939l2.47-2.47a.75.75 0 0 1 1.133.977l-.073.084L15.061 12l2.47 2.47a.75.75 0 0 1-.977 1.133l-.084-.073L14 13.061l-2.47 2.47a.75.75 0 0 1-1.133-.977l.073-.084L12.94 12l-2.47-2.47a.75.75 0 0 1 .976-1.133"/>`
} as const;

export default function BackspaceIcon({ 
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

  const gradientId = 'backspaceicon_gradient';
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