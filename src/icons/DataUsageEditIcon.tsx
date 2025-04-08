
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M20 4.746a2.75 2.75 0 0 0-2.75-2.75H4.75A2.75 2.75 0 0 0 2 4.746v12.5a2.75 2.75 0 0 0 2.75 2.75h6.666l.105-.42c.162-.648.497-1.24.97-1.712l2.158-2.158a.7.7 0 0 1-.149-.436V6.729a.74.74 0 0 1 .75-.73.74.74 0 0 1 .75.73v7.626l2.393-2.393A3.27 3.27 0 0 1 20 11.078zm-14 4C6 8.334 6.336 8 6.75 8s.75.335.75.747v6.507a.75.75 0 0 1-.75.746.75.75 0 0 1-.75-.746zm4.25 2.984a.73.73 0 0 1 .725-.734.73.73 0 0 1 .74.72l.035 3.547a.73.73 0 0 1-.725.733.73.73 0 0 1-.74-.719zm8.85.939-5.903 5.902a2.7 2.7 0 0 0-.706 1.248l-.458 1.83a1.087 1.087 0 0 0 1.319 1.319l1.83-.458a2.7 2.7 0 0 0 1.248-.706l5.902-5.903A2.286 2.286 0 0 0 19.1 12.67"/>`,
  'regular': `<path d="M20 4.746a2.75 2.75 0 0 0-2.75-2.75H4.75A2.75 2.75 0 0 0 2 4.746v12.5a2.75 2.75 0 0 0 2.75 2.75h6.666l.105-.42c.096-.384.253-.748.463-1.08H4.75c-.69 0-1.25-.56-1.25-1.25v-12.5c0-.69.56-1.25 1.25-1.25h12.5c.69 0 1.25.56 1.25 1.25v7.113c.437-.4.956-.66 1.5-.781zm-4 9.609V6.728l-.007-.1A.744.744 0 0 0 15.25 6a.74.74 0 0 0-.75.73v8.541l.007.099c.017.125.067.24.142.337zm-8.507-5.71a.75.75 0 0 0-.743-.646.75.75 0 0 0-.75.747v6.507l.007.101c.05.365.363.645.743.645.414 0 .75-.334.75-.746V8.746zm4.214 2.972a.73.73 0 0 0-.732-.62.73.73 0 0 0-.725.733l.035 3.547.008.099a.73.73 0 0 0 .732.62.73.73 0 0 0 .725-.733l-.035-3.548zm7.393 1.052-5.903 5.902a2.7 2.7 0 0 0-.706 1.248l-.458 1.83a1.087 1.087 0 0 0 1.319 1.319l1.83-.458a2.7 2.7 0 0 0 1.248-.706l5.902-5.903A2.286 2.286 0 0 0 19.1 12.67"/>`
} as const;

export default function DataUsageEditIcon({ 
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

  const gradientId = 'datausageediticon_gradient';
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