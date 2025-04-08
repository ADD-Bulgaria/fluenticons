
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M24 13c0 6.075-4.925 11-11 11S2 19.075 2 13 6.925 2 13 2s11 4.925 11 11m-12.293 4.707 8-8a1 1 0 0 0-1.414-1.414L11 15.586l-3.293-3.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0M13 26c7.18 0 13-5.82 13-13 0-2.577-.75-4.98-2.044-7h4.794A4.25 4.25 0 0 1 33 10.25V12h3.31c1.673 0 3.19.98 3.876 2.506l3.44 7.644A4.25 4.25 0 0 1 44 23.894V34.75A4.25 4.25 0 0 1 39.75 39h-3.833a6.002 6.002 0 0 1-11.834 0h-4.166a6.002 6.002 0 0 1-11.835-.003A4.25 4.25 0 0 1 4 34.75V22.38A12.96 12.96 0 0 0 13 26m13.645 13a3.502 3.502 0 0 0 6.855-1 3.5 3.5 0 1 0-6.855 1M14 41.5a3.5 3.5 0 0 0 3.5-3.5 3.5 3.5 0 1 0-3.5 3.5M41.5 31h-3.25a1.25 1.25 0 1 0 0 2.5h3.25zM33 22h7.817l-2.91-6.468A1.75 1.75 0 0 0 36.31 14.5H33z"/>`,
  'regular': `<path d="M24 13c0 6.075-4.925 11-11 11S2 19.075 2 13 6.925 2 13 2s11 4.925 11 11m-12.293 4.707 8-8a1 1 0 0 0-1.414-1.414L11 15.586l-3.293-3.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0M28.75 8.5H25.2A13 13 0 0 0 23.956 6h4.794A4.25 4.25 0 0 1 33 10.25V12h3.31c1.673 0 3.19.98 3.876 2.506l3.44 7.644A4.25 4.25 0 0 1 44 23.894V34.75A4.25 4.25 0 0 1 39.75 39h-3.833a6.002 6.002 0 0 1-11.834 0h-4.166a6.002 6.002 0 0 1-11.835-.003A4.25 4.25 0 0 1 4 34.75V22.38a13 13 0 0 0 2.5 1.88v10.49c0 .946.75 1.717 1.69 1.749a6.002 6.002 0 0 1 11.621.001h4.378a6 6 0 0 1 6.311-4.48V10.25a1.75 1.75 0 0 0-1.75-1.75m7.061 28h3.939a1.75 1.75 0 0 0 1.75-1.75V33.5h-3.25a1.25 1.25 0 1 1 0-2.5h3.25v-6.5H33v8.303a6 6 0 0 1 2.811 3.697M33 36.196a3.502 3.502 0 0 0-6.163.304 3.5 3.5 0 0 0-.192 2.5A3.502 3.502 0 1 0 33 36.196M14 41.5a3.502 3.502 0 0 0 3.163-5 3.5 3.5 0 1 0-3.163 5m19-27V22h7.817l-2.91-6.468A1.75 1.75 0 0 0 36.31 14.5z"/>`
} as const;

export default function VehicleTruckCheckmarkIcon({ 
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
        viewBox="0 0 48 48"
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

  const gradientId = 'vehicletruckcheckmarkicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
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