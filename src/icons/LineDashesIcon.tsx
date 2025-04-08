import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M43.56 6.56a1.5 1.5 0 0 0-2.12-2.12l-2 2a1.5 1.5 0 0 0 2.12 2.12zm-8 5.88a1.5 1.5 0 0 1 0 2.12l-3 3a1.5 1.5 0 0 1-2.12-2.12l3-3a1.5 1.5 0 0 1 2.12 0m-9 11.12a1.5 1.5 0 0 0-2.12-2.12l-3 3a1.5 1.5 0 0 0 2.12 2.12zm-9 6.88a1.5 1.5 0 0 1 0 2.12l-3 3a1.5 1.5 0 0 1-2.12-2.12l3-3a1.5 1.5 0 0 1 2.12 0m-9 9a1.5 1.5 0 0 1 0 2.12l-2 2a1.5 1.5 0 0 1-2.12-2.12l2-2a1.5 1.5 0 0 1 2.12 0"/>`,
  'regular': `<path d="M43.631 6.137a1.25 1.25 0 1 0-1.767-1.768l-2.498 2.497a1.25 1.25 0 0 0 1.768 1.768zm-7.997 6.23a1.25 1.25 0 0 1 0 1.767l-3.5 3.5a1.25 1.25 0 0 1-1.768-1.768l3.5-3.5a1.25 1.25 0 0 1 1.768 0m-9 10.767a1.25 1.25 0 0 0-1.768-1.768l-3.5 3.5a1.25 1.25 0 0 0 1.768 1.768zm-9 7.232a1.25 1.25 0 0 1 0 1.768l-3.5 3.5a1.25 1.25 0 0 1-1.768-1.768l3.5-3.5a1.25 1.25 0 0 1 1.768 0m-9 9a1.25 1.25 0 0 1 0 1.768L6.137 43.63a1.25 1.25 0 0 1-1.768-1.767l2.497-2.498a1.25 1.25 0 0 1 1.768 0"/>`
} as const;

export default function LineDashesIcon({ 
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

  const gradientId = 'linedashesicon_gradient';
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