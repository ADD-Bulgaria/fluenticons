
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M2 5.766c0-1.92 2.074-3.123 3.74-2.171l3.5 2q.269.154.487.363c.346-.286.79-.458 1.273-.458h2c.484 0 .927.172 1.273.458q.218-.21.487-.363l3.5-2c1.666-.952 3.74.251 3.74 2.17v5.951c0 1.916-2.067 3.12-3.733 2.175l-3.5-1.986a2.5 2.5 0 0 1-.766-.673c-.294.17-.636.268-1.001.268h-2a2 2 0 0 1-1-.268c-.204.27-.463.5-.766.673l-3.5 1.986C4.067 14.836 2 13.632 2 11.716zM8 8a.75.75 0 0 0 0 1.5h1.75V8zm8.75.75A.75.75 0 0 0 16 8h-1.75v1.5H16a.75.75 0 0 0 .75-.75m-7.023 4.025q.284-.16.528-.368c.275.07.495.3.495.584v6.259A1.75 1.75 0 0 1 9 21H6.589a1.75 1.75 0 0 1-1.678-2.247l1.158-3.908q.079-.04.158-.085zm4.017-.368c-.274.07-.494.3-.494.585v6.258c0 .966.784 1.75 1.75 1.75h2.41a1.75 1.75 0 0 0 1.679-2.247l-1.158-3.908a4 4 0 0 1-.158-.085l-3.5-1.985a3.5 3.5 0 0 1-.529-.368"/>`,
  'regular': `<path d="m5.734 13.89.448-.254-1.336 5.177A1.75 1.75 0 0 0 6.541 21H9a1.75 1.75 0 0 0 1.75-1.75v-7.765q.123.015.25.015h2q.127 0 .25-.015v7.765c0 .966.784 1.75 1.75 1.75h2.46a1.75 1.75 0 0 0 1.694-2.187l-1.336-5.177.448.255c1.667.945 3.734-.259 3.734-2.175v-5.95c0-1.92-2.074-3.123-3.74-2.171l-3.5 2a2.5 2.5 0 0 0-.487.363A2 2 0 0 0 13 5.5h-2a2 2 0 0 0-1.273.458 2.5 2.5 0 0 0-.487-.363l-3.5-2C4.074 2.643 2 3.846 2 5.765v5.951c0 1.916 2.067 3.12 3.734 2.175M3.5 5.767a1 1 0 0 1 1.496-.869l3.5 2A1 1 0 0 1 9 7.766V8H6.75a.75.75 0 0 0 0 1.5H9v.23a1 1 0 0 1-.507.87l-3.5 1.986a1 1 0 0 1-1.493-.87zm5.734 6.14.016-.01v7.354a.25.25 0 0 1-.25.25H6.54a.25.25 0 0 1-.241-.312l1.677-6.5.016-.079zm6.774.704.016.077 1.677 6.5a.25.25 0 0 1-.242.313H15a.25.25 0 0 1-.25-.25v-7.354l.017.01zM10.5 9.5v-2A.5.5 0 0 1 11 7h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5m4.5 0h2.254a.75.75 0 0 0 0-1.5H15v-.234a1 1 0 0 1 .504-.869l3.5-2a1 1 0 0 1 1.496.869v5.95a1 1 0 0 1-1.493.87l-3.5-1.985A1 1 0 0 1 15 9.73z"/>`
} as const;

export default function BowTieIcon({ 
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

  const gradientId = 'bowtieicon_gradient';
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