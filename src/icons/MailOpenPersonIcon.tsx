
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M11.653 14.165 2 9.127v7.623l.005.184A3.25 3.25 0 0 0 5.25 20h7.752L13 19.875v-.103A2.77 2.77 0 0 1 15.773 17h.277A3.5 3.5 0 0 1 15 14.5c0-.777.253-1.494.68-2.075l-3.333 1.74a.75.75 0 0 1-.694 0m-.036-12.06L3.1 7.17l-.17.112q-.247.18-.435.414L12 12.655l9.505-4.96a2.3 2.3 0 0 0-.605-.526l-8.516-5.064-.105-.051a.75.75 0 0 0-.662.051M21 14.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m2 5.375C23 21.431 21.714 23 18.5 23S14 21.437 14 19.875v-.103c0-.98.794-1.772 1.773-1.772h5.454c.98 0 1.773.793 1.773 1.772z"/>`,
  'regular': `<path d="M12 3.619v.004l-8.092 4.81L12 12.654v.003l8.231-4.225zm-.168 10.612a.8.8 0 0 1-.188-.07L3.5 9.91v6.84a1.75 1.75 0 0 0 1.606 1.743l.144.006h8.058A2.76 2.76 0 0 0 13 19.772v.103q0 .063.002.125H5.25a3.25 3.25 0 0 1-3.245-3.065L2 16.75V9.103c0-.736.36-1.423.958-1.842L3.1 7.17l8.504-5.056a.75.75 0 0 1 .775-.01l9.003 5.265a1.25 1.25 0 0 1-.06 2.19L18.513 11H18.5c-1.176 0-2.217.58-2.852 1.47l-3.306 1.697a.75.75 0 0 1-.51.064m9.168.27a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m2 5.374C23 21.432 21.714 23 18.5 23S14 21.438 14 19.875v-.103c0-.979.794-1.772 1.773-1.772h5.454c.98 0 1.773.793 1.773 1.772z"/>`
} as const;

export default function MailOpenPersonIcon({ 
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

  const gradientId = 'mailopenpersonicon_gradient';
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