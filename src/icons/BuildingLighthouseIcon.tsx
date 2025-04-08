
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M19.763 4.372a2.25 2.25 0 0 1 2.478 0l7.636 5.038c2.07 1.366 1.102 4.587-1.377 4.587H28v5.052a4.25 4.25 0 0 1 3.562 3.626l2.41 17.635a3.25 3.25 0 0 1-3.22 3.69H11.254a3.25 3.25 0 0 1-3.22-3.69l2.409-17.635A4.25 4.25 0 0 1 14 19.05v-5.053h-.495c-2.48 0-3.447-3.221-1.377-4.587zM16.5 13.997V19h9v-5.003zm19.634-2.363a1.25 1.25 0 0 1-1.768-1.768l2.5-2.5a1.25 1.25 0 0 1 1.769 1.767zm-24.33 19.545-.767 5.618 19.23-5.129-.713-5.222zM35.25 14.5a1.25 1.25 0 1 0 0 2.5h5.5a1.25 1.25 0 0 0 0-2.5zm.884 5.366 2.5 2.5a1.25 1.25 0 0 1-1.767 1.768l-2.5-2.5a1.25 1.25 0 0 1 1.767-1.768"/>`,
  'regular': `<path d="M22.241 4.372a2.25 2.25 0 0 0-2.478 0L12.128 9.41c-2.07 1.366-1.103 4.587 1.377 4.587H14v5.053a4.25 4.25 0 0 0-3.557 3.625L8.033 40.31a3.25 3.25 0 0 0 3.22 3.69h19.499a3.25 3.25 0 0 0 3.22-3.69l-2.41-17.635A4.25 4.25 0 0 0 28 19.049v-5.052h.5c2.48 0 3.446-3.221 1.377-4.587zm3.26 9.625V19h-9v-5.003zm-11.996-2.5 7.497-4.947 7.498 4.947zm20.861.137a1.25 1.25 0 0 0 1.768 0l2.5-2.5a1.25 1.25 0 0 0-1.767-1.768l-2.5 2.5a1.25 1.25 0 0 0 0 1.768M14.654 21.5H27.35a1.75 1.75 0 0 1 1.734 1.513l.194 1.419-17.179 4.58.82-5.999a1.75 1.75 0 0 1 1.734-1.513m-3.546 14.778.625-4.58 17.887-4.77.582 4.258zm19.435-2.596.952 6.966a.75.75 0 0 1-.743.852H11.254a.75.75 0 0 1-.744-.852l.23-1.685zM34 15.75c0-.69.56-1.25 1.25-1.25h5.5a1.25 1.25 0 0 1 0 2.5h-5.5c-.69 0-1.25-.56-1.25-1.25m4.635 6.617-2.501-2.5a1.25 1.25 0 0 0-1.768 1.767l2.5 2.5a1.25 1.25 0 0 0 1.769-1.767"/>`
} as const;

export default function BuildingLighthouseIcon({ 
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

  const gradientId = 'buildinglighthouseicon_gradient';
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