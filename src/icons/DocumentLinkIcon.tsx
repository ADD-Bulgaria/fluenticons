
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12 2v6a2 2 0 0 0 2 2h6v10a2 2 0 0 1-2 2h-5a5 5 0 0 0-4-8H4V4a2 2 0 0 1 2-2zm1.5.5V8a.5.5 0 0 0 .5.5h5.5zM5.75 15.75A.75.75 0 0 0 5 15l-.2.005A4 4 0 0 0 5 23l.102-.007A.75.75 0 0 0 5 21.5l-.164-.005A2.5 2.5 0 0 1 5 16.5l.102-.007a.75.75 0 0 0 .648-.743M13 19a4 4 0 0 0-4-4l-.102.007A.75.75 0 0 0 9 16.5l.164.005A2.5 2.5 0 0 1 9 21.5l-.102.007A.75.75 0 0 0 9 23l.2-.005A4 4 0 0 0 13 19m-4.25-.75h-3.5l-.102.007a.75.75 0 0 0 .102 1.493h3.5l.102-.007a.75.75 0 0 0-.102-1.493"/>`,
  'regular': `<path d="M18.5 20a.5.5 0 0 1-.5.5h-4.229a5 5 0 0 1-.77 1.5H18a2 2 0 0 0 2-2V9.828a2 2 0 0 0-.586-1.414l-5.829-5.828-.049-.04-.036-.03a2 2 0 0 0-.219-.18 1 1 0 0 0-.08-.044l-.048-.024-.05-.029c-.054-.031-.109-.063-.166-.087a2 2 0 0 0-.624-.138q-.03-.002-.059-.007L12.172 2H6a2 2 0 0 0-2 2v10h1.5V4a.5.5 0 0 1 .5-.5h6V8a2 2 0 0 0 2 2h4.5zm-5-15.379L17.378 8.5H14a.5.5 0 0 1-.5-.5zM5.75 15.75A.75.75 0 0 0 5 15l-.2.005A4 4 0 0 0 5 23l.102-.007A.75.75 0 0 0 5 21.5l-.164-.005A2.5 2.5 0 0 1 5 16.5l.102-.007a.75.75 0 0 0 .648-.743M13 19a4 4 0 0 0-4-4l-.102.007A.75.75 0 0 0 9 16.5l.164.005A2.5 2.5 0 0 1 9 21.5l-.102.007A.75.75 0 0 0 9 23l.2-.005A4 4 0 0 0 13 19m-4.25-.75h-3.5l-.102.007a.75.75 0 0 0 .102 1.493h3.5l.102-.007a.75.75 0 0 0-.102-1.493"/>`
} as const;

export default function DocumentLinkIcon({ 
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

  const gradientId = 'documentlinkicon_gradient';
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