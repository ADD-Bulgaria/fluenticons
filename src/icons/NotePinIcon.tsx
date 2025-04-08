
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M3 9.018V14l.005.176A3 3 0 0 0 6 17h4v-4l.005-.176a3 3 0 0 1 2.819-2.819L13 10h4V6l-.005-.176A3 3 0 0 0 14 3H9.463a2.273 2.273 0 0 1-.74 3.51l-1.892.922-.442 1.28a1.818 1.818 0 0 1-3.004.691zm13.542 2.635A2 2 0 0 0 16.9 11H13l-.157.006a2 2 0 0 0-1.838 1.845L11 13l.001 3.9c.296-.096.568-.262.792-.486l4.621-4.621zM8.538 3.387 6.611 1.46a1.5 1.5 0 0 0-2.409.404L3.4 3.51a1 1 0 0 1-.573.507l-1.102.38a1 1 0 0 0-.38 1.653l.948.948L1 8.29v.707h.707L3 7.706l.947.947a1 1 0 0 0 1.653-.38l.38-1.102a1 1 0 0 1 .507-.572l1.647-.803a1.5 1.5 0 0 0 .404-2.409"/>`,
  'regular': `<path d="M3 9.018V14l.005.176A3 3 0 0 0 6 17h4.379l.176-.008a2 2 0 0 0 1.238-.578l4.621-4.621.12-.13A2 2 0 0 0 17 10.38V6l-.005-.176A3 3 0 0 0 14 3H9.463c.254.3.416.644.49 1H14l.15.005A2 2 0 0 1 16 6v4h-3l-.176.005A3 3 0 0 0 10 13v3H6l-.15-.005A2 2 0 0 1 4 14V9.81a1.8 1.8 0 0 1-.615-.407zM13 11l2.783.001q-.036.045-.076.085l-4.621 4.621-.086.074V13l.005-.15A2 2 0 0 1 13 11M8.538 3.387 6.611 1.46a1.5 1.5 0 0 0-2.409.404L3.4 3.51a1 1 0 0 1-.573.507l-1.102.38a1 1 0 0 0-.38 1.653l.948.948L1 8.29v.707h.707L3 7.706l.947.947a1 1 0 0 0 1.653-.38l.38-1.102a1 1 0 0 1 .507-.572l1.647-.803a1.5 1.5 0 0 0 .404-2.409"/>`
} as const;

export default function NotePinIcon({ 
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

  const gradientId = 'notepinicon_gradient';
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