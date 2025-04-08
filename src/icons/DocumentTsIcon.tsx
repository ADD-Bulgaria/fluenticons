
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M10 1.25V4.5c0 .28.22.5.5.5h3.25zM10.5 6C9.67 6 9 5.33 9 4.5V1H5.5C4.67 1 4 1.67 4 2.5V9c.4 0 .77.16 1.06.44.4-.28.87-.44 1.36-.44h.15c.64 0 1.27.26 1.72.71S9 10.79 9 11.43c0 .34-.11.67-.32.94l.045.085.045.085c.23.5.29 1.06.16 1.59-.07.31-.21.61-.4.87h3.97c.83 0 1.5-.67 1.5-1.5V6zm-3.927 9h-.146A1.43 1.43 0 0 1 5 13.573a.533.533 0 0 1 .5-.537.47.47 0 0 1 .35.125.47.47 0 0 1 .15.339.45.45 0 0 0 .428.5h.146a.428.428 0 0 0 .192-.808L5.79 12.7a1.424 1.424 0 0 1-.744-1.601A1.43 1.43 0 0 1 6.428 10h.146a1.43 1.43 0 0 1 1.427 1.427.533.533 0 0 1-.5.537.47.47 0 0 1-.35-.125.47.47 0 0 1-.15-.339v-.073A.43.43 0 0 0 6.574 11h-.146a.428.428 0 0 0-.192.808l.976.489A1.426 1.426 0 0 1 6.573 15m-2.219-4.146a.504.504 0 0 0 0-.708A.5.5 0 0 0 4 10H1a.5.5 0 1 0 0 1h1v3.5a.5.5 0 1 0 1 0V11h1a.5.5 0 0 0 .354-.146"/>`,
  'regular': `<path d="M12.56 4.35 9.65 1.44A1.52 1.52 0 0 0 8.59 1H5a2.006 2.006 0 0 0-2 2v6h1V3a1 1 0 0 1 1-1h3v2.5A1.5 1.5 0 0 0 9.5 6H12v7a1 1 0 0 1-1 1H8.96c-.06.361-.204.704-.42 1H11a2.006 2.006 0 0 0 2-2V5.41a1.52 1.52 0 0 0-.44-1.06M9.5 5a.5.5 0 0 1-.5-.5V2.21L11.79 5zM6.573 15h-.146A1.43 1.43 0 0 1 5 13.573a.533.533 0 0 1 .5-.537.47.47 0 0 1 .5.464.45.45 0 0 0 .427.5h.146a.427.427 0 0 0 .192-.808l-.976-.492a1.427 1.427 0 0 1 .638-2.7h.146A1.43 1.43 0 0 1 8 11.427a.533.533 0 0 1-.5.537.47.47 0 0 1-.5-.464v-.073A.427.427 0 0 0 6.573 11h-.146a.427.427 0 0 0-.192.808l.976.489A1.427 1.427 0 0 1 6.573 15m-2.22-4.146A.5.5 0 0 0 4 10H1a.5.5 0 0 0 0 1h1v3.5a.5.5 0 0 0 1 0V11h1a.5.5 0 0 0 .354-.146"/>`
} as const;

export default function DocumentTsIcon({ 
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
        viewBox="0 0 16 16"
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

  const gradientId = 'documenttsicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
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