import type { IconProps } from './types';

const svgContent = {
  'filled': `<path d="M17 9.242a4.5 4.5 0 1 1-5-7.484 4.5 4.5 0 0 1 5 7.484m-2.146-6.096A.5.5 0 0 0 14 3.5V5h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V6h1.5a.5.5 0 0 0 0-1H15V3.5a.5.5 0 0 0-.146-.354M9.022 5a5.6 5.6 0 0 0 .069 1.5H3.75a.75.75 0 0 1 0-1.5zm1.455 4.25a5.5 5.5 0 0 0 2.379 1.5H5.75a.75.75 0 0 1 0-1.5zm1.773 4.25a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5z"/>`,
  'regular': `<path d="M17 9.242a4.5 4.5 0 1 1-5-7.484 4.5 4.5 0 0 1 5 7.484m-2.146-6.096A.5.5 0 0 0 14 3.5V5h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V6h1.5a.5.5 0 0 0 0-1H15V3.5a.5.5 0 0 0-.146-.354M9.022 5H3.5l-.09.008A.5.5 0 0 0 3.5 6h5.522a5.6 5.6 0 0 1 0-1m1.235 4H5.5l-.09.008A.5.5 0 0 0 5.5 10h5.837a5.5 5.5 0 0 1-1.08-1M7.41 13.008 7.5 13h5a.5.5 0 0 1 .09.992L12.5 14h-5a.5.5 0 0 1-.09-.992"/>`
} as const;

export default function FilterAddIcon({ 
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
        viewBox="0 0 20 20"
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

  const gradientId = 'filteraddicon_gradient';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
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