import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M10.242 7.736A6.5 6.5 0 1 1 21.19 14a6.5 6.5 0 1 1-10.948 6.264 6.5 6.5 0 1 1 0-12.527M8 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2m18 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0M9 24a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>`,
  'regular': `<path d="M16.5 3a6.5 6.5 0 0 0-6.258 4.736 6.5 6.5 0 1 0 0 12.527A6.5 6.5 0 1 0 21.19 14 6.5 6.5 0 0 0 16.5 3m-4.955 5.829a5.001 5.001 0 1 1 8.068 4.584.75.75 0 0 0 0 1.174 5 5 0 1 1-8.068 4.585.75.75 0 0 0-1.044-.588 5 5 0 1 1 0-9.168.75.75 0 0 0 1.044-.587M9 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0m16 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2M8 25a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>`
} as const;

export default function DustIcon({ 
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
        viewBox="0 0 28 28"
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

  const gradientId = 'dusticon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 28"
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