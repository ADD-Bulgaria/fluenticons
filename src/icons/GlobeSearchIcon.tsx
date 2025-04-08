
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M3.441 9.956a4.926 4.926 0 0 0 6.233 7.571l4.256 4.257a.773.773 0 0 0 1.169-1.007l-.075-.087-4.217-4.218A4.927 4.927 0 0 0 3.44 9.956m13.213 6.545c-.225 1.287-.548 2.456-.952 3.454l.03.028.124.14c.22.295.344.624.378.952a10.03 10.03 0 0 0 4.726-4.574zM12.25 16.5l2.284 2.287c.202-.6.381-1.268.53-1.992l.057-.294zm-2.936-5.45a3.38 3.38 0 1 1-4.78 4.779 3.38 3.38 0 0 1 4.78-4.78M15.45 10h-3.7a5.94 5.94 0 0 1 .892 5h2.71a26 26 0 0 0 .132-4.512zm1.507 0a28 28 0 0 1-.033 4.42l-.057.58h4.703a10.05 10.05 0 0 0 .258-5zm-2.095-7.593c.881 1.35 1.536 3.329 1.883 5.654l.062.44h4.59a10.03 10.03 0 0 0-6.109-5.958l-.304-.1zm-2.836-.405c-1.277 0-2.561 2.382-3.158 5.839.465.16.912.38 1.331.658l5.088.001c-.54-3.809-1.905-6.498-3.261-6.498m-2.837.405A10.03 10.03 0 0 0 2.654 8.5h.995a5.92 5.92 0 0 1 3.743-.968c.322-1.858.846-3.47 1.527-4.68l.162-.275z"/>`,
  'regular': `<path d="M3.441 9.955a4.926 4.926 0 0 0 6.233 7.571l4.256 4.257a.773.773 0 0 0 1.169-1.007l-.075-.087-4.217-4.218A4.927 4.927 0 0 0 3.44 9.955m8.585-7.957c-4.756 0-8.736 3.319-9.751 7.767q.21-.27.46-.517A5.9 5.9 0 0 1 4.51 8.025 8.53 8.53 0 0 1 8.906 4.09l-.107.174c-.538.893-.971 2.011-1.275 3.28.499.05.991.164 1.465.34.632-2.628 1.823-4.385 3.037-4.385l.115.005c1.266.116 2.488 2.118 3.056 4.996H10.2a6 6 0 0 1 1.55 1.499l3.674.001a19 19 0 0 1-.135 5h-2.646a6 6 0 0 1-.299.842l-.129.272-.122.229.158.157h2.715c-.203.749-.45 1.418-.732 1.985l1.106 1.107c.492-.858.891-1.908 1.178-3.09l2.723-.002a8.54 8.54 0 0 1-3.734 3.26l.225.223.125.14c.22.296.345.625.378.953A10 10 0 0 0 22.027 12c0-5.524-4.478-10.002-10.001-10.002m-2.712 9.05a3.38 3.38 0 1 1-4.78 4.78 3.38 3.38 0 0 1 4.78-4.78M16.932 10l3.358-.001.008.03c.15.633.23 1.292.23 1.97a8.5 8.5 0 0 1-.545 3l-3.174.002c.143-.95.218-1.958.218-3.001q0-1.028-.095-2m-1.787-5.911.023.008A8.53 8.53 0 0 1 19.776 8.5h-3.049c-.313-1.753-.86-3.278-1.582-4.41"/>`
} as const;

export default function GlobeSearchIcon({ 
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

  const gradientId = 'globesearchicon_gradient';
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