
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12.52 2.709a.75.75 0 0 0-1.03-.002L9.264 4.801A.75.75 0 0 1 8.237 3.71l2.224-2.095a2.25 2.25 0 0 1 3.09.005l2.207 2.091A.75.75 0 1 1 14.726 4.8zM4.771 8.203a.75.75 0 0 1 .031 1.06L2.71 11.487a.75.75 0 0 0 .001 1.03l2.092 2.207a.75.75 0 0 1-1.089 1.032L1.622 13.55a2.25 2.25 0 0 1-.005-3.09l2.094-2.224a.75.75 0 0 1 1.06-.032m14.456.012a.75.75 0 0 1 1.06.028l2.099 2.213a2.25 2.25 0 0 1 0 3.097l-2.099 2.213a.75.75 0 0 1-1.088-1.032l2.098-2.213a.75.75 0 0 0 0-1.033L19.2 9.275a.75.75 0 0 1 .028-1.06m-3.434 11.013a.75.75 0 0 1-.028 1.06l-2.212 2.098a2.25 2.25 0 0 1-3.095 0l-2.216-2.098A.75.75 0 0 1 9.275 19.2l2.215 2.098a.75.75 0 0 0 1.032 0l2.212-2.097a.75.75 0 0 1 1.06.028M9.75 7A2.75 2.75 0 0 0 7 9.75v4.5A2.75 2.75 0 0 0 9.75 17h4.5A2.75 2.75 0 0 0 17 14.25v-4.5A2.75 2.75 0 0 0 14.25 7z"/>`,
  'regular': `<path d="M11.49 2.707a.75.75 0 0 1 1.03.002l2.206 2.09a.75.75 0 1 0 1.032-1.088L13.551 1.62a2.25 2.25 0 0 0-3.09-.005L8.237 3.71A.75.75 0 0 0 9.265 4.8zM4.802 9.263a.75.75 0 0 0-1.091-1.028l-2.095 2.224a2.25 2.25 0 0 0 .005 3.09l2.091 2.207a.75.75 0 1 0 1.089-1.032L2.71 12.517a.75.75 0 0 1-.001-1.03zm15.485-1.02A.75.75 0 1 0 19.2 9.275l2.098 2.213a.75.75 0 0 1 0 1.033L19.2 14.734a.75.75 0 0 0 1.088 1.032l2.099-2.213a2.25 2.25 0 0 0 0-3.097zm-4.522 12.045a.75.75 0 0 0-1.032-1.088l-2.212 2.097a.75.75 0 0 1-1.032 0L9.275 19.2a.75.75 0 0 0-1.032 1.09l2.216 2.097a2.25 2.25 0 0 0 3.095 0zM9.75 7A2.75 2.75 0 0 0 7 9.75v4.5A2.75 2.75 0 0 0 9.75 17h4.5A2.75 2.75 0 0 0 17 14.25v-4.5A2.75 2.75 0 0 0 14.25 7zM8.5 9.75c0-.69.56-1.25 1.25-1.25h4.5c.69 0 1.25.56 1.25 1.25v4.5c0 .69-.56 1.25-1.25 1.25h-4.5c-.69 0-1.25-.56-1.25-1.25z"/>`
} as const;

export default function ZoomFitIcon({ 
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

  const gradientId = 'zoomfiticon_gradient';
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