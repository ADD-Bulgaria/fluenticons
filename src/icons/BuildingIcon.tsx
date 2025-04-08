
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M9.25 44C8.56 44 8 43.44 8 42.75V8.25A4.25 4.25 0 0 1 12.25 4h15.5A4.25 4.25 0 0 1 32 8.25V19h3.75A4.25 4.25 0 0 1 40 23.25v19.5c0 .69-.56 1.25-1.25 1.25z"/><path d="M34 37.25V44H24l-1-4 1-5h7.75A2.25 2.25 0 0 1 34 37.25"/><path d="M14 37.25V44h10v-9h-7.75A2.25 2.25 0 0 0 14 37.25M18 14a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-2 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4m2 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6-12a2 2 0 1 0 0-4 2 2 0 0 0 0 4m2 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-2 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4m10-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/>`,
  'filled': `<path d="M8 8.25A4.25 4.25 0 0 1 12.25 4h15.5A4.25 4.25 0 0 1 32 8.25V19h3.75A4.25 4.25 0 0 1 40 23.25v19.5c0 .69-.56 1.25-1.25 1.25H34v-6.75A2.25 2.25 0 0 0 31.75 35h-15.5A2.25 2.25 0 0 0 14 37.25V44H9.25C8.56 44 8 43.44 8 42.75zM16.5 44h6.25v-6.5H16.5zm8.75 0h6.25v-6.5h-6.25zM18 14a2 2 0 1 0-4 0 2 2 0 0 0 4 0m-2 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4m2 5a2 2 0 1 0-4 0 2 2 0 0 0 4 0m6-12a2 2 0 1 0 0-4 2 2 0 0 0 0 4m2 5a2 2 0 1 0-4 0 2 2 0 0 0 4 0m-2 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4m10-2a2 2 0 1 0-4 0 2 2 0 0 0 4 0"/>`,
  'regular': `<path d="M12.25 6.5a1.75 1.75 0 0 0-1.75 1.75V41.5H14v-5.25A2.25 2.25 0 0 1 16.25 34h15.5A2.25 2.25 0 0 1 34 36.25v5.25h3.5V23.25a1.75 1.75 0 0 0-1.75-1.75h-5c-.69 0-1.25-.56-1.25-1.25v-12a1.75 1.75 0 0 0-1.75-1.75zm-3 37.5C8.56 44 8 43.44 8 42.75V8.25A4.25 4.25 0 0 1 12.25 4h15.5A4.25 4.25 0 0 1 32 8.25V19h3.75A4.25 4.25 0 0 1 40 23.25v19.5c0 .69-.56 1.25-1.25 1.25zm7.25-2.5h6.25v-5H16.5zm8.75 0h6.25v-5h-6.25zM18 14a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-2 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4m2 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6-12a2 2 0 1 0 0-4 2 2 0 0 0 0 4m2 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-2 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4m10-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/>`
} as const;

export default function BuildingIcon({ 
  variant = 'regular',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'color' | 'filled' | 'regular' }) {
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

  const gradientId = 'buildingicon_gradient';
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