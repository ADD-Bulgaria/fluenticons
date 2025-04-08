
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M15 15.505c0-.527.09-1.032.256-1.501H6.253a2.25 2.25 0 0 0-2.25 2.25v.92c0 .572.18 1.13.511 1.596C6.056 20.935 8.58 22.008 12 22.008q2.267 0 4-.63v-3.044a4.5 4.5 0 0 1-1-2.83m-3-13.5a5 5 0 0 1 5 5.001 5 5 0 1 1-5-5.002m11 13.5a3.5 3.5 0 1 1-7.001 0 3.5 3.5 0 0 1 7.001 0m-1 3.743a4.5 4.5 0 0 1-2.5.758c-.925 0-1.785-.28-2.5-.758v3.506c0 .201.226.32.392.206l2.108-1.453 2.108 1.453a.25.25 0 0 0 .392-.206z"/>`,
  'regular': `<path d="M15 15.504c0-.526.09-1.03.256-1.5H6.253a2.25 2.25 0 0 0-2.25 2.25v.577c0 .893.32 1.757.9 2.436 1.565 1.835 3.952 2.74 7.097 2.74q2.267.001 4-.628v-1.62c-1.082.497-2.41.748-4 .748-2.738 0-4.704-.746-5.957-2.214a2.25 2.25 0 0 1-.54-1.462v-.578a.75.75 0 0 1 .75-.749zm-3-13.5a5 5 0 0 1 5 5.002 5 5 0 1 1-5-5.002m0 1.5a3.5 3.5 0 1 0 .002 7.002A3.5 3.5 0 0 0 12 3.505m11 12a3.5 3.5 0 1 1-7.001.002A3.5 3.5 0 0 1 23 15.505m-1 3.744a4.5 4.5 0 0 1-2.5.758c-.925 0-1.785-.28-2.5-.758v3.506c0 .201.226.32.392.206l2.108-1.453 2.108 1.453a.25.25 0 0 0 .392-.206z"/>`
} as const;

export default function PersonRibbonIcon({ 
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

  const gradientId = 'personribbonicon_gradient';
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