
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M29.833 13.112a5.36 5.36 0 0 0-2.544-1.805l-2.603-.845a1.028 1.028 0 0 1 0-1.937l2.602-.845a5.36 5.36 0 0 0 3.323-3.33l.022-.064.846-2.6a1.027 1.027 0 0 1 1.938 0l.846 2.6A5.36 5.36 0 0 0 37.66 7.68l2.602.845.052.013a1.028 1.028 0 0 1 0 1.937l-2.602.845a5.36 5.36 0 0 0-3.397 3.394l-.846 2.6-.025.064a1.027 1.027 0 0 1-1.538.433 1.03 1.03 0 0 1-.375-.497l-.846-2.6a5.4 5.4 0 0 0-.852-1.602m14.776 6.872-1.378-.448a2.84 2.84 0 0 1-1.797-1.796l-.448-1.377a.544.544 0 0 0-1.027 0l-.448 1.377a2.84 2.84 0 0 1-1.77 1.796l-1.378.448a.545.545 0 0 0 0 1.025l1.378.448q.227.075.438.188l.003.015a2.84 2.84 0 0 1 1.357 1.61l.448 1.377a.545.545 0 0 0 1.01.039v-.01l.016-.039.448-1.377a2.84 2.84 0 0 1 1.798-1.796l1.378-.448a.545.545 0 0 0 0-1.025zM20.5 6c1.36 0 2.675.187 3.922.537l-.352.113a3.1 3.1 0 0 0-1.51 1.12 3 3 0 0 0-.534 1.33Q21.276 9 20.5 9C14.149 9 9 14.149 9 20.5S14.149 32 20.5 32 32 26.851 32 20.5q0-.288-.014-.574a3 3 0 0 0 2.264-.505 2.4 2.4 0 0 0-.22 1 2.55 2.55 0 0 0 .856 1.902 14.43 14.43 0 0 1-3.127 7.315l9.801 9.8a1.5 1.5 0 1 1-2.121 2.122l-9.801-9.801A14.44 14.44 0 0 1 20.5 35C12.492 35 6 28.508 6 20.5S12.492 6 20.5 6"/>`,
  'regular': `<path d="M29.833 13.112a5.36 5.36 0 0 0-2.544-1.805l-2.603-.845a1.028 1.028 0 0 1 0-1.937l2.602-.845a5.36 5.36 0 0 0 3.323-3.33l.022-.064.846-2.6a1.027 1.027 0 0 1 1.938 0l.846 2.6A5.36 5.36 0 0 0 37.66 7.68l2.602.845.052.013a1.028 1.028 0 0 1 0 1.937l-2.602.845a5.36 5.36 0 0 0-3.397 3.394l-.846 2.6-.025.064a1.027 1.027 0 0 1-1.538.433 1.03 1.03 0 0 1-.375-.497l-.846-2.6a5.4 5.4 0 0 0-.852-1.602m14.776 6.872-1.378-.448a2.84 2.84 0 0 1-1.797-1.796l-.448-1.377a.544.544 0 0 0-1.027 0l-.448 1.377a2.84 2.84 0 0 1-1.77 1.796l-1.378.448a.545.545 0 0 0 0 1.025l1.378.448q.227.075.438.188l.003.015a2.84 2.84 0 0 1 1.357 1.61l.448 1.377a.545.545 0 0 0 1.01.039v-.01l.016-.039.448-1.377a2.84 2.84 0 0 1 1.798-1.796l1.378-.448a.545.545 0 0 0 0-1.025zM20 6c1.445 0 2.84.219 4.15.626l-.076.024a3.1 3.1 0 0 0-1.51 1.12 3 3 0 0 0-.448.924A11.6 11.6 0 0 0 20 8.5C13.649 8.5 8.5 13.649 8.5 20S13.649 31.5 20 31.5 31.5 26.351 31.5 20l-.002-.206a3 3 0 0 0 2.496-.209Q34 19.792 34 20a13.94 13.94 0 0 1-3.256 8.976l10.89 10.89a1.25 1.25 0 1 1-1.768 1.768l-10.89-10.89A13.94 13.94 0 0 1 20 34c-7.732 0-14-6.268-14-14S12.268 6 20 6"/>`
} as const;

export default function SearchSparkleIcon({ 
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
        viewBox="0 0 48 48"
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

  const gradientId = 'searchsparkleicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
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