
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M17 9a8 8 0 1 0-6.278 7.814 6 6 0 0 1-.2-.428c-.32-.763-.487-1.603-.517-2.503v-.008L10 13.593v-2.51c0-.743.589-1.416 1.4-1.416.906 0 1.757-.363 2.597-1.238a1.39 1.39 0 0 1 2.009.001q.3.313.597.537.197.149.394.263Q17 9.115 17 9M8.508 7.91a.5.5 0 0 1 .984 0L9.5 8v4.502l-.008.09a.5.5 0 0 1-.984 0l-.008-.09V8zM8.25 5.75a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0M17 10.347a4.6 4.6 0 0 1-1-.583 6 6 0 0 1-.716-.642.39.39 0 0 0-.566 0c-.995 1.036-2.095 1.545-3.318 1.545-.22 0-.4.186-.4.416v2.501l.004.266q.04 1.196.44 2.15A4.8 4.8 0 0 0 13 18q.787.6 1.874.979a.4.4 0 0 0 .254 0c2.56-.89 3.873-2.713 3.873-5.395v-2.5l-.008-.085a.405.405 0 0 0-.392-.332q-.304 0-.6-.043a4 4 0 0 1-1-.277"/>`,
  'regular': `<path d="M17 9a8 8 0 1 0-6.278 7.814 6 6 0 0 1-.388-.94 7 7 0 1 1 5.64-7.474l.032.03q.3.313.597.537.197.149.394.263Q17 9.115 17 9M9.049 5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5M9 7.5a.5.5 0 0 1 .492.41L9.5 8v4.502a.5.5 0 0 1-.992.09l-.008-.09V8a.5.5 0 0 1 .5-.5m8 2.847a4.6 4.6 0 0 1-1-.583 6 6 0 0 1-.716-.642.39.39 0 0 0-.566 0c-.995 1.036-2.095 1.545-3.318 1.545-.22 0-.4.186-.4.416v2.501l.004.266q.04 1.196.44 2.15A4.8 4.8 0 0 0 13 18q.787.6 1.874.979a.4.4 0 0 0 .254 0c2.56-.89 3.873-2.713 3.873-5.395v-2.5l-.008-.085a.405.405 0 0 0-.392-.332q-.304 0-.6-.043a4 4 0 0 1-1-.277"/>`
} as const;

export default function InfoShieldIcon({ 
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

  const gradientId = 'infoshieldicon_gradient';
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