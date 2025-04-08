
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M2.854 2.146a.5.5 0 1 0-.708.708l1.409 1.408A2.98 2.98 0 0 0 3 6v6c0 .648.205 1.248.555 1.738l4.03-4.03a2 2 0 0 1 .897-.519l6.114 6.114A3.5 3.5 0 0 1 12.5 16H5.764c.55.614 1.348 1 2.236 1h4.5a4.48 4.48 0 0 0 2.809-.984l1.837 1.838a.5.5 0 0 0 .708-.708zm12.943 11.53.764.764A4.5 4.5 0 0 0 17 12.5V8c0-.888-.386-1.687-1-2.236V12.5a3.6 3.6 0 0 1-.203 1.176M5.224 3.102l9.675 9.675Q15 12.404 15 12V6a3 3 0 0 0-3-3H6q-.405 0-.777.102M12.5 6.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0m1.238 7.945-4.03-4.03a1 1 0 0 0-1.415 0l-4.031 4.03c.49.35 1.09.555 1.738.555h6a2.98 2.98 0 0 0 1.738-.555"/>`,
  'regular': `<path d="M2.854 2.146a.5.5 0 1 0-.708.708l1.409 1.408A2.98 2.98 0 0 0 3 6v6a3 3 0 0 0 3 3h6a2.98 2.98 0 0 0 1.738-.555l.858.858A3.5 3.5 0 0 1 12.5 16H5.764c.55.614 1.348 1 2.236 1h4.5a4.48 4.48 0 0 0 2.809-.984l1.837 1.838a.5.5 0 0 0 .708-.708zM8.482 9.19a2 2 0 0 0-.896.518l-3.31 3.309A2 2 0 0 1 4 12V6c0-.37.101-.718.277-1.016zM14 6v5.879l.898.898Q15 12.404 15 12V6a3 3 0 0 0-3-3H6q-.405 0-.777.102L6.12 4H12a2 2 0 0 1 2 2m1.797 7.676.764.764A4.5 4.5 0 0 0 17 12.5V8c0-.888-.386-1.687-1-2.236V12.5a3.6 3.6 0 0 1-.203 1.176M11.5 7.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-1.793 2.914 3.309 3.31A2 2 0 0 1 12 14H6c-.37 0-.718-.101-1.016-.277l3.309-3.309a1 1 0 0 1 1.414 0"/>`
} as const;

export default function ImageMultipleOffIcon({ 
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

  const gradientId = 'imagemultipleofficon_gradient';
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