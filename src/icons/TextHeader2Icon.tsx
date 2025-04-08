import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M15.394 7.947c.196-.39.8-1.197 2.356-1.197.79 0 1.342.244 1.688.57.343.324.562.802.562 1.43 0 1.829-1.137 2.806-2.73 4.016l-.215.163c-1.44 1.088-3.305 2.496-3.305 5.071a1 1 0 0 0 1 1h6.5a1 1 0 1 0 0-2h-5.324c.367-.967 1.288-1.679 2.554-2.641C20.012 13.194 22 11.67 22 8.75c0-1.122-.406-2.144-1.188-2.883-.779-.736-1.852-1.117-3.062-1.117-2.445 0-3.673 1.36-4.144 2.303a1 1 0 1 0 1.788.894M4 6a1 1 0 0 0-2 0v12a1 1 0 1 0 2 0v-5h6v5a1 1 0 1 0 2 0V6a1 1 0 1 0-2 0v5H4z"/>`,
  'regular': `<path d="M4.5 5.75a.75.75 0 0 0-1.5 0v12.5a.75.75 0 0 0 1.5 0V12.5H11v5.75a.75.75 0 0 0 1.5 0V5.75a.75.75 0 0 0-1.5 0V11H4.5zm10.921 2.085c.23-.46.913-1.335 2.58-1.335.842 0 1.459.26 1.86.639.397.376.64.921.64 1.611 0 1.963-1.3 3.068-2.958 4.343l-.212.163C15.825 14.409 14 15.806 14 18.25a.75.75 0 0 0 .75.75h6.5a.75.75 0 0 0 0-1.5h-5.66c.315-1.252 1.427-2.11 2.866-3.218C20.05 13.057 22 11.537 22 8.75c0-1.06-.383-2.015-1.11-2.702C20.166 5.364 19.158 5 18 5c-2.333 0-3.484 1.291-3.92 2.165a.75.75 0 0 0 1.341.67"/>`
} as const;

export default function TextHeader2Icon({ 
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

  const gradientId = 'textheader2icon_gradient';
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