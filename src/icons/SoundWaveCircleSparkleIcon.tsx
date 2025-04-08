
import * as React from 'react';
import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M32.833 12.112a5.36 5.36 0 0 0-2.544-1.805l-2.603-.845a1.028 1.028 0 0 1 0-1.937l2.602-.845a5.36 5.36 0 0 0 3.323-3.33l.022-.064.845-2.6a1.027 1.027 0 0 1 1.94 0l.845 2.6A5.36 5.36 0 0 0 40.66 6.68l2.602.845.052.013a1.028 1.028 0 0 1 0 1.937l-2.602.845a5.36 5.36 0 0 0-3.397 3.394l-.846 2.6-.025.064a1.027 1.027 0 0 1-1.538.433 1.03 1.03 0 0 1-.375-.497l-.846-2.6a5.4 5.4 0 0 0-.852-1.602m14.776 6.872-1.378-.448a2.84 2.84 0 0 1-1.797-1.796l-.448-1.377a.544.544 0 0 0-1.027 0l-.448 1.377a2.84 2.84 0 0 1-1.77 1.796l-1.378.448a.545.545 0 0 0 0 1.025l1.378.448q.227.075.438.188l.003.015a2.84 2.84 0 0 1 1.357 1.61l.448 1.377a.545.545 0 0 0 1.01.039v-.01l.016-.039.448-1.377a2.84 2.84 0 0 1 1.798-1.796l1.378-.448a.545.545 0 0 0 0-1.025zM24 4c1.966 0 3.866.284 5.662.813l-.022.007-2.57.83a3.1 3.1 0 0 0-1.51 1.12A3 3 0 0 0 27 11.35l2.65.86c.507.151.97.422 1.35.79q.152.15.28.32c.237.3.42.638.54 1l.562 1.735a1.25 1.25 0 0 0-.882 1.195v13.5a1.25 1.25 0 1 0 2.5 0V18.563a3 3 0 0 0 3.25-.142 2.4 2.4 0 0 0-.22 1 2.55 2.55 0 0 0 1.7 2.4l1.42.46.12.06q.109.06.2.15a.9.9 0 0 1 .2.33l.44 1.37a2.54 2.54 0 0 0 .89 1.35 2.55 2.55 0 0 0 1.904.428C42.915 36.09 34.381 44 24 44 12.954 44 4 35.046 4 24S12.954 4 24 4m-3.25 12c-.69 0-1.25.56-1.25 1.25v13.5a1.25 1.25 0 1 0 2.5 0v-13.5c0-.69-.56-1.25-1.25-1.25m-6 4c-.69 0-1.25.56-1.25 1.25v5.5a1.25 1.25 0 1 0 2.5 0v-5.5c0-.69-.56-1.25-1.25-1.25m13.25.25a1.25 1.25 0 1 0-2.5 0v7.5a1.25 1.25 0 1 0 2.5 0z"/>`,
  'regular': `<path d="M32.833 12.112a5.36 5.36 0 0 0-2.544-1.805l-2.603-.845a1.028 1.028 0 0 1 0-1.937l2.602-.845a5.36 5.36 0 0 0 3.323-3.33l.022-.064.845-2.6a1.027 1.027 0 0 1 1.94 0l.845 2.6A5.36 5.36 0 0 0 40.66 6.68l2.602.845.052.013a1.028 1.028 0 0 1 0 1.937l-2.602.845a5.36 5.36 0 0 0-3.397 3.394l-.846 2.6-.025.064a1.027 1.027 0 0 1-1.538.433 1.03 1.03 0 0 1-.375-.497l-.846-2.6a5.4 5.4 0 0 0-.852-1.602m14.776 6.872-1.378-.448a2.84 2.84 0 0 1-1.797-1.796l-.448-1.377a.544.544 0 0 0-1.027 0l-.448 1.377a2.84 2.84 0 0 1-1.77 1.796l-1.378.448a.545.545 0 0 0 0 1.025l1.378.448q.227.075.438.188l.003.015a2.84 2.84 0 0 1 1.357 1.61l.448 1.377a.545.545 0 0 0 1.01.039v-.01l.016-.039.448-1.377a2.84 2.84 0 0 1 1.798-1.796l1.378-.448a.545.545 0 0 0 0-1.025zM24 4c1.966 0 3.866.284 5.662.813l-.022.007-2.57.83a3.1 3.1 0 0 0-1.364.932A18 18 0 0 0 24 6.5C14.335 6.5 6.5 14.335 6.5 24S14.335 41.5 24 41.5c9.336 0 16.964-7.31 17.473-16.52q.219.319.527.56a2.55 2.55 0 0 0 1.904.429C42.915 36.09 34.381 44 24 44 12.954 44 4 35.046 4 24S12.954 4 24 4m7.5 13.25c0-.562.371-1.038.882-1.195l.278.855A3 3 0 0 0 34 18.563V30.75a1.25 1.25 0 1 1-2.5 0zM20.75 16c.69 0 1.25.56 1.25 1.25v13.5a1.25 1.25 0 1 1-2.5 0v-13.5c0-.69.56-1.25 1.25-1.25m-6 4c.69 0 1.25.56 1.25 1.25v5.5a1.25 1.25 0 1 1-2.5 0v-5.5c0-.69.56-1.25 1.25-1.25m13.25.25a1.25 1.25 0 1 0-2.5 0v7.5a1.25 1.25 0 1 0 2.5 0z"/>`
} as const;

export default function SoundWaveCircleSparkleIcon({ 
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

  const gradientId = 'soundwavecirclesparkleicon_gradient';
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