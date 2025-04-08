
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M10.25 2a.75.75 0 0 1 .743.648L11 2.75v4.794A6.25 6.25 0 0 1 16.457 13h4.794a.75.75 0 0 1 .102 1.493l-.102.007h-4.794A6.25 6.25 0 0 1 11 19.956v1.295a.75.75 0 0 1-1.494.102L9.5 21.25v-1.295a6.25 6.25 0 0 1-5.455-5.454H2.75a.75.75 0 0 1-.102-1.494L2.75 13h1.294A6.25 6.25 0 0 1 9.5 7.544V2.75a.75.75 0 0 1 .75-.75m0 5.5q-.381 0-.75.044V13H4.044a6.3 6.3 0 0 0 0 1.5H9.5v5.455a6.3 6.3 0 0 0 1.5 0V14.5h5.456a6.3 6.3 0 0 0 0-1.5H11V7.544a6 6 0 0 0-.75-.044"/>`,
  'regular': `<path d="M10.25 2a.75.75 0 0 1 .743.648L11 2.75v4.794A6.25 6.25 0 0 1 16.457 13h4.794a.75.75 0 0 1 .102 1.493l-.102.007h-4.794A6.25 6.25 0 0 1 11 19.956v1.295a.75.75 0 0 1-1.494.102L9.5 21.25v-1.295a6.25 6.25 0 0 1-5.455-5.454H2.75a.75.75 0 0 1-.102-1.494L2.75 13h1.294A6.25 6.25 0 0 1 9.5 7.544V2.75a.75.75 0 0 1 .75-.75M9.5 14.5H5.559A4.75 4.75 0 0 0 9.5 18.442zm5.442 0H11v3.941a4.75 4.75 0 0 0 3.941-3.94M9.5 9.059A4.75 4.75 0 0 0 5.56 13H9.5zm1.5 0V13h3.942a4.755 4.755 0 0 0-3.726-3.902z"/>`
} as const;

export default function PointScanIcon({ 
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

  const gradientId = 'pointscanicon_gradient';
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