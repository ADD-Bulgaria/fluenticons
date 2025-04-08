
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M4 5a1 1 0 0 0 0 2h16a1 1 0 1 0 0-2zm0 4a1 1 0 0 0 0 2h9.395l.068-.142A1.5 1.5 0 0 1 14.818 10H21a1 1 0 0 0-1-1zm0 4h8.448l-.948 2H4a1 1 0 1 1 0-2m0 4h6.553l-.407.858A1.48 1.48 0 0 0 10.087 19H4a1 1 0 1 1 0-2m10.811-6h6.32c.381 0 .622.413.434.748l-1.828 3.268h1.513c.64 0 .985.755.567 1.244l-6.406 7.48c-.521.61-1.496.053-1.243-.71l1.326-4H11.5a.502.502 0 0 1-.451-.716l3.31-7.027a.5.5 0 0 1 .452-.287"/>`,
  'regular': `<path d="M3.75 5a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5zm0 4a.75.75 0 0 0 0 1.5h9.95a1.5 1.5 0 0 1 1.118-.5h6.14a.75.75 0 0 0-.707-1zm8.698 4-.711 1.5H3.75a.75.75 0 0 1 0-1.5zm-1.895 4-.407.858c-.1.211-.146.43-.146.642H3.75a.75.75 0 0 1 0-1.5zm4.258-6h6.32c.381 0 .622.413.434.748l-1.828 3.268h1.513c.64 0 .985.755.567 1.244l-6.406 7.48c-.521.61-1.496.053-1.243-.71l1.326-4H11.5a.502.502 0 0 1-.451-.716l3.31-7.027a.5.5 0 0 1 .452-.287"/>`
} as const;

export default function TextColumnOneWideLightningIcon({ 
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

  const gradientId = 'textcolumnonewidelightningicon_gradient';
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