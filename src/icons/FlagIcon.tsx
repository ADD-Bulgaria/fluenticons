import type { IconProps } from './types';

const svgContent = {
  'color': `<path d="M8.75 44c-.69 0-1.25-.56-1.25-1.25V31H10v11.75c0 .69-.56 1.25-1.25 1.25"/><path d="M7.5 7.25C7.5 6.56 8.06 6 8.75 6h32.5a1.25 1.25 0 0 1 1.007 1.99L33.801 19.5l8.456 11.51A1.25 1.25 0 0 1 41.25 33H9a1.5 1.5 0 0 1-1.5-1.5z"/>`,
  'filled': `<path d="M8.75 6c-.69 0-1.25.56-1.25 1.25v35.5a1.25 1.25 0 1 0 2.5 0V33h31.25a1.25 1.25 0 0 0 1.007-1.99L33.801 19.5l8.456-11.51A1.25 1.25 0 0 0 41.25 6z"/>`,
  'regular': `<path d="M7.5 7.25C7.5 6.56 8.06 6 8.75 6h32.5a1.25 1.25 0 0 1 1.007 1.99L33.801 19.5l8.456 11.51A1.25 1.25 0 0 1 41.25 33H10v9.75a1.25 1.25 0 1 1-2.5 0zM10 30.5h28.78l-7.537-10.26a1.25 1.25 0 0 1 0-1.48L38.78 8.5H10z"/>`
} as const;

export default function FlagIcon({ 
  variant = 'regular',
  className,
  size = '1em',
  color,
  gradient,
  title,
  style,
  ...props
}: Omit<IconProps, 'variant'> & { variant?: 'color' | 'filled' | 'regular' }) {
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

  const gradientId = 'flagicon_gradient';
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