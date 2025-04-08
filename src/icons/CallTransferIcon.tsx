
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M19 3a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v9a1 1 0 1 1-2 0V5.414l-4.793 4.793a1 1 0 0 1-1.414-1.414L26.586 4H20a1 1 0 0 1-1-1m-7.488 11.045 2.146-1.968a4 4 0 0 0 1.042-4.35l-.917-2.448a3.83 3.83 0 0 0-4.709-2.32c-3.432 1.05-6.07 4.24-5.258 8.029.534 2.492 1.555 5.62 3.492 8.949a31.8 31.8 0 0 0 6.055 7.53c2.87 2.612 6.97 1.959 9.608-.5a3.8 3.8 0 0 0 .342-5.192l-1.681-2.042a4 4 0 0 0-4.29-1.274l-2.776.875q-.161-.165-.366-.392a12.5 12.5 0 0 1-1.507-2.053 12.5 12.5 0 0 1-1.024-2.332 13 13 0 0 1-.157-.512M21 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-3.5 3.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>`,
  'regular': `<path d="M19 3a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v9a1 1 0 1 1-2 0V5.414l-4.793 4.793a1 1 0 0 1-1.414-1.414L26.586 4H20a1 1 0 0 1-1-1M5.427 10.516C5.046 8.003 6.82 5.74 9.53 4.912a1.976 1.976 0 0 1 2.429 1.196l.869 2.32a2 2 0 0 1-.521 2.176l-2.585 2.37a1 1 0 0 0-.304.94l.023.104.064.261c.057.221.143.531.264.9.24.735.623 1.723 1.193 2.71.57.988 1.234 1.813 1.75 2.389a15 15 0 0 0 .842.864l.08.073a1 1 0 0 0 .964.206l3.346-1.053a2 2 0 0 1 2.144.636l1.583 1.923c.66.8.582 1.975-.177 2.682-2.074 1.934-4.926 2.33-6.91.735a25.5 25.5 0 0 1-6.048-7.058 24.9 24.9 0 0 1-3.109-8.77m6.086 3.53 2.146-1.968A4 4 0 0 0 14.7 7.727l-.87-2.32a3.976 3.976 0 0 0-4.886-2.408C5.58 4.03 2.878 7.046 3.45 10.816c.4 2.632 1.323 5.98 3.357 9.476a27.5 27.5 0 0 0 6.523 7.61c2.975 2.391 6.949 1.575 9.528-.83a3.96 3.96 0 0 0 .357-5.416l-1.583-1.923a4 4 0 0 0-4.289-1.273l-2.777.874q-.16-.165-.365-.392a12.5 12.5 0 0 1-1.507-2.053 12.5 12.5 0 0 1-1.025-2.331 13 13 0 0 1-.156-.512M21 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-3.5 3.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>`
} as const;

export default function CallTransferIcon({ 
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
        viewBox="0 0 32 32"
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

  const gradientId = 'calltransfericon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
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