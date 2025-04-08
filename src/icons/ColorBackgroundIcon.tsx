
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M2 12.414V17.5A2.5 2.5 0 0 0 4.5 20h15a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 19.5 4h-8.944l2.422 2.422a3 3 0 0 1 .719 3.09c.38.042.75.21 1.04.501l.003.002.003.004.01.009.02.02a8 8 0 0 1 .311.338c.192.216.45.525.712.89.26.36.545.808.77 1.3.22.478.434 1.106.434 1.799C17 16.23 15.606 18 13.5 18S10 16.23 10 14.375c0-.29.037-.569.097-.83l-1.362 1.362a3 3 0 0 1-4.243 0zm9.342.58c-.188.409-.342.888-.342 1.381C11 15.765 12.029 17 13.5 17c1.47 0 2.5-1.235 2.5-2.625 0-.493-.154-.972-.342-1.381a7 7 0 0 0-.674-1.134 10 10 0 0 0-.649-.812l-.305-.328a.75.75 0 0 0-1.06 0l-.006.005c-.058.062-.214.226-.3.323-.175.199-.411.48-.649.812a7 7 0 0 0-.673 1.134m2.158-.61q.13.162.265.35c.202.281.392.586.53.886.14.305.205.56.205.755 0 .691-.481 1.125-1 1.125-.52 0-1-.434-1-1.125 0-.194.064-.45.205-.755.137-.3.327-.605.529-.886q.136-.188.266-.35M6.75 1a.75.75 0 0 0-.75.75v1.756l-.093.087-4.243 4.243a2 2 0 0 0 0 2.828L5.199 14.2a2 2 0 0 0 2.829 0l4.243-4.243a2 2 0 0 0 0-2.828L8.735 3.593A2 2 0 0 0 7.5 3.015V1.75A.75.75 0 0 0 6.75 1M6 5.621v.629a.75.75 0 1 0 1.5 0V4.54a.5.5 0 0 1 .174.114l3.536 3.535c.09.09.138.205.145.322H3.11zm.26 7.518-3.128-3.128h6.964l-3.129 3.128a.5.5 0 0 1-.707 0"/>`,
  'regular': `<path d="M11.342 12.994c-.188.409-.342.888-.342 1.381 0 .735.287 1.426.775 1.914A2.4 2.4 0 0 0 13.5 17c1.471 0 2.5-1.234 2.5-2.625 0-.493-.154-.972-.342-1.381a7 7 0 0 0-.674-1.134c-.237-.33-.473-.613-.649-.812l-.305-.328-.002-.002a.75.75 0 0 0-1.059.002l-.005.005c-.058.062-.214.226-.3.323-.175.199-.411.48-.649.812a7 7 0 0 0-.673 1.134m2.423-.26c.202.281.392.586.53.886.14.305.205.56.205.755 0 .691-.481 1.125-1 1.125-.25 0-.492-.1-.675-.283-.196-.195-.325-.484-.325-.842 0-.194.065-.45.205-.755.137-.3.328-.605.53-.885q.135-.189.265-.35.13.16.265.35M6.75 1a.75.75 0 0 0-.75.75v1.756l-.093.087-4.243 4.243a2 2 0 0 0 0 2.828L5.199 14.2a2 2 0 0 0 2.829 0l4.243-4.243a2 2 0 0 0 0-2.828L8.735 3.593A2 2 0 0 0 7.5 3.015V1.75A.75.75 0 0 0 6.75 1M6 5.621v.629a.75.75 0 1 0 1.5 0V4.54a.5.5 0 0 1 .174.114l3.536 3.535a.5.5 0 0 1 .144.311H3.121zm.26 7.518-3.128-3.128h6.964l-3.129 3.128a.5.5 0 0 1-.707 0M2 17.5v-5.088l1.5 1.5V17.5a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1h-7.441l-1.5-1.5H19.5A2.5 2.5 0 0 1 22 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 17.5"/>`
} as const;

export default function ColorBackgroundIcon({ 
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

  const gradientId = 'colorbackgroundicon_gradient';
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