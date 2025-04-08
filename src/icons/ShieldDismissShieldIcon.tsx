
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M10.277 2.084a.5.5 0 0 0-.554 0 15.05 15.05 0 0 1-6.294 2.421A.5.5 0 0 0 3 5v4.5c0 3.891 2.307 6.73 6.82 8.467a.5.5 0 0 0 .36 0q.516-.2.994-.417-.39-.54-.652-1.164c-.32-.763-.487-1.603-.517-2.503v-.008L10 13.593V11.06l-1.97 1.97a.75.75 0 0 1-1.06-1.061L8.94 10 6.97 8.03a.75.75 0 0 1 1.06-1.06L10 8.94l1.97-1.97a.75.75 0 1 1 1.06 1.06l-1.636 1.637h.006c.906 0 1.757-.363 2.597-1.238a1.39 1.39 0 0 1 2.009.001q.3.313.597.537.199.15.397.265V5a.5.5 0 0 0-.43-.495 15.05 15.05 0 0 1-6.293-2.421M17 10.347a4.6 4.6 0 0 1-1-.583 6 6 0 0 1-.716-.642.39.39 0 0 0-.566 0c-.995 1.036-2.095 1.545-3.318 1.545-.22 0-.4.186-.4.416v2.501l.004.266q.04 1.196.44 2.15A4.8 4.8 0 0 0 13 18q.787.6 1.874.979a.4.4 0 0 0 .254 0c2.56-.89 3.873-2.713 3.873-5.395v-2.5l-.008-.085a.405.405 0 0 0-.392-.332q-.304 0-.6-.043a4 4 0 0 1-1-.277"/>`,
  'regular': `<path d="M10.277 2.084a.5.5 0 0 0-.554 0 15.05 15.05 0 0 1-6.294 2.421A.5.5 0 0 0 3 5v4.5c0 3.891 2.307 6.73 6.82 8.467a.5.5 0 0 0 .36 0q.516-.2.994-.417a6 6 0 0 1-.516-.864q-.32.143-.658.277c-4.032-1.6-6-4.071-6-7.463V5.428a16 16 0 0 0 5.6-2.082l.4-.249.4.249A16 16 0 0 0 16 5.428v2.996l.006.006q.3.313.597.537.199.15.397.265V5a.5.5 0 0 0-.43-.495 15.05 15.05 0 0 1-6.293-2.421m-.237 8.664c.114-.468.461-.865.935-1.016l1.879-1.878a.5.5 0 0 0-.708-.708L10 9.293 7.854 7.146a.5.5 0 1 0-.708.708L9.293 10l-2.147 2.146a.5.5 0 0 0 .708.708L10 10.707zm6.96-.4a4.6 4.6 0 0 1-1-.584 6 6 0 0 1-.716-.642.39.39 0 0 0-.566 0c-.995 1.036-2.095 1.545-3.318 1.545-.22 0-.4.186-.4.416v2.501l.004.266q.04 1.196.44 2.15A4.8 4.8 0 0 0 13 18q.787.6 1.874.979a.4.4 0 0 0 .254 0c2.56-.89 3.873-2.713 3.873-5.395v-2.5l-.008-.085a.405.405 0 0 0-.392-.332q-.304 0-.6-.043a4 4 0 0 1-1-.277"/>`
} as const;

export default function ShieldDismissShieldIcon({ 
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

  const gradientId = 'shielddismissshieldicon_gradient';
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