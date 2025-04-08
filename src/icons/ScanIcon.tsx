
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m3.328 12.22q-.12.18-.258.344l-.142.161-3.944 5.211Q11.484 20 12 20a7.97 7.97 0 0 0 5.225-1.942zm-3.889 1.798-6.358.001a8.03 8.03 0 0 0 3.817 3.357zm8.307-6.026-4.28-.001.066.13q.06.113.114.23l3.01 6.09A7.96 7.96 0 0 0 20 12a8 8 0 0 0-.254-2.008M5.042 8.05A7.96 7.96 0 0 0 4 12c0 .697.09 1.374.257 2.018h4.282l-.058-.088zM12 10c-.64 0-1.21.3-1.576.769l-.101.17a1 1 0 0 1-.089.126 2 2 0 0 0 3.165 2.364l.163-.214q.053-.07.116-.129A2 2 0 0 0 12 10m0-6c-2.204 0-4.2.891-5.647 2.333l2.164 3.699q.115-.204.252-.39l3.38-5.64zm2.283.33L12.09 7.992h6.834a8.02 8.02 0 0 0-4.64-3.66"/>`,
  'regular': `<path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m3.25 12.332-.039.072-.063.091-4.757 5.853q.783.151 1.609.152a8.47 8.47 0 0 0 5.654-2.153l-2.084-4.54q-.14.275-.32.525M4.49 15.985a8.53 8.53 0 0 0 4.34 3.904L11.991 16l-.19-.005-.132-.008zm15.64-6.473h-4.998q.123.155.23.32a1 1 0 0 1 .067.089l.049.09.039.082q.13.238.226.493l3.016 6.57A8.46 8.46 0 0 0 20.5 12a8.5 8.5 0 0 0-.37-2.488M3.5 12c0 .865.13 1.7.37 2.486h4.996a4 4 0 0 1-.23-.32l-.135-.223-3.614-6.598A8.46 8.46 0 0 0 3.5 12m6.52-1.526-.044.071a1 1 0 0 1-.073.096 2.5 2.5 0 0 0 1.84 3.846h.513a2.5 2.5 0 0 0-.021-4.976l-.373.002-.058-.005a2.5 2.5 0 0 0-1.784.966M12 3.5a8.48 8.48 0 0 0-6.097 2.577l2.402 4.387q.191-.458.485-.851l3.904-6.085A9 9 0 0 0 12 3.5m-.406 4.52a4 4 0 0 1 .711-.009l7.204.002A8.52 8.52 0 0 0 14.585 3.9l-.292-.087z"/>`
} as const;

export default function ScanIcon({ 
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

  const gradientId = 'scanicon_gradient';
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