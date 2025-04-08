
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M10 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0M5.146 7.853l.003.003A.5.5 0 0 0 5.497 8h.006a.5.5 0 0 0 .35-.146l2-2a.5.5 0 1 0-.707-.708L6 6.293V3.5a.5.5 0 0 0-1 0v2.793L3.854 5.146a.5.5 0 1 0-.708.708zm7.607-.379c-.516-.4-1.155-.65-1.899-.71a5.5 5.5 0 0 1-.596 1.497q.119-.01.242-.011c1.423 0 2.25 1.047 2.25 2.75 0 1.67-.867 2.75-2.25 2.75S8.25 12.67 8.25 11q0-.414.064-.773c-.479.285-1.004.5-1.562.63L6.75 11c0 2.434 1.457 4.25 3.75 4.25 1.202 0 2.174-.499 2.826-1.324.55 1.145 1.47 1.824 2.674 1.824 2.026 0 3.25-1.923 3.25-4.75a8.25 8.25 0 0 0-8.968-8.22c.258.455.454.949.576 1.471L11 4.25A6.75 6.75 0 0 1 17.75 11c0 2.102-.73 3.25-1.75 3.25s-1.75-1.148-1.75-3.25V7.5l-.007-.102a.75.75 0 0 0-.743-.648.746.746 0 0 0-.747.724m-9.972 2.808c.454.258.948.454 1.47.576L4.25 11a6.75 6.75 0 0 0 9.048 6.349.75.75 0 0 1 .51 1.41A8.25 8.25 0 0 1 2.78 10.282"/>`,
  'regular': `<path d="M10 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0M5.146 7.853l.003.003A.5.5 0 0 0 5.497 8h.006a.5.5 0 0 0 .35-.146l2-2a.5.5 0 1 0-.707-.708L6 6.293V3.5a.5.5 0 0 0-1 0v2.793L3.854 5.146a.5.5 0 1 0-.708.708zm7.854.19c-.543-.597-1.291-.969-2.21-1.033q-.149.52-.39.992L10.5 8c1.576 0 2.5 1.17 2.5 3 0 1.797-.966 3-2.5 3S8 12.797 8 11q0-.324.038-.62-.492.258-1.034.412L7 11c0 2.307 1.36 4 3.5 4 1.282 0 2.284-.607 2.88-1.59.48 1.309 1.394 2.09 2.62 2.09 1.858 0 3-1.794 3-4.5a8 8 0 0 0-8.589-7.979q.237.468.383.982Q10.896 4 11 4a7 7 0 0 1 7 7c0 2.223-.813 3.5-2 3.5s-2-1.277-2-3.5V7.5l-.008-.09A.5.5 0 0 0 13 7.5zm-9.979 2.368q.468.237.982.383L4 11a7 7 0 0 0 9.383 6.584.5.5 0 0 1 .34.94 8 8 0 0 1-10.702-8.113"/>`
} as const;

export default function MentionArrowDownIcon({ 
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

  const gradientId = 'mentionarrowdownicon_gradient';
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