
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M17.784 10.708a8.4 8.4 0 0 1 1.504 2.085 1 1 0 0 1-1.78.91 6.4 6.4 0 0 0-1.138-1.58 6.13 6.13 0 0 0-7.032-1.171 3.5 3.5 0 0 0-1.771-1.287 8.13 8.13 0 0 1 10.217 1.043M4.982 9.713a8 8 0 0 0-.258.27 3.5 3.5 0 0 0-1.384 1.51.999.999 0 0 1-1.162-1.51c.428-.618.901-1.195 1.39-1.684 4.653-4.654 12.198-4.654 16.851 0 .508.508.987 1.087 1.404 1.691a1 1 0 0 1-1.646 1.136c-.35-.506-.751-.993-1.172-1.413-3.872-3.872-10.15-3.872-14.023 0M15.735 13.7c.46.46.838 1.024 1.102 1.624a1 1 0 0 1-1.832.803 3.4 3.4 0 0 0-.684-1.013 3.23 3.23 0 0 0-2.69-.922A2.5 2.5 0 0 0 10 13.05V13q0-.21-.024-.412a5.23 5.23 0 0 1 5.76 1.112m-2.673 2.741A1.501 1.501 0 0 1 12 19.004V16a1.5 1.5 0 0 1 1.062.44M4 14v-1a2.5 2.5 0 0 1 5 0v1h.5a1.5 1.5 0 0 1 1.5 1.5v5A1.5 1.5 0 0 1 9.5 22h-6A1.5 1.5 0 0 1 2 20.5v-5A1.5 1.5 0 0 1 3.5 14zm1.5-1v1h2v-1a1 1 0 0 0-2 0m2 5a1 1 0 1 0-2 0 1 1 0 0 0 2 0"/>`,
  'regular': `<path d="M17.745 10.75a8.3 8.3 0 0 1 1.491 2.07.75.75 0 1 1-1.335.683 6.8 6.8 0 0 0-1.217-1.692 6.565 6.565 0 0 0-7.63-1.203 3.5 3.5 0 0 0-1.407-.916 8.065 8.065 0 0 1 10.097 1.059m-2.102 3.07a5.2 5.2 0 0 1 1.072 1.582.75.75 0 1 1-1.374.602 3.7 3.7 0 0 0-.76-1.124 3.59 3.59 0 0 0-3.173-.996A2.5 2.5 0 0 0 10 13.05V13q0-.123-.008-.242a5.09 5.09 0 0 1 5.65 1.061m4.805-5.541c.509.509.99 1.09 1.408 1.697a.75.75 0 1 1-1.235.852 11 11 0 0 0-1.234-1.489c-4.08-4.08-10.695-4.08-14.775 0-.422.422-.84.934-1.222 1.484a.75.75 0 0 1-1.233-.855c.43-.62.905-1.2 1.394-1.69 4.666-4.665 12.23-4.665 16.897 0m-7.388 8.16A1.5 1.5 0 0 1 12 19v-3c.384 0 .767.146 1.06.44M4 14v-1a2.5 2.5 0 0 1 5 0v1h.5a1.5 1.5 0 0 1 1.5 1.5v5A1.5 1.5 0 0 1 9.5 22h-6A1.5 1.5 0 0 1 2 20.5v-5A1.5 1.5 0 0 1 3.5 14zm1.5-1v1h2v-1a1 1 0 1 0-2 0m2 5a1 1 0 1 0-2 0 1 1 0 0 0 2 0"/>`
} as const;

export default function WifiLockIcon({ 
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

  const gradientId = 'wifilockicon_gradient';
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