import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M22.095 6.894c-.78-1.559-2.41-2.82-4.412-2.597-1.791.199-4.45.865-6.263 3.049-1.861 2.243-2.555 5.741-1.126 10.982 1.526 5.591 3.792 11.103 6.609 15.55 2.796 4.415 6.24 7.949 10.191 9.304 3.494 1.198 6.166.698 8.115-.618 1.88-1.269 2.912-3.178 3.446-4.5.598-1.48.204-3.021-.576-4.157l-2.877-4.184a5.25 5.25 0 0 0-5.892-2.037l-3.976 1.243a.68.68 0 0 1-.723-.187c-1.77-2.073-3.753-4.964-4.292-7.89a.33.33 0 0 1 .033-.23c.585-.983 1.592-2.097 2.593-3.072 1.697-1.652 2.34-4.278 1.22-6.516z"/>`,
  'regular': `<path d="M17.536 4.384C19.597 4.1 21.33 5.361 22.15 7l2.017 4.033c1.119 2.238.476 4.864-1.22 6.516-1.002.975-2.009 2.089-2.593 3.072a.33.33 0 0 0-.034.23c.54 2.926 2.523 5.817 4.292 7.89a.68.68 0 0 0 .724.187l3.975-1.242a5.25 5.25 0 0 1 5.892 2.036l2.877 4.185c.78 1.135 1.175 2.675.577 4.156-.534 1.323-1.567 3.231-3.446 4.5-1.95 1.316-4.621 1.816-8.116.618-3.905-1.34-7.594-4.7-10.653-8.997-3.077-4.324-5.61-9.725-7.146-15.357C7.844 13.51 8.72 9.93 10.782 7.625c1.989-2.224 4.839-2.979 6.754-3.242m2.377 3.735c-.457-.913-1.272-1.364-2.037-1.259-1.701.234-3.831.867-5.23 2.432-1.326 1.483-2.244 4.095-.94 8.878 1.465 5.368 3.877 10.498 6.772 14.565 2.913 4.093 6.223 6.983 9.427 8.082 2.855.979 4.69.495 5.906-.325 1.286-.869 2.077-2.25 2.527-3.364.206-.51.117-1.17-.319-1.804l-2.877-4.184a2.75 2.75 0 0 0-3.086-1.067l-3.975 1.242c-1.188.371-2.526.04-3.371-.95-1.841-2.157-4.187-5.465-4.85-9.06a2.83 2.83 0 0 1 .344-1.961c.758-1.274 1.958-2.573 2.997-3.585 1.015-.988 1.303-2.458.729-3.607z"/>`
} as const;

export default function CallIcon({ 
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

  const gradientId = 'callicon_gradient';
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