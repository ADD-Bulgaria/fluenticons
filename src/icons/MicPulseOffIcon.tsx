
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M14 15.768V24a8 8 0 0 0 8.35 7.993 12.96 12.96 0 0 1 2.616-5.26l1.422 1.423A10.95 10.95 0 0 0 24 35c0 6.075 4.925 11 11 11 2.587 0 4.966-.893 6.844-2.388l.022.022a1.25 1.25 0 0 0 1.768-1.768l-37.5-37.5a1.25 1.25 0 1 0-1.768 1.768zM37.022 38.79l-.586 1.561a1 1 0 0 1-1.88-.02L32.4 34.166zm-5.303-5.304-.742 1.91a1 1 0 0 1-.932.638H28a1 1 0 1 1 0-2h1.36l.813-2.093zm-1.382-8.452 7.06 7.06.167-.445a1 1 0 0 1 1.83-.096l1.23 2.457 1.393.024a1 1 0 0 1-.034 2l-.658-.011 3.64 3.64A11 11 0 0 0 46 35c0-6.075-4.925-11-11-11-1.667 0-3.247.37-4.663 1.034M14.503 9.201l14.345 14.344q.56-.301 1.152-.549V12a8 8 0 0 0-15.497-2.8M22 35.25h.002c.032 1.684.384 3.29.998 4.759v2.741a1.25 1.25 0 1 1-2.5 0v-5.08C13.473 36.923 8 30.976 8 23.75a1.25 1.25 0 1 1 2.5 0c0 6.351 5.149 11.5 11.5 11.5"/>`,
  'regular': `<path d="M14 15.768V24a8 8 0 0 0 8.35 7.993c.218-.924.536-1.81.94-2.645q-.623.151-1.29.152a5.5 5.5 0 0 1-5.5-5.5v-5.732l9.888 9.888A10.95 10.95 0 0 0 24 35c0 6.075 4.925 11 11 11 2.587 0 4.966-.893 6.844-2.388l.022.022a1.25 1.25 0 0 0 1.768-1.768l-37.5-37.5a1.25 1.25 0 1 0-1.768 1.768zM37.022 38.79l-.586 1.561a1 1 0 0 1-1.88-.02L32.4 34.166zm-5.303-5.304-.742 1.91a1 1 0 0 1-.932.638H28a1 1 0 1 1 0-2h1.36l.813-2.093zM27.5 12v10.197l1.348 1.348q.56-.301 1.152-.549V12a8 8 0 0 0-15.497-2.8l2.048 2.048A5.501 5.501 0 0 1 27.5 12m2.837 13.034 7.06 7.06.167-.445a1 1 0 0 1 1.83-.096l1.23 2.457 1.393.024a1 1 0 0 1-.034 2l-.658-.011 3.64 3.64A11 11 0 0 0 46 35c0-6.075-4.925-11-11-11-1.667 0-3.247.37-4.663 1.034M23 40.01a13 13 0 0 1-.998-4.759H22c-6.351 0-11.5-5.149-11.5-11.5a1.25 1.25 0 1 0-2.5 0c0 7.225 5.473 13.172 12.5 13.92v5.08a1.25 1.25 0 1 0 2.5 0z"/>`
} as const;

export default function MicPulseOffIcon({ 
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

  const gradientId = 'micpulseofficon_gradient';
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