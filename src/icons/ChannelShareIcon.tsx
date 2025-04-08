
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M12.475 6A6.475 6.475 0 0 0 6 12.475v12.05A6.475 6.475 0 0 0 12.475 31h11.732a5.5 5.5 0 1 0-.116-2.5H12.475A3.975 3.975 0 0 1 8.5 24.525v-12.05A3.975 3.975 0 0 1 12.475 8.5h12.05a3.975 3.975 0 0 1 3.975 3.975v.275a1.25 1.25 0 1 0 2.5 0v-.275A6.475 6.475 0 0 0 24.525 6zM17 35.75v-.5a1.25 1.25 0 1 1 2.5 0v.5a3.75 3.75 0 0 0 3.75 3.75h12.5a3.75 3.75 0 0 0 3.75-3.75v-12.5a3.75 3.75 0 0 0-3.75-3.75H23.91a5.502 5.502 0 0 1-10.91-1A5.5 5.5 0 0 1 23.793 17H35.75A6.25 6.25 0 0 1 42 23.25v12.5A6.25 6.25 0 0 1 35.75 42h-12.5A6.25 6.25 0 0 1 17 35.75"/>`,
  'regular': `<path d="M12.475 6h12.05A6.475 6.475 0 0 1 31 12.475v.275a1.25 1.25 0 1 1-2.5 0v-.275A3.975 3.975 0 0 0 24.525 8.5h-12.05A3.975 3.975 0 0 0 8.5 12.475v12.05a3.975 3.975 0 0 0 3.975 3.975h11.616A5.502 5.502 0 0 1 35 29.5 5.5 5.5 0 0 1 24.207 31H12.475A6.475 6.475 0 0 1 6 24.525v-12.05A6.475 6.475 0 0 1 12.475 6M26.5 29.5a3 3 0 1 0 6 0 3 3 0 0 0-6 0M17 35.75v-.5a1.25 1.25 0 1 1 2.5 0v.5a3.75 3.75 0 0 0 3.75 3.75h12.5a3.75 3.75 0 0 0 3.75-3.75v-12.5a3.75 3.75 0 0 0-3.75-3.75H23.91a5.502 5.502 0 0 1-10.91-1A5.5 5.5 0 0 1 23.793 17H35.75A6.25 6.25 0 0 1 42 23.25v12.5A6.25 6.25 0 0 1 35.75 42h-12.5A6.25 6.25 0 0 1 17 35.75m1.5-20.25a3 3 0 1 0 0 6 3 3 0 0 0 0-6"/>`
} as const;

export default function ChannelShareIcon({ 
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
        viewBox="0 0 48 48"
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

  const gradientId = 'channelshareicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
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