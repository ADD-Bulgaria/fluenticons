
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M20.245 4.004c.967 0 1.75.784 1.75 1.75V18.25a1.75 1.75 0 0 1-1.75 1.75h-7.247q-.13 0-.256-.019V4.023q.125-.018.256-.019zm-9.247-.002q.125 0 .245.017V19.98q-.12.017-.245.017H3.75A1.75 1.75 0 0 1 2 18.247V5.752c0-.967.784-1.75 1.75-1.75zm4.704 9.4a.75.75 0 0 0-1.06 1.04l.073.084 2.253 2.296.084.074c.266.2.636.2.902 0l.085-.075 2.25-2.295.071-.085a.75.75 0 0 0-1.06-1.039l-.083.074-1.714 1.75-1.718-1.75zm2.337-6.176a.75.75 0 0 0-.987-.075l-.084.074-2.253 2.296a.75.75 0 0 0 .987 1.124l.083-.073 1.718-1.75 1.714 1.75a.75.75 0 0 0 1.143-.966l-.071-.084z"/>`,
  'regular': `<path d="m12.748 4.002-.001.002h7.498c.967 0 1.75.784 1.75 1.75V18.25a1.75 1.75 0 0 1-1.75 1.75h-8.997l-.001-.003H3.75A1.75 1.75 0 0 1 2 18.247V5.752c0-.967.784-1.75 1.75-1.75zm7.497 1.502h-7.497V18.5h7.497a.25.25 0 0 0 .25-.25V5.754a.25.25 0 0 0-.25-.25m-8.997-.002H3.75a.25.25 0 0 0-.25.25v12.495c0 .138.112.25.25.25h7.498zm3.454 7.9.083.073 1.718 1.75 1.714-1.75a.75.75 0 0 1 1.143.966l-.071.085-2.25 2.296a.75.75 0 0 1-.987.074l-.084-.074-2.253-2.296a.75.75 0 0 1 .987-1.124m2.337-6.176 2.25 2.296a.75.75 0 0 1-1.072 1.05l-1.714-1.75-1.718 1.75a.75.75 0 1 1-1.07-1.05l2.253-2.297a.75.75 0 0 1 1.07 0"/>`
} as const;

export default function DualScreenVerticalScrollIcon({ 
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

  const gradientId = 'dualscreenverticalscrollicon_gradient';
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