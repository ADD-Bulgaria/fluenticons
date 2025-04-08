
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M32.206 6.026a6.907 6.907 0 1 1 9.768 9.767l-6.45 6.452A13 13 0 0 0 33 22c-7.18 0-13 5.82-13 13q.002 1.298.245 2.525l-2.439 2.439a6 6 0 0 1-2.76 1.573L5.56 43.96a1.25 1.25 0 0 1-1.521-1.52l2.427-9.486a6 6 0 0 1 1.572-2.758zM44 35c0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11 11 4.925 11 11m-5.293-4.293a1 1 0 0 0-1.414-1.414L33 33.586l-4.293-4.293a1 1 0 0 0-1.414 1.414L31.586 35l-4.293 4.293a1 1 0 0 0 1.414 1.414L33 36.414l4.293 4.293a1 1 0 0 0 1.414-1.414L34.414 35z"/>`,
  'regular': `<path d="M41.974 6.025a6.907 6.907 0 0 0-9.768 0L8.038 30.198a6 6 0 0 0-1.572 2.758L4.039 42.44a1.25 1.25 0 0 0 1.52 1.521l9.487-2.425a6 6 0 0 0 2.76-1.572l2.439-2.44a13 13 0 0 1-.221-3.313l-3.986 3.985a3.5 3.5 0 0 1-1.611.918l-7.443 1.903 1.904-7.442c.156-.61.473-1.166.917-1.61L33.974 7.793a4.407 4.407 0 0 1 6.233 6.232l-7.998 7.999a13.2 13.2 0 0 1 3.314.22l6.451-6.451a6.907 6.907 0 0 0 0-9.768M44 35c0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11 11 4.925 11 11m-5.293-4.293a1 1 0 0 0-1.414-1.414L33 33.586l-4.293-4.293a1 1 0 0 0-1.414 1.414L31.586 35l-4.293 4.293a1 1 0 0 0 1.414 1.414L33 36.414l4.293 4.293a1 1 0 0 0 1.414-1.414L34.414 35z"/>`
} as const;

export default function PenDismissIcon({ 
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

  const gradientId = 'pendismissicon_gradient';
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