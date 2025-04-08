
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M9.113 8.8c.34-.297.744-.526 1.19-.661l.247-.065.16-.03.176-.025.18-.015.184-.005h7.5a3.25 3.25 0 0 1 3.245 3.065l.005.185v7.5a3.25 3.25 0 0 1-3.066 3.245l-.184.005h-7.5a3.25 3.25 0 0 1-3.245-3.066L8 18.75v-7.5l.003-.149.014-.19.026-.191.036-.186.059-.223.08-.236.087-.202.082-.162.094-.163.146-.217.094-.123.135-.156.108-.112zM15 11a.75.75 0 0 0-.743.648l-.007.102v2.499h-2.5a.75.75 0 0 0-.743.648l-.007.102c0 .38.282.693.648.743l.102.007h2.5v2.501c0 .38.282.694.648.743L15 19a.75.75 0 0 0 .743-.648l.007-.102v-2.501h2.5a.75.75 0 0 0 .743-.649L19 15a.75.75 0 0 0-.648-.743l-.102-.007h-2.5v-2.5a.75.75 0 0 0-.648-.743zm.582-6.767.052.177.694 2.588H11.25A4.25 4.25 0 0 0 7 11.249v6.434a3.25 3.25 0 0 1-2.895-2.228l-.052-.176-1.941-7.245a3.25 3.25 0 0 1 2.12-3.928l.178-.052 7.244-1.941a3.25 3.25 0 0 1 3.928 2.12"/>`,
  'regular': `<path d="m11.066 8.004.184-.005h7.5a3.25 3.25 0 0 1 3.245 3.065l.005.185v7.5a3.25 3.25 0 0 1-3.066 3.245l-.184.005h-7.5a3.25 3.25 0 0 1-3.245-3.066L8 18.75v-7.5a3.25 3.25 0 0 1 3.066-3.245M18.75 9.5h-7.5a1.75 1.75 0 0 0-1.744 1.606l-.006.144v7.5a1.75 1.75 0 0 0 1.607 1.744l.143.006h7.5a1.75 1.75 0 0 0 1.744-1.607l.006-.143v-7.5a1.75 1.75 0 0 0-1.75-1.75M15 11a.75.75 0 0 1 .75.75v2.498h2.5a.75.75 0 0 1 0 1.5h-2.5v2.502a.75.75 0 0 1-1.5 0v-2.502h-2.5a.75.75 0 1 1 0-1.5h2.5V11.75A.75.75 0 0 1 15 11m.582-6.767.052.177.693 2.588h-1.553l-.588-2.2a1.75 1.75 0 0 0-2.144-1.238L4.798 5.502a1.75 1.75 0 0 0-1.27 1.995l.032.148 1.942 7.244A1.75 1.75 0 0 0 7 16.176v1.506a3.25 3.25 0 0 1-2.895-2.228l-.052-.176-1.941-7.245a3.25 3.25 0 0 1 2.12-3.928l.178-.052 7.244-1.941a3.25 3.25 0 0 1 3.928 2.12"/>`
} as const;

export default function CollectionsIcon({ 
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

  const gradientId = 'collectionsicon_gradient';
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