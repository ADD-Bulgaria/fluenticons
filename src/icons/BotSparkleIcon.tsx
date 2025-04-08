import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M24 4c.69 0 1.25.56 1.25 1.25V7h7.5A4.25 4.25 0 0 1 37 11.25v8.15a3 3 0 0 0-1.55-.4 3 3 0 0 0-1.75.56A3 3 0 0 0 32.59 21v.07l-.85 2.6a3 3 0 0 1-.122.33H15.25A4.25 4.25 0 0 1 11 19.75v-8.5A4.25 4.25 0 0 1 15.25 7h7.5V5.25c0-.69.56-1.25 1.25-1.25m1.41 24H12.25A4.25 4.25 0 0 0 8 32.25v1.05c0 3.154 1.535 5.888 4.336 7.785C15.1 42.957 19.06 44 24 44s8.9-1.043 11.664-2.915q.764-.518 1.4-1.115H35.65l-.135.003a3 3 0 0 1-1.735-.553 3 3 0 0 1-1.12-1.51l-.84-2.59a3.2 3.2 0 0 0-.54-1A3 3 0 0 0 31 34a3.3 3.3 0 0 0-1.35-.79L27 32.35A3 3 0 0 1 25.41 28M16.5 15.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0M29 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m3.833 15.112a5.36 5.36 0 0 0-2.544-1.805l-2.603-.845a1.028 1.028 0 0 1 0-1.937l2.602-.845a5.36 5.36 0 0 0 3.323-3.33l.022-.064.845-2.6a1.027 1.027 0 0 1 1.94 0l.845 2.6a5.36 5.36 0 0 0 3.397 3.394l2.602.845.052.013a1.028 1.028 0 0 1 0 1.937l-2.602.845a5.36 5.36 0 0 0-3.397 3.394l-.846 2.6-.025.064a1.027 1.027 0 0 1-1.538.433 1.03 1.03 0 0 1-.375-.496l-.846-2.601a5.4 5.4 0 0 0-.852-1.602m14.776 6.872-1.378-.448a2.84 2.84 0 0 1-1.797-1.796l-.448-1.377a.544.544 0 0 0-1.027 0l-.448 1.377a2.84 2.84 0 0 1-1.77 1.796l-1.378.448a.545.545 0 0 0 0 1.025l1.378.448q.227.075.438.188l.003.015a2.84 2.84 0 0 1 1.357 1.61l.448 1.377a.545.545 0 0 0 1.01.038v-.008l.016-.04.448-1.377a2.84 2.84 0 0 1 1.798-1.796l1.378-.448a.545.545 0 0 0 0-1.025z"/>`,
  'regular': `<path d="M24 4c.69 0 1.25.56 1.25 1.25V7h7.5A4.25 4.25 0 0 1 37 11.25v8.15a3 3 0 0 0-1.55-.4c-.325 0-.646.052-.95.153V11.25a1.75 1.75 0 0 0-1.75-1.75h-17.5a1.75 1.75 0 0 0-1.75 1.75v8.5c0 .966.784 1.75 1.75 1.75h17.2l-.71 2.17a3 3 0 0 1-.122.33H15.25A4.25 4.25 0 0 1 11 19.75v-8.5A4.25 4.25 0 0 1 15.25 7h7.5V5.25c0-.69.56-1.25 1.25-1.25m1.41 24H12.25A4.25 4.25 0 0 0 8 32.25v1.05c0 3.154 1.535 5.888 4.336 7.785C15.1 42.957 19.06 44 24 44s8.9-1.043 11.664-2.915q.764-.518 1.4-1.115H35.65l-.135.003a3 3 0 0 1-1.81-.607C31.487 40.67 28.256 41.5 24 41.5c-4.627 0-8.043-.982-10.262-2.485-2.182-1.478-3.238-3.469-3.238-5.715v-1.05c0-.966.784-1.75 1.75-1.75h12.91l-.026-.08A3 3 0 0 1 25.41 28M21.5 15.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0M29 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m3.833 15.112a5.36 5.36 0 0 0-2.544-1.805l-2.603-.845a1.028 1.028 0 0 1 0-1.937l2.602-.845a5.36 5.36 0 0 0 3.323-3.33l.022-.064.845-2.6a1.027 1.027 0 0 1 1.94 0l.845 2.6a5.36 5.36 0 0 0 3.397 3.394l2.602.845.052.013a1.028 1.028 0 0 1 0 1.937l-2.602.845a5.36 5.36 0 0 0-3.397 3.394l-.846 2.6-.025.064a1.027 1.027 0 0 1-1.538.433 1.03 1.03 0 0 1-.375-.496l-.846-2.601a5.4 5.4 0 0 0-.852-1.602m14.776 6.872-1.378-.448a2.84 2.84 0 0 1-1.797-1.796l-.448-1.377a.544.544 0 0 0-1.027 0l-.448 1.377a2.84 2.84 0 0 1-1.77 1.796l-1.378.448a.545.545 0 0 0 0 1.025l1.378.448q.227.075.438.188l.003.015a2.84 2.84 0 0 1 1.357 1.61l.448 1.377a.545.545 0 0 0 1.01.038v-.008l.016-.04.448-1.377a2.84 2.84 0 0 1 1.798-1.796l1.378-.448a.545.545 0 0 0 0-1.025z"/>`
} as const;

export default function BotSparkleIcon({ 
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

  const gradientId = 'botsparkleicon_gradient';
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