
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M21.246 4.504a.75.75 0 0 0-.743.648l-.007.102v13.499a.75.75 0 0 0 1.493.101l.007-.101v-13.5a.75.75 0 0 0-.75-.75M8.786 6.387l-.083-.094a1 1 0 0 0-1.32-.083l-.094.083-4.997 4.998a1 1 0 0 0-.083 1.32l.083.093 4.997 5.004a1 1 0 0 0 1.498-1.32l-.083-.094L5.415 13h12.581a1 1 0 0 0 .993-.883l.007-.117a1 1 0 0 0-.883-.993L17.996 11H5.412l3.291-3.293a1 1 0 0 0 .083-1.32l-.083-.094z"/>`,
  'regular': `<path d="M21.244 4.5a.75.75 0 0 0-.743.648l-.007.102.002 13.004a.75.75 0 0 0 1.493.102l.007-.102-.002-13.004a.75.75 0 0 0-.75-.75M8.349 6.304l-.073-.084a.75.75 0 0 0-.976-.073l-.084.073-4.997 4.997a.75.75 0 0 0-.073.976l.073.085 4.996 5.003a.75.75 0 0 0 1.134-.976l-.072-.084-3.71-3.717h13.676a.75.75 0 0 0 .743-.647l.007-.102a.75.75 0 0 0-.648-.743l-.102-.007-13.69-.001L8.276 7.28a.75.75 0 0 0 .073-.976l-.073-.084z"/>`
} as const;

export default function ArrowExportRtlIcon({ 
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

  const gradientId = 'arrowexportrtlicon_gradient';
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