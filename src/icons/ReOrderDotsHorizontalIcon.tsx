import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M7 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0m0-8a2 2 0 1 1-4 0 2 2 0 0 1 4 0m7 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0m0-8a2 2 0 1 1-4 0 2 2 0 0 1 4 0m7 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0m0-8a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/>`,
  'regular': `<path d="M7 15.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m7 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m7 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>`
} as const;

export default function ReOrderDotsHorizontalIcon({ 
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

  const gradientId = 'reorderdotshorizontalicon_gradient';
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