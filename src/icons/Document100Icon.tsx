
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12 8V2H6a2 2 0 0 0-2 2v10.228c.338.197.679.514.862.971a3.498 3.498 0 0 1 5.638.497A3.5 3.5 0 0 1 17 17.5v2a3.5 3.5 0 0 1-1.05 2.5H18a2 2 0 0 0 2-2V10h-6a2 2 0 0 1-2-2m1.5 0V2.5l6 6H14a.5.5 0 0 1-.5-.5m-6 7A2.5 2.5 0 0 0 5 17.5v2a2.5 2.5 0 0 0 5 0v-2A2.5 2.5 0 0 0 7.5 15m-1 2.5a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0zm4.5 0a2.5 2.5 0 0 1 5 0v2a2.5 2.5 0 0 1-5 0zm2.5-1a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1M4 15.938c0-.562-.433-.864-.742-.951s-.804-.056-1.11.371c-.318.443-.76.939-1.28 1.247a.75.75 0 0 0 .764 1.29c.323-.19.613-.42.868-.662v4.017a.75.75 0 0 0 1.5 0z"/>`,
  'regular': `<path d="M4 4a2 2 0 0 1 2-2h6.172a2 2 0 0 1 1.415.586l5.827 5.828A2 2 0 0 1 20 9.828V20a2 2 0 0 1-2 2h-2.05c.418-.41.734-.924.905-1.5H18a.5.5 0 0 0 .5-.5V10H14a2 2 0 0 1-2-2V3.5H6a.5.5 0 0 0-.5.5v10.627q-.354.248-.638.572A2 2 0 0 0 4 14.228zm9.5.62V8a.5.5 0 0 0 .5.5h3.38zM4 15.939c0-.562-.433-.864-.742-.951s-.804-.056-1.11.371c-.318.443-.76.939-1.28 1.247a.75.75 0 0 0 .764 1.29c.323-.19.613-.42.868-.662v4.017a.75.75 0 0 0 1.5 0zM5 17.5a2.5 2.5 0 0 1 5 0v2a2.5 2.5 0 1 1-5 0zm2.5-1a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1m6-1.5a2.5 2.5 0 0 0-2.5 2.5v2a2.5 2.5 0 0 0 5 0v-2a2.5 2.5 0 0 0-2.5-2.5m-1 2.5a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0z"/>`
} as const;

export default function Document100Icon({ 
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

  const gradientId = 'document100icon_gradient';
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