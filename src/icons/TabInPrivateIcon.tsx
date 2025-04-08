
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M6.25 3h15.5A3.25 3.25 0 0 1 25 6.25v15.5A3.25 3.25 0 0 1 21.75 25H6.25A3.25 3.25 0 0 1 3 21.75V6.25A3.25 3.25 0 0 1 6.25 3M5 6.25v.689L6.939 5H6.25C5.56 5 5 5.56 5 6.25m0 2.81v2.879L11.939 5h-2.88zM14.06 5 5 14.06v2.879L16.939 5zm5 0L5 19.06v2.69q0 .09.012.176L21.926 5.012A1 1 0 0 0 21.75 5zm3.928 1.072L6.072 22.988Q6.16 23 6.25 23h2.689L23 8.939V6.25q0-.09-.012-.178M23 11.06 11.06 23h2.879L23 13.939zm0 5L16.06 23h2.879L23 18.939zm0 5L21.06 23h.69c.69 0 1.25-.56 1.25-1.25z"/>`,
  'regular': `<path d="M6.25 3h15.5A3.25 3.25 0 0 1 25 6.25v15.5A3.25 3.25 0 0 1 21.75 25H6.25A3.25 3.25 0 0 1 3 21.75V6.25A3.25 3.25 0 0 1 6.25 3M4.5 6.25v1.188L7.438 4.5H6.25A1.75 1.75 0 0 0 4.5 6.25m0 3.31v2.878L12.438 4.5H9.56zM14.56 4.5 4.5 14.56v2.879L17.439 4.5zm5 0L4.5 19.56v2.19q.002.31.101.587L22.337 4.601a1.8 1.8 0 0 0-.587-.101zm3.839 1.161L5.66 23.398q.277.1.589.102h2.188L23.5 8.438V6.25q-.002-.312-.102-.589m.101 4.899L10.56 23.5h2.878L23.5 13.439zm0 5-7.94 7.94h2.879l5.061-5.061zm0 5-2.94 2.94h1.19a1.75 1.75 0 0 0 1.75-1.75z"/>`
} as const;

export default function TabInPrivateIcon({ 
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

  const gradientId = 'tabinprivateicon_gradient';
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