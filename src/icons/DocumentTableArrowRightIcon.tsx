
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M15.5 17.25V16h-2.674q.172.724.174 1.5h2.25a.25.25 0 0 0 .25-.25m0-2.75h-3.232a6.5 6.5 0 0 0-.768-1.154V13h3.75a.25.25 0 0 1 .25.25zm-9-3.5a6.5 6.5 0 0 1 2.504.5h6.246c.966 0 1.75.784 1.75 1.75v4A1.75 1.75 0 0 1 15.25 19h-2.424a6.5 6.5 0 0 1-1.636 3H18a2 2 0 0 0 2-2V10h-6a2 2 0 0 1-2-2V2H6a2 2 0 0 0-2 2v7.498A6.5 6.5 0 0 1 6.5 11m7-3V2.5l6 6H14a.5.5 0 0 1-.5-.5M12 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0M3.5 17a.5.5 0 0 0 0 1h4.793l-1.647 1.646a.5.5 0 0 0 .708.708l2.5-2.5a.5.5 0 0 0 0-.708l-2.5-2.5a.5.5 0 0 0-.708.708L8.293 17z"/>`,
  'regular': `<path d="M18 20.5a.5.5 0 0 0 .5-.5V10H14a2 2 0 0 1-2-2V3.5H6a.5.5 0 0 0-.5.5v7.076a6.5 6.5 0 0 0-1.5.422V4a2 2 0 0 1 2-2h6.172q.042.001.082.007.03.005.059.007c.215.015.427.056.624.138.057.024.112.056.166.087l.05.029.047.024a1 1 0 0 1 .081.044c.078.053.148.116.219.18l.036.03.049.04 5.829 5.828A2 2 0 0 1 20 9.828V20a2 2 0 0 1-2 2h-6.81a6.5 6.5 0 0 0 1.078-1.5zm-.622-12L13.5 4.621V8a.5.5 0 0 0 .5.5zM13 17.5a6.5 6.5 0 0 1-.174 1.5h2.424A1.75 1.75 0 0 0 17 17.25v-4a1.75 1.75 0 0 0-1.75-1.75H9.004a6.5 6.5 0 0 1 2.496 1.846V13h3.75a.25.25 0 0 1 .25.25v1.25h-3.232c.244.47.433.972.558 1.5H15.5v1.25a.25.25 0 0 1-.25.25zm-1 0a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0M3.5 17a.5.5 0 0 0 0 1h4.793l-1.647 1.646a.5.5 0 0 0 .708.708l2.5-2.5a.5.5 0 0 0 0-.708l-2.5-2.5a.5.5 0 0 0-.708.708L8.293 17z"/>`
} as const;

export default function DocumentTableArrowRightIcon({ 
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

  const gradientId = 'documenttablearrowrighticon_gradient';
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