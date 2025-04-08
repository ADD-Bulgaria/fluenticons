
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12 8V2H6a2 2 0 0 0-2 2v7.354q.358-.103.75-.104h3.5c.41 0 .798.09 1.147.25h6.353a.75.75 0 0 1 0 1.5h-4.937c.12.31.187.647.187 1v.05q.312.064.591.2h4.159a.75.75 0 0 1 0 1.5h-2.864q.113.357.114.75v.5h2.75a.75.75 0 0 1 0 1.5H13v3q0 .257-.05.5H18a2 2 0 0 0 2-2V10h-6a2 2 0 0 1-2-2m1.5 0V2.5l6 6H14a.5.5 0 0 1-.5-.5M3 15h-.5A1.5 1.5 0 0 0 1 16.5V18h2.5v-.25a.75.75 0 0 1 1.5 0V18h3v-.25a.75.75 0 0 1 1.5 0V18H12v-1.5a1.5 1.5 0 0 0-1.5-1.5H10v-1a1.75 1.75 0 0 0-1.75-1.75h-3.5A1.75 1.75 0 0 0 3 14zm1.5-1a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v1h-4zM1 21.5v-2h2.5v.75a.75.75 0 0 0 1.5 0v-.75h3v.75a.75.75 0 0 0 1.5 0v-.75H12v2a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 1 21.5"/>`,
  'regular': `<path d="M10.813 13a2.76 2.76 0 0 0-1.416-1.5h5.853a.75.75 0 0 1 0 1.5zm.778 1.25c.614.298 1.087.84 1.295 1.5h2.364a.75.75 0 0 0 0-1.5zM15.25 17H13v1.5h2.25a.75.75 0 0 0 0-1.5M5.5 4v7.25h-.75q-.392.001-.75.104V4a2 2 0 0 1 2-2h6.172q.042.001.082.007.03.005.059.007c.215.015.427.056.624.138.057.024.112.056.166.087l.05.029.047.024a1 1 0 0 1 .081.044c.078.053.148.116.219.18l.036.03.049.04 5.829 5.828A2 2 0 0 1 20 9.828V20a2 2 0 0 1-2 2h-5.05q.05-.243.05-.5v-1h5a.5.5 0 0 0 .5-.5V10H14a2 2 0 0 1-2-2V3.5H6a.5.5 0 0 0-.5.5m11.878 4.5L13.5 4.621V8a.5.5 0 0 0 .5.5zM3 15h-.5A1.5 1.5 0 0 0 1 16.5V18h2.5v-.25a.75.75 0 0 1 1.5 0V18h3v-.25a.75.75 0 0 1 1.5 0V18H12v-1.5a1.5 1.5 0 0 0-1.5-1.5H10v-1a1.75 1.75 0 0 0-1.75-1.75h-3.5A1.75 1.75 0 0 0 3 14zm1.5-1a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v1h-4zM1 21.5v-2h2.5v.75a.75.75 0 0 0 1.5 0v-.75h3v.75a.75.75 0 0 0 1.5 0v-.75H12v2a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 1 21.5"/>`
} as const;

export default function DocumentTextToolboxIcon({ 
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

  const gradientId = 'documenttexttoolboxicon_gradient';
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