
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M10 3c2.817 0 4.415 1.923 4.647 4.246h.07c1.535 0 2.824 1.083 3.183 2.547a4 4 0 0 0-.531-.273c-.785-.336-1.8-.52-2.869-.52s-2.084.184-2.869.52c-.39.168-.77.393-1.068.694-.3.305-.563.74-.563 1.286V14H5.282C3.469 14 2 12.488 2 10.623s1.47-3.377 3.282-3.377h.071C5.587 4.908 7.183 3 10 3m7.471 11.283c-.81.462-1.863.717-2.971.717s-2.16-.255-2.971-.717A4 4 0 0 1 11 13.92V17c0 1.105 1.567 2 3.5 2s3.5-.895 3.5-2v-3.08a4 4 0 0 1-.529.363M14.5 10c-1.933 0-3.5.895-3.5 2s1.567 2 3.5 2 3.5-.895 3.5-2-1.567-2-3.5-2"/>`,
  'regular': `<path d="M10 3c2.817 0 4.415 1.923 4.647 4.246h.07c1.535 0 2.824 1.083 3.183 2.547a4 4 0 0 0-.531-.273 6 6 0 0 0-.785-.266 2.26 2.26 0 0 0-1.866-1.008h-.071a1 1 0 0 1-.995-.9C13.45 5.325 12.109 4 10 4 7.886 4 6.551 5.316 6.348 7.345a1 1 0 0 1-.995.901h-.07C4.027 8.246 3 9.304 3 10.623 3 11.943 4.028 13 5.282 13H10v1H5.282C3.469 14 2 12.488 2 10.623 2 8.82 3.373 7.347 5.102 7.251l.251-.005C5.587 4.908 7.183 3 10 3m7.471 11.283c-.81.462-1.863.717-2.971.717s-2.16-.255-2.971-.717A4 4 0 0 1 11 13.92V17c0 1.105 1.567 2 3.5 2s3.5-.895 3.5-2v-3.08a4 4 0 0 1-.529.363M14.5 10c-1.933 0-3.5.895-3.5 2s1.567 2 3.5 2 3.5-.895 3.5-2-1.567-2-3.5-2"/>`
} as const;

export default function CloudDatabaseIcon({ 
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
        viewBox="0 0 20 20"
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

  const gradientId = 'clouddatabaseicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
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