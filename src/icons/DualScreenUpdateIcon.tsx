
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M20.245 4.004c.967 0 1.75.784 1.75 1.75V18.25a1.75 1.75 0 0 1-1.75 1.75h-7.247q-.13 0-.256-.019V4.023q.125-.018.256-.019zm-9.247-.002q.125 0 .245.017V19.98q-.12.017-.245.017H3.75A1.75 1.75 0 0 1 2 18.247V5.752c0-.967.784-1.75 1.75-1.75zM17.5 7l-.102.007-.098.02a.75.75 0 0 0-.544.609l-.008.112v6.698l-.964-.96-.085-.072a.755.755 0 0 0-.979.072.746.746 0 0 0-.072.975l.072.084 2.248 2.237.108.089.077.046.112.047.096.024.092.012h.094l.093-.012.062-.014.101-.036.061-.03.067-.042.063-.049.038-.035 2.248-2.237.072-.084a.75.75 0 0 0 .008-.88l-.08-.095-.085-.072a.76.76 0 0 0-.885-.007l-.094.08-.965.959.001-6.698-.007-.101a.75.75 0 0 0-.643-.64z"/>`,
  'regular': `<path d="m12.748 4.002-.001.002h7.498c.967 0 1.75.784 1.75 1.75V18.25a1.75 1.75 0 0 1-1.75 1.75h-8.997l-.001-.003H3.75A1.75 1.75 0 0 1 2 18.247V5.752c0-.967.784-1.75 1.75-1.75zm7.497 1.502h-7.497V18.5h7.497a.25.25 0 0 0 .25-.25V5.754a.25.25 0 0 0-.25-.25m-8.997-.002H3.75a.25.25 0 0 0-.25.25v12.495c0 .138.112.25.25.25h7.498zM16.5 7c.38 0 .695.281.745.647l.007.101v6.698l.964-.96a.755.755 0 0 1 .98-.072l.084.072a.746.746 0 0 1 .072.975l-.072.084-2.248 2.237-.038.035-.063.05-.067.04-.06.03-.102.037-.062.014-.093.012h-.094l-.092-.012-.096-.024-.112-.047-.077-.046-.108-.089-2.248-2.237a.746.746 0 0 1 0-1.059.755.755 0 0 1 .98-.072l.084.072.963.96V7.749a.75.75 0 0 1 .553-.722l.098-.02z"/>`
} as const;

export default function DualScreenUpdateIcon({ 
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

  const gradientId = 'dualscreenupdateicon_gradient';
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