
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M7.5 3v.112A4.5 4.5 0 0 1 11 7.5v.865a1 1 0 1 1-2 0V7.5a2.5 2.5 0 0 0-1.5-2.292v6.157l.709.335A4.88 4.88 0 0 1 11 16.107v.372a4.5 4.5 0 0 1-3.5 4.389v.124a1 1 0 0 1-2 0v-.124A4.5 4.5 0 0 1 2 16.479v-.845a1 1 0 1 1 2 0v.845a2.5 2.5 0 0 0 1.5 2.292v-6.14l-.704-.332A4.88 4.88 0 0 1 2 7.884V7.5a4.5 4.5 0 0 1 3.5-4.388V3a1 1 0 0 1 2 0m-2 2.208A2.5 2.5 0 0 0 4 7.5v.384c0 1.058.58 2.026 1.5 2.53zm2 8.374v5.19A2.5 2.5 0 0 0 9 16.478v-.372c0-1.057-.58-2.024-1.5-2.525M13 3a1 1 0 0 0-.007 2H15.5c.818 0 1.544.393 2 1H13a1 1 0 1 0 0 2h4.95a2.5 2.5 0 0 1-2.45 2H13a1 1 0 0 0-.82 1.573l7 10a1 1 0 0 0 1.64-1.146L14.92 12h.58a4.5 4.5 0 0 0 4.473-4H21a1 1 0 1 0 0-2h-1.256a4.5 4.5 0 0 0-.502-1H21a1 1 0 1 0 0-2z"/>`,
  'regular': `<path d="M7.002 2.752a.75.75 0 1 0-1.5 0v.313A4.25 4.25 0 0 0 2 7.25v.541a4.75 4.75 0 0 0 2.668 4.27l.834.406v6.908A2.75 2.75 0 0 1 3.5 16.728v-.98a.75.75 0 0 0-1.5 0v.98a4.25 4.25 0 0 0 3.502 4.185v.334a.75.75 0 0 0 1.5 0v-.335a4.25 4.25 0 0 0 3.498-4.184v-.524a4.75 4.75 0 0 0-2.668-4.27l-.83-.404V4.604A2.75 2.75 0 0 1 9 7.25v1a.75.75 0 1 0 1.5 0v-1a4.25 4.25 0 0 0-3.498-4.184zm-1.5 1.85v6.196l-.176-.086A3.25 3.25 0 0 1 3.5 7.792V7.25c0-1.26.847-2.322 2.002-2.648m1.5 8.596.172.085A3.25 3.25 0 0 1 9 16.203v.525a2.75 2.75 0 0 1-1.998 2.646zM12.75 3a.75.75 0 0 0 0 1.5H15A2.75 2.75 0 0 1 17.45 6h-4.7a.75.75 0 0 0 0 1.5h4.989A2.75 2.75 0 0 1 15 10h-2.25a.75.75 0 0 0-.61 1.185l7.5 10.5a.75.75 0 1 0 1.22-.871L14.207 11.5H15a4.25 4.25 0 0 0 4.243-4h2.007a.75.75 0 0 0 0-1.5h-2.187a4.2 4.2 0 0 0-.822-1.5h3.009a.75.75 0 0 0 0-1.5z"/>`
} as const;

export default function CurrencyDollarRupeeIcon({ 
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

  const gradientId = 'currencydollarrupeeicon_gradient';
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