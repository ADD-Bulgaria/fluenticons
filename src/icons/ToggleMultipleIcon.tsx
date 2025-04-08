import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M2 6.5A4.5 4.5 0 0 1 6.5 2h11a4.5 4.5 0 1 1 0 9h-11A4.5 4.5 0 0 1 2 6.5m4.5 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 4.5a4.5 4.5 0 1 0 0 9h11a4.5 4.5 0 1 0 0-9zm13 4.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/>`,
  'regular': `<path d="M6.5 8.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0-6.5h11a4.5 4.5 0 1 1 0 9h-11a4.5 4.5 0 0 1 0-9m11 1.5h-11a3 3 0 0 0 0 6h11a3 3 0 1 0 0-6m0 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4M2 17.5A4.5 4.5 0 0 1 6.5 13h11a4.5 4.5 0 1 1 0 9h-11A4.5 4.5 0 0 1 2 17.5m4.5-3a3 3 0 1 0 0 6h11a3 3 0 1 0 0-6z"/>`
} as const;

export default function ToggleMultipleIcon({ 
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

  const gradientId = 'togglemultipleicon_gradient';
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