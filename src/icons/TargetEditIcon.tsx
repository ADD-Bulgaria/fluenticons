
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12 13.999a2 2 0 1 0-.001-4 2 2 0 0 0 0 4m-6-2a6 6 0 1 1 11.988.366l-5.499 5.498q-.06.06-.118.124A6 6 0 0 1 6 12m6-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8m0-4a8 8 0 0 1 7.947 7.09 3.3 3.3 0 0 1 2.024.159C21.586 6.076 17.269 2 11.999 2 6.477 2 2 6.477 2 12c0 5.184 3.946 9.447 8.999 9.949a2 2 0 0 1 .063-.543l.357-1.428A8 8 0 0 1 12 4m7.098 8.67-5.901 5.901a2.7 2.7 0 0 0-.707 1.248l-.457 1.83a1.087 1.087 0 0 0 1.318 1.319l1.83-.458a2.7 2.7 0 0 0 1.248-.706L22.33 15.9a2.285 2.285 0 0 0-3.233-3.232"/>`,
  'regular': `<path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4m-6-2a5.999 5.999 0 1 1 11.986.368l-2.66 2.66a4.499 4.499 0 1 0-.301.301l-2.535 2.535q-.06.06-.118.124A6 6 0 0 1 6.001 12m5.998-8.5a8.5 8.5 0 0 1 8.443 7.512 3.3 3.3 0 0 1 1.529.237C21.587 6.077 17.269 2 11.999 2 6.477 2 2 6.477 2 12c0 5.186 3.947 9.45 9 9.951q-.004-.267.065-.545l.233-.934A8.501 8.501 0 0 1 12 3.5m7.1 9.17-5.9 5.9a2.7 2.7 0 0 0-.707 1.248l-.457 1.83a1.087 1.087 0 0 0 1.317 1.319l1.83-.458a2.7 2.7 0 0 0 1.248-.706l5.9-5.902a2.285 2.285 0 0 0-3.23-3.231"/>`
} as const;

export default function TargetEditIcon({ 
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

  const gradientId = 'targetediticon_gradient';
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