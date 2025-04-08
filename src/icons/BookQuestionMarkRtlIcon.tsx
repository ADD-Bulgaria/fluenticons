
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M4 4.5v15A2.5 2.5 0 0 0 6.5 22h13.25a.75.75 0 0 0 0-1.5H6.5a1 1 0 0 1-1-1h14.25a.75.75 0 0 0 .75-.75V4.5A2.5 2.5 0 0 0 18 2H6.5A2.5 2.5 0 0 0 4 4.5m10.5 4.25a.75.75 0 0 1-.75-.733v-.005a.7.7 0 0 0-.134-.33c-.109-.147-.418-.449-1.353-.432-.55.01-.957.236-1.179.511a.92.92 0 0 0-.138.96c.117.292.375.44.917.68l.038.016c.221.098.536.236.786.436.311.25.563.624.563 1.147v.75a.75.75 0 1 1-1.5-.001v-.724l-.001-.001c-.08-.064-.214-.128-.492-.251l-.051-.023c-.47-.207-1.29-.566-1.652-1.472a2.42 2.42 0 0 1 .362-2.458c.528-.655 1.371-1.054 2.321-1.07 1.315-.023 2.13.426 2.585 1.039a2.2 2.2 0 0 1 .42 1.067 2 2 0 0 1 .008.134v.008s0 .752-.75.752m-3 5.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0"/>`,
  'regular': `<path d="M14.5 8.75a.75.75 0 0 1-.75-.733v-.005a.7.7 0 0 0-.134-.33c-.109-.147-.418-.449-1.353-.432-.55.01-.957.236-1.179.511a.92.92 0 0 0-.138.96c.117.292.375.44.917.68l.038.016c.221.098.536.236.786.436.311.25.563.624.563 1.147v.75a.75.75 0 1 1-1.5-.001v-.724l-.001-.001c-.08-.064-.214-.128-.492-.251l-.051-.023c-.47-.207-1.29-.566-1.652-1.472a2.42 2.42 0 0 1 .362-2.458c.528-.655 1.371-1.054 2.321-1.07 1.315-.023 2.13.426 2.585 1.039a2.2 2.2 0 0 1 .42 1.067 2 2 0 0 1 .008.134v.008s0 .752-.75.752m-3 5.75a1 1 0 1 0 2 0 1 1 0 0 0-2 0M6.5 2A2.5 2.5 0 0 0 4 4.5v15A2.5 2.5 0 0 0 6.5 22h13.25a.75.75 0 0 0 0-1.5H6.5a1 1 0 0 1-1-1h14.25a.75.75 0 0 0 .75-.75V4.5A2.5 2.5 0 0 0 18 2zm-1 16V4.5a1 1 0 0 1 1-1H18a1 1 0 0 1 1 1V18z"/>`
} as const;

export default function BookQuestionMarkRtlIcon({ 
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

  const gradientId = 'bookquestionmarkrtlicon_gradient';
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