import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M10.894 39.057a1.5 1.5 0 1 1-2.787-1.113L20.702 6.392c.83-2.078 3.76-2.104 4.627-.042l12.293 29.258 3.513-7.728a1.5 1.5 0 0 1 2.73 1.241l-5 11a1.5 1.5 0 0 1-1.942.764l-12-5a1.5 1.5 0 1 1 1.154-2.77l8.781 3.66L23.036 8.637z"/>`,
  'regular': `<path d="M10.407 38.474a1.25 1.25 0 0 1-2.313-.948l12.824-31.31c.763-1.863 3.401-1.863 4.164 0l12.374 30.208 4.167-8.713a1.25 1.25 0 1 1 2.255 1.078l-5.5 11.5c-.287.6-.994.87-1.608.615l-12-5a1.25 1.25 0 1 1 .961-2.308l9.483 3.952L23 7.727z"/>`
} as const;

export default function ArrowTurnUpDownIcon({ 
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

  const gradientId = 'arrowturnupdownicon_gradient';
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