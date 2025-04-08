import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M24 44C12.954 44 4 35.046 4 24S12.954 4 24 4s20 8.954 20 20-8.954 20-20 20m-8.634-19.866a1.25 1.25 0 0 0 1.768 0l5.616-5.616V32.75a1.25 1.25 0 1 0 2.5 0V18.518l5.616 5.616a1.25 1.25 0 0 0 1.768-1.768l-7.75-7.75a1.25 1.25 0 0 0-1.768 0l-7.75 7.75a1.25 1.25 0 0 0 0 1.768"/>`,
  'regular': `<path d="M15.366 24.134a1.25 1.25 0 0 0 1.768 0l5.616-5.616V32.75a1.25 1.25 0 1 0 2.5 0V18.518l5.616 5.616a1.25 1.25 0 0 0 1.768-1.768l-7.75-7.75a1.25 1.25 0 0 0-1.768 0l-7.75 7.75a1.25 1.25 0 0 0 0 1.768M4 24c0 11.046 8.954 20 20 20s20-8.954 20-20S35.046 4 24 4 4 12.954 4 24m20 17.5c-9.665 0-17.5-7.835-17.5-17.5S14.335 6.5 24 6.5 41.5 14.335 41.5 24 33.665 41.5 24 41.5"/>`
} as const;

export default function ArrowCircleUpIcon({ 
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

  const gradientId = 'arrowcircleupicon_gradient';
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