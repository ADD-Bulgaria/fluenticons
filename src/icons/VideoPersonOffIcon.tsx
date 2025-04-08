
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M2.22 2.22a.75.75 0 0 1 1.06 0l18.5 18.5a.75.75 0 0 1-1.06 1.06l-1.776-1.775H4.25A2.25 2.25 0 0 1 2 17.755V6.25a2.25 2.25 0 0 1 1.2-1.99l-.98-.98a.75.75 0 0 1 0-1.06M11.939 13a3 3 0 0 1-2.938-2.939L4.439 5.5H4.25a.75.75 0 0 0-.75.75v11.505c0 .414.336.75.75.75l2.749-.001L7 15.75a1.75 1.75 0 0 1 1.606-1.744L8.75 14h4.19zm2.69-1.553-4.075-4.075a3 3 0 0 1 4.075 4.075m5.866 5.867V6.25a.75.75 0 0 0-.75-.75H8.682L7.182 4h12.563a2.25 2.25 0 0 1 2.25 2.25v11.505c0 .312-.063.61-.178.88z"/>`,
  'regular': `<path d="M2.22 2.22a.75.75 0 0 1 1.06 0l18.5 18.5a.75.75 0 0 1-1.06 1.06l-1.776-1.775H4.25A2.25 2.25 0 0 1 2 17.755V6.25a2.25 2.25 0 0 1 1.2-1.99l-.98-.98a.75.75 0 0 1 0-1.06m13.275 14.335L14.439 15.5H8.75a.25.25 0 0 0-.243.193l-.007.057-.001 2.754h6.995zM11.939 13a3 3 0 0 1-2.938-2.939L4.439 5.5H4.25a.75.75 0 0 0-.75.75v11.505c0 .414.336.75.75.75l2.749-.001L7 15.75a1.75 1.75 0 0 1 1.606-1.744L8.75 14h4.19zm-.229-4.472-1.157-1.156a3 3 0 0 1 4.075 4.075l-1.156-1.157a1.503 1.503 0 0 0-1.762-1.762m8.785 8.786V6.25a.75.75 0 0 0-.75-.75H8.682L7.182 4h12.563a2.25 2.25 0 0 1 2.25 2.25v11.505c0 .312-.063.61-.178.88z"/>`
} as const;

export default function VideoPersonOffIcon({ 
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

  const gradientId = 'videopersonofficon_gradient';
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