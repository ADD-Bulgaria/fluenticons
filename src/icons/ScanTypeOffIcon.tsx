
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M5.073 4.012A1 1 0 0 1 5.25 4H8a1 1 0 0 0 .991-1.134A.75.75 0 0 0 8.25 2H5.183c-.6.013-1.161.188-1.64.483L3.28 2.22a.75.75 0 1 0-1.06 1.06l.263.264A3.24 3.24 0 0 0 2 5.25v3a.75.75 0 0 0 .866.741Q2.932 9 3 9a1 1 0 0 0 1-1V5.25q0-.09.012-.177l2.753 2.753Q6.75 7.91 6.75 8v1.5a1 1 0 0 0 1.962.273L11 12.061V15H9.75a1 1 0 1 0 0 2h4.5a1 1 0 0 0 .962-.727l3.715 3.715a1 1 0 0 1-.177.012H16a1 1 0 0 0-.991 1.134.75.75 0 0 0 .741.866h3c.626 0 1.21-.177 1.706-.483l.263.264a.75.75 0 0 0 1.061-1.061l-.263-.264c.295-.478.47-1.038.482-1.638v-.031L22 18.75v-3a.75.75 0 0 0-.866-.741A1 1 0 0 0 20 16v2.75q0 .09-.012.177zM13.94 15H13v-.94zM4 18.75c0 .69.56 1.25 1.25 1.25H8a1 1 0 0 1 .991 1.134.75.75 0 0 1-.741.866h-3A3.25 3.25 0 0 1 2 18.75v-3a.75.75 0 0 1 .866-.741Q2.932 15 3 15a1 1 0 0 1 1 1zM18.75 4c.69 0 1.25.56 1.25 1.25V8a1 1 0 0 0 1.134.991A.75.75 0 0 0 22 8.25v-3A3.25 3.25 0 0 0 18.75 2h-3a.75.75 0 0 0-.741.866A1 1 0 0 0 16 4zM13 9.818 10.182 7h6.068a1 1 0 0 1 1 1v1.5a1 1 0 1 1-2 0V9H13z"/>`,
  'regular': `<path d="M2.483 3.544A3.24 3.24 0 0 0 2 5.25v3a.75.75 0 0 0 1.5 0v-3q.002-.31.101-.588L7 8.06V9a.75.75 0 0 0 1.366.427l2.884 2.884V15.5h-1.5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 .716-.973l4.372 4.372a1.8 1.8 0 0 1-.588.101h-3a.75.75 0 0 0 0 1.5h3c.626 0 1.21-.177 1.706-.483l.263.264a.75.75 0 0 0 1.061-1.061L3.28 2.22a.75.75 0 1 0-1.06 1.06zm11.99 11.99a.8.8 0 0 0-.223-.034h-1.5v-1.69zM10.182 7l2.568 2.568V8.5h2.75V9A.75.75 0 0 0 17 9V7.75a.75.75 0 0 0-.75-.75zM20.5 17.318l1.5 1.5V15.75a.75.75 0 0 0-1.5 0zM5.183 2.001 6.682 3.5H8.25a.75.75 0 0 0 0-1.5zm.067 18.5a1.75 1.75 0 0 1-1.75-1.75v-3a.75.75 0 0 0-1.5 0v3A3.25 3.25 0 0 0 5.25 22h3a.75.75 0 0 0 0-1.5zM20.5 5.25a1.75 1.75 0 0 0-1.75-1.75h-3a.75.75 0 0 1 0-1.5h3A3.25 3.25 0 0 1 22 5.25v3a.75.75 0 0 1-1.5 0z"/>`
} as const;

export default function ScanTypeOffIcon({ 
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

  const gradientId = 'scantypeofficon_gradient';
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