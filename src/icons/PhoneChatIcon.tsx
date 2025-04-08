
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M9.75 2A2.75 2.75 0 0 0 7 4.75v18.5A2.75 2.75 0 0 0 9.75 26h3.33l.66-2.251A7.5 7.5 0 0 1 21 13.017V4.75A2.75 2.75 0 0 0 18.25 2zm17.255 18.5a6.5 6.5 0 0 1-9.648 5.688l-2.717.791a.5.5 0 0 1-.62-.62l.795-2.713a6.5 6.5 0 1 1 12.19-3.146m-9-1.5a.5.5 0 1 0 0 1h5a.5.5 0 0 0 0-1zm-.5 2.5a.5.5 0 0 0 .5.5h2.5a.5.5 0 0 0 0-1h-2.5a.5.5 0 0 0-.5.5"/>`,
  'regular': `<path d="M7 4.75A2.75 2.75 0 0 1 9.75 2h8.5A2.75 2.75 0 0 1 21 4.75v8.266a7.6 7.6 0 0 0-1.5.05V4.75c0-.69-.56-1.25-1.25-1.25h-8.5c-.69 0-1.25.56-1.25 1.25v18.5c0 .69.56 1.25 1.25 1.25h3.77l-.44 1.5H9.75A2.75 2.75 0 0 1 7 23.25zM27 20.5a6.5 6.5 0 0 1-9.647 5.688l-2.717.791a.5.5 0 0 1-.62-.62l.795-2.713a6.5 6.5 0 1 1 12.19-3.146M18 19a.5.5 0 0 0 0 1h5a.5.5 0 1 0 0-1zm-.5 2.5a.5.5 0 0 0 .5.5h2.5a.5.5 0 1 0 0-1H18a.5.5 0 0 0-.5.5"/>`
} as const;

export default function PhoneChatIcon({ 
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

  const gradientId = 'phonechaticon_gradient';
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