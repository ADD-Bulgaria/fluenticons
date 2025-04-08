import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M32.833 12.112a5.36 5.36 0 0 0-2.545-1.803l-2.6-.845a1.03 1.03 0 0 1-.5-.377 1.027 1.027 0 0 1 .498-1.562l2.602-.845a5.36 5.36 0 0 0 3.323-3.33l.022-.064.845-2.6a1.027 1.027 0 0 1 1.94 0l.845 2.6A5.36 5.36 0 0 0 40.66 6.68l2.602.845.052.013a1.028 1.028 0 0 1 0 1.937l-2.602.845a5.36 5.36 0 0 0-3.397 3.394l-.846 2.6-.025.064a1.027 1.027 0 0 1-1.538.433 1.03 1.03 0 0 1-.375-.497l-.846-2.6a5.4 5.4 0 0 0-.852-1.602m6.267 7.07a.5.5 0 0 0-.087.196.543.543 0 0 0 .348.644l1.378.448a2.84 2.84 0 0 1 1.8 1.8l.448 1.377a.545.545 0 0 0 1.01.039v-.01l.016-.039.448-1.377a2.84 2.84 0 0 1 1.798-1.796l1.378-.448a.545.545 0 0 0 0-1.025l-.028-.007-1.378-.448a2.84 2.84 0 0 1-1.797-1.796l-.448-1.377a.544.544 0 0 0-1.027 0l-.448 1.377a2.84 2.84 0 0 1-1.77 1.796l-1.378.448a.55.55 0 0 0-.263.198M24 44C12.954 44 4 35.046 4 24S12.954 4 24 4c1.948 0 3.83.278 5.61.797l-2.542.826a3.026 3.026 0 0 0-.047 5.721l2.65.862a3.37 3.37 0 0 1 2.11 2.126l.845 2.593a3.03 3.03 0 0 0 4.589 1.533A2.544 2.544 0 0 0 38.7 21.9l1.424.463a.84.84 0 0 1 .516.527l.446 1.37a2.54 2.54 0 0 0 2.818 1.71C42.914 36.093 34.381 44 24 44m-6.5-22a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M33 19.5a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0M18.452 34.681A11.7 11.7 0 0 0 24 36a11.72 11.72 0 0 0 9.816-5.1 1.249 1.249 0 1 0-2.13-1.307A9.21 9.21 0 0 1 24 33.5a9.22 9.22 0 0 1-7.687-3.907 1.248 1.248 0 1 0-2.13 1.307 11.7 11.7 0 0 0 4.269 3.781"/>`,
  'regular': `<path d="M32.39 11.609a5.36 5.36 0 0 1 1.295 2.105l.846 2.6a1.027 1.027 0 0 0 1.938 0l.846-2.6a5.36 5.36 0 0 1 3.397-3.394l2.602-.845a1.028 1.028 0 0 0 0-1.937l-.052-.013-2.602-.845a5.36 5.36 0 0 1-3.397-3.394l-.846-2.6a1.027 1.027 0 0 0-1.939 0l-.845 2.6-.022.064a5.36 5.36 0 0 1-3.322 3.33l-2.603.845a1.028 1.028 0 0 0 0 1.937l2.602.845a5.36 5.36 0 0 1 2.103 1.301m13.841 6.927 1.378.448.028.007a.544.544 0 0 1 0 1.025l-1.378.448a2.84 2.84 0 0 0-1.798 1.796l-.448 1.377-.016.04v.009a.544.544 0 0 1-1.01-.039l-.448-1.377a2.84 2.84 0 0 0-1.357-1.61l-.003-.015a3 3 0 0 0-.438-.188l-1.378-.448a.544.544 0 0 1 0-1.025l1.378-.448a2.84 2.84 0 0 0 1.77-1.796l.448-1.377a.544.544 0 0 1 1.027 0l.448 1.377a2.83 2.83 0 0 0 1.797 1.796M25.682 6.58A18 18 0 0 0 24 6.5C14.335 6.5 6.5 14.335 6.5 24S14.335 41.5 24 41.5c9.332 0 16.957-7.304 17.472-16.507q.236.313.56.544a2.54 2.54 0 0 0 1.872.434C42.914 36.09 34.381 44 24 44 12.954 44 4 35.046 4 24S12.954 4 24 4c1.948 0 3.83.278 5.61.797l-2.542.826a3.05 3.05 0 0 0-1.386.957M20 19.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0M30.5 22a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M18.452 34.681A11.7 11.7 0 0 0 24 36a11.72 11.72 0 0 0 9.816-5.1 1.249 1.249 0 1 0-2.13-1.307A9.21 9.21 0 0 1 24 33.5a9.22 9.22 0 0 1-7.687-3.907 1.248 1.248 0 1 0-2.13 1.307 11.7 11.7 0 0 0 4.269 3.781"/>`
} as const;

export default function EmojiSparkleIcon({ 
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

  const gradientId = 'emojisparkleicon_gradient';
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