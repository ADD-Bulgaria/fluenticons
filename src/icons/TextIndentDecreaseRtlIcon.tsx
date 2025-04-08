
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M5.5 7a1 1 0 0 0 1 1H15l.117-.007A1 1 0 0 0 15 6H6.5l-.117.007A1 1 0 0 0 5.5 7m-2 6.001L15 13l.117-.007A1 1 0 0 0 15 11l-11.5.001-.117.007A1 1 0 0 0 3.5 13m2 4a1 1 0 0 0 1 1H15l.117-.007A1 1 0 0 0 15 16H6.5l-.117.007A1 1 0 0 0 5.5 17m14.113-2.21a1 1 0 0 1-1.32-1.497L19.586 12l-1.293-1.293-.083-.094a1 1 0 0 1 1.497-1.32l2 2 .083.094a1 1 0 0 1-.083 1.32l-2 2z"/>`,
  'regular': `<path d="M5.5 16.75a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75m-3-5a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5h-12a.75.75 0 0 1-.75-.75m3-5A.75.75 0 0 1 6.25 6h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75m13.696 2.397a.75.75 0 0 0-.976 1.133l1.47 1.47-1.47 1.47-.073.084a.75.75 0 0 0 1.133.976l2-2 .073-.084a.75.75 0 0 0-.073-.976l-2-2z"/>`
} as const;

export default function TextIndentDecreaseRtlIcon({ 
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

  const gradientId = 'textindentdecreasertlicon_gradient';
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