import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M10.96 16.44a1.501 1.501 0 1 1 2.122 2.122 1.501 1.501 0 0 1-2.123-2.122m-2.604-2.742a5.23 5.23 0 0 1 7.4 0c.46.461.838 1.025 1.101 1.625a1 1 0 1 1-1.832.803 3.4 3.4 0 0 0-.683-1.013 3.233 3.233 0 0 0-4.572 0 3.3 3.3 0 0 0-.672 1 1 1 0 1 1-1.832-.802 5.3 5.3 0 0 1 1.09-1.613M6.31 10.707a8.13 8.13 0 0 1 11.495 0 8.4 8.4 0 0 1 1.504 2.085 1 1 0 1 1-1.781.91 6.4 6.4 0 0 0-1.137-1.581 6.128 6.128 0 0 0-9.8 1.562 1 1 0 1 1-1.784-.902 8.1 8.1 0 0 1 1.503-2.074"/>`,
  'regular': `<path d="M17.745 10.751a8.3 8.3 0 0 1 1.492 2.07.75.75 0 1 1-1.336.682 6.8 6.8 0 0 0-1.217-1.691A6.562 6.562 0 0 0 6.19 13.485a.75.75 0 1 1-1.338-.677 8.062 8.062 0 0 1 12.893-2.057m-2.102 3.069c.448.447.816.997 1.072 1.582a.75.75 0 1 1-1.374.602 3.7 3.7 0 0 0-.759-1.124 3.59 3.59 0 0 0-5.08 0c-.31.311-.562.69-.747 1.111a.75.75 0 1 1-1.374-.601 5.1 5.1 0 0 1 1.06-1.57 5.09 5.09 0 0 1 7.202 0m-2.582 2.62a1.5 1.5 0 1 1-2.122 2.121 1.5 1.5 0 0 1 2.122-2.122"/>`
} as const;

export default function Wifi2Icon({ 
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

  const gradientId = 'wifi2icon_gradient';
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