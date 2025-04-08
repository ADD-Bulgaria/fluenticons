
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M21 17H9a1 1 0 0 0-.117 1.993L9 19h12a1 1 0 0 0 .117-1.993zH9zm0-4H3a1 1 0 0 0-.117 1.993L3 15h18a1 1 0 0 0 .117-1.993zH3zm0-4H3a1 1 0 0 0-.117 1.993L3 11h18a1 1 0 0 0 .117-1.993zH3zm0-4H3a1 1 0 0 0-.117 1.993L3 7h18a1 1 0 0 0 .117-1.993zH3z"/>`,
  'regular': `<path d="M21.25 17H8.75a.75.75 0 0 0-.102 1.493l.102.007h12.5a.75.75 0 0 0 .102-1.493zH8.75zm0-4H2.75a.75.75 0 0 0-.102 1.493l.102.007h18.5a.75.75 0 0 0 .102-1.493zH2.75zm0-4H2.75a.75.75 0 0 0-.102 1.493l.102.007h18.5a.75.75 0 0 0 .102-1.493zH2.75zm0-4H2.75a.75.75 0 0 0-.102 1.493l.102.007h18.5a.75.75 0 0 0 .102-1.493zH2.75z"/>`
} as const;

export default function TextDescriptionRtlIcon({ 
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

  const gradientId = 'textdescriptionrtlicon_gradient';
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