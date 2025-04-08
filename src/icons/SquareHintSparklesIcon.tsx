
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M32.833 12.112a5.36 5.36 0 0 0-2.544-1.805l-2.603-.845a1.028 1.028 0 0 1 0-1.937l2.602-.845a5.36 5.36 0 0 0 3.323-3.33l.022-.064.845-2.6a1.027 1.027 0 0 1 1.94 0l.845 2.6A5.36 5.36 0 0 0 40.66 6.68l2.602.845.052.013a1.028 1.028 0 0 1 0 1.937l-2.602.845a5.36 5.36 0 0 0-3.397 3.394l-.846 2.6-.025.064a1.027 1.027 0 0 1-1.538.433 1.03 1.03 0 0 1-.375-.497l-.846-2.6a5.4 5.4 0 0 0-.852-1.602m14.776 6.872-1.378-.448a2.84 2.84 0 0 1-1.797-1.796l-.448-1.377a.544.544 0 0 0-1.027 0l-.448 1.377a2.84 2.84 0 0 1-1.77 1.796l-1.378.448a.545.545 0 0 0 0 1.025l1.378.448q.227.075.438.188l.003.015a2.84 2.84 0 0 1 1.357 1.61l.448 1.377a.545.545 0 0 0 1.01.039v-.01l.016-.039.448-1.377a2.84 2.84 0 0 1 1.798-1.796l1.378-.448a.545.545 0 0 0 0-1.025zM25.56 6.77a3.1 3.1 0 0 1 .8-.77H21.5a1.5 1.5 0 0 0 0 3h3.535a3 3 0 0 1 .525-2.23M21.5 39a1.5 1.5 0 0 0 0 3h5a1.5 1.5 0 0 0 0-3zm-14-19A1.5 1.5 0 0 1 9 21.5v5a1.5 1.5 0 0 1-3 0v-5A1.5 1.5 0 0 1 7.5 20m5-14a1.5 1.5 0 0 1 0 3A3.5 3.5 0 0 0 9 12.5a1.5 1.5 0 0 1-3 0A6.5 6.5 0 0 1 12.5 6M14 40.5a1.5 1.5 0 0 1-1.5 1.5A6.5 6.5 0 0 1 6 35.5a1.5 1.5 0 0 1 3 0 3.5 3.5 0 0 0 3.5 3.5 1.5 1.5 0 0 1 1.5 1.5m20 0a1.5 1.5 0 0 0 1.5 1.5 6.5 6.5 0 0 0 6.5-6.5 1.5 1.5 0 0 0-3 0 3.5 3.5 0 0 1-3.5 3.5 1.5 1.5 0 0 0-1.5 1.5"/>`,
  'regular': `<path d="M32.833 12.112a5.36 5.36 0 0 0-2.544-1.805l-2.603-.845a1.028 1.028 0 0 1 0-1.937l2.602-.845a5.36 5.36 0 0 0 3.323-3.33l.022-.064.845-2.6a1.027 1.027 0 0 1 1.94 0l.845 2.6A5.36 5.36 0 0 0 40.66 6.68l2.602.845.052.013a1.028 1.028 0 0 1 0 1.937l-2.602.845a5.36 5.36 0 0 0-3.397 3.394l-.846 2.6-.025.064a1.027 1.027 0 0 1-1.538.433 1.03 1.03 0 0 1-.375-.497l-.846-2.6a5.4 5.4 0 0 0-.852-1.602m14.776 6.872-1.378-.448a2.84 2.84 0 0 1-1.797-1.796l-.448-1.377a.544.544 0 0 0-1.027 0l-.448 1.377a2.84 2.84 0 0 1-1.77 1.796l-1.378.448a.545.545 0 0 0 0 1.025l1.378.448q.227.075.438.188l.003.015a2.84 2.84 0 0 1 1.357 1.61l.448 1.377a.545.545 0 0 0 1.01.039v-.01l.016-.039.448-1.377a2.84 2.84 0 0 1 1.798-1.796l1.378-.448a.545.545 0 0 0 0-1.025zM25.56 6.77a3.1 3.1 0 0 1 .8-.77h-5.11a1.25 1.25 0 1 0 0 2.5h3.746a3 3 0 0 1 .564-1.73M20 40.75c0 .69.56 1.25 1.25 1.25h5.5a1.25 1.25 0 1 0 0-2.5h-5.5c-.69 0-1.25.56-1.25 1.25m-14-14a1.25 1.25 0 1 0 2.5 0v-5.5a1.25 1.25 0 1 0-2.5 0zM12.75 6a1.25 1.25 0 1 1 0 2.5h-.5a3.75 3.75 0 0 0-3.75 3.75v.5a1.25 1.25 0 1 1-2.5 0v-.5A6.25 6.25 0 0 1 12.25 6zM14 40.75c0 .69-.56 1.25-1.25 1.25h-.5A6.25 6.25 0 0 1 6 35.75v-.5a1.25 1.25 0 1 1 2.5 0v.5a3.75 3.75 0 0 0 3.75 3.75h.5c.69 0 1.25.56 1.25 1.25m20 0c0 .69.56 1.25 1.25 1.25h.5A6.25 6.25 0 0 0 42 35.75v-.5a1.25 1.25 0 1 0-2.5 0v.5a3.75 3.75 0 0 1-3.75 3.75h-.5c-.69 0-1.25.56-1.25 1.25"/>`
} as const;

export default function SquareHintSparklesIcon({ 
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

  const gradientId = 'squarehintsparklesicon_gradient';
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