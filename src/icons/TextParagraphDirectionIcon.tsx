
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M13.5 3a5.5 5.5 0 1 0 0 11H15v7.208c0 .437.336.792.75.792s.75-.355.75-.792V4.5H18v16.708c0 .437.336.792.75.792s.75-.355.75-.792V4.5h.545l.13-.007c.466-.05.825-.363.825-.743 0-.414-.427-.75-.955-.75zm-9.42 8.858a.668.668 0 0 1-.898-.984L4.896 9 3.182 7.126l-.062-.077a.668.668 0 0 1 1.033-.84l2.146 2.333.065.081a.67.67 0 0 1-.065.835l-2.146 2.333zm1.321 8a.668.668 0 0 0 .898-.984L4.585 17 6.3 15.126l.062-.077a.668.668 0 0 0-1.033-.84l-2.146 2.333-.065.081a.67.67 0 0 0 .065.835l2.146 2.333z"/>`,
  'regular': `<path d="M13.5 3a5.5 5.5 0 1 0 0 11H15v7.208c0 .437.336.792.75.792s.75-.355.75-.792V4.5H18v16.708c0 .437.336.792.75.792s.75-.355.75-.792V4.5h.545l.13-.007c.466-.05.825-.363.825-.743 0-.414-.427-.75-.955-.75zm0 1.5H15v8h-1.5a4 4 0 0 1 0-8m-9.42 7.358a.668.668 0 0 1-.898-.984L4.896 9 3.182 7.126l-.062-.077a.668.668 0 0 1 1.033-.84l2.146 2.333.065.081a.67.67 0 0 1-.065.835l-2.146 2.333zm1.321 8a.668.668 0 0 0 .898-.984L4.585 17 6.3 15.126l.062-.077a.668.668 0 0 0-1.033-.84l-2.146 2.333-.065.081a.67.67 0 0 0 .065.835l2.146 2.333z"/>`
} as const;

export default function TextParagraphDirectionIcon({ 
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

  const gradientId = 'textparagraphdirectionicon_gradient';
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