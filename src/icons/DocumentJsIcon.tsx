
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M10.5 5h3.25L10 1.25V4.5a.5.5 0 0 0 .5.5m0 1A1.5 1.5 0 0 1 9 4.5V1H5.5A1.5 1.5 0 0 0 4 2.5v6.591c.208.074.4.188.561.348q.112.113.196.244l.047-.047q.056-.058.118-.109A2.44 2.44 0 0 1 6.421 9h.152c.639 0 1.265.26 1.716.712S9 10.788 9 11.427a1.5 1.5 0 0 1-.32.943q.05.085.091.175c.23.492.289 1.056.164 1.585-.074.317-.219.61-.41.87H12.5a1.5 1.5 0 0 0 1.5-1.5V6zm-3.927 9h-.146A1.43 1.43 0 0 1 5 13.573a.533.533 0 0 1 .5-.537.47.47 0 0 1 .35.125.47.47 0 0 1 .15.339.45.45 0 0 0 .428.5h.146a.428.428 0 0 0 .192-.808L5.79 12.7a1.424 1.424 0 0 1-.744-1.601A1.43 1.43 0 0 1 6.428 10h.146a1.43 1.43 0 0 1 1.427 1.427.533.533 0 0 1-.5.537.47.47 0 0 1-.35-.125.47.47 0 0 1-.15-.339v-.073A.43.43 0 0 0 6.574 11h-.146a.428.428 0 0 0-.192.808l.976.489A1.426 1.426 0 0 1 6.573 15m-5.134-.439a1.503 1.503 0 0 0 2.122 0c.281-.282.439-.663.439-1.061v-3a.5.5 0 1 0-1 0v3a.5.5 0 1 1-1 0V13a.5.5 0 1 0-1 0v.5c0 .398.158.78.439 1.061"/>`,
  'regular': `<path d="m9.65 1.44 2.91 2.91c.28.282.438.663.44 1.06V13a2.006 2.006 0 0 1-2 2H8.54c.216-.296.36-.639.42-1H11a1 1 0 0 0 1-1V6H9.5A1.5 1.5 0 0 1 8 4.5V2H5a1 1 0 0 0-1 1v6.09a1.43 1.43 0 0 0-1 0V3a2.006 2.006 0 0 1 2-2h3.59c.397.002.778.16 1.06.44m-.504 3.414A.5.5 0 0 0 9.5 5h2.29L9 2.21V4.5a.5.5 0 0 0 .146.354M2.5 15A1.5 1.5 0 0 1 1 13.5V13a.5.5 0 0 1 1 0v.5a.5.5 0 0 0 1 0v-3a.5.5 0 0 1 1 0v3A1.5 1.5 0 0 1 2.5 15m4.073 0h-.146A1.43 1.43 0 0 1 5 13.573a.533.533 0 0 1 .5-.537.47.47 0 0 1 .5.464.45.45 0 0 0 .427.5h.146a.427.427 0 0 0 .192-.808l-.976-.492a1.427 1.427 0 0 1 .638-2.7h.146A1.43 1.43 0 0 1 8 11.427a.533.533 0 0 1-.5.537.47.47 0 0 1-.5-.464v-.073A.427.427 0 0 0 6.573 11h-.146a.427.427 0 0 0-.192.808l.976.489A1.427 1.427 0 0 1 6.573 15"/>`
} as const;

export default function DocumentJsIcon({ 
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

  const gradientId = 'documentjsicon_gradient';
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