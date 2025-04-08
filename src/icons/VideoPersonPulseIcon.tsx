
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M2.004 6.75A2.75 2.75 0 0 1 4.754 4H23.25A2.75 2.75 0 0 1 26 6.75v8.652a7.5 7.5 0 0 0-1.5-1.247V6.75c0-.69-.56-1.25-1.25-1.25H4.755c-.69 0-1.25.56-1.25 1.25v14.5c0 .69.56 1.25 1.25 1.25H8v-4a2 2 0 0 1 2-2h4.155a7.46 7.46 0 0 0-1.155 4c0 1.264.313 2.455.865 3.5H4.754a2.75 2.75 0 0 1-2.75-2.75zM14 15a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m13 5.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0m-7.991-3a.5.5 0 0 0-.483.34l-.904 2.677H16.5a.5.5 0 1 0 0 1h1.48a.5.5 0 0 0 .474-.34l.518-1.531 1.05 3.498a.5.5 0 0 0 .946.032l1.096-2.922.488.985a.5.5 0 0 0 .448.278h1.5a.5.5 0 0 0 0-1h-1.19l-.862-1.74a.5.5 0 0 0-.916.047l-.98 2.611-1.073-3.579a.5.5 0 0 0-.47-.356"/>`,
  'regular': `<path d="M4.754 4a2.75 2.75 0 0 0-2.75 2.75v14.5A2.75 2.75 0 0 0 4.754 24h9.111a7.5 7.5 0 0 1-.595-1.5H9.5v-4a.5.5 0 0 1 .5-.5h3.427q.282-.797.728-1.5H10a2 2 0 0 0-2 2v4H4.754c-.69 0-1.25-.56-1.25-1.25V6.75c0-.69.56-1.25 1.25-1.25H23.25c.69 0 1.25.56 1.25 1.25v7.405c.554.35 1.058.769 1.5 1.247V6.75A2.75 2.75 0 0 0 23.25 4zM12 11.5a2 2 0 1 1 4 0 2 2 0 0 1-4 0M14 8a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7m13 12.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0m-7.991-3a.5.5 0 0 0-.483.34l-.904 2.677H16.5a.5.5 0 1 0 0 1h1.48a.5.5 0 0 0 .474-.34l.518-1.531 1.05 3.498a.5.5 0 0 0 .946.032l1.096-2.922.488.985a.5.5 0 0 0 .448.278h1.5a.5.5 0 0 0 0-1h-1.19l-.862-1.74a.5.5 0 0 0-.916.047l-.98 2.611-1.073-3.579a.5.5 0 0 0-.47-.356"/>`
} as const;

export default function VideoPersonPulseIcon({ 
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

  const gradientId = 'videopersonpulseicon_gradient';
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