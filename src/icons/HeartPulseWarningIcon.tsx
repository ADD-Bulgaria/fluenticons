
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M3.261 4.274a4.3 4.3 0 0 1 6.127.016l.605.61.596-.603a4.305 4.305 0 0 1 6.135.015 4.42 4.42 0 0 1 .978 4.702A2 2 0 0 0 17.5 9h-1.264a1.99 1.99 0 0 0-2.144-.958l-.463-.53a1.5 1.5 0 0 0-2.401.193l-.96 1.537-1.383-3.319a1.5 1.5 0 0 0-2.765-.01L4.808 9H2.5q-.09 0-.18.01a4.4 4.4 0 0 1 .941-4.736m5.957 11.83 1.065-2.13a1.5 1.5 0 0 1-1.668-.897l-1.129-2.71-.305.72A1.5 1.5 0 0 1 5.8 12H4.799l4.313 4.357q.045-.128.106-.253m3.495-6.997c.12-.24.276-.44.456-.602l-.293-.334a.5.5 0 0 0-.8.064l-1.987 3.179-2.127-5.106a.5.5 0 0 0-.922-.004L5.47 10H2.5a.5.5 0 0 0 0 1h3.3a.5.5 0 0 0 .46-.304l1.235-2.907 2.043 4.903a.5.5 0 0 0 .886.073l2.143-3.429.02.023zm.89.447-3.496 6.998A1 1 0 0 0 11.002 18h6.996a1 1 0 0 0 .895-1.448l-3.5-6.999a1 1 0 0 0-1.79 0m1.395 1.941v3.002a.5.5 0 1 1-1 0v-3.002a.5.5 0 1 1 1 0m-.5 5.504a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1"/>`,
  'regular': `<path d="M12.713 9.107c.12-.24.276-.44.456-.602l-.293-.334a.5.5 0 0 0-.8.064l-1.987 3.179-2.127-5.106a.5.5 0 0 0-.922-.004L5.47 10H2.5a.5.5 0 0 0 0 1h3.3a.5.5 0 0 0 .46-.304l1.235-2.907 2.043 4.903a.5.5 0 0 0 .886.073l2.143-3.429.02.023zM4.8 12l4.313 4.357q.045-.128.106-.253l.353-.705-3.409-3.443Q5.986 12 5.8 12zm12.903-2.986a4.42 4.42 0 0 0-.978-4.702 4.306 4.306 0 0 0-6.135-.015l-.596.603-.605-.61-.1-.099a4.3 4.3 0 0 0-6.027.083 4.4 4.4 0 0 0-.94 4.737Q2.408 9 2.5 9h.92c-.707-1.29-.52-2.94.552-4.023a3.3 3.3 0 0 1 4.706.016l.96.97a.5.5 0 0 0 .711 0L11.3 5a3.306 3.306 0 0 1 4.713.016A3.415 3.415 0 0 1 16.611 9h.889q.103 0 .202.014m-4.1.54-3.495 6.998A1 1 0 0 0 11.002 18h6.996a1 1 0 0 0 .895-1.448l-3.5-6.999a1 1 0 0 0-1.79 0m1.396 1.941v3.002a.5.5 0 1 1-1 0v-3.002a.5.5 0 1 1 1 0m-.5 5.504a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1"/>`
} as const;

export default function HeartPulseWarningIcon({ 
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
        viewBox="0 0 20 20"
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

  const gradientId = 'heartpulsewarningicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
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