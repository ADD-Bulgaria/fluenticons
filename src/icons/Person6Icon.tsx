import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M23 9A7 7 0 1 1 9 9a7 7 0 0 1 14 0M4 21.5A3.5 3.5 0 0 1 7.5 18h11.83a6.7 6.7 0 0 0-.83 3.243V26a6.47 6.47 0 0 0 1.112 3.637A18 18 0 0 1 16 30c-3.198 0-6.14-.823-8.315-2.206C5.523 26.418 4 24.394 4 22zM25.243 18A3.243 3.243 0 0 0 22 21.243V22a5 5 0 1 1-2 4v-4.757a5.243 5.243 0 0 1 8.95-3.707l.257.257a1 1 0 0 1-1.414 1.414l-.258-.257a3.24 3.24 0 0 0-2.292-.95M25 29a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>`,
  'regular': `<path d="M16 16a7 7 0 1 0 0-14 7 7 0 0 0 0 14m0-2a5 5 0 1 1 0-10 5 5 0 0 1 0 10m-8.5 6A1.5 1.5 0 0 0 6 21.5v.5c0 1.473.94 2.949 2.759 4.106 1.807 1.15 4.364 1.894 7.24 1.894.956 0 1.875-.082 2.744-.233a6.5 6.5 0 0 0 .869 1.87A18 18 0 0 1 16 30c-3.198 0-6.14-.823-8.315-2.206C5.523 26.418 4 24.394 4 22v-.5A3.5 3.5 0 0 1 7.5 18h11.83a6.7 6.7 0 0 0-.716 2zm17.743-2A3.243 3.243 0 0 0 22 21.243V22a5 5 0 1 1-2 4v-4.757a5.243 5.243 0 0 1 8.95-3.707l.257.257a1 1 0 0 1-1.414 1.414l-.258-.257a3.24 3.24 0 0 0-2.292-.95M25 29a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>`
} as const;

export default function Person6Icon({ 
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
        viewBox="0 0 32 32"
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

  const gradientId = 'person6icon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
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