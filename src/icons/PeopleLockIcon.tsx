
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0m4.01 3.832a3.5 3.5 0 0 1 2.437-.203A3 3 0 0 0 16.999 5a3 3 0 0 0-.99 5.833m-2.308 3.298A2.5 2.5 0 0 0 12 16.5v2.49c-.884.587-2.16 1.01-4 1.01-6 0-6-4.5-6-4.5v-.25A2.25 2.25 0 0 1 4.25 13h7.5a2.25 2.25 0 0 1 1.952 1.13M15 15v-1a2.5 2.5 0 0 1 5 0v1h.5a1.5 1.5 0 0 1 1.5 1.5v5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5v-5a1.5 1.5 0 0 1 1.5-1.5zm1.5-1v1h2v-1a1 1 0 1 0-2 0m2 5a1 1 0 1 0-2 0 1 1 0 0 0 2 0"/>`,
  'regular': `<path d="M8 4.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4 7a4 4 0 1 1 8 0 4 4 0 0 1-8 0m13-.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M14 8a3 3 0 1 1 4.446 2.63 3.5 3.5 0 0 0-2.437.202A3 3 0 0 1 14 8m-.298 6.13A2.25 2.25 0 0 0 11.75 13h-7.5A2.25 2.25 0 0 0 2 15.25v.278a2 2 0 0 0 .014.208 4.5 4.5 0 0 0 .778 2.07C3.61 18.974 5.172 20 8 20c1.803 0 3.091-.417 4-1.022v-2.063l-.02.03C11.485 17.65 10.421 18.5 8 18.5s-3.486-.85-3.98-1.555a3 3 0 0 1-.513-1.359l-.007-.079v-.257a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 .72.54c.303-.42.732-.742 1.232-.91m.798.87h.5v-1a2.5 2.5 0 0 1 5 0v1h.5a1.5 1.5 0 0 1 1.5 1.5v5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5v-5a1.5 1.5 0 0 1 1.5-1.5m2-1v1h2v-1a1 1 0 1 0-2 0m2 5a1 1 0 1 0-2 0 1 1 0 0 0 2 0"/>`
} as const;

export default function PeopleLockIcon({ 
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

  const gradientId = 'peoplelockicon_gradient';
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