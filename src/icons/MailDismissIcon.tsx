
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M27 7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0m-9.146-3.354a.5.5 0 0 0-.708.708L19.793 7.5l-2.647 2.646a.5.5 0 0 0 .708.708L20.5 8.207l2.646 2.647a.5.5 0 0 0 .708-.708L21.207 7.5l2.647-2.646a.5.5 0 0 0-.708-.708L20.5 6.793zM20.5 15a7.47 7.47 0 0 0 4.5-1.5v6.25a3.25 3.25 0 0 1-3.065 3.245L21.75 23H6.25a3.25 3.25 0 0 1-3.245-3.066L3 19.75v-9.626l10.654 5.541a.75.75 0 0 0 .692 0l2.8-1.455A7.5 7.5 0 0 0 20.5 15M6.25 5h7.177A7.5 7.5 0 0 0 13 7.5a7.48 7.48 0 0 0 2.706 5.768L14 14.155 3 8.434V8.25a3.25 3.25 0 0 1 3.066-3.245z"/>`,
  'regular': `<path d="M27 7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0m-9.146-3.354a.5.5 0 0 0-.708.708L19.793 7.5l-2.647 2.646a.5.5 0 0 0 .708.708L20.5 8.207l2.646 2.647a.5.5 0 0 0 .708-.708L21.207 7.5l2.647-2.646a.5.5 0 0 0-.708-.708L20.5 6.793zM23.5 19.75v-5.374A7.5 7.5 0 0 0 25 13.5v6.249a3.25 3.25 0 0 1-3.066 3.245L21.75 23H6.25a3.25 3.25 0 0 1-3.245-3.066L3 19.75V8.25a3.25 3.25 0 0 1 3.066-3.245L6.25 5h7.177a7.5 7.5 0 0 0-.36 1.5H6.25a1.75 1.75 0 0 0-1.744 1.606L4.5 8.25v.964l9.5 4.94 1.706-.886c.44.366.922.683 1.44.942l-2.8 1.455a.75.75 0 0 1-.58.047l-.112-.047-9.154-4.76v8.845a1.75 1.75 0 0 0 1.606 1.744l.144.006h15.5a1.75 1.75 0 0 0 1.744-1.607z"/>`
} as const;

export default function MailDismissIcon({ 
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

  const gradientId = 'maildismissicon_gradient';
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