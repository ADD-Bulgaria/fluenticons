
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M10.499 4a6.5 6.5 0 0 0-.423 1.5H6.25A1.75 1.75 0 0 0 4.5 7.25V14H9a.75.75 0 0 1 .743.648l.007.102a2.25 2.25 0 0 0 4.5 0A.75.75 0 0 1 15 14h4.5l.001-1.733a6.5 6.5 0 0 0 1.5-1.077L21 18.75A3.25 3.25 0 0 1 17.75 22H6.25A3.25 3.25 0 0 1 3 18.75V7.25A3.25 3.25 0 0 1 6.25 4zM16.5 1a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11m.128 2.017-.086-.015L16.488 3l-.056.005-.06.012-.083.03-.074.042-.056.045-2.513 2.512-.057.07a.5.5 0 0 0 0 .568l.057.07.07.057a.5.5 0 0 0 .568 0l.07-.057 1.645-1.646L16 10l.008.09a.5.5 0 0 0 .402.402l.09.008.09-.008a.5.5 0 0 0 .402-.402L17 10l-.001-5.294 1.647 1.648.07.057a.5.5 0 0 0 .695-.695l-.057-.07-2.548-2.542-.047-.032-.068-.034z"/>`,
  'regular': `<path d="M10.499 4a6.5 6.5 0 0 0-.423 1.5H6.25a1.75 1.75 0 0 0-1.744 1.606L4.5 7.25V14H9a.75.75 0 0 1 .743.648l.007.102a2.25 2.25 0 0 0 4.5 0 .75.75 0 0 1 .648-.743L15 14h4.5l.001-1.733a6.5 6.5 0 0 0 1.5-1.077L21 18.75a3.25 3.25 0 0 1-3.066 3.245L17.75 22H6.25a3.25 3.25 0 0 1-3.245-3.066L3 18.75V7.25a3.25 3.25 0 0 1 3.066-3.245L6.25 4zM8.325 15.5H4.5v3.25a1.75 1.75 0 0 0 1.606 1.744l.144.006h11.5a1.75 1.75 0 0 0 1.744-1.607l.006-.143V15.5h-3.825a3.75 3.75 0 0 1-3.475 2.995l-.2.005a3.75 3.75 0 0 1-3.632-2.812zM16.5 1a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11m.128 2.017-.086-.015L16.488 3l-.056.005-.06.012-.083.03-.074.042-.056.045-2.513 2.512-.057.07a.5.5 0 0 0 0 .568l.057.07.07.057a.5.5 0 0 0 .568 0l.07-.057 1.645-1.646L16 10l.008.09a.5.5 0 0 0 .402.402l.09.008.09-.008a.5.5 0 0 0 .402-.402L17 10l-.001-5.294 1.647 1.648.07.057a.5.5 0 0 0 .695-.695l-.057-.07-2.548-2.542-.047-.032-.068-.034z"/>`
} as const;

export default function MailInboxArrowUpIcon({ 
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

  const gradientId = 'mailinboxarrowupicon_gradient';
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