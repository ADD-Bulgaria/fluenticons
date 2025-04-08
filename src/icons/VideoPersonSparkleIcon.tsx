
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M32.833 13.112a5.36 5.36 0 0 0-2.544-1.805l-2.603-.845a1.028 1.028 0 0 1 0-1.937l2.602-.845a5.36 5.36 0 0 0 3.323-3.33l.022-.064.845-2.6a1.027 1.027 0 0 1 1.94 0l.845 2.6A5.36 5.36 0 0 0 40.66 7.68l2.602.845.052.013a1.028 1.028 0 0 1 0 1.937l-2.602.845a5.36 5.36 0 0 0-3.397 3.394l-.846 2.6-.025.064a1.027 1.027 0 0 1-1.538.433 1.03 1.03 0 0 1-.375-.497l-.846-2.6a5.4 5.4 0 0 0-.852-1.602m14.776 6.872-1.378-.448a2.84 2.84 0 0 1-1.797-1.796l-.448-1.377a.544.544 0 0 0-1.027 0l-.448 1.377a2.84 2.84 0 0 1-1.77 1.796l-1.378.448a.545.545 0 0 0 0 1.025l1.378.448q.227.075.438.188l.003.015a2.84 2.84 0 0 1 1.357 1.61l.448 1.377a.545.545 0 0 0 1.01.039v-.01l.016-.039.448-1.377a2.84 2.84 0 0 1 1.798-1.796l1.378-.448a.545.545 0 0 0 0-1.025zM25.41 8H7.75A3.75 3.75 0 0 0 4 11.75v24.5A3.75 3.75 0 0 0 7.75 40h32.5A3.75 3.75 0 0 0 44 36.25v-9.3a2.55 2.55 0 0 1-2-.41 2.5 2.5 0 0 1-.5-.52v10.23c0 .69-.56 1.25-1.25 1.25H34v-6.25A3.25 3.25 0 0 0 30.75 28h-13.5A3.25 3.25 0 0 0 14 31.25v6.25H7.75c-.69 0-1.25-.56-1.25-1.25v-24.5c0-.69.56-1.25 1.25-1.25h17.41l-.026-.08A3 3 0 0 1 25.41 8M24 26a6 6 0 1 0 0-12 6 6 0 0 0 0 12"/>`,
  'regular': `<path d="M32.833 13.112a5.36 5.36 0 0 0-2.544-1.805l-2.603-.845a1.028 1.028 0 0 1 0-1.937l2.602-.845a5.36 5.36 0 0 0 3.323-3.33l.022-.064.845-2.6a1.027 1.027 0 0 1 1.94 0l.845 2.6A5.36 5.36 0 0 0 40.66 7.68l2.602.845.052.013a1.028 1.028 0 0 1 0 1.937l-2.602.845a5.36 5.36 0 0 0-3.397 3.394l-.846 2.6-.025.064a1.027 1.027 0 0 1-1.538.433 1.03 1.03 0 0 1-.375-.497l-.846-2.6a5.4 5.4 0 0 0-.852-1.602m14.776 6.872-1.378-.448a2.84 2.84 0 0 1-1.797-1.796l-.448-1.377a.544.544 0 0 0-1.027 0l-.448 1.377a2.84 2.84 0 0 1-1.77 1.796l-1.378.448a.545.545 0 0 0 0 1.025l1.378.448q.227.075.438.188l.003.015a2.84 2.84 0 0 1 1.357 1.61l.448 1.377a.545.545 0 0 0 1.01.039v-.01l.016-.039.448-1.377a2.84 2.84 0 0 1 1.798-1.796l1.378-.448a.545.545 0 0 0 0-1.025zM25.41 8H7.75A3.75 3.75 0 0 0 4 11.75v24.5A3.75 3.75 0 0 0 7.75 40h32.5A3.75 3.75 0 0 0 44 36.25v-9.3a2.55 2.55 0 0 1-2-.41 2.5 2.5 0 0 1-.5-.52v10.23c0 .69-.56 1.25-1.25 1.25H34v-6.25A3.25 3.25 0 0 0 30.75 28h-13.5A3.25 3.25 0 0 0 14 31.25v6.25H7.75c-.69 0-1.25-.56-1.25-1.25v-24.5c0-.69.56-1.25 1.25-1.25h17.41l-.026-.08A3 3 0 0 1 25.41 8M30 20a6 6 0 1 1-12 0 6 6 0 0 1 12 0m-9.5 0a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0m11 11.25v6.25h-15v-6.25a.75.75 0 0 1 .75-.75h13.5a.75.75 0 0 1 .75.75"/>`
} as const;

export default function VideoPersonSparkleIcon({ 
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

  const gradientId = 'videopersonsparkleicon_gradient';
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