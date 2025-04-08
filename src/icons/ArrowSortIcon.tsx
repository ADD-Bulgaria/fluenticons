
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="m8.352 4.011.058-.007L8.5 4l.075.003.126.017.111.03.111.044.098.052.104.074.082.073 5.5 5.5a1 1 0 0 1-1.32 1.497l-.094-.083L9.5 7.415V23a1 1 0 0 1-1.993.117L7.5 23V7.415l-3.793 3.792a1 1 0 0 1-1.32.083l-.094-.083a1 1 0 0 1-.083-1.32l.083-.094 5.5-5.5a1 1 0 0 1 .112-.097l.11-.071.114-.054.105-.035zM19.5 4a1 1 0 0 1 .993.883L20.5 5v15.585l3.793-3.792.094-.083a1 1 0 0 1 1.403 1.403l-.083.094-5.5 5.5-.044.041-.068.056-.11.071-.114.054-.105.035-.117.025-.09.01h-.118l-.06-.006-.114-.02-.109-.033-.081-.034-.098-.052-.096-.067a1 1 0 0 1-.09-.08l-5.5-5.5-.083-.094a1 1 0 0 1 0-1.226l.083-.094.094-.083a1 1 0 0 1 1.226 0l.094.083 3.793 3.792V5l.007-.117A1 1 0 0 1 19.5 4"/>`,
  'regular': `<path d="M2.22 9.967 7.97 4.22l.085-.074.058-.038.072-.039.105-.04.105-.022.052-.005L8.5 4l.057.002.092.013.107.03.085.037.054.03.063.044.072.064 5.75 5.747a.75.75 0 0 1-.976 1.133l-.084-.072L9.25 6.56v16.69a.75.75 0 0 1-1.493.102l-.007-.102V6.56l-4.47 4.468a.75.75 0 0 1-.976.072l-.084-.072a.75.75 0 0 1-.073-.977zM19.5 4a.75.75 0 0 1 .743.648l.007.102v16.687l4.47-4.467.084-.073a.75.75 0 0 1 1.049 1.05l-.073.083-5.728 5.727a.75.75 0 0 1-1.031.07l-.073-.07-5.728-5.727-.073-.084a.75.75 0 0 1-.007-.882l.08-.094.084-.073a.75.75 0 0 1 .882-.007l.094.08 4.47 4.469V4.75l.007-.102A.75.75 0 0 1 19.5 4"/>`
} as const;

export default function ArrowSortIcon({ 
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

  const gradientId = 'arrowsorticon_gradient';
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