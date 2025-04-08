
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M17.746 2a2.25 2.25 0 0 1 2.245 2.096l.005.154v7.248a6.499 6.499 0 0 0-7.19 10.496H6.25a2.25 2.25 0 0 1-2.244-2.096L4 19.745V4.25a2.25 2.25 0 0 1 2.095-2.245L6.25 2zM8.504 5.004a1.5 1.5 0 0 0 0 2.999h6.998a1.5 1.5 0 0 0 0-3zM23 17.5a5.499 5.499 0 1 1-10.997 0A5.499 5.499 0 0 1 23 17.5m-7.145-2.353a.5.5 0 1 0-.707.707l1.646 1.646-1.646 1.646a.5.5 0 0 0 .707.707l1.646-1.646 1.646 1.646a.5.5 0 0 0 .707-.707L18.208 17.5l1.646-1.646a.5.5 0 0 0-.707-.707l-1.646 1.646z"/>`,
  'regular': `<path d="M17.746 2a2.25 2.25 0 0 1 2.244 2.096l.006.154v7.248a6.5 6.5 0 0 0-1.5-.42V4.25a.75.75 0 0 0-.648-.743l-.102-.007H6.25a.75.75 0 0 0-.743.648L5.5 4.25v15.495c0 .38.282.693.648.743l.101.006h5.483c.286.551.65 1.056 1.075 1.5H6.249A2.25 2.25 0 0 1 4.005 19.9L4 19.745V4.25a2.25 2.25 0 0 1 2.095-2.245L6.25 2zM8.504 5.004a1.5 1.5 0 0 0 0 2.999h6.998a1.5 1.5 0 0 0 0-3zM23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-7.146-2.354a.5.5 0 0 0-.708.708l1.647 1.646-1.647 1.646a.5.5 0 0 0 .708.708l1.646-1.647 1.646 1.647a.5.5 0 0 0 .708-.708L18.207 17.5l1.647-1.646a.5.5 0 0 0-.708-.708L17.5 16.793z"/>`
} as const;

export default function DocumentHeaderDismissIcon({ 
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

  const gradientId = 'documentheaderdismissicon_gradient';
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