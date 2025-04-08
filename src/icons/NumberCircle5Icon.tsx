import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20m4.75-27.5h-6.833l-.332 4.978.66-.005c1.028-.004 2.325.006 2.943.093a6.75 6.75 0 1 1-6.594 10.37 1.25 1.25 0 1 1 2.094-1.366 4.25 4.25 0 1 0 4.153-6.528c-.4-.056-1.485-.073-2.586-.069a114 114 0 0 0-1.818.024l-.12.002-.04.001A1.25 1.25 0 0 1 19 22.667l.5-7.5A1.25 1.25 0 0 1 20.748 14h8.002a1.25 1.25 0 1 1 0 2.5"/>`,
  'regular': `<path d="M28.75 16.5h-6.832l-.332 4.978.66-.005c1.028-.004 2.325.006 2.943.093a6.75 6.75 0 1 1-6.594 10.37 1.25 1.25 0 1 1 2.094-1.366 4.25 4.25 0 1 0 4.153-6.528c-.4-.057-1.485-.073-2.586-.069a114 114 0 0 0-1.818.023l-.12.003h-.04a1.25 1.25 0 0 1-1.277-1.332l.5-7.5A1.25 1.25 0 0 1 20.75 14h8.002a1.25 1.25 0 0 1 0 2.5M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4M6.5 24c0-9.665 7.835-17.5 17.5-17.5S41.5 14.335 41.5 24 33.665 41.5 24 41.5 6.5 33.665 6.5 24"/>`
} as const;

export default function NumberCircle5Icon({ 
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

  const gradientId = 'numbercircle5icon_gradient';
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