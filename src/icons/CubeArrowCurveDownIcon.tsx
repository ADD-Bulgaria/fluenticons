
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M1.004 5.495A4.5 4.5 0 0 1 5.504 1c2.485 0 4.5 2.013 4.5 4.495a4.5 4.5 0 0 1-4.5 4.495 4.5 4.5 0 0 1-4.5-4.495m6.396.896-.896.895V5.745a2.75 2.75 0 0 0-2.75-2.747h-.25a.5.5 0 1 0 0 .999h.25c.966 0 1.75.782 1.75 1.748v1.541l-.897-.895a.5.5 0 0 0-.707.706l1.752 1.75a.5.5 0 0 0 .705-.002l1.75-1.748A.5.5 0 1 0 7.4 6.39m3.601-.896c0 .787-.166 1.535-.464 2.211l3.76-1.669a.5.5 0 0 1 .407.913L10.5 8.816v4.67a.5.5 0 0 1-1 0v-4.22a5.5 5.5 0 0 1-4 1.723c-1.33 0-2.55-.471-3.5-1.256v4.075c0 .613.373 1.164.943 1.392L8.7 17.5a3.5 3.5 0 0 0 2.6 0l5.757-2.3c.57-.228.943-.779.943-1.392V6.171c0-.613-.373-1.164-.943-1.391L11.3 2.48a3.5 3.5 0 0 0-1.376-.25A5.47 5.47 0 0 1 11 5.495"/>`,
  'regular': `<path d="M1.004 5.495A4.497 4.497 0 0 1 5.504 1c2.485 0 4.5 2.012 4.5 4.495a4.497 4.497 0 0 1-4.5 4.495 4.497 4.497 0 0 1-4.5-4.495M7.4 6.39l-.896.896V5.745a2.75 2.75 0 0 0-2.75-2.747h-.25a.5.5 0 1 0 0 .999h.25c.966 0 1.75.782 1.75 1.748v1.54l-.897-.895a.5.5 0 0 0-.707.707l1.752 1.75a.5.5 0 0 0 .705-.002l1.75-1.748A.499.499 0 1 0 7.4 6.39M2.001 9.733q.462.381 1 .657v3.419a.5.5 0 0 0 .314.463l5.758 2.3c.596.239 1.26.239 1.857 0l5.757-2.3A.5.5 0 0 0 17 13.81V6.17a.5.5 0 0 0-.314-.464l-5.757-2.3a2.5 2.5 0 0 0-.391-.12 5.5 5.5 0 0 0-.614-1.056c.467-.01.935.073 1.376.249l5.757 2.3c.57.228.943.779.943 1.391v7.638c0 .612-.373 1.163-.943 1.39L11.301 17.5a3.5 3.5 0 0 1-2.6 0l-5.757-2.3A1.5 1.5 0 0 1 2 13.809zm8.536-2.026a5.5 5.5 0 0 1-1.036 1.559v4.22a.5.5 0 0 0 1 0v-4.67l4.203-1.866a.5.5 0 1 0-.406-.913z"/>`
} as const;

export default function CubeArrowCurveDownIcon({ 
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

  const gradientId = 'cubearrowcurvedownicon_gradient';
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