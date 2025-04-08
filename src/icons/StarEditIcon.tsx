
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M13.209 3.102c-.495-1.003-1.926-1.003-2.421 0L8.43 7.88l-5.273.766c-1.107.16-1.55 1.522-.748 2.303l3.815 3.719-.9 5.25c-.19 1.104.968 1.945 1.959 1.424l2.942-1.547.304-1.218c.162-.648.496-1.24.968-1.712l5.896-5.903a3.28 3.28 0 0 1 4.381-.237c.53-.792.073-1.933-.934-2.079l-5.273-.766zM18.1 11.67l-5.896 5.902a2.7 2.7 0 0 0-.706 1.248l-.457 1.83a1.086 1.086 0 0 0 1.317 1.319l1.829-.458a2.7 2.7 0 0 0 1.246-.706l5.896-5.903a2.287 2.287 0 0 0 0-3.232 2.28 2.28 0 0 0-3.229 0"/>`,
  'regular': `<path d="M13.209 3.102c-.495-1.003-1.926-1.003-2.421 0L8.43 7.88l-5.273.766c-1.107.16-1.55 1.522-.748 2.303l3.815 3.719-.9 5.25c-.19 1.104.968 1.945 1.959 1.424l2.944-1.548.304-1.217q.105-.416.299-.795l-3.976 2.09.862-5.028a1.35 1.35 0 0 0-.388-1.195l-3.654-3.562 5.05-.734c.44-.064.82-.34 1.016-.739l2.258-4.575 2.259 4.575a1.35 1.35 0 0 0 1.016.739l4.45.647a3.27 3.27 0 0 1 2.052.724c.529-.792.072-1.932-.935-2.078l-5.273-.766zM18.1 11.67l-5.896 5.902a2.7 2.7 0 0 0-.706 1.248l-.457 1.83a1.086 1.086 0 0 0 1.317 1.319l1.829-.458a2.7 2.7 0 0 0 1.246-.706l5.896-5.903a2.287 2.287 0 0 0 0-3.232 2.28 2.28 0 0 0-3.229 0"/>`
} as const;

export default function StarEditIcon({ 
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

  const gradientId = 'starediticon_gradient';
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