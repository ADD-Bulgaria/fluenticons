
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M7.833 13.112a5.36 5.36 0 0 0-2.545-1.805l-2.602-.845a1.028 1.028 0 0 1 0-1.937l2.602-.845a5.36 5.36 0 0 0 3.323-3.33l.022-.064.846-2.6a1.027 1.027 0 0 1 1.938 0l.846 2.6A5.36 5.36 0 0 0 15.66 7.68l2.603.845.052.013a1.028 1.028 0 0 1 0 1.937l-2.603.845a5.36 5.36 0 0 0-3.396 3.394l-.846 2.6-.025.064a1.027 1.027 0 0 1-1.538.433 1.03 1.03 0 0 1-.375-.497l-.846-2.6a5.4 5.4 0 0 0-.852-1.602m14.776 6.872-1.378-.448a2.84 2.84 0 0 1-1.798-1.796l-.447-1.377a.544.544 0 0 0-1.027 0l-.448 1.377a2.84 2.84 0 0 1-1.77 1.796l-1.378.448a.545.545 0 0 0 0 1.025l1.378.448q.227.075.438.188l.003.015a2.84 2.84 0 0 1 1.357 1.61l.448 1.377a.545.545 0 0 0 1.01.039v-.01l.016-.039.448-1.377a2.84 2.84 0 0 1 1.798-1.796l1.378-.448a.545.545 0 0 0 0-1.025zM24.53 19a2.54 2.54 0 0 0-1.23-.93h-.14l-1.31-.43a.8.8 0 0 1-.32-.19.9.9 0 0 1-.2-.33l-.052-.164 10.93-10.93a6.907 6.907 0 1 1 9.767 9.767l-2.234 2.235.935.998a4.25 4.25 0 0 1-.095 5.912l-3.446 3.446a1.25 1.25 0 1 1-1.768-1.768l3.446-3.446a1.75 1.75 0 0 0 .04-2.434l-.881-.94-20.165 20.168a6 6 0 0 1-2.76 1.573L5.56 43.96a1.25 1.25 0 0 1-1.521-1.52l2.427-9.486a6 6 0 0 1 1.572-2.758L15 23.232l.149.049.12.06q.109.06.2.15a.9.9 0 0 1 .2.33l.44 1.37a2.54 2.54 0 0 0 .89 1.35 2.55 2.55 0 0 0 3.8-1.05l.18-.42V25l.35-1.09q.069-.18.2-.32a.9.9 0 0 1 .33-.2l1.36-.44A2.55 2.55 0 0 0 25 20.5a2.52 2.52 0 0 0-.47-1.5"/>`,
  'regular': `<path d="M7.833 13.112a5.36 5.36 0 0 0-2.545-1.805l-2.602-.845a1.028 1.028 0 0 1 0-1.937l2.602-.845a5.36 5.36 0 0 0 3.323-3.33l.022-.064.846-2.6a1.027 1.027 0 0 1 1.938 0l.846 2.6A5.36 5.36 0 0 0 15.66 7.68l2.603.845.052.013a1.028 1.028 0 0 1 0 1.937l-2.603.845a5.36 5.36 0 0 0-3.396 3.394l-.846 2.6-.025.064a1.027 1.027 0 0 1-1.538.433 1.03 1.03 0 0 1-.375-.497l-.846-2.6a5.4 5.4 0 0 0-.852-1.602m14.776 6.872-1.378-.448a2.84 2.84 0 0 1-1.798-1.796l-.447-1.377a.544.544 0 0 0-1.027 0l-.448 1.377a2.84 2.84 0 0 1-1.77 1.796l-1.378.448a.545.545 0 0 0 0 1.025l1.378.448q.227.075.438.188l.003.015a2.84 2.84 0 0 1 1.357 1.61l.448 1.377a.545.545 0 0 0 1.01.039v-.01l.016-.039.448-1.377a2.84 2.84 0 0 1 1.798-1.796l1.378-.448a.545.545 0 0 0 0-1.025zM9.805 31.964l6.425-6.424a2.5 2.5 0 0 1-.12-.35l-.44-1.37a.9.9 0 0 0-.2-.33 1 1 0 0 0-.2-.15l-.12-.06-.149-.048-6.963 6.965a6 6 0 0 0-1.572 2.758L4.039 42.44a1.25 1.25 0 0 0 1.52 1.521l9.487-2.424a6 6 0 0 0 2.76-1.573l20.165-20.167.88.939a1.75 1.75 0 0 1-.039 2.434l-3.446 3.446a1.25 1.25 0 0 0 1.768 1.768l3.446-3.446a4.25 4.25 0 0 0 .095-5.912l-.935-.998 2.234-2.235a6.907 6.907 0 0 0-9.768-9.767l-10.93 10.93.054.165a.9.9 0 0 0 .2.33c.09.087.2.151.32.19l1.31.43h.14q.145.05.28.118L33.974 7.793a4.407 4.407 0 0 1 6.233 6.232L16.038 38.196a3.5 3.5 0 0 1-1.611.919l-7.443 1.902 1.904-7.442c.156-.61.473-1.166.917-1.61"/>`
} as const;

export default function PenSparkleIcon({ 
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

  const gradientId = 'pensparkleicon_gradient';
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