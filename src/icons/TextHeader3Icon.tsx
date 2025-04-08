import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M15.394 7.947c.196-.39.8-1.197 2.356-1.197.79 0 1.342.244 1.688.57.343.324.562.802.562 1.43 0 .575-.14.953-.317 1.214-.18.268-.44.476-.772.636-.692.336-1.559.4-2.13.4a1 1 0 1 0 0 2c.571 0 1.438.064 2.13.4.331.16.592.368.772.636.176.26.317.639.317 1.214 0 .948-.802 2-2.25 2-1.636 0-2.158-.707-2.32-1.118a1 1 0 0 0-1.86.736c.498 1.256 1.816 2.382 4.18 2.382 2.552 0 4.25-1.948 4.25-4 0-.925-.234-1.703-.659-2.333a3.7 3.7 0 0 0-.889-.917c.33-.24.636-.541.89-.917.424-.63.658-1.408.658-2.333 0-1.122-.406-2.144-1.188-2.883-.779-.736-1.852-1.117-3.062-1.117-2.445 0-3.673 1.36-4.144 2.303a1 1 0 1 0 1.788.894M4 6a1 1 0 0 0-2 0v12a1 1 0 1 0 2 0v-5h6v5a1 1 0 1 0 2 0V6a1 1 0 1 0-2 0v5H4z"/>`,
  'regular': `<path d="M3.5 5.75a.75.75 0 0 0-1.5 0v12.5a.75.75 0 0 0 1.5 0V12.5H10v5.75a.75.75 0 0 0 1.5 0V5.75a.75.75 0 0 0-1.5 0V11H3.5zm11.92 2.085c.23-.46.914-1.335 2.58-1.335.843 0 1.46.26 1.86.639.398.376.64.921.64 1.611 0 .606-.161 1.026-.384 1.332-.228.314-.555.554-.953.735-.816.37-1.802.433-2.383.433a.75.75 0 0 0 0 1.5c.581 0 1.567.063 2.383.433.398.18.725.42.953.735.223.306.384.726.384 1.332 0 1.086-.914 2.25-2.5 2.25-1.727 0-2.348-.76-2.553-1.276a.75.75 0 1 0-1.394.552C14.508 17.926 15.727 19 18 19c2.414 0 4-1.836 4-3.75 0-.894-.245-1.63-.67-2.214A3.7 3.7 0 0 0 20.144 12a3.7 3.7 0 0 0 1.186-1.036c.425-.584.67-1.32.67-2.214 0-1.06-.383-2.015-1.11-2.702C20.165 5.364 19.157 5 18 5c-2.334 0-3.484 1.291-3.92 2.165a.75.75 0 1 0 1.34.67"/>`
} as const;

export default function TextHeader3Icon({ 
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

  const gradientId = 'textheader3icon_gradient';
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