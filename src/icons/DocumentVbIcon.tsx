
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M10 4.5V1.25L13.75 5H10.5c-.28 0-.5-.22-.5-.5m-1 0c0 .83.67 1.5 1.5 1.5H14v7.5c0 .83-.67 1.5-1.5 1.5H8.75c.14-.19.26-.4.35-.63.17-.48.2-1 .07-1.5-.06-.23-.15-.45-.28-.66.06-.17.09-.36.1-.55.03-.45-.06-.91-.27-1.32-.21-.4-.53-.74-.92-.98S6.96 9 6.5 9h-1c-.27 0-.53.07-.75.2-.07-.04-.15-.08-.23-.11C4.35 9.03 4.18 9 4 9V2.5C4 1.67 4.67 1 5.5 1H9zm-1.004 7.099a1.5 1.5 0 0 1-.269.762h.001a1.49 1.49 0 0 1 .43 1.66A1.51 1.51 0 0 1 6.75 15H5.5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a1.5 1.5 0 0 1 1.33.808c.127.243.184.517.166.79m-1.496-.6H6v1h.5a.5.5 0 1 0 0-1m-.5 3h.75a.5.5 0 1 0 0-1H6zm-3.032.676 1.5-4a.501.501 0 0 0-.937-.351L2.5 13.075l-1.032-2.752a.502.502 0 0 0-.923-.03.5.5 0 0 0-.012.382l1.5 3.999a.49.49 0 0 0 .468.324.5.5 0 0 0 .468-.324"/>`,
  'regular': `<path d="m9.65 1.44 2.91 2.91c.28.28.44.67.44 1.06V13c0 1.1-.9 2-2 2H8.75c.14-.19.26-.4.34-.63.045-.108.074-.224.101-.334L9.2 14H11c.55 0 1-.45 1-1V6H9.5C8.67 6 8 5.33 8 4.5V2H5c-.55 0-1 .45-1 1v6c-.22 0-.42.05-.62.13-.14.07-.27.15-.38.27V3c0-1.1.9-2 2-2h3.59c.39 0 .78.16 1.06.44M9 4.5c0 .28.22.5.5.5h2.29L9 2.21zm-1.004 7.1a1.5 1.5 0 0 1-.269.762l.001.001a1.49 1.49 0 0 1 .43 1.659 1.51 1.51 0 0 1-1.408.979H5.5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a1.5 1.5 0 0 1 1.33.808c.127.243.184.517.166.791M6.5 11H6v1h.5a.5.5 0 1 0 0-1M6 14h.75a.5.5 0 1 0 0-1H6zm-3.032.676 1.5-4a.501.501 0 0 0-.937-.352L2.5 13.076l-1.032-2.752a.502.502 0 0 0-.923-.03.5.5 0 0 0-.012.382l1.5 4A.49.49 0 0 0 2.5 15a.5.5 0 0 0 .468-.324"/>`
} as const;

export default function DocumentVbIcon({ 
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
        viewBox="0 0 16 16"
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

  const gradientId = 'documentvbicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
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