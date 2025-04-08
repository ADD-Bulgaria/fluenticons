
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6 8.965a3.5 3.5 0 1 0-1.5-.11v6.29A3.502 3.502 0 0 0 5.5 22a3.5 3.5 0 0 0 .5-6.965V13h6.25A3.75 3.75 0 0 0 16 9.25v-.285a3.5 3.5 0 1 0-1.5-.11v.395a2.25 2.25 0 0 1-2.25 2.25H6zm17 9.785A3.75 3.75 0 0 0 19.25 15l-.102.007a.75.75 0 0 0 .102 1.493l.154.005A2.25 2.25 0 0 1 19.25 21l-.003.005-.102.007a.75.75 0 0 0 .108 1.493V22.5l.2-.005A3.75 3.75 0 0 0 23 18.75m-6.5-3a.75.75 0 0 0-.75-.75l-.2.005a3.75 3.75 0 0 0 .2 7.495l.102-.007A.75.75 0 0 0 15.75 21l-.154-.005a2.25 2.25 0 0 1 .154-4.495l.102-.007a.75.75 0 0 0 .648-.743m3.5 3a.75.75 0 0 0-.75-.75h-3.5l-.102.007a.75.75 0 0 0 .102 1.493h3.5l.102-.007A.75.75 0 0 0 20 18.75"/>`,
  'regular': `<path d="M6 8.965a3.5 3.5 0 1 0-1.5-.11v6.29A3.502 3.502 0 0 0 5.5 22a3.5 3.5 0 0 0 .5-6.965V13h6.25A3.75 3.75 0 0 0 16 9.25v-.285a3.5 3.5 0 1 0-1.5-.11v.395a2.25 2.25 0 0 1-2.25 2.25H6zM7.5 5.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0m10 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 11a2 2 0 1 1 0 4 2 2 0 0 1 0-4M23 18.75A3.75 3.75 0 0 0 19.25 15l-.102.007a.75.75 0 0 0 .102 1.493l.154.005A2.25 2.25 0 0 1 19.25 21l-.003.005-.102.007a.75.75 0 0 0 .108 1.493V22.5l.2-.005A3.75 3.75 0 0 0 23 18.75m-6.5-3a.75.75 0 0 0-.75-.75l-.2.005a3.75 3.75 0 0 0 .2 7.495l.102-.007A.75.75 0 0 0 15.75 21l-.154-.005a2.25 2.25 0 0 1 .154-4.495l.102-.007a.75.75 0 0 0 .648-.743m3.5 3a.75.75 0 0 0-.75-.75h-3.5l-.102.007a.75.75 0 0 0 .102 1.493h3.5l.102-.007A.75.75 0 0 0 20 18.75"/>`
} as const;

export default function BranchForkLinkIcon({ 
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

  const gradientId = 'branchforklinkicon_gradient';
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