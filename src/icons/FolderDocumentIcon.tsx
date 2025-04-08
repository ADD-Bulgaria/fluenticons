
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M2 6.75A3.75 3.75 0 0 1 5.75 3h3.672c.729 0 1.428.29 1.944.805L13.25 5.69l-2.944 2.945A1.25 1.25 0 0 1 9.422 9H2zm.004 3.75v9.75A3.75 3.75 0 0 0 5.754 24H15v-8.25A2.75 2.75 0 0 1 17.75 13h4.836a2 2 0 0 1 1.414.586l2 2V9.75A3.75 3.75 0 0 0 22.25 6h-7.19l-3.694 3.695a2.75 2.75 0 0 1-1.944.805zM22 17v-3h-4.25A1.75 1.75 0 0 0 16 15.75v9.5c0 .966.784 1.75 1.75 1.75h7.5A1.75 1.75 0 0 0 27 25.25V19h-3a2 2 0 0 1-2-2m1 0v-3l4 4h-3a1 1 0 0 1-1-1"/>`,
  'regular': `<path d="M2.004 9.826 2 9.75v-3A3.75 3.75 0 0 1 5.75 3h3.672c.729 0 1.428.29 1.944.805L13.561 6h8.69A3.75 3.75 0 0 1 26 9.75v5.836l-1.5-1.5V9.75a2.25 2.25 0 0 0-2.25-2.25h-8.69l-2.195 2.195a2.75 2.75 0 0 1-1.944.805H3.504v9.75a2.25 2.25 0 0 0 2.25 2.25H15V24H5.754a3.75 3.75 0 0 1-3.75-3.75zM3.5 6.683l.003.067V9h5.918c.331 0 .649-.132.883-.366L12.19 6.75l-1.883-1.884a1.25 1.25 0 0 0-.884-.366H5.75a2.25 2.25 0 0 0-2.249 2.183M22 17v-3h-4.25A1.75 1.75 0 0 0 16 15.75v9.5c0 .966.784 1.75 1.75 1.75h7.5A1.75 1.75 0 0 0 27 25.25V19h-3a2 2 0 0 1-2-2m1 0v-3l4 4h-3a1 1 0 0 1-1-1"/>`
} as const;

export default function FolderDocumentIcon({ 
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
        viewBox="0 0 28 28"
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

  const gradientId = 'folderdocumenticon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 28"
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