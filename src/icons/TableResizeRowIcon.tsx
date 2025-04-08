
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M3 6.75A3.75 3.75 0 0 1 6.75 3h14.5A3.75 3.75 0 0 1 25 6.75v.75h-8.647l-1.19-1.058a1.75 1.75 0 0 0-2.326 0L11.647 7.5H3zM3 9h7.168a1.75 1.75 0 0 0 2.082 2.428v5.145A1.75 1.75 0 0 0 10.168 19H3zm14.558 8.087A1.75 1.75 0 0 1 17.832 19H25V9h-7.168a1.75 1.75 0 0 1-2.082 2.428v5.145a1.75 1.75 0 0 1 1.808.514m-4.72 4.471-1.19-1.058H3v.75A3.75 3.75 0 0 0 6.75 25h14.5A3.75 3.75 0 0 0 25 21.25v-.75h-8.647l-1.185 1.053-.002.002a1.75 1.75 0 0 1-2.3.027l-.009-.006zM14.75 9.42v9.16l1.002-.89a.75.75 0 0 1 .996 1.12l-2.247 1.998a.75.75 0 0 1-.987.013l-.012-.01-2.25-2a.75.75 0 1 1 .996-1.122l1.002.89V9.42l-1.002.89a.75.75 0 0 1-.996-1.12l2.25-2a.75.75 0 0 1 .996 0l2.25 2a.75.75 0 0 1-.996 1.12zM14.067 22h-.14Z"/>`,
  'regular': `<path d="M14.75 9.42v9.16l1.002-.89a.75.75 0 0 1 .996 1.12l-2.247 1.998a.75.75 0 0 1-.987.013l-.012-.01-2.25-2a.75.75 0 1 1 .996-1.122l1.002.89V9.42l-1.002.89a.75.75 0 0 1-.996-1.12l2.25-2a.75.75 0 0 1 .996 0l2.25 2a.75.75 0 0 1-.996 1.12zM6.75 3A3.75 3.75 0 0 0 3 6.75v14.5A3.75 3.75 0 0 0 6.75 25h14.5A3.75 3.75 0 0 0 25 21.25V6.75A3.75 3.75 0 0 0 21.25 3zm14.5 1.5a2.25 2.25 0 0 1 2.25 2.25v.75h-7.147l1.06.942c.181.161.32.352.419.558H23.5v10h-5.668a1.7 1.7 0 0 1-.42.558l-1.06.942H23.5v.75a2.25 2.25 0 0 1-2.25 2.25H6.75a2.25 2.25 0 0 1-2.25-2.25v-.75h7.147l-1.06-.942a1.8 1.8 0 0 1-.419-.558H4.5V9h5.668c.098-.206.238-.397.42-.558l1.06-.942H4.5v-.75A2.25 2.25 0 0 1 6.75 4.5z"/>`
} as const;

export default function TableResizeRowIcon({ 
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

  const gradientId = 'tableresizerowicon_gradient';
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