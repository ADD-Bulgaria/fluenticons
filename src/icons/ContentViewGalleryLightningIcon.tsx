
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M17 3H6.75A3.75 3.75 0 0 0 3 6.75v14.5A3.75 3.75 0 0 0 6.75 25H17v-2h-1.5a1.5 1.5 0 0 1-1.355-2.142L17 14.83zm8 10h-6.184q-.161 0-.316.034V9.5H25zm-6.5-5V3h2.75A3.75 3.75 0 0 1 25 6.75V8zm-12 .75c0-.69.56-1.25 1.25-1.25h5c.69 0 1.25.56 1.25 1.25v3.5c0 .69-.56 1.25-1.25 1.25h-5c-.69 0-1.25-.56-1.25-1.25zM8 9v3h4.5V9zm-.75 8a.75.75 0 0 1 0-1.5h6a.75.75 0 0 1 0 1.5zm-.75 2.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75M18.817 14h6.329a.5.5 0 0 1 .436.745L23.75 18h1.515a.75.75 0 0 1 .568 1.24l-6.415 7.452c-.523.606-1.5.052-1.246-.707L19.5 22h-4a.5.5 0 0 1-.452-.714l3.317-7a.5.5 0 0 1 .451-.286"/>`,
  'regular': `<path d="M3 6.75A3.75 3.75 0 0 1 6.75 3h14.5A3.75 3.75 0 0 1 25 6.75V13h-1.5v-2.5h-6v3.28l-.04.078L16 16.94V4.5H6.75A2.25 2.25 0 0 0 4.5 6.75v14.5a2.25 2.25 0 0 0 2.25 2.25h11.196l-.5 1.5H6.75A3.75 3.75 0 0 1 3 21.25zM23.5 9V6.75a2.25 2.25 0 0 0-2.25-2.25H17.5V9zM7.75 7.5c-.69 0-1.25.56-1.25 1.25v3.5c0 .69.56 1.25 1.25 1.25h5c.69 0 1.25-.56 1.25-1.25v-3.5c0-.69-.56-1.25-1.25-1.25zM8 12V9h4.5v3zm-1.5 4.25a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75M7.25 19a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5zm11.567-5h6.329a.5.5 0 0 1 .436.745L23.75 18h1.515a.75.75 0 0 1 .568 1.24l-6.415 7.452c-.523.606-1.5.052-1.246-.707L19.5 22h-4a.5.5 0 0 1-.452-.714l3.317-7a.5.5 0 0 1 .451-.286"/>`
} as const;

export default function ContentViewGalleryLightningIcon({ 
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

  const gradientId = 'contentviewgallerylightningicon_gradient';
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