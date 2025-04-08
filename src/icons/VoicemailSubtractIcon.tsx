
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M13 8a2 2 0 0 1 1.735 1.005A5.48 5.48 0 0 1 18 10.257V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5.207A5.5 5.5 0 0 1 9 14.5a5.49 5.49 0 0 1 2.015-4.255A2.02 2.02 0 0 1 11.268 9H8.732A2 2 0 1 1 7 8zm-7 2a1 1 0 1 1 2 0 1 1 0 0 1-2 0m13 4.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0m-7 0a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5"/>`,
  'regular': `<path d="M17 9.6V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h5.022q.047.516.185 1H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4.257a5.5 5.5 0 0 0-1-.657M9 10a2 2 0 0 0-.268-1h2.536a2 2 0 0 0-.253 1.245 5.5 5.5 0 0 1 1.094-.7 1 1 0 0 1 1.331-.443 5.5 5.5 0 0 1 1.295-.097A2 2 0 0 0 13 8H7a2 2 0 1 0 2 2m-2 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2m12 3.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0m-7 0a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5"/>`
} as const;

export default function VoicemailSubtractIcon({ 
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

  const gradientId = 'voicemailsubtracticon_gradient';
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